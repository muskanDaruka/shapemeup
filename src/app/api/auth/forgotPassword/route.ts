import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
    console.log("Hello");
    const { email, password } = await req.json();

    await connectToMongoDb();

    const user = (User as any).findByEmail(email);
    console.log("Hello");
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

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000;
    await user.save();

    return NextResponse.json({
        message: "Reset token generated and sent to the user's email",
        status: "Success",
        statusCode: 200,
        data: user,
    });
}