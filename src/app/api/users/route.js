import { URI } from "../../../lib/db";
import { User } from "../../../lib/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  let data = [];
  try {
    // Extracting query parameters from the request
    const searchParams = request.nextUrl.searchParams;
    const role = searchParams.get("role");
    const specialist = searchParams.get("specialist");
    const _id = searchParams.get("_id");

    // Building the filter based on the presence of patientEmail or doctorEmail
    let filter = {};
    if (role && specialist) {
      filter.role = role;
      filter.specialist = specialist;
    }
    if (role) {
      filter.role = role;
    }
    if (specialist) {
      filter.specialist = specialist;
    }
    if (_id) {
      filter._id = _id;
    }
    await mongoose.connect(URI, { dbName: process.env.DB_NAME });
    // Querying appointments with the filter
    const users = await User.find(filter);

    data = { users, success: true };
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
    const query = { email: payload.email };
    const existingUser = await User.findOne(query);
    if (existingUser) {
      data = { message: "User already exists", insertedId: null };
    } else {
      let user = new User(payload);
      const result = await User.create(user);
      data = { user: result, success: true };
    }
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json(data);
}