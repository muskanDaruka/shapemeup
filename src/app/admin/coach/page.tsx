"use client"
import Pagination from "@/components/Pagination";
import React,{useState, useEffect} from "react";
import Link from "next/link";
import { useAllCoach, useDeleteCoach, useUpdateCoach} from "@/hooks/coach.hooks";
import { ICoach } from "@/types/coach.type";
import CoachCards from "@/components/CoachCards";


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
  const {mutate: updateCoach} = useUpdateCoach();
  const coach: ICoach[] = coachData?.data?.data || []  ;
 
  const onDeleteCoach = async (id: string) => {
    await deleteCoach(id);
    
  };
  const onUpdateCoach = async (coach: ICoach) => {
    await updateCoach(coach);
    
  };
  
  if (isLoading) return <div>Loading...</div>;
  
    return (
        <div className="w-full h-full bg-[#F7F8FC]">
            <div className="p-5 md:p-10 flex flex-col items-center">
                <div className="w-full flex items-center justify-between">
                    <h4>Coaches</h4>
                    <div className="flex items-center justify-end gap-5">
                        <div>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="w-full md:w-60 h-10 rounded-md bg-white text-black px-2 py-1 border border-gray-300"
                            />
                            {/* TODO: Search Icon */}
                        </div>
                        <div>
                            {/* TODO: Plus Icon */}
                            <button
                                type="button"
                                className="bg-[#F2994A] px-4 text-white h-10 rounded-md"
                            >
                                <Link href={"/admin/coach/new"}>Add New</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row flex-wrap items-center justify-between gap-y-5 md:gap-y-14 my-8">
                    {Array.isArray(coach) && coach.map((coach) => (
                        <CoachCards {...coach} key={coach._id} onDeleteCoach={onDeleteCoach} onUpdateCoach={onUpdateCoach}/>
                    ))}
                </div>
                <div className="w-full flex justify-end">
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default CoachesPage;    
