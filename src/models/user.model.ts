import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

import { IUser, IUserMethods, UserModel } from "@/types/user.type";

const userSchema = new Schema<IUser, UserModel, IUserMethods>(
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

userSchema.method("hashPassword", async function hashPassword() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this?.password, salt);
});

userSchema.method(
  "comparePassword",
  async function comparePassword(password: string) {
    return bcrypt.compare(password, this?.password);
  }
);

userSchema.statics.findByEmail = function (email: string) {
  return this?.findOne({ email });
};

const User = models.users ?? model<IUser, UserModel>("users", userSchema);

export default User;
