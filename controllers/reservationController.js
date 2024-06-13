const Reservation = require("../models/Reservation");
const reservationService = require("../services/reservationService");

// Create a new reservation
const createReservation = async (req, res, next) => {
  try {
    const reservationData = req.body;
    const newReservation = await reservationService.makeReservation(reservationData);
    res.status(201).json(newReservation);
  } catch (error) {
    next(error);
  }
};

// Get all reservations
const getAllReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    next(error);
  }
};

// Get a single reservation by ID
const getReservationById = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(reservation);
  } catch (error) {
    next(error);
  }
};

// Update a reservation
const updateReservation = async (req, res, next) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(updatedReservation);
  } catch (error) {
    next(error);
  }
};

// Delete a reservation
const deleteReservation = async (req, res, next) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
};
