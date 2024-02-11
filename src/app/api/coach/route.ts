import connectToMongoDb from "@/lib/mongodb";
import Coach from "@/models/coach.model";
import { ICoach } from "@/types/coach.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        let coach;
        if (id) {
            coach = await Coach.findById(id);
        } else {
            coach = await Coach.find();
        }
        return NextResponse.json({
            status: "Success",
            message: "Coach list retrieved successfully",
            data: coach,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in getting the coach list",
            error: error,
        });
    }
}

export async function POST(req: NextRequest) {
    const coachData = await req.json();
    try {
        await connectToMongoDb();
        const newCoach = new Coach({ ...coachData });
        newCoach.save();
        return NextResponse.json({
            status: "Success",
            message: "Coach created successfully",
            data: newCoach,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in creating a new Coach",
            error: error,
        });
    }
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        const coach = await Coach.findByIdAndDelete(id);
        console.log("22222", coach);
        return NextResponse.json({
            status: "Success",
            message: "Coach Removed successfully",
            data: coach,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in deleting coach",
            error: error,
        });
    }
}

export async function PUT(req: NextRequest) {
    const coach: ICoach = await req.json();
    try {
        await connectToMongoDb();
        const updatedCoach = await Coach.findByIdAndUpdate(
            { _id: coach?._id },
            coach, {
            new: true,
            upsert: true // Make this update into an upsert
        });
        console.log("22222", coach);
        return NextResponse.json({
            status: "Success",
            message: "Coach updated successfully",
            data: updatedCoach,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in updating coach",
            error: error,
        });
    }
}
