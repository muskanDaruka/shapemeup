/* eslint-disable @next/next/no-img-element */
"use client"
import React, { FC } from "react";
import Footer from "@/components/Footer";
import { useAllCoach } from "@/hooks/coach.hooks";
import { useAllClasses } from "@/hooks/classes.hooks";
import { ICoach } from "@/types/coach.type";
import { IClass } from "@/types/classes.type";
import CoachUserCard from "@/components/CoachUserCard";
import ClassUserCard from "@/components/ClassUserCard";
import Link from "next/link";
import HeroCard from "@/components/HeroCard";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

interface CoachViewProps {
    params: {
        id: string;
    };
}

const CoachView: FC<CoachViewProps> = ({ params }) => {

    const { data: coachData, isLoading, isError } = useAllCoach();
    const coachs = coachData?.data?.data || [];
    const { data: classesData } = useAllClasses();
    const classess = classesData?.data?.data || [];

    const pageCoachData = coachs.filter(
        (element: { _id: string }) => element._id === params.id
    );
    console.log("pageCoachData", pageCoachData)
    console.log("coachs", coachs)
    // if (coachs.length === 0) {
    //     return null;
    // }
    const [currentSlide, setCurrentSlide] = useState(0);
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);
    const handlePrevClick = () => {
        const newSlide = currentSlide > 0 ? currentSlide - 1 : coachs.length - 1;
        setCurrentSlide(newSlide);
    };

    const handleNextClick = () => {
        const newSlide = currentSlide < coachs.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(newSlide);
    };

    useEffect(() => {
        const handleResize = () => {
            setCenterSlidePercentage(window.innerWidth > 425 ? 33.3333 : 100);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    if (isLoading) return <div>Loading...</div>;
    if (isError) {
        return <div>Error loading exercises. Please try again later.</div>;
    }
    return (
        <div>
            <div className="w-20">
                <Link href={"/coaches"}>
                    <div className="flex lg:flex-row">
                        <h2 className="font-bold text-[#f2994a]  mt-5  ml-[20px] lg:text-left">
                            &lt;
                        </h2>
                        <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left">
                            Back
                        </h2>
                    </div>
                </Link>
            </div>
            <section className="relative">
                <div className="relative flex flex-col lg:flex-row bg-white">
                    <div className="lg:flex mx-5 my-5 font-bold">
                        <div className="lg:w-1/2">
                            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
                                {pageCoachData[0]?.name}
                            </h2>
                            <h2 className="font-normal md:ml-8 my-5">

                                {pageCoachData[0]?.bio}

                            </h2>
                        </div>
                        <div className="lg:w-1/2 ">
                            <img
                                src={pageCoachData[0]?.photoUrl}
                                alt="image"
                                className="relative mx-300 w-full object-cover h-[400px] min-h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </section >
            <div className="flex justify-between bg-[#F2994A] text-white w-full">
                <div className="p-4 font-bold">Clients : {pageCoachData[0]?.clients}</div>
                <div className="p-4 font-bold">Years of Experience: {pageCoachData[0]?.yearsOfExp}  </div>
                <div className="p-4 font-bold">Certifications: {pageCoachData[0]?.certifications}  </div>
            </div>
            <section className="m-10 md:m-24">
                <h2 className="font-bold text-xl">
                    <center>Classes by {pageCoachData[0]?.name}</center>
                </h2>
                <div>
                    <Carousel
                        showArrows={false}
                        infiniteLoop={false}
                        autoPlay={true}
                        showThumbs={false}
                        showStatus={false}
                        centerMode={false}
                        interval={3000}
                        centerSlidePercentage={33.33}
                        // centerSlidePercentage={centerSlidePercentage}
                        showIndicators={pageCoachData[0]?.name}
                    // selectedItem={currentSlide}
                    // onChange={(index) => setCurrentSlide(index)}
                    >
                        {classess && classess.length > 0 && (
                            [...Array(Math.ceil(classess.length / 3))].map((_, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    {classess.slice(index * 3, (index + 1) * 3).map((classes: IClass) => {
                                        if (classes.assignedCoach === pageCoachData[0]?.name) {
                                            return (
                                                <div key={classes._id} className="py-10 px-5 flex flex-col items-center justify-center w-full sm:flex-row">
                                                    <Link href={`/classes/${classes._id}`}>
                                                        <ClassUserCard classes={classes} />
                                                    </Link>
                                                </div>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            ))
                        )}
                    </Carousel>
                </div>
                {/* {coachs.length > 0 && (
                    <Image
                        src="/assets/images/icons/previous.png"
                        width={37}
                        height={37}
                        alt="previous"
                        onClick={handlePrevClick}
                        className="cursor-pointer absolute left-0 transform -translate-y-1/2 hidden sm:block sm:bottom-0 sm:left-2%"
                    />
                )}
                <div className="sm:hidden">
                    <Carousel showArrows={false} infiniteLoop={false} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true}
                        centerSlidePercentage={centerSlidePercentage} showIndicators={pageCoachData[0]?.name} selectedItem={currentSlide} onChange={(index) => setCurrentSlide(index)}>
                        {classess.map((classes: IClass, index: number) => {
                            if (classes.assignedCoach === pageCoachData[0]?.name) {
                                return (
                                    <div key={classes._id} className="py-10 px-5 flex flex-col items-center justify-center w-full sm:flex-row">
                                        <Link href={`/classes/${classes._id}`}>
                                            <ClassUserCard classes={classes} />
                                        </Link>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </Carousel>
                </div>
                {coachs.length > 0 && (
                    <Image
                        src="/assets/images/icons/next.png"
                        width={37}
                        height={37}
                        alt="next"
                        onClick={handleNextClick}
                        className="cursor-pointer absolute right-0 transform -translate-y-1/2 hidden sm:block sm:bottom-0 sm:right-2%"
                    />
                )} */}
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
                <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                    <div className="w-full md:w-[400px] h-[300px] border-slate-250 border-2 rounded-lg shadow-xl mb-5 md:mb-0">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-Image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <div>
                                <h3 className="text-xl font-bold ml-7 mt-7">Firstname Lastname</h3>
                                <p className="text-sm font-normal ml-7 ">Location</p>
                                <img
                                    src="/assets/images/coaches/star.png"
                                    alt="review"
                                    className="ml-7"
                                />
                            </div>
                        </div>
                        <p className="font-medium text-lg p-2">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quisLorem isump
                        </p>
                    </div>
                    <div className="w-full md:w-[400px] h-[300px] border-slate-250 border-2 rounded-lg shadow-xl">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-Image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <div>
                                <h3 className="text-xl font-bold ml-7 mt-7">Firstname Lastname</h3>
                                <p className="text-sm font-normal ml-7 ">Location</p>
                                <img
                                    src="/assets/images/coaches/star.png"
                                    alt="review"
                                    className="ml-7"
                                />
                            </div>
                        </div>
                        <p className="font-medium text-lg p-2">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quisLorem isump
                        </p>
                    </div>
                    <div className="w-full md:w-[400px] h-[300px] border-slate-250 border-2 rounded-lg shadow-xl">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <div>
                                <h3 className="text-xl font-bold ml-7 mt-7">Firstname Lastname</h3>
                                <p className="text-sm font-normal ml-7 ">Location</p>
                                <img
                                    src="/assets/images/coaches/star.png"
                                    alt="review"
                                    className="ml-7"
                                />
                            </div>
                        </div>
                        <p className="font-medium text-lg p-2">
                            Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quisLorem isump
                        </p>
                    </div>
                    <div className="w-full md:w-[400px] h-[300px] border-slate-250 border-2 rounded-lg shadow-xl">
                        <div className="flex">
                            <img
                                src="/assets/images/coaches/customer_review.png"
                                alt="profile-image"
                                className="h-20 md:w-20 rounded-full m-5"
                            />
                            <div>
                                <h3 className="text-xl font-bold ml-7 mt-7">Firstname Lastname</h3>
                                <p className="text-sm font-normal ml-7 ">Location</p>
                                <img
                                    src="/assets/images/coaches/star.png"
                                    alt="review"
                                    className="ml-7"
                                />
                            </div>
                        </div>
                        <p className="font-medium text-lg p-2">
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