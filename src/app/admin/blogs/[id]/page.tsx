"use client";

import Image from "next/image";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import {
  uploadToTmpFilesDotOrg_DEV_ONLY,
  BlockNoteEditor,
} from "@blocknote/core";

import leftArrow from "../../../../images/icons/leftArrow.svg";

import "@blocknote/core/style.css";
import { FormEvent, useEffect, useState } from "react";
import { IBlog } from "@/types/blog.type";
import Link from "next/link";
import { useBlogById, useCreateBlog } from "@/hooks/blogs.hooks";
import { useParams, useRouter } from "next/navigation";

const NewBlogPage = () => {
  const navigation = useRouter();
  const { id }: { id: string } = useParams();
  const { data: blogData } = useBlogById(id);
  const { mutate: addBlog } = useCreateBlog();
  const [blog, setBlog] = useState<IBlog>({
    _id: "",
    blogImgUrl: "",
    name: "",
    summary: "",
    category: "",
    contents: "",
  });

  useEffect(() => {
    console.log(blogData);
    if (blogData?.data?.data) {
      setBlog(blogData?.data?.data);
    }
  }, [blogData]);

  const editor = useBlockNote({
    onEditorContentChange: async (editor: BlockNoteEditor) => {
      // Log the document to console on every update
      const markdown: string = await editor.blocksToMarkdown(
        editor.topLevelBlocks
      );
      console.log(markdown);
      setBlog((prev) => ({
        ...prev,
        contents: markdown,
      }));
    },
    domAttributes: {
      editor: {
        class: "bg-white h-40 border border-gray-300 overflow-scroll",
        "data-test": "editor",
      },
    },
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
  });

  const onHandleChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBlog(blog);
    navigation.back();
  };

  return (
    <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
      <div className="w-20">
        <Link href={"/admin/blogs"}>
          <Image src={leftArrow} alt="Back" width={24} height={24} />
        </Link>
      </div>
      <form onSubmit={onHandleSubmit} className="flex-1 w-full">
        <div className="flex flex-col gap-5">
          <h5>Add New Blog</h5>
          <div className="flex items-end justify-between gap-3">
            <div className="grid gap-2 w-full">
              <label htmlFor="image">Upload blog image</label>
              <input
                type="text"
                id="image"
                className="rounded-md px-3 h-10 w-full border border-gray-300"
                name="blogImgUrl"
                onChange={onHandleChange}
                value={blog.blogImgUrl}
              />
            </div>
            <button
              type="button"
              className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
            >
              {/* TODO: Plus Icon */}Browse
            </button>
          </div>
          <div className="grid gap-2 w-full">
            <label htmlFor="name">Blog title</label>
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={blog.name}
            />
          </div>
          <div className="grid gap-2 w-full">
            <label htmlFor="summary">Blog summary</label>
            <textarea
              id="summary"
              name="summary"
              className="rounded-md px-3 h-40 w-full border border-gray-300"
              onChange={onHandleChange}
              value={blog.summary}
            />
          </div>
          <div className="grid gap-2 w-full">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={blog.category}
            />
          </div>
          <div>
            <label htmlFor="tags">
              <input type="text" name="tags" id="tags" />
            </label>
          </div>
          <div className="grid gap-2 w-full">
            <label htmlFor="contents">Blog Contents</label>
            <BlockNoteView editor={editor} theme={"light"} />
          </div>

          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </form >
    </div >
  );
};
export default NewBlogPage;
