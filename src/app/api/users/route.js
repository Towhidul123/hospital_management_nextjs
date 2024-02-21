import { URI } from "../../../lib/db";
import { User } from "../../../lib/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("connecting to database");
  await mongoose.connect(URI, { dbName: process.env.DB_NAME });
  console.log("connected to database");

  const books = await User.find();

  //   console.log(existingUser);

  return NextResponse.json({ result: books });
}