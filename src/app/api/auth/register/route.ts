import { NextRequest, NextResponse } from "next/server";

import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    await connectToMongoDb();
    console.log("Checking existence for email:", email);
    const isUserExist = await (User as any).findByEmail(email);
    console.log("isUserExist:", isUserExist);
    if (isUserExist) {
      console.log("User already exists!");
      return NextResponse.json({
        message: "User already existed with this mail",
        status: "Failed",
        statusCode: 401,
      });
    } else {
      console.log("User does not exist.");
    }

    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.hashPassword();
    await newUser.save();
    console.log("User data saved successfully");
    return NextResponse.json({
      message: "User added successfully",
      status: "Success",
      statusCode: 201,
      data: newUser,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "An error occurred while processing your request",
      status: "Error",
      statusCode: 500,
      error: error.message || "Unknown error",
    });
  }
}
