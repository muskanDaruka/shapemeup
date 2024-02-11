import { Document } from "mongoose";

export interface IReview extends Document {
  photoUrl: string;
  title: string;
  location: string;
  review: string;
  ratings: number;
  comments: string;
  coacheId: string;
}
