/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import Link from "next/link";
import { IBlog } from "@/types/blog.type";

interface BlogUserCardsProps {
  blog: IBlog;
  useInImg: boolean;
  useInName: boolean;
  useInSummary: boolean;
  useInRead: boolean;
  useInDate: boolean;
  useInCategory: boolean;
}
const BlogUserCards: FC<BlogUserCardsProps> = ({
  blog,
  useInImg,
  useInName,
  useInSummary,
  useInRead,
  useInDate,
  useInCategory,
}) => {
  // const { data: blogData, isLoading, isError } = useAllBlogs();
  // console.log("data", blogData?.data.data)
  return (
    <div className="w-full md:w-full rounded-md overflow-hidden mt-2">
      <div className="w-full md:w-[400px] sm:mr-4 border-slate-250 border-2 rounded-lg flex flex-col">
        {useInImg && (
          <img
            src={blog.blogImgUrl}
            alt="blog_banner"
            className="h-[272.037px] w-full object-cover mb-4 rounded-lg"
          />
        )}
        <div className=" flex flex-col md:flex-grow md:h-auto ">
          {useInName && (
            <h1 className="font-bold text-2xl mt-2 md:mt-5 ml-2 md:ml-5">
              {blog.name}
            </h1>
          )}
          {useInSummary && (
            <p className="text-normal mt-2 ml-2 md:ml-5">{blog.summary}</p>
          )}
          {useInRead && (
            <Link
              href={`/blogs/${blog._id}`}
              id="readMoreLink"
              className="text-[#f2994a] transition duration-300 hover:underline mt-5 block ml-2 md:ml-5"
            >
              Read More&gt;&gt;
            </Link>
          )}
          <div className="flex mt-5 ml-2 md:ml-5">
            {useInDate && (
              <span className="text-black font-bold">21 October 2023</span>
            )}
            {useInCategory && (
              <span className="font-bold ml-40 md:ml-40">{blog.category}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUserCards;
