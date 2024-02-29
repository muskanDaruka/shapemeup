"use client";
import Pagination from "@/components/Pagination";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  useAllCoach,
  useDeleteCoach,
  // useUpdateCoach,
} from "@/hooks/coach.hooks";
import { ICoach } from "@/types/coach.type";
import CoachCards from "@/components/CoachCards";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  clients: string;
  yearsOfExp: number;
  certifications: string;
}

const CoachesPage = () => {
  const { data: coachData, isLoading, isError } = useAllCoach();
  const { mutate: deleteCoach } = useDeleteCoach();
  // const { mutate: updateCoach } = useUpdateCoach({} as ICoach);
  const coach: ICoach[] = coachData?.data?.data || [];

  const onDeleteCoach = async (id: string) => {
    await deleteCoach(id);
  };
  // const onUpdateCoach = async (coach: ICoach) => {
  //   await updateCoach(coach);
  // };

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Error loading exercises. Please try again later.</div>;
  }
  return (
    <div className="w-full h-full bg-[#F7F8FC]">
      <div className="p-5 md:p-10 flex flex-col items-center">
        <div className="w-full flex items-center justify-between">
          <h4>Coaches</h4>
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
                <Link href={"/admin/coach/new"}>+ Add New</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between gap-4 md:gap-8 lg:gap-10 my-8 ml-0">
          {Array.isArray(coach) &&
            coach.map((coach) => (
              <CoachCards
                {...coach}
                key={coach._id}
                onDeleteCoach={onDeleteCoach}
              // onUpdateCoach={onUpdateCoach}
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

export default CoachesPage;
