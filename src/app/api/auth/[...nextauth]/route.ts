import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
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

        if (!isPasswordMatch) return new Error("User credentials are invalid");

        return user; // Return the regular user
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   async jwt({ token, account }) {
  //     if (account) {
  //       token = Object.assign({}, token, {
  //         access_token: account.access_token,
  //       });
  //     }
  //     return token;
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
