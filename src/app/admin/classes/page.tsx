"use client";
import Pagination from "@/components/Pagination";
import React, { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";
import {
  useAllClasses,
  useDeleteClasses,
  // useUpdateClasses,
} from "@/hooks/classes.hooks";
import { IClass } from "@/types/classes.type";
import ClassCards from "@/components/ClassCards";
import Classes from "@/models/classes.model";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClasses, setFilteredClasses] = useState<IClass[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  // const { mutate: updateClasses } = useUpdateClasses({} as IClass);
  const classes: IClass[] = classesData?.data?.data;

  const onDeleteClasses = async (id: string) => {
    await deleteClasses(id);
  };
  // const onUpdateClasses = async (classes: IClass) => {
  //   await updateClasses(classes);
  // };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClasses.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (Array.isArray(classes)) {
      const filtered = classes.filter(classes =>
        classes.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredClasses(filtered);
    }
  }, [searchTerm, classes]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full h-full bg-[#F7F8FC]">
      <div className="p-5 md:p-10 flex flex-col items-center">
        <div className="w-full flex items-center justify-between">
          <h4 className="font-bold">Classes</h4>
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
                <button className="absolute p-1 right-2 top-2">
                  <Image
                    src="/assets/images/icons/search.png"
                    className="w-5 h-5"
                    alt="search"
                    width={11}
                    height={11}
                  />
                </button>
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
        {Array.isArray(classes) && filteredClasses.length > 0 ? (
          <div className="w-full flex flex-wrap items-center justify-between gap-5 my-8 ml-0">
            {currentItems.map((classes) => (
              <ClassCards
                {...classes}
                key={classes._id}
                onDeleteClasses={onDeleteClasses}
              />
            ))}
          </div>
        ) : (
          <div className="p-32">
            <div className="flex justify-center items-center w-full h-80">
              <Image
                src="/assets/images/admin/no_records.png"
                alt="No Classes available"
                className="max-w-full max-h-full"
                width={701}
                height={459}
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
            totalItems={filteredClasses.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
