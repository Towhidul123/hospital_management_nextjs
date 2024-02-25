import mongoose from "mongoose";

const appointmentModel = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
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
});

export const Appointment = mongoose.models.appointments || mongoose.model("appointments", appointmentModel);
