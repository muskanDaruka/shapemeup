/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import Link from "next/link";
interface BlogUserCardsProps {
  blog: {
    id: number;
    blogImgUrl: string;
    name: string;
    summary: string;
    category: string;
  };
}
const BlogUserCards: FC<BlogUserCardsProps> = ({ blog }) => {
  // const { data: blogData, isLoading, isError } = useAllBlogs();
  // console.log("data", blogData?.data.data)
  return (
    <div className="w-full md:w-[60%] rounded-md overflow-hidden">
      <div className="flex-shrink-0 w-[500px] h-[442px] m-[20px] ml-[50px] border-slate-250 border-2 rounded-lg">
        <img
          src={blog.blogImgUrl}
          alt="blog_banner"
          className="w-[500px] object-cover h-[215px] flex-shrink-0 rounded-lg"
        />
        <h1 className="font-bold mt-5 ml-5">
          {blog.name}
        </h1>
        <p className="font-normal mt-2 ml-5">
          {blog.summary}
        </p>
        <Link
          href={`/blogs/${blog._id}`}
          id="readMoreLink"
          className="text-[#f2994a] transition duration-300 hover:underline ml-5"
        >
          Read More&gt;&gt;
        </Link>
        <div className="flex">
          <span className="text-black font-bold ml-5 mt-5">
            21 October 2023
          </span>
          <span className="font-bold mt-5 ml-[230px]">{blog.category}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogUserCards;
