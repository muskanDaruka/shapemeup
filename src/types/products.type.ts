import { Document } from "mongoose";

export interface IProducts extends Document {
  _id: string;
  id?: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
}
