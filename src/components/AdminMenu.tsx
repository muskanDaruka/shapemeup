"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import UserProfile from "./UserProfile";
interface IAdminMenu {
  imageUrl: string;
  label: string;
  path: string;
}
const adminMenus: IAdminMenu[] = [
  {
    imageUrl: "/assets/images/icons/exercise.png",
    label: "Exercise",
    path: "/admin/exercise",
  },

  {
    imageUrl: "/assets/images/icons/coach.png",
    label: "Coaches",
    path: "/admin/coach",
  },
  {
    imageUrl: "/assets/images/icons/class.png",
    label: "Classes",
    path: "/admin/classes",
  },
  {
    imageUrl: "/assets/images/icons/user.png",
    label: "Users",
    path: "/admin/users",
  },
  {
    imageUrl: "/assets/images/icons/coach_request.png",
    label: "Coach requests",
    path: "/admin/coachRequests",
  },
  {
    imageUrl: "/assets/images/icons/products.png",
    label: "Products",
    path: "/admin/products",
  },
  {
    imageUrl: "/assets/images/icons/orders.png",
    label: "Orders",
    path: "/admin/orders",
  },
  {
    imageUrl: "/assets/images/icons/blog.png",
    label: "Blogs",
    path: "/admin/blogs",
  },

];

const AdminMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="h-full w-full bg-[#363740] object-fit h-fixed">
      <div className="h-full bg-[#34383d] w-12/12  h-full">
        <Link
          href={"/"}
          className="h-full w-full"
        >
          <Image
            src="/assets/images/shapemeup_logo.png"
            alt="shapemeup_logo"
            width={200}
            height={50}
            className="p-[30px] ml-10"
          />
        </Link>
        {adminMenus.map((adminMenu, index) => (
          <Link key={adminMenu.path} href={adminMenu.path}
          >
            <div
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer ${index === activeIndex ? "bg-[#f2994a] text-white h-[85px] w-full hover:text-white hover:text-opacity-50"
                : "text-white hover:text-white hover:text-opacity-50"}`}
            >
              <div className={`flex items-center ${index === activeIndex ? "bg-[#f2994a] " : ""}`} >
                <span className={`p-[5px] m-5 mt-6`}><Image src={adminMenu.imageUrl} alt="Icon" width={20}
                  height={18} style={{ filter: index === activeIndex ? "brightness(0) invert(1)" : "brightness(1)" }} /></span>
                <div className={`p-[10px] text-xl m-5 `}>{adminMenu.label}</div>
              </div>
            </div>
          </Link>
        ))}
        <UserProfile />
      </div>
    </section>
  );
};

export default AdminMenu;
