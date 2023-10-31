"use client";

import { AuthContext, AuthType } from "@/context/Auth";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { useContext } from "react";
import Menu from "@/components/Menu";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, isRegistrationOpen } = useContext<AuthType>(AuthContext);

  return (
    <>
      <Menu />
      {isOpen && (
        <div className="absolute top-0 w-screen h-screen bg-black/5 flex items-center justify-center z-50">
          <Login />
        </div>
      )}
      {isRegistrationOpen && (
        <div className="absolute top-0 w-screen h-screen bg-black/5 flex items-center justify-center z-50">
          <Register />
        </div>
      )}
      <div className="relative top-14 sm:top-16 ">{children}</div>
    </>
  );
}
