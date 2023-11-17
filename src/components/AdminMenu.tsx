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
    path: "/admin/user",
  },
  {
    imageUrl: "/assets/images/icons/coach_request.png",
    label: "Coach requests",
    path: "/admin/coachRequest",
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
    <section className="h-full w-full bg-[#363740] object-fit">
      <div className="h-full bg-[#34383d] w-11/12 ml-5 h-full">
        <Link
          href={"/"}
          className="h-full w-full"
        >
          <img src="/assets/images/shapemeup_logo.png" alt="shapemeup_logo" className="p-[30px] ml-10" />
        </Link>
        {adminMenus.map((adminMenu, index) => (
          <Link key={adminMenu.path} href={adminMenu.path}
            onClick={() => { setActiveIndex(index) }}
            className={`${index === activeIndex ? "text-[#f2994a]" : ""}`}
          >
            <div className={`flex ${index === activeIndex ? "text-[#f2994a]" : ""}`} >
              <span className={`p-[5px] m-5 mt-8 ${index === activeIndex ? "text-[#f2994a]" : ""}`}><img src={adminMenu.imageUrl} alt="Icon" /></span>
              <div className={`text-white p-[10px] text-xl m-5 ${index === activeIndex ? "text-[#f2994a]" : ""}`}>{adminMenu.label}</div>
            </div>
          </Link>
        ))}
        <UserProfile />
      </div>
    </section>
  );
};

export default AdminMenu;
