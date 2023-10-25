import { IBlog } from "@/types/blog.type";
import { Schema, model, models } from "mongoose";

export const blogSchema = new Schema<IBlog>({
  blogImgUrl: String,
  name: String,
  summary: String,
  category: String,
  contents: String,
  postedOn: Date,
  trendingTopic: String,
});

const Blog = models?.blogs ?? model<IBlog>("blogs", blogSchema);

export default Blog;
