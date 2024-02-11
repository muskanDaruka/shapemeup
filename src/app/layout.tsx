import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/Auth";
import QueryProvider from "@/providers/QueryProvider";
import { NextAuthProvider } from "../providers/GoogleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <NextAuthProvider>
              <main>{children}</main>
            </NextAuthProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
