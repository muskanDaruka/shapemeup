import { Document } from "mongoose";

export interface ICoach extends Document {
  name: string;
  photoUrl: string;
  yearsOfExp: number;
  bio: string;
  clients: number;
  certifications?: number;
}
