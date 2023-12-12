/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import { IBlog } from "@/types/blog.type";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import BlogUserCards from "@/components/BlogUserCard";


const categories = [
  { size: 'w-40', text: 'Category' },
  { size: 'w-60', text: 'Category' },
  { size: 'w-50', text: 'Category' },
  { size: 'w-60', text: 'Category' },
  { size: 'w-50', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-60', text: 'Category' },
  { size: 'w-50', text: 'Category' },
  { size: 'w-60', text: 'Category' },
  { size: 'w-50', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-30', text: 'Category' },
  { size: 'w-60', text: 'Category' },
  { size: 'w-40', text: 'Category' },
  { size: 'w-60', text: 'Category' },
  { size: 'w-50', text: 'Category' },
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

  if (blogs.length === 0) {
    return null;
  }

  return (
    <div>
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/blogs/banner.png"
            alt="blog_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-5xl font-bold ">Our Blogs</h2>
            <h3 className="text-white text-2xl font-normal w-583 h-168">
              <center>
                &quot;Fitness freaks, this one is for you. Today we are going to talk
                about the best way to work out - and it&apos;s not what you think. In
                fact, the traditional methods of working out may be doing more
                harm than good. So if you&apos;re looking to get fit fast, keep
                reading!&quot;
              </center>
            </h3>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row">
        <div className="items-center space-y-1">
          <div>
            <div className=" mt-10 justify-left border-slate-25 border-2 rounded-lg w-full md:w-[1050px] mx-auto md:ml-10 md:mr-10">
              <div className="flex flex-col md:flex-row mx-auto">
                <div>
                  <img
                    src={blogs[0].blogImgUrl}
                    alt="image"
                    className="h-[272.037px] md:h-auto md:w-[823px] w-full rounded-lg object-fit"
                  />
                </div>
                <div className="md:flex-grow h-[272.037px] md:h-auto">
                  <h1 className="font-bold text-2xl mt-2 md:mt-5 ml-5">
                    {blogs[0].name}
                  </h1>
                  <p className="text-normal mt-2 md:ml-5 ">
                    {blogs[0].summary}
                  </p>
                  <Link
                    href={`/blogs/${blogs[0]._id}`}
                    id="readMoreLink"
                    className="text-[#f2994a] transition duration-300 hover:underline mt-5 block ml-5"
                  >
                    Read More&gt;&gt;
                  </Link>
                  <div className="flex md:flex-row items-start justify-between">
                    <span className="text-black font-bold mt-5 ml-5">
                      21 October 2023
                    </span>
                    <span className="font-bold mt-5 ml-2 md:ml-35 md:mr-5 mr-2">
                      {blogs[0].category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:ml-6 sm:container mx-auto  ">
              {blogs.map((blog: IBlog, index: number) => (
                index % 2 === 1 && (
                  <div key={index / 2} className="flex flex-col md:flex-row mb-4 sm:mb-0  md:space-x-4">
                    <BlogUserCards key={blog.id} blog={blog} useInImg useInName useInSummary useInRead useInDate useInCategory />
                    {blogs[index + 1] && (
                      <BlogUserCards key={blogs[index + 1].id} blog={blogs[index + 1]} useInImg useInName useInSummary useInRead useInDate useInCategory />
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
          <div className=" flex justify-center m-[50px]">
            <button className="w-[70px] text-black border-slate-250 border-2">
              &lt;&lt;Pre
            </button>
            <button className="w-[70px] text-black border-slate-250 border-2">
              Page 1
            </button>
            <button className="w-[70px] text-[#f2994a] border-slate-250 border-2">
              Next&gt;&gt;
            </button>
          </div>
        </div>
        <div className=" w-full md:w-px   md:border-l border-gray-400">
          <div className="w-full h-[1500px] md:w-[600px] md:ml-5">
            <h2 className="font-bold text-2xl ml-5 mt-10">Trending Topics</h2>
            <hr />
            <div className="mt-10">
              {trendingCards.map((item, index) => (
                <div key={index} className="mt-5 m-5">
                  <h1 className="font-bold text-xl">{item.title}</h1>
                  <p className="font-normal mt-2">{item.description}</p>
                  <a href="#" id="readMoreLink" className="text-[#f2994a] transition duration-300 hover:underline">
                    Read More&gt;&gt;
                  </a>
                  <div className="flex mb-5">
                    <span className="text-black font-bold mt-5">{item.date}</span>
                    <span className="font-bold mt-5 md:ml-[330px] ml-40">{item.category}</span>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <h2 className="font-bold text-2xl ml-5 mt-10">Categories</h2>
            <div className="flex flex-wrap ml-5 mt-10">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`border-slate-250 border-2 ${category.size} text-black p-2 m-1 rounded-lg `}
                >
                  {category.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/coaches/coach_banner.png"
            alt="coach_banner"
            className="relative w-screen object-cover h-auto min-h-[490px]"
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
