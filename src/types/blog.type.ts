// import { Document } from "mongoose";

export interface IBlog {
  _id: string;
  id?: string;
  blogImgUrl: string;
  name: string;
  summary: string;
  category: string;
  contents: string;
  postedOn?: Date;
  trendingTopic?: string;
  metaTitle: string;
  description: string;
  keywords: string;
  blogSlugUrl: string;
  faq: { ques: string; ans: string }[];
  ctaBlogImg: string;
  ctaBlogImgUrl: string;
}
