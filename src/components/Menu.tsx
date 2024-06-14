/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { AuthContext, AuthType } from "@/context/Auth";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface IMenu {
  label: string;
  path: string;
  params?: string;
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
    label: "Coaches",
    path: "/coaches",
  },
  {
    label: "Classes",
    path: "/classes",
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

  const pathname = usePathname()
  const { data: session } = useSession();
  console.log("pathname:", pathname)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(menus.findIndex((item) => {
    return item.path == pathname;
  }));
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { isOpen, setIsOpen, isRegistrationOpen, setIsRegistrationOpen } =
    useContext<AuthType>(AuthContext);

  useEffect(() => {
    const currentIndex = menus.findIndex((menu) => menu.path === pathname);
    setActiveIndex(currentIndex);
  }, [pathname]);

  return (
    <section className="h-14 sm:h-16 sm:bg-gray-50 bg-[#34383d] fixed w-full z-10">

      <nav className="flex flex-row items-center sm:justify-center justify-between h-14 sm:h-16">
        <div className="sm:hidden bg-[#34383d] w-14 h-full flex items-center justify-center text-white" onClick={toggleMenu}>

          <div>
            <img src="/assets/images/icons/Menu.png" alt="Menu" />
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden bg-white w-full h-[1000px] fixed top-14 left-0 flex flex-col text-white">
            {menus.map((menu, index) => (
              <Link
                key={menu.path}
                href={menu.path}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className={`flex justify-center items-center block  px-48 py-5 text-xl border-b-2 ${index === activeIndex ? "border-b-4 border-[#34383D] text-[#f2994a] hover:text-gray-500" : "text-black hover:text-[#f2994a]"
                  }`}
              >
                <span className={`${index !== activeIndex ? "hover:text-[#f2994a]" : ""
                  } ${index === activeIndex ? "text-[#f2994a] hover:text-gray-500" : "text-black"}`}>{menu.label}</span>
              </Link>
            ))}
            {/* <Link href="/cart">
              <div
                onClick={() => {
                  setIsCartActive(true);
                  setActiveIndex(undefined);
                  setIsMenuOpen(false); // Close menu when cart is clicked
                }}
                className={`flex items-center justify-center block text-2xl px-48 py-8 border-b-2 text-black hover:text-[#f2994a]`}
              >
                <img
                  src="/assets/images/home/menu-cart.png"
                  alt="Shopping Cart"
                  className="w-full h-full"
                />
                <span className="ml-2">Shopping Cart</span>
              </div>
            </Link> */}
          </div>
        )}
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
        <div
          className="sm:hidden sm:bg-[#f2994a] px-10 h-full flex items-center text-white cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Login
        </div>
        <div className="sm:flex flex-1 hidden items-center justify-between h-full">
          {menus.map((menu, index) => (
            <Link
              key={menu.path}
              href={menu.path}
              onClick={() => {
                console.log("activeIndex:", activeIndex);
                console.log("index:", index);
                setActiveIndex(index);
              }}

              className={`inline-block px-10 py-4 ${index === activeIndex
                ? "border-b-4 border-[#34383D] text-[#f2994a] h-full"
                : "text-black "
                }`}
            >
              <span className={`${index !== activeIndex ? "hover:text-[#f2994a]" : ""
                } ${index === activeIndex ? "text-[#f2994a] hover:text-gray-500" : "text-black"}`}>{menu.label}</span>

            </Link>
          ))}

          <Link href="/cart">
            <div
              onClick={() => {
                setIsCartActive(true);
                setActiveIndex(undefined);
              }}
              className={`sm:block hidden flex items-center justify-center h-full w-full px-10 py-5  ${isCartActive ? "text-opacity-50 hover:text-opacity-30" : "text-black"}`}
            >
              <img
                src="/assets/images/home/menu-cart.png"
                alt="Shopping Cart"
                className="w-full h-full"
              />
            </div>
          </Link>

          <div
            className="cursor-pointer"
            onClick={() => setIsRegistrationOpen(true)}
          >
            Register
          </div>
          {session?.user?.email ? (
            <div
              className="bg-[#34383d] px-10 h-full flex items-center text-white cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </div>
          ) : (
            <div
              className="sm:bg-[#f2994a] px-10 h-full flex items-center text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Login
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Menu;
