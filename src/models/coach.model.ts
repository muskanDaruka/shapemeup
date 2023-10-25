import { ICoach } from "@/types/coach.type";
import { Schema, model, models } from "mongoose";

export const coachSchema = new Schema<ICoach>({
  name: String,
  photoUrl: String,
  yearsOfExp: Number,
  bio: String,
  clients: Number,
  certifications: Number,
});

const Coach = models?.coaches ?? model<ICoach>("Coaches", coachSchema);

export default Coach;
