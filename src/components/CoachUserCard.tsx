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
        <div className="w-full md:w-96 h-[380px] rounded-md overflow-hidden">
            <div className="flex-shrink-0 w-full h-[380px] md-mx-10 border-slate-250 border-2 rounded-lg ">
                <img
                    src={coach.photoUrl}
                    alt="coach_banner"
                    className="w-[500px] object-cover h-[230px] flex-shrink-0 rounded-lg"
                />
                <h1 className="font-bold mt-2 ml-5">
                    {coach.name}
                </h1>
                <p className="font-normal mt-2 ml-5" style={{ maxHeight: "3em", overflow: "hidden" }}>
                    {coach.bio}
                </p>
                <div className="w-40 ml-28 mt-2">
                    <img
                        src="/assets/images/coaches/stars.png"
                        alt="review"
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default CoachUserCard;
