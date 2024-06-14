import { IBlog } from "@/types/blog.type";
import { Schema, model, models } from "mongoose";

interface FAQ {
  ques: string;
  ans: string;
}

type BlogType = IBlog & Document;

const faqSchema = new Schema<FAQ>({
  ques: String,
  ans: String
});

export const blogSchema = new Schema<BlogType>(
  {
    blogImgUrl: String,
    name: String,
    summary: String,
    category: String,
    contents: String,
    postedOn: Date,
    trendingTopic: String,
    metaTitle: String,
    description: String,
    keywords: String,
    blogSlugUrl: String,
    faq: [faqSchema],
    ctaBlogImg: String,
    ctaBlogImgUrl: String,
  },
  { timestamps: true }
);

const Blog = models?.blogs ?? model<BlogType>("blogs", blogSchema);

export default Blog;
