"use client";
import Pagination from "@/components/Pagination";
import React, { useState, useEffect, ChangeEvent } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCoach, setFilteredCoach] = useState<ICoach[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  // const { mutate: updateCoach } = useUpdateCoach({} as ICoach);
  // const coach: ICoach[] = coachData?.data?.data || [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCoach.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (coachData && Array.isArray(coachData.data.data)) {
      const coach: ICoach[] = coachData.data.data;
      // Filter blogs based on search term
      const filtered = coach.filter(coachs =>
        coachs.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCoach(filtered);
    }
  }, [searchTerm, coachData]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
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
          <h4 className="font-bold">Coaches</h4>
          <div className="flex items-center justify-end gap-5">
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  id="search"
                  onChange={handleInputChange}
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
        {filteredCoach.length > 0 ? (
          <div className="w-full flex flex-wrap items-center justify-between gap-5 my-8 ml-0">
            {currentItems.map((coach) => (
              <CoachCards
                {...coach}
                key={coach._id}
                onDeleteCoach={onDeleteCoach}
              // onUpdateCoach={onUpdateCoach}
              />
            ))}
          </div>
        ) : (
          <div className="p-32">
            <div className="flex justify-center items-center w-full h-80">
              <Image
                src="/assets/images/admin/no_records.png"
                alt="No Coach available"
                className="max-w-full max-h-full"
                height={459}
                width={701}
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold font-nunito p-5">No Records Found</p>
            </div>
          </div>
        )}
        <div className="w-full flex justify-end ml-8">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredCoach.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;
