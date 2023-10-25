import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  await connectToMongoDb();

  const user = await User.findByEmail(email);
  if (!user) {
    return NextResponse.json({
      message: "User does not exist with this mail",
      status: "Failed",
      statusCode: 401,
    });
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return NextResponse.json({
      message: "Invalid credentials",
      status: "Failed",
      statusCode: 401,
    });
  }

  return NextResponse.json({
    message: "Invalid credentials",
    status: "Failed",
    statusCode: 401,
  });
}
