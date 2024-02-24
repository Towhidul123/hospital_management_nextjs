import { URI } from "../../../lib/db";
import { Appointment } from "../../../lib/models/appointment";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  let data = [];
  try {
    // Extracting query parameters from the request
    const searchParams = request.nextUrl.searchParams;
    const patientEmail = searchParams.get("patientEmail");
    const doctorEmail = searchParams.get("doctorEmail");

    // Building the filter based on the presence of patientEmail or doctorEmail
    let filter = {};
    if (patientEmail && doctorEmail) {
      filter.patientEmail = patientEmail;
      filter.doctorEmail = doctorEmail;
    }
    if (patientEmail) {
      filter.patientEmail = patientEmail;
    }
    if (doctorEmail) {
      filter.doctorEmail = doctorEmail;
    }
    await mongoose.connect(URI, { dbName: process.env.DB_NAME });
    // Querying appointments with the filter
    const appointments = await Appointment.find(filter);

    data = { appointments, success: true };
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json(data);
}

export async function POST(request) {
  let data = [];
  try {
    const payload = await request.json();
    await mongoose.connect(URI, { dbName: process.env.DB_NAME });

    let appointment = new Appointment(payload);
    const result = await Appointment.create(appointment);
    data = { appointment: result, success: true };
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json(data);
}
