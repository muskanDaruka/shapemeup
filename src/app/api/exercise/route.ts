import connectToMongoDb from "@/lib/mongodb";
import Exercise from "@/models/exercise.model";
import { IExercise } from "@/types/exercise.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await connectToMongoDb();
    let exercise;
    if (id) {
      exercise = await Exercise.findById(id);
    } else {
      exercise = await Exercise.find();
    }
    return NextResponse.json({
      status: "Success",
      message: "Exercise list retrieved successfully",
      data: exercise,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in getting the exercise list",
      error: error,
    });
  }
}

export async function POST(req: NextRequest) {
  const exerciseData = await req.json();
  try {
    await connectToMongoDb();
    const newExercise = new Exercise({ ...exerciseData });
    newExercise.save();
    return NextResponse.json({
      status: "Success",
      message: "Exercise created successfully",
      data: newExercise,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in creating a new Exercise",
      error: error,
    });
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  try {
    await connectToMongoDb();
    const exercise = await Exercise.findByIdAndDelete(id);
    console.log("22222", exercise);
    return NextResponse.json({
      status: "Success",
      message: "Exercise Removed successfully",
      data: exercise,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in deleting exercises",
      error: error,
    });
  }
}

export async function PUT(req: NextRequest) {
  const exercise: IExercise = await req.json();
  try {
    await connectToMongoDb();
    const updatedExercise = await Exercise.findByIdAndUpdate(
      { _id: exercise?._id },
      exercise,
      {
        new: true,
        upsert: true, // Make this update into an upsert
      }
    );
    console.log("22222", exercise);
    return NextResponse.json({
      status: "Success",
      message: "Exercise updated successfully",
      data: updatedExercise,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Failed",
      message: "Error in updating exercise",
      error: error,
    });
  }
}
