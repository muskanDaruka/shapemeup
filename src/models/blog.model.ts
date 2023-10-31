import { IBlog } from "@/types/blog.type";
import { Schema, model, models } from "mongoose";

type BlogType = IBlog & Document;

export const blogSchema = new Schema<BlogType>(
  {
    blogImgUrl: String,
    name: String,
    summary: String,
    category: String,
    contents: String,
    postedOn: Date,
    trendingTopic: String,
  },
  { timestamps: true }
);

const Blog = models?.blogs ?? model<BlogType>("blogs", blogSchema);

export default Blog;
