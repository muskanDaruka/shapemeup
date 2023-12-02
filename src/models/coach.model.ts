import { ICoach } from "@/types/coach.type";
import { Schema, model, models } from "mongoose";

type CoachType = ICoach & Document;

export const coachSchema = new Schema<CoachType>({
  name: String,
  photoUrl: String,
  yearsOfExp: Number,
  bio: String,
  clients: Number,
  certifications: Number,
});

const Coach = models?.coach ?? model<CoachType>("coach", coachSchema);

export default Coach;
