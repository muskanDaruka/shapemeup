/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { AuthContext, AuthType } from "@/context/Auth";
import { useContext, useState } from "react";

interface IMenu {
  label: string;
  path: string;
}

const menus: IMenu[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Exercises",
    path: "/exercises",
  },
  {
    label: "Classes",
    path: "/classes",
  },
  {
    label: "Coaches",
    path: "/coaches",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
];

const Menu = () => {
  const { isOpen, setIsOpen, isRegistrationOpen, setIsRegistrationOpen } =
    useContext<AuthType>(AuthContext);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="h-14 sm:h-16 sm:bg-gray-50 bg-[#34383d] fixed w-full z-10">
      <nav className="flex flex-row items-center justify-between sm:justify-center h-14 sm:h-16">
        <div className="sm:hidden bg-[#34383d] w-14 h-full flex items-center justify-center text-white">
          <div>
            <img src="/assets/images/icons/Menu.png" alt="Menu" />
          </div>
        </div>
        <div className="sm:hidden bg-[#34383d] w-14 h-full flex items-center justify-center text-white">
          <div>
            <img src="/assets/images/icons/white-search.png" alt="Search" />
          </div>
        </div>
        <div className="h-full bg-[#34383d] box-content">
          <Link
            href={"/"}
            className="flex items-center justify-center h-full w-full"
          >
            <img src="/assets/images/shapemeup_logo.png" alt="shapemeup_logo" />
          </Link>
        </div>

        <div className="sm:flex hidden items-center justify-between w-11/12 ml-10 h-full">
          {menus.map((menu, index) => (
            <Link
              key={menu.path}
              href={menu.path}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`inline-block px-10 py-4 ${index === activeIndex
                ? "bg-[#f2994a] text-white h-full"
                : "text-black"
                }`}
            >
              <span className={`${index !== activeIndex ? "hover:text-[#f2994a]" : ""
                } ${index === activeIndex ? "text-white hover:text-gray-500" : "text-black"}`}>{menu.label}</span>
            </Link>
          ))}
          <div onClick={() => setIsRegistrationOpen(true)}>Register</div>
          <div className="px-10 h-full flex items-center text-white sm:bg-[#f2994a]" onClick={() => setIsOpen(true)}>
            Login
          </div>
        </div>
        <div className="sm:hidden bg-[#34383d] px-10 h-full flex items-center text-white" onClick={() => setIsOpen(true)}>
          Login
        </div>
      </nav>
    </section>
  );
};

export default Menu;
