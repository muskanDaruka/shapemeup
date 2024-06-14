/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import { IBlog } from "@/types/blog.type";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import BlogUserCards from "@/components/BlogUserCard";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { useState } from "react";


const categories = [
  { size: 'w-30', text: 'Category' },
  { size: 'w-30', text: 'Category' },
  { size: 'w-30', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-20', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-20', text: 'Category' },
  { size: 'w-30', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-34', text: 'Category' },
  { size: 'w-64', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-30', text: 'Category' },
  { size: 'w-64', text: 'Category' },
  { size: 'w-30', text: 'Category' },
  { size: 'w-40', text: 'Category' },
];
const trendingCards = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
    description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
    date: "21 October 2023",
    category: "Fitness"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
    description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
    date: "21 October 2023",
    category: "Fitness"
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
    description: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
    date: "21 October 2023",
    category: "Fitness"
  }
]
const Blogs = () => {
  const { data: blogData, isLoading, isError } = useAllBlogs();
  const blogs = blogData?.data?.data || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = (currentPage === 1 ? 1 : (currentPage - 1) * itemsPerPage) - 1
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  // if (blogs.length === 0) {
  //   return null;
  // }

  return (
    <div>
      <section className="relative">
        <div className="relative">
          <Image
            src="/assets/images/blogs/banner.png"
            alt="blog_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
            width={1440}
            height={375}
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-5xl font-bold ">Our Blogs</h2>
            <h3 className="text-white text-2xl font-normal w-10/12 sm:w-6/12">

              &quot;Fitness freaks, this one is for you. Today we are going to talk
              about the best way to work out - and it&apos;s not what you think. In
              fact, the traditional methods of working out may be doing more
              harm than good. So if you&apos;re looking to get fit fast, keep
              reading!&quot;

            </h3>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="sm:flex-1 ">
          <div className="sm:flex">
            <div className="items-center space-y-1 m-5">
              <div>
                <Link href={`/blogs/${blogs[0]?._id}`}>
                  {blogs[0] && (
                    <div className="mt-5 border-slate-25 border-2 rounded-lg w-full mx-auto md:ml-0 md:mr-0 ">
                      <div className="flex flex-col md:flex-row mx-auto">
                        <div className="w-full">
                          <Image
                            src={blogs[0]?.blogImgUrl}
                            alt="image"
                            className="h-[272.037px] md:h-[271.037] md:w-full w-full rounded-lg object-fit"
                            width={330} height={270}
                          />
                        </div>
                        <div className="md:flex-grow h-[272.037px] md:h-auto">
                          <h1 className="font-bold text-2xl mt-2 md:mt-5 ml-5">
                            {blogs[0]?.name}
                          </h1>
                          <p className="text-normal mt-2 md:ml-5 ">
                            {blogs[0]?.summary}
                          </p>
                          <Link
                            href={`/blogs/${blogs[0]?._id}`}
                            id="readMoreLink"
                            className="text-[#f2994a] transition duration-300 hover:underline mt-5 block ml-5"
                          >
                            Read More&gt;&gt;
                          </Link>
                          <div className="flex md:flex-row items-start justify-between">
                            <span className="text-black font-bold mt-5 ml-5">
                              {currentDate}
                            </span>
                            <span className="font-bold mt-5 ml-2 md:ml-35 md:mr-5 mr-2">
                              {blogs[0]?.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
                {
                  Array.isArray(blogs) && blogs.length > 0 && (
                    <div className="w-full sm:max-w-screen-lg mx-auto px-5 sm:px-10 py-5 sm:py-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentItems.slice(1).map((blog: IBlog, index: number) => (
                          <div key={index} className="mb-4">
                            <Link href={`/blogs/${blog._id}`}>
                              <BlogUserCards key={blog.id} blog={blog} useInImg useInName useInSummary useInRead useInDate useInCategory />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }

              </div>
              <div className=" flex justify-center m-[50px]">
                {/* <button className="w-[70px] text-black border-slate-250 border-2">
                  &lt;&lt;Pre
                </button>
                <button className="w-[70px] text-black border-slate-250 border-2">
                  Page 1
                </button>
                <button className="w-[70px] text-[#f2994a] border-slate-250 border-2">
                  Next&gt;&gt;
                </button> */}
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={blogs.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            </div>
            <div className="w-full md:w-[455px] md:border-l border-gray-400 p-10">
              {/* <div className="w-full h-full md:w-[455px] md:ml-0"> */}
              <h2 className="font-bold text-2xl ml-2 mt-6">Trending Topics</h2>
              <hr />
              <div className="mt-6">
                {trendingCards.map((item, index) => (
                  <div key={index} className="mt-5 m-5">
                    <h1 className="font-bold text-xl">{item.title}</h1>
                    <p className="font-normal mt-2">{item.description}</p>
                    <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline">
                      Read More&gt;&gt;
                    </a>
                    <div className="flex mb-5">
                      <span className="text-black font-bold mt-5">{item.date}</span>
                      <span className="font-bold mt-5 md:ml-[100px] ml-40">{item.category}</span>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              <h2 className="font-bold text-2xl ml-5 mt-6">Categories</h2>
              <div className="flex flex-wrap ml-5 mt-6">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`border-slate-250 border-2 ${category.size} text-black p-2 m-1 rounded-lg `}
                  >
                    {category.text}
                  </button>
                ))}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="relative">
          <Image
            src="/assets/images/coaches/coach_banner.png"
            alt="coach_banner"
            className="relative w-screen object-cover h-auto min-h-[490px]"
            width={1440}
            height={375}
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-4xl font-bold text-center">
              Get customized classes
            </h2>
            <Link href={"/coaches"}>
              <button className="bg-[#f2994a] text-white py-4 px-16 rounded-md text-lg">
                See our Coaches
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
