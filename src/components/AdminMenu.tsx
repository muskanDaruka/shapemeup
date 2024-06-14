"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import UserProfile from "./UserProfile";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/context/Auth";

interface IAdminMenu {
  imageUrl: string;
  label: string;
  path: string;
  activeImage: string;
}
const adminMenus: IAdminMenu[] = [
  {
    imageUrl: "/assets/images/icons/exercise.png",
    label: "Exercise",
    path: "/admin/exercise",
    activeImage: "/assets/images/icons/exercise_active.png",
  },

  {
    imageUrl: "/assets/images/icons/coach.png",
    label: "Coaches",
    path: "/admin/coach",
    activeImage: "/assets/images/icons/coach_active.png",
  },
  {
    imageUrl: "/assets/images/icons/class.png",
    label: "Classes",
    path: "/admin/classes",
    activeImage: "/assets/images/icons/class_active.png",
  },
  {
    imageUrl: "/assets/images/icons/user.png",
    label: "Users",
    path: "/",
    activeImage: "/assets/images/icons/user_active.png",
  },
  {
    imageUrl: "/assets/images/icons/coach_request.png",
    label: "Coach requests",
    path: "/",
    activeImage: "/assets/images/icons/coach_request_active.png",
  },
  {
    imageUrl: "/assets/images/icons/products.png",
    label: "Products",
    path: "/admin/products",
    activeImage: "/assets/images/icons/products_active.png",
  },
  {
    imageUrl: "/assets/images/icons/orders.png",
    label: "Orders",
    path: "/",
    activeImage: "/assets/images/icons/orders_active.png",
  },
  {
    imageUrl: "/assets/images/icons/blog.png",
    label: "Blogs",
    path: "/admin/blogs",
    activeImage: "/assets/images/icons/blog_active.png",
  },
];

const AdminMenu = () => {
  const pathname = usePathname();
  const navigation = useRouter();
  const { isAdmin, setIsOpen } = useContext(AuthContext);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(
    adminMenus.findIndex((item) => {
      return item.path == pathname;
    })
  );
  useEffect(() => {
    if (!isAdmin) {
      navigation.push("/");
      setIsOpen(true); // Redirect to the login page if not authenticated as admin
    }
  }, [isAdmin, navigation, setIsOpen]);
  useEffect(() => {
    const currentIndex = adminMenus.findIndex(
      (adminMenu) => adminMenu.path === pathname
    );
    setActiveIndex(currentIndex);
  }, [pathname]);
  console.log(activeIndex, "activeIndex");

  return (
    <section className="h-screen w-full bg-[#363740] object-fit h-fixed">
      <div className="h-screen bg-[#34383d] w-12/12 ">
        <Link
          href={"/"}
          className="h-screen w-full"
        >
          <div className="flex justify-center items-center p-5">
            <Image
              src="/assets/images/shapemeup_logo.png"
              alt="shapemeup_logo"
              width={127}
              height={31}
              className="w-[127px] h-[31px]"
            />
          </div>
        </Link>
        {adminMenus.map((adminMenu, index) => (
          <Link key={adminMenu.path + index} href={adminMenu.path}>
            <div
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer h-[56px] ${index === activeIndex ? "text-[#f2994a] bg-white bg-opacity-10 hover:text-white hover:text-opacity-50"
                : "text-white hover:text-white hover:text-opacity-50"}`}
            >
              <div className={`flex items-center h-[56px]  ${index === activeIndex ? "border-l-4 border-[#f2994a]" : ""}`} >
                <span className={`p-[5px] m-5 mt-6`}><Image src={index === activeIndex ? adminMenu.activeImage : adminMenu.imageUrl} alt="Icon" width={20}
                  height={18} /></span>
                <div className={`p-[10px] text-xl m-5 `}>{adminMenu.label}</div>
              </div>
            </div>
          </Link>
        ))}
        <div className="p-4">
          <UserProfile />
        </div>
      </div>
    </section>
  );
};

export default AdminMenu;
