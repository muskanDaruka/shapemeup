/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { IBlog } from "@/types/blog.type";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import FAQ from "@/components/FAQ";
import BlogUserCards from "@/components/BlogUserCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface BlogEntry extends IBlog {
  id: string;
  _id: string;
  blogImgUrl: string;
  name: string;
  summary: string;
  category: string;
  contents: string;
}
interface BlogsViewProps {
  params: {
    id: string;
  };
}
const categories = [
  { size: "w-40", text: "Category" },
  { size: "w-60", text: "Category" },
  { size: "w-50", text: "Category" },
  { size: "w-60", text: "Category" },
  { size: "w-50", text: "Category" },
  { size: "w-40", text: "Category" },
  { size: "w-40", text: "Category" },
  { size: "w-60", text: "Category" },
  { size: "w-50", text: "Category" },
  { size: "w-60", text: "Category" },
  { size: "w-50", text: "Category" },
  { size: "w-40", text: "Category" },
  { size: "w-40", text: "Category" },
  { size: "w-30", text: "Category" },
  { size: "w-60", text: "Category" },
  { size: "w-40", text: "Category" },
  { size: "w-60", text: "Category" },
  { size: "w-50", text: "Category" },
];
const trendingCards = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
    date: "21 October 2023",
    category: "Fitness",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
    date: "21 October 2023",
    category: "Fitness",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur iscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Utenim ad minim veniam, quis",
    date: "21 October 2023",
    category: "Fitness",
  },
];
const BlogsView: FC<BlogsViewProps> = ({ params }) => {
  const { data: blogData, isLoading, isError } = useAllBlogs();
  const blogs = blogData?.data?.data || [];
  const [email, setEmail] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);
  const pageData = blogs.filter((element: { _id: string }) => element._id === params.id);
  const [isOpenFAQ, setIsOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number | null): void => {
    setIsOpenFAQ((prevIndex: number | null) => {
      return prevIndex === index ? null : index;
    });
  };

  console.log("pageData", pageData);
  console.log("blogs", blogs);
  // if (blogs.length === 0) {
  //   return null;
  // }
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };
  const otherBlogs = blogs.filter((blog: IBlog) => blog._id !== params.id);

  useEffect(() => {
    const handleResize = () => {
      setCenterSlidePercentage(window.innerWidth > 425 ? 33.3333 : 100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Error loading exercises. Please try again later.</div>;
  }
  return (
    <div>
      <section className="relative">
        <Link href={`/blogs`}>
          <div className="flex lg:flex-row">
            <h2 className="font-bold text-[#f2994a]  mt-5  ml-[20px] lg:text-left">
              &lt;
            </h2>
            <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left">
              Back
            </h2>
          </div>
        </Link>
        <div className="relative flex flex-col lg:flex-row bg-white">
          <div className="mx-auto my-5 font-bold text-center">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-4">
              {pageData[0].name}
            </h2>
            <h2 className="font-normal text-xl my-5">Category : {pageData[0].category}</h2>
            <img
              src={pageData[0].blogImgUrl}
              alt="blog"
              className="relative w-[793px] object-cover h-[343px] max-w-full max-h-full"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-between bg-white text-[#F2994A] w-full md:bg-[#F2994A] md:text-white">
        <div className="flex items-center">
          <img
            src="/assets/images/coach_list/coach_04.png"
            alt="image"
            className="h-12 w-12 md:w-12 rounded-full m-3"
          />
          <h3 className="font-bold p-2 md:p-4">Author Name</h3>
        </div>
        <div className="p-4 m-2 font-bold  ml-40">
          {pageData[0].category}
        </div>
      </div>
      <section className="relative">
        <div className="sm:flex-1 ">
          <div className="sm:flex">
            <div className="items-center space-y-1 m-5">
              <p className="m-8 font-sans">{pageData[0].summary} </p>
              <div className="m-8">
                <h3 className="m-8 font-bold">Table of Content</h3>
                <p className="ml-8 font-normal">H2 tag1</p>
                <p className="ml-8 font-normal">H2 tag2</p>
                <p className="ml-8 font-normal">H2 tag4</p>
                <p className="ml-8 font-normal">H2 tag5</p>
                <p className="ml-8 font-normal">H2 tag6</p>
                <p className="ml-8 font-normal">H2 tag7</p>
                <p className="ml-8 font-normal">H2 tag8</p>
              </div>
              {/* <h1 className="m-8 text-2xl font-bold">{pageData[0].name}</h1> */}
              <p className="m-8 font-sans pt-8" dangerouslySetInnerHTML={{ __html: pageData[0].contents.slice(0, pageData[0].contents.length / 2) }} />
              <div className="flex justify-center items-center">
                <img
                  src={pageData[0].blogImgUrl}
                  alt="image"
                  className="h-[272.037px] md:h-[400px] md:w-[823px] rounded-lg object-fit"
                />
              </div>
              <h1 className="m-8 text-2xl font-bold">{pageData[0].name}</h1>
              <p className="m-8 font-sans" dangerouslySetInnerHTML={{ __html: pageData[0].contents.slice(pageData[0].contents.length / 2) }} />
              <ul className="flex items-center md:justify-start justify-left gap-8 mt-5 md:mt-8 m-8">
                <h3 className="font-normal w-12 h-8 rounded-md text-center md:text-left">
                  Share
                </h3>
                <li>
                  <img
                    className="w-12 h-12 "
                    src="/assets/images/blogs/facebook.png"
                    alt="Facebook"
                  />
                </li>
                <li>
                  <img
                    className="w-12 h-12 "
                    src="/assets/images/blogs/twitter.png"
                    alt="Twitter"
                  />
                </li>
              </ul>
              <p className="m-8 text-xl font-bold">
                To Know more, Sed ut perspiciatis unde omnis iste natus. Dial{" "}
                <span className="text-[#f2994a]">0129-4040404</span> or click on{" "}
                <span className="text-[#f2994a]">
                  {pageData[0].ctaBlogImgUrl}
                </span>
                .
              </p>

            </div>
            <div className="md:border-l border-gray-400">
              <div className="md:w-[455px] md:ml-5 mt-5">
                <div className="relative md:block hidden">
                  <img
                    src="/assets/images/blogs/Rectangle 397.png"
                    alt="blogs"
                    className="relative w-full object-cover h-auto min-h-[490px] "
                  />
                  <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                    <h2 className="mt-[200px] text-white text-4xl font-bold">
                      Get customized classes
                    </h2>
                  </div>
                </div>
                <section>
                  <div className="p-5 md:block hidden">
                    <h1 className="font-bold text-center text-4xl font-sans ">
                      Frequently asked questions
                    </h1>
                    <div className="container mx-auto mt-8 justify-center flex flex-wrap">
                      <div className="grid grid-cols-1 space-y-4">
                        {pageData[0].faq.map((faqItem: any, index: number) => (
                          <div key={index} className="p-4 rounded mb-4">
                            <div className="cursor-pointer" onClick={() => toggleFAQ(index)}>
                              <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold font-sans mb-1">{faqItem.ques}</h2>
                                <span className="inline-block">{isOpenFAQ === index ? '-' : '+'}</span>
                              </div>
                            </div>
                            {isOpenFAQ === index && <p className="font-normal font-sans">{faqItem.ans}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                <div className="md:block">
                  <h2 className="font-bold text-2xl ml-5 mt-10 hidden md:block">
                    Categories
                  </h2>
                  <div className="flex flex-wrap ml-5 mt-10 hidden md:flex">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`border-slate-250 border-2 ${category.size} text-black p-2 m-1 rounded-lg`}
                      >
                        {category.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
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
      <section>
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-6 ml-4 font-sans">
            Frequently asked questions
          </h1>
          <div className="container mx-auto mt-8">
            <div className="space-y-4">
              {pageData[0].faq.map((faqItem: any, index: number) => (
                <div key={index} className="p-4 rounded bg-white">
                  <div className="cursor-pointer" onClick={() => toggleFAQ(index)}>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold font-sans mb-1">{faqItem.ques}</h2>
                      <span className="inline-block">{isOpenFAQ === index ? '▲' : '▼'}</span>
                    </div>
                  </div>
                  {isOpenFAQ === index && <p className="mt-2 font-normal font-sans">{faqItem.ans}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative mt-8 px-2">
        <h1 className="font-bold text-center text-4xl">
          Subscribe to our newsletter
        </h1>
        <p className="font-normal text-center text-2xl m-2">
          Enter your email to subscribe to updates.
        </p>
        <div className="flex flex-col sm:flex-row mx-auto justify-center">
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email"
            className="w-full sm:w-64 h-12 border-slate-250 border-2 rounded-lg my-5 sm:mr-2 sm:ml-0 p-2 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="mt-5 w-full sm:w-32 h-12 bg-[#f2994a] text-white">
            Subscribe
          </button>
        </div>
        <h2 className="font-bold text-2xl ml-5 mt-10 md:hidden">Categories</h2>
        <div className="flex flex-wrap ml-5 mt-10 md:hidden ">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`border-slate-250 border-2 ${category.size} text-black p-2 m-1 rounded-lg`}
            >
              {category.text}
            </button>
          ))}
        </div>
        <h1 className="text-center font-bold text-4xl my-5">Related Blogs</h1>
        <div className="relative">
          {blogs.length > 0 && (
            <button onClick={() => prevSlide()} className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2">
              &lt;
            </button>
          )}
          <div className="hidden sm:block sm:bg-[#f5f5f5]">

            <Carousel
              showArrows={false}
              infiniteLoop={false}
              showThumbs={false}
              showStatus={false}
              centerMode={false}
              showIndicators={true}
              autoPlay={true}
              interval={3000}
            >
              {otherBlogs && otherBlogs.length > 0 && (
                [...Array(Math.ceil(otherBlogs.length / 3))].map((_, index) => (
                  <div key={index} className="flex justify-center items-center">
                    {otherBlogs.slice(index * 3, (index + 1) * 3).map((blog: IBlog) => (
                      <div key={blog._id} className="px-5 py-10">
                        <Link href={`/blogs/${blog._id}`}>
                          <BlogUserCards
                            key={blog.id}
                            blog={blog}
                            useInImg
                            useInSummary
                            useInName={false}
                            useInRead={false}
                            useInDate={false}
                            useInCategory={false}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </Carousel>
          </div>
          {
            blogs.length > 0 && (
              <button onClick={() => nextSlide()} className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2">
                &gt;
              </button>
            )
          }
        </div>
        <div className="sm:hidden">
          <Carousel
            showArrows={false}
            infiniteLoop={false}
            showThumbs={false}
            showStatus={false}
            centerMode={true}
            showIndicators={true}
            autoPlay={true}
            centerSlidePercentage={centerSlidePercentage}
          >
            {otherBlogs.map((blog: IBlog, index: number) => (
              <div
                key={index}
                className="flex flex-row justify-center items-center"
              >
                <Link href={`/blogs/${blog._id}`}>
                  <BlogUserCards
                    key={blog.id}
                    blog={blog}
                    useInImg
                    useInSummary
                    useInName={false}
                    useInRead={false}
                    useInDate={false}
                    useInCategory={false}
                  />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section >
      <Footer />
    </div >
  );
};

export default BlogsView;
