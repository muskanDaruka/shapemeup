import { Document } from "mongoose";

export interface IExercise extends Document {
  name: string;
  category: string;
  time: number;
  durationType: string;
  difficulty: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  instructions: string;
  externalLinks: string;
}
