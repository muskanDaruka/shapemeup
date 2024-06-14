import { Document } from "mongoose";

export interface IExercise extends Document {
  id?: string;
  _id?: string;
  name: string;
  category: string;
  time: number | null;
  durationType: string;
  difficulty: string;
  imageUrl: string;
  videoUrl: string;
  description: string;
  instructions: string;
  externalLinks: string;
  metaTitle: string;
  metaDescription: string;
}
