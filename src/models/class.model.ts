import { IClass, IClassLive, IClassVideo } from "@/types/class.type";
import mongoose, { Schema, model, models } from "mongoose";

const videosSchema = new Schema<IClassVideo>({
  videoThumbnail: String,
  videoUrl: String,
  videoTitle: String,
  videoSubtitle: String,
  videoSummary: String,
  videoLink: String,
});

const ClassVideo =
  models?.classVideos ?? model<IClassVideo>("classVideos", videosSchema);

const liveClassSchema = new Schema<IClassLive>({
  videoThumbnail: String,
  classLink: String,
  classTitle: String,
  classSubtitle: String,
  classSummary: String,
});

const LiveClass =
  models?.liveClasses ?? model<IClassLive>("liveCLasses", liveClassSchema);

export const classSchema = new Schema<IClass>({
  name: String,
  photoUrl: String,
  description: String,
  assignedCoach: String,
  releaseDate: Date,
  type: String,
  days: Number,
  duration: Number,
  durationType: String,
  videoUrl: String,
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: ClassVideo,
    },
  ],
  about: String,
  benefits: String,
  liveClasses: [
    {
      type: Schema.Types.ObjectId,
      ref: LiveClass,
    },
  ],
});

const Class = models?.classes ?? model<IClassLive>("classes", classSchema);

export default Class;
