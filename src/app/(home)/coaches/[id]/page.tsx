/* eslint-disable @next/next/no-img-element */
"use client"
import React, { FC } from "react";
import Footer from "@/components/Footer";
import { useAllCoach } from "@/hooks/coach.hooks";
import { ICoach } from "@/types/coach.type";
import CoachUserCard from "@/components/CoachUserCard";
import Link from "next/link";
import HeroCard from "@/components/HeroCard";
import Image from "next/image";
import leftArrow from "./../../../../images/icons/leftArrow.svg";

interface CoachViewProps {
    params: {
        id: string;
    };
}
const classImages = [
    {
        imageSrc: "/assets/images/classes/full_body_workout.png",
        date: "21 October 2023",
        description: "October 2023 Weight Loss Course",
    },
    {
        imageSrc: "/assets/images/exercise/situp.png",
        date: "21 November 2023",
        description: "November 2023 Weight Loss Course",
    },
    {
        imageSrc: "/assets/images/classes/abs_workout.png",
        date: "21 December 2023",
        description: "December 2023 Weight Loss Course",
    },
];
const CoachView: FC<CoachViewProps> = ({ params }) => {

    const { data: coachData, isLoading, isError } = useAllCoach();
    const coachs = coachData?.data?.data || [];

    const pageCoachData = coachs.filter(
        (element: { _id: string }) => element._id === params.id
    );
    console.log("pageCoachData", pageCoachData)
    console.log("coachs", coachs)
    if (coachs.length === 0) {
        return null;
    }

    return (
        <div>
            <div className="w-20">
                <Link href={"/admin/exercise"}>
                    <Image src={leftArrow} alt="Back" width={24} height={24} />
                </Link>
            </div>
            <section className="relative">
                <div className="relative flex flex-col lg:flex-row bg-white">
                    <div className="lg:flex mx-5 my-5 font-bold">
                        <div className="lg:w-1/2">
                            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
                                {pageCoachData[0].name}
                            </h2>
                            <h2 className="font-normal md:ml-8 my-5">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                {pageCoachData[0].summary}
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </h2>
                        </div>
                        <div className="lg:w-1/2 ">
                            <img
                                src={pageCoachData[0].photoUrl}
                                alt="image"
                                className="relative mx-300 w-full object-cover h-[400px] min-h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </section >
            <div className="flex bg-[#F2994A] text-white w-full">
                <div className="p-4 font-bold">Clients : {pageCoachData[0].clients}</div>
                <div className="p-4 font-bold lg:ml-[660px]">Years of Experience: {pageCoachData[0].yearsOfExp}  </div>
                <div className="p-4 font-bold lg:ml-[660px]">Certifications: {pageCoachData[0].certifications}  </div>
            </div>
            <section className="m-10">
                <h2 className="font-bold text-xl">
                    <center>Classes by Firstname Lastname</center>
                </h2>
                <div className="flex flex-col items-center md:flex-row relative">
                    <div className="md:ml-auto md:mr-auto w-full md:w-[1100px] relative">
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            {classImages.map((items, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-[394px] h-[400px] md:m-0 mb-4 relative justify-center"
                                >
                                    <img
                                        src={items.imageSrc}
                                        alt="classes"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white">
                                        <center>
                                            <span className="text-white text-[15px] font-normal">
                                                {items.date}
                                            </span>
                                            <hr className="md:hidden" />
                                            <p className="text-white text-[20px] font-bold">
                                                {items.description}
                                            </p>
                                        </center>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="relative">
                    <img
                        src="/assets/images/coaches/coach_banner.png"
                        alt="coach_banner"
                        className="relative w-screen object-cover h-auto min-h-[490px]"
                    />
                    <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
                        <h2 className="text-white text-4xl font-bold">
                            Our Coaches are more than just coaches
                        </h2>
                        <Link href={"/coaches"}>
                            <button className="bg-[#f2994a] text-white py-4 px-16 rounded-md text-lg">
                                See our Coaches
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="m-5">
                <h2 className="font-bold text-xl mb-5 text-center">
                    Reviews by customers
                </h2>
                <div className="flex flex-col md:flex-row gap-5 justify-center">
                    <div className="w-full md:w-[400px] h-[280px] border-slate-250 border-2 rounded-lg shadow-xl mb-5 md:mb-0">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-Image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <h3 className="text-xl font-bold m-2 p-5">Firstname Lastname</h3>
                        </div>
                        <p className="font-medium text-lg m-2">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quisLorem isump
                        </p>
                    </div>
                    <div className="w-full md:w-[400px] h-[280px] border-slate-250 border-2 rounded-lg shadow-xl">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-Image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <h3 className="text-xl font-bold m-2 p-5">Firstname Lastname</h3>
                        </div>
                        <p className="font-medium text-lg m-2">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quisLorem isump
                        </p>
                    </div>
                    <div className="w-full md:w-[400px] h-[280px] border-slate-250 border-2 rounded-lg shadow-xl">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <h3 className="text-xl font-bold m-2 p-5">Firstname Lastname</h3>
                        </div>
                        <p className="font-medium text-lg m-2">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quisLorem isump
                        </p>
                    </div>
                    <div className="w-full md:w-[400px] h-[280px] border-slate-250 border-2 rounded-lg shadow-xl">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <h3 className="text-xl font-bold m-2 p-5">Firstname Lastname</h3>
                        </div>
                        <p className="font-medium text-lg m-2">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quisLorem isump
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    );
};

export default CoachView;