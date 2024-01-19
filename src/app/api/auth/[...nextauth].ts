import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        await connectToMongoDb();
        const user = (User as any).findByEmail(email);
        console.log("111111", user);
        if (user) return new Error("User already existed with this mail");
        // If the user exists, check regular user credentials
        const isPasswordMatch = await user.comparePassword(password);

        if (!isPasswordMatch)
          return new Error("User credentials are invalid");


        return user; // Return the regular user

      },
    }),

  ],
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
