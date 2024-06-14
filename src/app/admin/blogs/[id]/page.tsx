"use client";

import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import leftArrow from "../../../../images/icons/leftArrow.svg";
import { FormEvent, useEffect, useState, useRef, ChangeEvent } from "react";
import { IBlog } from "@/types/blog.type";
import Link from "next/link";
import { useBlogById, useCreateBlog, useUpdateBlog } from "@/hooks/blogs.hooks";
import { useParams, useRouter } from "next/navigation";

const NewBlogPage = () => {
  const navigation = useRouter();
  const { id }: { id: string } = useParams();
  const { data: blogData } = useBlogById(id);
  const { mutate: addBlog } = useCreateBlog();
  const { mutate: updateBlog } = useUpdateBlog({} as IBlog);
  const [blog, setBlog] = useState<IBlog>({
    _id: "",
    blogImgUrl: "",
    name: "",
    summary: "",
    category: "",
    contents: "",
    metaTitle: "",
    description: "",
    keywords: "",
    blogSlugUrl: "",
    faq: [],
    ctaBlogImg: "",
    ctaBlogImgUrl: ""
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

  const onFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    const target = e.target as HTMLTextAreaElement;
    if (e.key === 'Enter' && target.tagName.toLowerCase() !== 'textarea') {
      e.preventDefault();
    }
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(id)
      if (id !== "new") {
        console.log("Updated:", blog);
        await updateBlog(blog);
      } else {
        console.log("blog", blog)
        await addBlog(blog);

      }

      navigation.push("/admin/blogs"); // Use push instead of back to navigate to the updated page
    } catch (error) {
      console.error("Error updating blog: ", error);
    }
  };
  const handleBrowseClick = (fieldName: keyof typeof blog) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,.jpg,.jpeg,.png,.gif,.bmp,.svg'; // Accept only image files
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            setBlog({ ...blog, [fieldName]: reader.result as string });
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleEditorChange = (value: string) => {
    setBlog((prev) => ({ ...prev, contents: value }));
  };
  console.log("faqQues:", blog.faq && blog.faq[0] ? blog.faq[0].ques : '');
  console.log("faqAns:", blog.faq && blog.faq[0] ? blog.faq[0].ans : '');

  const handleAddFAQ = () => {
    setBlog((prev) => ({
      ...prev,
      faq: prev.faq ? [...prev.faq, { ques: "", ans: "" }] : [{ ques: "", ans: "" }]
    }));
  };

  const handleFAQChange = (index: number, fieldName: string, value: string) => {
    const updatedFAQ = [...(blog.faq || [])];
    updatedFAQ[index] = { ...updatedFAQ[index], [fieldName]: value };
    setBlog((prev) => ({
      ...prev,
      faq: updatedFAQ
    }));
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  }

  useEffect(() => {
    console.log(blogData);
    if (blogData?.data?.data) {
      setBlog(blogData?.data?.data);
    }
  }, [blogData]);

  return (

    <div className="flex flex-row items-start justify-between w-full h-full px-14 py-10 bg-[#F7F8FC]">
      <div className="w-20">
        <Link href={"/admin/blogs"}>
          <div className="flex lg:flex-row">
            <h2 className="font-bold text-[#f2994a]  mt-5  ml-[20px] lg:text-left">
              &lt;
            </h2>
            <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left">
              Back
            </h2>
          </div>
        </Link>
      </div>
      <form onSubmit={onHandleSubmit} className="flex-1 w-full" onKeyDown={onFormKeyDown}>
        <div className="flex flex-col gap-5">
          <h5 className="font-bold">Add New Blog</h5>
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
                required
              />
            </div>
            <button
              type="button"
              className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
              onClick={() => handleBrowseClick('blogImgUrl')}
            >
              +Browse
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
              required
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
              required
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
              required
            />
          </div>

          <div className="grid gap-2 w-full" aria-required >
            <label htmlFor="contents">Blog Contents</label>
            <ReactQuill
              theme="snow"
              id="contents"
              value={blog.contents}
              onChange={handleEditorChange}
              modules={modules}
            />
          </div>
          <div className="grid gap-2 w-full mt-8" >
            <label htmlFor="name" > Meta title </label>
            < input
              type="text"
              id="metaTitle"
              name="metaTitle"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={blog.metaTitle}
              required
            />
          </div>
          < div className="grid gap-2 w-full" >
            <label htmlFor="name" > Meta description </label>
            < input
              type="text"
              id="description"
              name="description"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={blog.description}
              required
            />
          </div>
          < div className="grid gap-2 w-full" >
            <label htmlFor="name" > Meta Keywords </label>
            < input
              type="text"
              id="keywords"
              name="keywords"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={blog.keywords}
              required
            />
          </div>
          < div className="grid gap-2 w-full" >
            <label htmlFor="name" > Blog Slug Url </label>
            < input
              type="text"
              id="blogSlugUrl"
              name="blogSlugUrl"
              className="rounded-md px-3 h-10 w-full border border-gray-300"
              onChange={onHandleChange}
              value={blog.blogSlugUrl}
              required
            />
          </div>
          <div className="flex items-end justify-between gap-3">
            <div className="grid gap-2 w-full">
              <label htmlFor="faq">Input Field to FAQs</label>
              <input
                type="text"
                placeholder="Question"
                className="rounded-md px-3 h-10 w-full border border-gray-300"
                value={blog.faq && blog.faq[0] ? blog.faq[0].ques : ''}
                onChange={(e) => handleFAQChange(0, 'ques', e.target.value)} // index is 0 for default input field
              />
              <input
                type="text"
                placeholder="Answer"
                className="rounded-md px-3 h-10 w-full border border-gray-300"
                value={blog.faq && blog.faq[0] ? blog.faq[0].ans : ''}
                onChange={(e) => handleFAQChange(0, 'ans', e.target.value)} // index is 0 for default input field
              />
            </div>
          </div>
          {blog.faq && blog.faq.length > 1 && blog.faq.slice(1).map((blogFAQ, index) => (
            <div key={index} className="flex items-end justify-between gap-3">
              <div className="grid gap-2 w-full">
                <label htmlFor={`faq-${index}`}>Input Field to FAQs</label>
                <input
                  type="text"
                  placeholder="Question"
                  className="rounded-md px-3 h-10 w-full border border-gray-300"
                  value={blogFAQ.ques}
                  onChange={(e) => handleFAQChange(index + 1, 'ques', e.target.value)} // Increment index by 1
                />
                <input
                  type="text"
                  placeholder="Answer"
                  className="rounded-md px-3 h-10 w-full border border-gray-300"
                  value={blogFAQ.ans}
                  onChange={(e) => handleFAQChange(index + 1, 'ans', e.target.value)} // Increment index by 1
                />
              </div>
            </div>
          ))}
          <div className="w-full flex justify-end">
            <button
              type="button"
              className="text-white bg-[#F2994A] px-3 py-2 rounded-md font-sans"
              onClick={handleAddFAQ}
            >
              + Add FAQ
            </button>
          </div>
          < div className="flex items-end justify-between gap-3" >
            <div className="grid gap-2 w-full" >
              <label htmlFor="image" > CTA blog image </label>
              < input
                type="text"
                id="image"
                className="rounded-md px-3 h-10 w-full border border-gray-300"
                name="ctaBlogImg"
                onChange={onHandleChange}
                value={blog.ctaBlogImg}
                required
              />
            </div>
            < button
              type="button"
              className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
              onClick={() => handleBrowseClick('ctaBlogImg')}
            >
              +Browse
            </button>
          </div>
          < div className="flex items-end justify-between gap-3" >
            <div className="grid gap-2 w-full" >
              <label htmlFor="image" > CTA blog image Url </label>
              < input
                type="text"
                id="image"
                className="rounded-md px-3 h-10 w-full border border-gray-300"
                name="ctaBlogImgUrl"
                onChange={onHandleChange}
                value={blog.ctaBlogImgUrl}
                required
              />
            </div>
            <button
              type="button"
              className="text-white bg-[#F2994A] px-3 py-2 rounded-md"
              onClick={() => handleBrowseClick('ctaBlogImgUrl')}
            >
              +Browse
            </button>
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
