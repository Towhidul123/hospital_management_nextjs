import { URI } from "../../../lib/db";
import { User } from "../../../lib/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(URI, { dbName: process.env.DB_NAME });
    const users = await User.find();
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
