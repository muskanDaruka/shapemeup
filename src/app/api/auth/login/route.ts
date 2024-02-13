import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const adminEmail = "admin@shapemeup.com";
  const adminPassword = "admin@1234";
  if (email === adminEmail && password === adminPassword) {
    return NextResponse.json({
      message: "Admin login successfull",
      status: "Success",
      statusCode: 200,
      redirect: "/admin/exercise",
    });
  }

  await connectToMongoDb();

  const user = await User.findOne({ email }).select("email password");
  console.log("user:", user);
  if (!user) {
    return NextResponse.json({
      message: "User does not exist with this mail",
      status: "Failed",
      statusCode: 401,
      openRegister: true,
    });
  }
  const isPasswordMatch = await user.comparePassword(password);
  console.log("isPasswordMatch:", isPasswordMatch);
  if (!isPasswordMatch) {
    return NextResponse.json({
      message: "Invalid credentials",
      status: "Failed",
      statusCode: 401,
    });
  }
  // if (user.isAdmin) {
  //   return NextResponse.json({
  //     redirect: "/admin/exercise",
  //     message: "Login successful",
  //     status: "Success",
  //     statusCode: 200,
  //     data: user,
  //   });
  // } else {
  return NextResponse.json({
    redirect: "/",
    message: "Login successful",
    status: "Success",
    statusCode: 200,
    data: user,
  });
}
