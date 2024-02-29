/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import { FC } from "react";
import { IExercise } from "@/types/exercise.type";

interface ExerciseUserCardProps {
    exercise: {
        id?: string;
        name: string;
        imageUrl: string;
        description: string;
    }
}

const ExerciseUserCard: FC<ExerciseUserCardProps> = ({ exercise }) => {
    return (
        <section>

            <div className="flex flex-col items-center justify-evenly lg:gap-10 sm:flex-row">
                <div
                    className="rounded-md overflow-hidden relative w-[370px]"
                >
                    <img
                        src={exercise?.imageUrl}
                        alt="image"
                        className="object-cover rounded-md h-[393px]"
                    />
                    <div className="absolute z-[1] gap-y-5 flex flex-col items-center bottom-10 w-full text-center text-white">
                        <h4 className="text-xl font-bold">{exercise?.name}</h4>
                        <h5 className="font-extralight text-base w-full flex justify-center">
                            <p className="w-9/12 text-center text-[#fffc] border-b-[0.5px] border-[#fffc] border-opacity-50 pb-6">
                                {exercise?.description}
                            </p>
                        </h5>
                        <Link href={`/exercise/${exercise?.id}`}>
                            <button className="font-light text-base">
                                Click here to see more &gt;&gt;
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* {<div className="w-full flex justify-center">
                <button className="bg-[#f2994a] text-black py-4 px-16 rounded-md text-lg">
                    View more
                </button>
            </div>} */}
        </section>
    );
};

export default ExerciseUserCard;
