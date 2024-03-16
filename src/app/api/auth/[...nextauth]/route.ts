import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/user.model";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

async function login({ email, password }: { email: string; password: string }) {
  const adminEmail = "admin@shapemeup.com";
  const adminPassword = "admin@123";

  try {
    if (email === adminEmail && password === adminPassword) {
      return {
        id: 1,
        email,
        password,
        userType: "admin",
      };
    }
    await connectToMongoDb();
    const user = (User as any).findByEmail(email);
    if (user) return new Error("User already existed with this mail");
    // If the user exists, check regular user credentials
    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) return new Error("User credentials are invalid");

    return user;
  } catch (error) {
    throw new Error("User not found.");
  }
}

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && account.type === "credentials") {
        token.id = (user.id as string) ?? "";
        token.email = user.email;
        token.userType = user?.userType as string;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.id;
      session.user.email = token.email as string;
      session.user.userType = token.userType;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          const user = await login({ email, password });
          return user;
        } catch (error) {
          console.log("22222222", error);
          return error;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
