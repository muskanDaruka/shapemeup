import { NextRequest, NextResponse } from "next/server";

import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  await connectToMongoDb();

  const isUserExist = await User.findByEmail(email);

  if (isUserExist) {
    return NextResponse.json({
      message: "User already existed with this mail",
      status: "Failed",
      statusCode: 401,
    });
  }

  const newUser = new User({
    email,
    password,
  });

  await newUser.hashPassword();
  const userDoc = await newUser.save();

  return NextResponse.json({
    message: "User added successfully",
    status: "Success",
    statusCode: 201,
    data: userDoc,
  });
}
