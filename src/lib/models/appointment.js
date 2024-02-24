import mongoose from "mongoose";

const appointmentModel = new mongoose.Schema({
  patientName: {
    type: String,
  },
  patientFirstName: {
    type: String,
  },
  patientLastName: {
    type: String,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  doctorEmail: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export const Appointment =
  mongoose.models.appointments ||
  mongoose.model("appointments", appointmentModel);
