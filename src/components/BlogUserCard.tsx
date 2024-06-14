/* eslint-disable @next/next/no-img-element */
"use client";

import { FC, useState } from "react";
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
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const [showFullSummary, setShowFullSummary] = useState(false);
  // const { data: blogData, isLoading, isError } = useAllBlogs();
  // console.log("data", blogData?.data.data)
  return (
    <div className="md:w-full rounded-md overflow-hidden mt-2">
      <div className="md:w-[400px] sm:mr-4 border rounded-lg flex flex-col">
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
            <div>
              <p className="text-[#475467] text-normal mt-2 ml-2 md:ml-5 font-sans" style={{ maxHeight: showFullSummary ? "none" : "3em", overflow: "hidden" }}>
                {blog.summary}
              </p>
              {blog.summary.length > 150 && (
                <button
                  className="text-[#1747C8] transition duration-300 hover:underline mt-2 ml-2 md:ml-5 font-sans"
                  onClick={() => setShowFullSummary(!showFullSummary)}
                >
                  {showFullSummary ? "Show Less << " : "Read More >> "}
                </button>
              )}
            </div>
          )}
          {/* {useInRead && showFullSummary && (
            <Link
              href={`/blogs/${blog._id}`}
              id="readMoreLink"
              className="text-[#1747C8] transition duration-300 hover:underline mt-2 ml-2 md:ml-5 font-sans"
            >
              Read More&gt;&gt;
            </Link>
          )} */}
          <div className="flex mt-5 ml-2 md:ml-5">
            {useInDate && (
              <span className="text-black font-bold">{currentDate}</span>
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
