const Reservation = require("../models/Reservation");

exports.getAllReservations = async (req, res) => {
  const reservation = await Reservation.find();
  res.status(200).json(reservation);
};

exports.addReservation = async (req, res) => {
  const reservation = await Reservation.create(req.body);
  res.status(201).json({ "Reservation added": reservation });
};

exports.updateReservation = async (req, res) => {
  const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!reservation) {
    return res.status(404).json({ message: "Reservation not found" });
  }
  res.status(200).json({ "Reservation updated": reservation });
};

exports.deleteReservation = async (req, res) => {
  const reservation = await Reservation.findByIdAndDelete(req.params.id);
  if (!reservation) {
    return res.status(404).json({ message: "Reservation not found" });
  }
  res.json("Reservation has been deleted");
};
