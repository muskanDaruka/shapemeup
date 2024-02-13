"use client";
import Pagination from "@/components/Pagination";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  useAllClasses,
  useDeleteClasses,
  // useUpdateClasses,
} from "@/hooks/classes.hooks";
import { IClass } from "@/types/classes.type";
import ClassCards from "@/components/ClassCards";
import { classesSchema } from "@/models/classes.model";
import Image from "next/image";

interface Props {
  photoUrl: string;
  releaseDate: null;
  type: String;
  days: Number;
  duration: Number;
}

const ClassesPage = () => {
  const { data: classesData, isLoading, isError } = useAllClasses();
  const { mutate: deleteClasses } = useDeleteClasses();
  // const { mutate: updateClasses } = useUpdateClasses({} as IClass);
  const classes: IClass[] = classesData?.data?.data;

  const onDeleteClasses = async (id: string) => {
    await deleteClasses(id);
  };
  // const onUpdateClasses = async (classes: IClass) => {
  //   await updateClasses(classes);
  // };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full h-full bg-[#F7F8FC]">
      <div className="p-5 md:p-10 flex flex-col items-center">
        <div className="w-full flex items-center justify-between">
          <h4>Classes</h4>
          <div className="flex items-center justify-end gap-5">
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  id="search"
                  className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300 pl-8" // Adjust padding for better alignment
                />
                <Image
                  src="/assets/images/icons/search.png"
                  className="w-5 h-5 absolute p-1 m-1 right-2 top-2"
                  alt="search"
                  width={11}
                  height={11}
                />
              </div>
            </div>
            <div>
              {/* TODO: Plus Icon */}
              <button
                type="button"
                className="bg-[#F2994A] px-4 text-white h-10 rounded-md"
              >
                <Link href={"/admin/classes/new"}>+ Add New</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-10 my-8 ml-0">
          {Array.isArray(classes) &&
            classes.map((classes) => (
              <ClassCards
                {...classes}
                key={classes._id}
                onDeleteClasses={onDeleteClasses}
              // onUpdateClasses={onUpdateClasses}
              />
            ))}
        </div>
        <div className="w-full flex justify-end ml-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
