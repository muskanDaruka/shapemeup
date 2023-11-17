"use client";

import { FC } from "react";
import Image from "next/image";
import editIcon from "@/images/icons/edit.svg";
import deleteIcon from "@/images/icons/delete.svg";
import { useAllBlogs } from "@/hooks/blogs.hooks"
import Link from "next/link";

const BlogsViewPage = ({ params, _id }) => {
    const { data: blogData, isLoading, isError } = useAllBlogs();
    const blogs = blogData?.data?.data || [];
    const pageData = blogs.filter(function (element) {
        return element._id === params.id
    })
    console.log("pageData", pageData)
    console.log("blogs", blogs)
    if (blogs.length === 0) {
        return null;
    }
    return (
        <div className="flex-1">
            <div className="flex w-full h-[60px] border-slate-25 border-2 rounded-md p-4">
                <div className="text-xl font-bold">Blog details</div>
                <div className=" flex items-center justify-start gap-5">
                    <Link href={`/admin/blogs/${_id}`}>
                        <Image
                            src={editIcon}
                            alt="Edit"
                            width={36}
                            height={36}
                            aria-label="button"
                            role="button"
                            className="ml-[1260px]"
                        />
                    </Link>
                    <Image
                        src={deleteIcon}
                        alt="Edit"
                        width={36}
                        height={36}
                        aria-label="button"
                        role="button"
                        onClick={() => onDeleteBlog(_id as string)}
                    />
                </div>
            </div>
            <div>
                <center>
                    <img
                        src={pageData[0].blogImgUrl}
                        alt="image"
                        className="h-[500px] w-[832.295px] m-20"
                    />
                </center>
                <div className="flex bg-[#F2994A] text-white w-full h-[60px]">
                    <div className="p-4 font-bold">16th November 2023</div>
                    <div className="p-4 font-bold ml-[1100px]">{pageData[0].category}</div>
                </div>
                <div>
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
                </div>
            </div>
        </div>
    )
}
export default BlogsViewPage