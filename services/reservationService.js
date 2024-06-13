const Reservation = require("../models/Reservation");
const Table = require("../models/Table");

const makeReservation = async (reservationData) => {
  // Check table availability
  const availableTable = await checkTableAvailability(reservationData.date, reservationData.time, reservationData.partySize);

  if (!availableTable) {
    throw new Error("No tables available for the requested date, time, and party size");
  }

  // Create a new reservation
  const newReservation = await Reservation.create({
    ...reservationData,
    status: "confirmed",
    tableNumber: availableTable.tableNumber,
  });

  // Update table availability
  availableTable.isAvailable = false;
  await availableTable.save();

  return newReservation;
};

const checkTableAvailability = async (date, time, partySize) => {
  // Find available tables with the required capacity
  const availableTables = await Table.find({
    isAvailable: true,
    capacity: { $gte: partySize },
  });

  // Check if any available table is not reserved during the requested time
  for (const table of availableTables) {
    const conflictingReservation = await Reservation.findOne({
      date,
      time,
      tableNumber: table.tableNumber,
    });

    if (!conflictingReservation) {
      return table;
    }
  }

  // If no available table is found, return null
  return null;
};

module.exports = {
  makeReservation,
};
