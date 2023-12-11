import { Document } from "mongoose";

export interface ICoach {
  _id: string;
  id?: number;
  name: string;
  photoUrl: string;
  yearsOfExp: number | null;
  bio: string;
  clients: number | null;
  certifications?: number | null;
}
