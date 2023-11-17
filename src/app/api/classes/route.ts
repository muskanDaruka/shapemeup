import connectToMongoDb from "@/lib/mongodb";
import Classes from "@/models/classes.model";
import { IClass } from "@/types/classes.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        let classes;
        if (id) {
            classes = await Classes.findById(id);
        } else {
            classes = await Classes.find();
        }
        return NextResponse.json({
            status: "Success",
            message: "Classes list retrieved successfully",
            data: classes,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in getting the classes list",
            error: error,
        });
    }
}

export async function POST(req: NextRequest) {
    const classesData = await req.json();
    try {
        await connectToMongoDb();
        const newClasses = new Classes({ ...classesData });
        newClasses.save();
        return NextResponse.json({
            status: "Success",
            message: "Classes created successfully",
            data: newClasses,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in creating a new Classes",
            error: error,
        });
    }
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToMongoDb();
        const classes = await Classes.findByIdAndDelete(id);
        console.log("22222", classes);
        return NextResponse.json({
            status: "Success",
            message: "Classes Removed successfully",
            data: classes,
        });
    } catch (error) {
        return NextResponse.json({
            status: "Failed",
            message: "Error in deleting classes",
            error: error,
        });
    }
}

export async function PUT(req: NextRequest) {
    try {
        await updateClasses({ id }); // Pass the classes ID here
        console.log("Classes updated successfully");
      } catch (error) {
        console.error("Error updating classes: ", error);
      }
}
