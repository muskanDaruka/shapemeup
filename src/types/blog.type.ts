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
  // metaTitle: string;
  // description: string;
  // keywords: string;
  // blogSlugUrl: string;
  // faqQues: string;
  // faqAns: string;
  // ctaBlogImg: string;
  // ctaBlogImgUrl: string;
}
