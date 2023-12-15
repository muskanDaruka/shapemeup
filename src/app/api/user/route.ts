import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";
import { IUser } from "@/types/user.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        let user;
        if (id) {
            user = await User.findById(id);
        } else {
            user = await User.find();
        }
        return NextResponse.json({
            status: "Success",
            message: "User list retrieved successfully",
            data: user,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in getting the user list",
            error: error,
        });
    }
}

export async function POST(req: NextRequest) {
    const userData = await req.json();
    try {
        await connectToMongoDb();
        const newUser = new User({ ...userData });
        newUser.save();
        return NextResponse.json({
            status: "Success",
            message: "Users added successfully",
            data: newUser,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in creating a new User",
            error: error,
        });
    }
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        const user = await User.findByIdAndDelete(id);
        console.log("22222", user);
        return NextResponse.json({
            status: "Success",
            message: "User Removed successfully",
            data: user,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in deleting user",
            error: error,
        });
    }
}

export async function PUT(req: NextRequest) {
    try {
        await updateUser({ id }); // Pass the user ID here
        console.log("User updated successfully");
    } catch (error) {
        console.error("Error updating user: ", error);
    }
}
