import { Schema, model, Document, models, Model } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser, IUserMethods, UserModel } from "@/types/user.type";

type UserType = IUser & Document;

interface IUserModel extends Model<UserType>, IUserMethods {
  findByEmail: (email: string) => Promise<UserType | null>;
}

const userSchema = new Schema<UserType, IUserModel, IUserMethods>(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// userSchema.method("hashPassword", async function hashPassword() {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this?.password, salt);
// });

// userSchema.method(
//   "comparePassword",
//   async function comparePassword(password: string) {
//     return bcrypt.compare(password, this?.password);
//   }
// );
userSchema.method(
  "hashPassword",
  async function hashPassword(this: { password?: string }) {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
);

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.findByEmail = async function (this: IUserModel, email: string) {
  return this?.findOne({ email }) as Promise<UserType | null>;
};

const User = models.users ?? model<UserType, UserModel>("users", userSchema);

export default User;
