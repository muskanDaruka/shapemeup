import { IExercise } from "@/types/exercise.type";
import { Schema, model, models } from "mongoose";

const exerciseSchema = new Schema<IExercise>({
  name: String,
  category: String,
  time: Number,
  durationType: String,
  difficulty: String,
  imageUrl: String,
  videoUrl: String,
  description: String,
  instructions: String,
  externalLinks: String,
});

const Exercise =
  models?.exercises ?? model<IExercise>("exercises", exerciseSchema);

export default Exercise;
