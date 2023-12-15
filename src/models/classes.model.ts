import { IClass, IClassLive, IClassVideo } from "@/types/classes.type";
import { Schema, model, models } from "mongoose";

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
  models?.liveClasses ? model<IClassLive>("liveCLasses", liveClassSchema) : undefined;

type ClassesType = IClass & Document;

export const classesSchema = new Schema<ClassesType>({
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
},
  { timestamps: true }
);

const Classes = models?.classes ?? model<ClassesType>("classes", classesSchema);

export default Classes;
