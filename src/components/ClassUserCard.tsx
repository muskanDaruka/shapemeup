/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { useAllClasses } from "@/hooks/classes.hooks";
import Link from "next/link";
interface ClassUserCardsProps {
    classes: {
        _id?: string;
        name: string;
        photoUrl: string;
        description: string;
        releaseDate: Date;
    }[];
}
const ClassUserCard: FC<ClassUserCardsProps> = ({ classes }) => {
    // const { data: classesData, isLoading, isError } = useAllclassess();
    // console.log("data", classesData?.data.data)
    return (
        <section>
            <div className="flex flex-col items-center justify-evenly lg:gap-10 sm:flex-row">
                {classes.map((classItem) => (
                    <div className="rounded-md overflow-hidden relative" key={classItem._id}>
                        <img
                            src={classItem.photoUrl}
                            alt="classes"
                            className="w-full h-64 md:h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white">
                            <center>
                                <span className="text-white text-sm md:text-base font-normal">
                                    {classItem.releaseDate.toLocaleDateString()}
                                </span>
                                <hr className="my-2" />
                                <p className="text-white text-base md:text-xl font-bold">
                                    {classItem.description}
                                </p>
                            </center>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default ClassUserCard;
