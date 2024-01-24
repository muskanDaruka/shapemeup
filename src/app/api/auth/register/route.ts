import { NextRequest, NextResponse } from "next/server";

import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    await connectToMongoDb();

    const isUserExist = await (User as any).findByEmail(email);

    if (isUserExist) {
      return NextResponse.json({
        message: "User already existed with this mail",
        status: "Failed",
        statusCode: 401,
      });
    }

    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.hashPassword();
    await newUser.save();  // Save the document to the database
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
