/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Link from "next/link";
interface ClassUserCardsProps {
    classes: {
        _id?: string;
        name: string;
        photoUrl: string;
        description: string;
        releaseDate?: Date;
    };
}

const ClassUserCard: FC<ClassUserCardsProps> = ({ classes }) => {
    // const { data: classesData, isLoading, isError } = useAllclassess();
    // console.log("data", classesData?.data.data)
    console.log("Release Date:", classes.releaseDate);

    return (
        <section>
            {/* <div className="flex flex-col items-center justify-evenly lg:gap-10 sm:flex-row">
                <div className="rounded-md overflow-hidden relative p-5" key={classes._id}>
                    <img
                        src={classes.photoUrl}
                        alt="classes"
                        className="w-[370px] h-[393px] md:h-[393px] md:w-[370px] object-cover rounded-lg"
                    />
                    <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white">
                        <center>
                            {classes.releaseDate instanceof Date ? (
                                <span className="text-white text-sm md:text-base font-normal">
                                    {classes.releaseDate.toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                            ) : null}
                            <hr className="my-2" />
                            <p className="text-white text-base md:text-sm font-bold">
                                {classes.description}
                            </p>
                        </center>
                    </div>
                </div>
            </div> */}
            {/* <div className="flex flex-col items-center justify-evenly lg:gap-10 sm:flex-row"> */}
            <div className="relative rounded-md overflow-hidden sm:w-[370px]" key={classes._id}>
                <img
                    src={classes.photoUrl}
                    alt="classes"
                    className="object-cover rounded-md h-[393px]"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white bg-black bg-opacity-40">
                    <center>
                        {classes.releaseDate ? (
                            <span className="text-white text-sm md:text-base font-normal">
                                {new Date(classes.releaseDate).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </span>
                        ) : (
                            <span className="text-white text-sm md:text-base font-normal">
                                Release Date Not Available
                            </span>
                        )}
                        <hr className="my-2" />
                        <p className="text-white text-base md:text-xl font-bold">
                            {classes.name}
                        </p>
                    </center>
                </div>
            </div>
            {/* </div> */}

        </section>
    );
};

export default ClassUserCard;
