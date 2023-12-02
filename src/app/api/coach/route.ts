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
    try {
        await updateCoach({ id }); // Pass the coach ID here
        console.log("Coach updated successfully");
      } catch (error) {
        console.error("Error updating coach: ", error);
      }
}
