import { Document, HydratedDocument, Model } from "mongoose";

export interface IUser extends Document {
  _id:string;
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  phoneCode?: string;
  phoneNumber?: number;
  photoURL?: string;
  isActive: boolean;
  isAdmin: boolean;
  imageUrl: string;
  firstName: string;
  lastName: string;
  role: number;
  roles: [];
  photoUrl: string;
}

export interface IUserMethods {
  hashPassword(): void;
  comparePassword(password: string): boolean;
}

export interface UserModel extends Model<IUser> {
  findByEmail(email: string): Promise<HydratedDocument<IUser, IUserMethods>>;
}
