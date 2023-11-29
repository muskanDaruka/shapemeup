/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useAllCoach } from "@/hooks/coach.hooks";
import Link from "next/link";
interface CoachUserCardProps {
    coach: {
        _id?: string;
        name: string;
        photoUrl: string;
        yearsOfExp: number | null;
        bio: string;
        clients: number | null;
        certifications?: number | null;
    };
}
const CoachUserCard: FC<CoachUserCardProps> = ({ coach }) => {
    // const { data: coachData, isLoading, isError } = useAllcoach();
    // console.log("data", coachData?.data.data)
    return (
        <div className="w-full md:w-96 h-80 rounded-md overflow-hidden">
            <div className="flex-shrink-0 w-full h-80 md-mx-10 border-slate-250 border-2 rounded-lg ">
                <img
                    src={coach.photoUrl}
                    alt="coach_banner"
                    className="w-[500px] object-cover h-[200px] flex-shrink-0 rounded-lg"
                />
                <h1 className="font-bold mt-2 ml-5">
                    {coach.name}
                </h1>
                <p className="font-normal mt-2 ml-5">
                    {coach.bio}
                </p>

            </div>
        </div>
    );
};

export default CoachUserCard;
