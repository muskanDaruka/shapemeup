import NextAuth, { DefaultSession, DefaultJWT, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import { IUser } from "./user.type";

declare module "next-auth" {
  interface Session extends DefaultSession, IUser {
    user: {
      userType: string;
    } & DefaultSession["user"] &
    IUser;
  }

  interface User extends DefaultUser {
    userType: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userType: string;
  }
}
