import mongoose from "mongoose";

const userModel = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
  degree: {
    type: String,
  },
  rating: {
    type: String,
  },
  specialist: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  about: {
    type: String,
  },
  work_experience: {
    type: String,
  },
  award: {
    type: String,
  },
  service: {
    type: String,
  },
});

export const User = mongoose.models.users || mongoose.model("users", userModel);
