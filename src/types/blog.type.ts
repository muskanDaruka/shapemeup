import { Document } from "mongoose";

export interface IBlog extends Document {
  blogImgUrl: string;
  name: string;
  summary: string;
  category: string;
  contents: string;
  postedOn: Date;
  trendingTopic: string;
}
