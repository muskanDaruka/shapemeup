import { IExercise } from "@/types/exercise.type";
import { Schema, model, models } from "mongoose";

type ExerciseType = IExercise & Document;

const exerciseSchema = new Schema<ExerciseType>({
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
  metaTitle: String,
  metaDescription: String,
});

const Exercise =
  models?.exercises ?? model<ExerciseType>("exercises", exerciseSchema);

export default Exercise;
