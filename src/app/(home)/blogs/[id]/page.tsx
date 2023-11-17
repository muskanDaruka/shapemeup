/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { IBlog } from "@/types/blog.type";
import { useAllBlogs } from "@/hooks/blogs.hooks";
interface BlogEntry {
    _id: string;
}
interface BlogsViewProps {
    params: {
        id: string;
    };
}

const BlogsView: FC<BlogsViewProps> = ({ params }) => {
    const { data: blogData, isLoading, isError } = useAllBlogs();
    const blogs: BlogEntry[] = blogData?.data?.data || [];
    const pageData = blogs.filter(function (element: BlogEntry) {
        return element._id === params.id
    })
    console.log("pageData", pageData)
    console.log("blogs", blogs)
    if (blogs.length === 0) {
        return null;
    }
    return (
        <div>
            <section className="flex relative">
                <div className="relative bg-white">
                    <div className="flex mx-5 my-5 font-bold">
                        <div>
                            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
                                {pageData[0].name}
                            </h2>
                            <h2 className="text-black text-xl sm:text-2xl md:text-3/xl font-normal m-2 sm:m-4 lg:m-8">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                {pageData[0].summary}
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </h2>
                            <ul className="flex items-center lg:justify-start justify-center gap-8 mt-8">
                                <h3 className="font-normal ml-8 w-12 h-8 rounded-md shadow-xl">Share</h3>
                                <li><img className="w-10 h-10 rounded-lg shadow-xl" src="/assets/images/social_media/fb.png" alt="Facebook" /></li>
                                <li><img className="w-10 h-10 rounded-lg shadow-xl" src="/assets/images/social_media/twitterBird.png" alt="Twitter" /></li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="/assets/images/blogs/blog_banner.png"
                                alt="blog"
                                className="relative mx-300 w-[2500px] object-cover h-[577px] min-h-[490px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex bg-[#F2994A] text-white w-full h-[60px]">
                <div className="p-4 font-bold">16th November 2023</div>
                <div className="p-4 font-bold ml-[1450px]">{pageData[0].category}</div>
            </div>
            <section className="flex">
                <div className="items-center space-y-1">
                    <div className="w-[1200px]">
                        <h1 className="m-10 text-2xl font-bold">{pageData[0].name}</h1>
                        <p className="m-10 text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis{pageData[0].contents}
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis
                        </p>
                        <p className="m-10 text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis{pageData[0].contents}
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis
                        </p>
                        <p className="m-10 text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis{pageData[0].contents}
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis
                        </p>
                        <center>
                            <img
                                src={pageData[0].blogImgUrl}
                                alt="image"
                                className="h-[500px] w-[832.295px] m-10"
                            />
                        </center>
                        <h1 className="m-10 text-2xl font-bold">{pageData[0].name}</h1>
                        <p className="m-10 text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis{pageData[0].contents}
                        </p>
                        <p className="m-10 text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis{pageData[0].contents}
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis
                        </p>
                        <p className="m-10 text-xl font-normal">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis{pageData[0].contents}
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis
                        </p>
                        <ul className="flex items-center lg:justify-start justify-center gap-8 mt-8 m-10">
                            <h3 className="font-normal ml-6 w-12 h-8 rounded-md shadow-xl">Share</h3>
                            <li><img className="w-10 h-10 rounded-lg shadow-xl" src="/assets/images/social_media/fb.png" alt="Facebook" /></li>
                            <li><img className="w-10 h-10 rounded-lg shadow-xl" src="/assets/images/social_media/twitterBird.png" alt="Twitter" /></li>
                        </ul>
                        <p className="m-10 font-bold">To Know more ,Sed ut perspiciatis unde omnis iste natus. Dial 0129-4040404 or click on ‘Nemo enim ipsam voluptatem quia voluptas sit (CTA) .</p>
                    </div>
                </div>
                <div className=" w-px h-[16 00px] bg-gray-400">
                    <div className="w-[600px] h-[1500px]">
                        <h2 className="font-bold text-2xl ml-5 mt-10">Other Topics</h2>
                        <hr />
                        <div className="mt-5 m-5">
                            <h1 className="font-bold text-xl ml-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h1>
                            <p className="font-normal mt-2 ml-5">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <a
                                href="#"
                                id="readMoreLink"
                                className="text-[#f2994a] transition duration-300 hover:underline ml-5"
                            >
                                Read More&gt;&gt;
                            </a>
                            <div className="flex mb-5">
                                <span className="text-black font-bold ml-5 mt-5">
                                    21 October 2023
                                </span>
                                <span className="font-bold mt-5 ml-[350px]">Fitness</span>
                            </div>
                            <hr />
                        </div>
                        <div className="mt-5 m-5">
                            <h1 className="font-bold text-xl ml-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h1>
                            <p className="font-normal mt-2 ml-5">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <a
                                href="#"
                                id="readMoreLink"
                                className="text-[#f2994a] transition duration-300 hover:underline ml-5"
                            >
                                Read More&gt;&gt;
                            </a>
                            <div className="flex mb-5">
                                <span className="text-black font-bold ml-5 mt-5">
                                    21 October 2023
                                </span>
                                <span className="font-bold mt-5 ml-[350px]">Fitness</span>
                            </div>
                            <hr />
                        </div>
                        <div className="mt-5 m-5">
                            <h1 className="font-bold text-xl ml-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h1>
                            <p className="font-normal mt-2  ml-5">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </p>
                            <a
                                href="#"
                                id="readMoreLink"
                                className="text-[#f2994a] transition duration-300 hover:underline ml-5"
                            >
                                Read More&gt;&gt;
                            </a>
                            <div className="flex mb-20">
                                <span className="text-black font-bold ml-5 mt-5">
                                    21 October 2023
                                </span>
                                <span className="font-bold mt-5 ml-[350px]">Fitness</span>
                            </div>
                            <hr />
                        </div>
                        <h2 className="font-bold text-2xl ml-5 mt-10">Categories</h2>
                        <div className="ml-10 mt-10">
                            <div className="row">
                                <button className="border-slate-250 border-2 w-40 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2  w-60 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2  w-50 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                            </div>
                            <div className="row">
                                <button className="border-slate-250 border-2 text-black  w-60 m-1 p-4 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2 text-black w-64 m-1  p-4 rounded-lg">
                                    Category
                                </button>
                            </div>
                            <div className="row">
                                <button className="border-slate-250 border-2 w-40 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2  w-60 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2  w-50 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                            </div>
                            <div className="row">
                                <button className="border-slate-250 border-2 text-black  w-60 m-1 p-4 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2  text-black w-64 m-1  p-4 rounded-lg">
                                    Category
                                </button>
                            </div>
                            <div className="row">
                                <button className="border-slate-250 border-2 w-40 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2 w-60 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2 w-50 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                            </div>
                            <div className="row">
                                <button className="border-slate-250 border-2 text-black  w-60 m-1 p-4 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2 text-black w-64 m-1  p-4 rounded-lg">
                                    Category
                                </button>
                            </div>
                            <div className="row">
                                <button className="border-slate-250 border-2  w-40 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2 w-60 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
                                <button className="border-slate-250 border-2 w-50 text-black p-4 m-1 rounded-lg">
                                    Category
                                </button>
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
                        <h2 className="text-white text-4xl font-bold">
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

export default BlogsView;
