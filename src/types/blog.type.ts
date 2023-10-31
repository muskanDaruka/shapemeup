import { Document } from "mongoose";

export interface IBlog {
  _id?: string;
  blogImgUrl: string;
  name: string;
  summary: string;
  category: string;
  contents: string;
  postedOn?: Date;
  trendingTopic?: string;
}
