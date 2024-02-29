"use client";

import BlogCards from "@/components/BlogCards";
import Pagination from "@/components/Pagination";
import { useAllBlogs, useDeleteBlog } from "@/hooks/blogs.hooks";
import { IBlog } from "@/types/blog.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blogImgUrl: string;
  title: string;
  category: string;
}

// const blogs: Props[] = [
//   {
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit (title)",
//     image:
//       "https://s3-alpha-sig.figma.com/img/782f/2fee/799b805d263e46b89ae28f2863eccc73?Expires=1699228800&Signature=CyngdCcRH3W0-d1O-P1i4Poh0iUm6eV-wAZgGGkc966H-s9~c93-T1p4DkaM~n4IqVKi9Tc8wTQjeWoQq5zoTSIvbB3QI7CuL5xt2AyFmPl-7ppieQrgyQS59kTSUYFMT0xRg8I2ypimF7A30bh5SrrKtrZWSHncRBZ4DE8x86VVE6HLLWYT~FIVaALN2om6jjfJ2alqACpPKqiI1jH1JQiP7rmBzZEbsTLfNhcvyHZbun64E~DXxMytWIUFaAqb7p1TyKv8R45e~YV255SN~UbmBgSTQDTgoy5XUwpPEi7ehykq4N36ATCCqNfvBXiEVZLxFA35SAI8TdcjWLkHBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     category: "Ab Exercises",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit (title)",
//     image:
//       "https://s3-alpha-sig.figma.com/img/c99e/6dda/9f362539dda9341a437d67b43747f6ab?Expires=1699228800&Signature=K1Aw1WmI5t9pUaVDiirqYiZ50pODmzn0Ve9OSpl13AgjGkW2y5lEXebOGwSPM5QvoF6~1YjFyelYMi66PkBQntvBVdCISyWEh8NDKjtcNKsbJ7dUDk~hDabY0zqsgUCyZ06b4c0X~rPkqZkWV6yadl5eS0yygxhy9JkJtY8QbxKF2pXcKdk2iYzSszdKNXON0RRQQEknAFv4lnJ-x7~5uVv4nimh01kF1cRcHnjj7o2TuIkZAIee-vDzs-jPmkTKKoXFHJJW4CDw6uA7iqEmnC74jesRJl3WLGrKYouBrojmanyH4AdxjmsJ5YNS7vqs~5rT9yATdceDKX9KEtqxYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     category: "Ab Exercises",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit (title)",
//     image:
//       "https://s3-alpha-sig.figma.com/img/7a6d/1c71/23dafd127aa94ff332b36973da8e76ee?Expires=1699228800&Signature=PR4~m1URGMo87B-nP38t3hzWrX73JhQrXUBmzC55Kd18Hl5AE2ksKSS2hGrY2sLbjadVMYl9LDiz7Beh-7kUC6H~IkwMOEHIhZAwN3c17KeVRmOlY4ZO9jFzM~ymC0OidqwYny8whDdrnu55o30UTOsUUAIKAZcyvpKbOcrv~iRsoon-bu1-MPuVPRxGQcM4iS8fcvz6-eC8WH98EySTn6iYxbHIy~to17BiEDYNF5s6gs2PuCgV3U5DVhMza57i8mdyFUTZXops9xNtdvf51fFZUCMPE4hZQjp3ObD6jjdzLx5xQmLgQI5zsMo38WZsmv1Et7NlKQjPe6B-wWxGyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     category: "Ab Exercises",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit (title)",
//     image:
//       "https://s3-alpha-sig.figma.com/img/3eba/a648/781a9f425b19c92f1b521fc05334d661?Expires=1699228800&Signature=kU9qea31~g9MBoNVoMmers74FDAqTXYeZM4XfhwgXO-GtGw1dJpJI00v~zooA5au5jbNW0WF5CKYV~rTgJ8jL6daz3p15OwiRLKyLtKj2TKMjNGWNEsS~lsS4b1nqRg0TxcLLiayz3AETLJsLA4Mt4WulCzJ-yCUI6fSnDGPjq0bfJ4sPIXS8jfEG5AI1biWTTEiLc58mSNrJ-F8fvTmfWly~HdDxB4wyvH9G4OJqq4A8EbA4NUb6Q7mwX-yCMwmXWhd6mvUFVCuTq6U3MNLemqUhVvy4S~fOzvu33lxh3sSQSq0ODWYYxdjA8bng7I79GmaikEMzc8nhYWbHL407Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     category: "Ab Exercises",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit (title)",
//     image:
//       "https://s3-alpha-sig.figma.com/img/36bd/f6f4/a8d8774f98429698db1b5e4137074238?Expires=1699228800&Signature=kLxWXNtHFlH~l5eGJkeHeABHzqHuIJgdKuhuqtaktAMUlsQPe4TCz7QEkr00q6u5cPDJGF6N8DzDkaAg7wKzclXLzr~KmxSnxyHskIc49KRGvbBKjtoE~7uzgep~SDFZegtqku2PY4C3UFTDc3KS19UISoOHoax2yuosQMNKBUND07IpYyQz7JFp4xl-OMJM0pjM3Fo7vxwTbmsN8kwA5KpEu43EIaFDThpnhZEn50-zeKVQ~1BdPPjxVDIuKY4~F-44OYYc~elU6N-ADSnawB0hIe-wQuPLJY4uvlHtIQo8hJ95EKyf6x2-vVEEgs1eegQkEtgywYsK5jZNbEZV~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     category: "Ab Exercises",
//   },
//   {
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit (title)",
//     image:
//       "https://s3-alpha-sig.figma.com/img/4482/464c/62ba0e848789cb04e23a40eee5b6eaa7?Expires=1699228800&Signature=ELRhjqmR60oCNZ3HyNqjdZZ2KOlxoa9WJwWG8FJL6RnxDsPp6huW22~c5OoT5g1HfTYCUrn52T1PTuTvjTm63CmM05wh4S8ZZHmIy2Xu4NSeJatPyjjKZ0D~WCqJ8YlEWQeIpSTI6gDK1tsa24V8wn21nB6rzy~hY-n9Q0YYoCtfVETqmBoBqdrVB3st1J00LgmD9xbvjpL24SggqL2NQTdNNF7ZPEXWaeYIk6L41cGVjfOxbw0WFFdL6KvfHOUkZ34~DbObqzXSIPMt-YKkdzH3DYwAKBCamxYB2WTeDt-eBzMKdxQhysQMuQiOEC2yVSOsEmiK5~21d1-IHe3zOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     category: "Ab Exercises",
//   },
// ];

const BlogPage = () => {
  const { data: blogData, isLoading, isError } = useAllBlogs();
  const { mutate: deleteBlog } = useDeleteBlog();
  const blogs: IBlog[] = blogData?.data?.data;
  const onDeleteBlog = async (id: string) => {
    await deleteBlog(id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (

    <div className="w-full h-full bg-[#F7F8FC]">

      <div className="p-5 md:p-10 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <h4 className="mb-4 md:mb-0">Blogs</h4>
          <div className="flex items-center justify-end gap-5 md:ml-auto">
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  id="search"
                  className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300 pl-8" // Adjust padding for better alignment
                />
                <Image
                  src="/assets/images/icons/search.png"
                  className="w-5 h-5 absolute p-1 m-1 right-2 top-2"
                  alt="search"
                  width={11}
                  height={11}
                />
              </div>
            </div>
            <div>
              {/* TODO: Plus Icon */}
              <button
                type="button"
                className="bg-[#F2994A] px-4 text-white h-10 rounded-md "
              >
                <Link href={"/admin/blogs/new"}>+Add New</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-10 my-8 ml-0">
          {Array.isArray(blogs) && blogs.map((blog) => (
            <BlogCards {...blog} key={blog._id} onDeleteBlog={onDeleteBlog} />
          ))}
        </div>

        <div className="w-full flex justify-end ml-8">
          <Pagination />
        </div>
      </div>
    </div>

  );
};

export default BlogPage;
