import { Document } from "mongoose";

export interface IClassVideo {
  videoThumbnail: string;
  videoUrl: string;
  videoTitle: string;
  videoSubtitle: string;
  videoSummary: string;
  videoLink: string;
}

export interface IClassLive {
  videoThumbnail: string;
  classLink: string;
  classTitle: string;
  classSubtitle: string;
  classSummary: string;
}

export interface IClass extends Document {
  name: string;
  photoUrl: string;
  description: string;
  assignedCoach: string;
  releaseDate: Date;
  type: string;
  days: number;
  duration: number;
  durationType: string;
  videoUrl: string;
  videos: IClassVideo[];
  about: string;
  benefits: string;
  liveClasses?: IClassLive[];
}
