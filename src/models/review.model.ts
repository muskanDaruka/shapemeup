import { IReview } from "@/types/review.type";
import { Schema, model, models } from "mongoose";

const reviewSchema = new Schema<IReview>({
  photoUrl: String,
  title: String,
  location: String,
  review: String,
  ratings: Number,
  comments: String,
  coacheId: String,
});

const Review = models?.reviews ?? model<IReview>("reviews", reviewSchema);

export default Review;
