import mongoose from "mongoose";

export default async function connectToMongoDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Mongo DB connected successfully");
  } catch (error) {
    throw new Error("Error in connecting the db: " + error);
  }
}
