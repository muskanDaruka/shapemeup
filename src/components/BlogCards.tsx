/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Image from "next/image";
import editIcon from "../images/icons/edit.svg";
import deleteIcon from "../images/icons/delete.svg";
import { IBlog } from "@/types/blog.type";
import Link from "next/link";
import { useUpdateBlog } from "@/hooks/blogs.hooks";
import { useParams, useRouter } from "next/navigation";

type Props = IBlog & {
  onDeleteBlog: (id: string) => void;
};

const BlogCards: FC<Props> = ({
  blogImgUrl,
  name,
  category,
  _id,
  onDeleteBlog,
}) => {
  const navigation = useRouter();
  const { mutate: updateBlog } = useUpdateBlog({
    _id,
    blogImgUrl,
    name,
    summary: "",
    category,
    contents: "",
    postedOn: new Date(),
    trendingTopic: "",
    metaTitle: "",
    description: "",
    keywords: "",
    blogSlugUrl: "",
    faqQues: "",
    faqAns: "",
    ctaBlogImg: "",
    ctaBlogImgUrl: "",
  });
  const handleEditClick = async () => {
    navigation.push(`/admin/blogs/${_id}`);
  };
  return (
    <div className="w-full md:w-[48%] rounded-md overflow-hidden">
      <div className="flex w-full flex-1 h-[185px] top-0 left-0 bg-white rounded-[10px] shadow-[0px_0px_10px_#0000001a]">
        <div className="overflow-hidden w-5/12">
          <img
            src={blogImgUrl}
            alt={blogImgUrl}
            className="bg-cover w-full h-full"
          />
        </div>
        <div className="p-5 flex-1 flex flex-col items-start justify-between">
          <h5>{name}</h5>
          <h6>
            Category: <small>{category}</small>
          </h6>

          <div className="flex items-center justify-start gap-5">
            <Link href={`/admin/blogs/${_id}`}>
              <Image
                src={editIcon}
                alt="Edit"
                width={36}
                height={36}
                aria-label="button"
                role="button"
                onClick={handleEditClick}
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
      </div>
    </div>
  );
};

export default BlogCards;
