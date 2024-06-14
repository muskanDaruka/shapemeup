/* eslint-disable @next/next/no-img-element */
"use client"
import React, { FC, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useAllExercise } from "@/hooks/exercise.hooks";
import FAQ from "@/components/FAQ";
import ExerciseUserCard from "@/components/ExerciseUserCard";
import { IExercise } from "@/types/exercise.type";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ExerciseViewProps {
    params: {
        id: string;
    };
}

const ExerciseView: FC<ExerciseViewProps> = ({ params }) => {
    const { data: exerciseData, isLoading, isError } = useAllExercise();
    const exercises = exerciseData?.data?.data || [];
    const pageExerciseData = exercises.filter(
        (element: { _id: string }) => element._id === params.id
    );
    console.log("pageExerciseData", pageExerciseData)
    console.log("exercises", exercises)
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);

    useEffect(() => {
        const handleResize = () => {
            console.log("Resizing...");
            const newPercentage = window.innerWidth > 425 ? 33.3333 : 100;
            console.log("New centerSlidePercentage:", newPercentage);
            setCenterSlidePercentage(newPercentage);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // if (exercises.length === 0) {
    //     return null;
    // }
    const otherExercises = exercises.filter((exercise: IExercise) => exercise._id !== params.id);

    return (
        <div>
            <section className="relative">
                <Link href={`/exercises`}>
                    <div className="flex lg:flex-row">
                        <h2 className="font-bold text-[#f2994a] mt-5  ml-[20px] lg:text-left">&lt;</h2>
                        <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left">Back</h2>
                    </div>
                </Link>
                <div className="relative flex flex-col lg:flex-row bg-white">
                    <div className="lg:flex mx-5 my-5 font-bold">

                        <div className="mx-5 my-5 font-bold flex-1 flex-col">
                            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
                                {pageExerciseData[0].name}
                            </h2>
                            <h2 className="font-normal md:ml-8 my-5">

                                {pageExerciseData[0].description}

                            </h2>
                        </div>

                        <div className="lg:flex mx-5 my-5 font-bold flex-1 justify-end">
                            <img
                                src={pageExerciseData[0].imageUrl}
                                alt="image"
                                className="relative mx-300 w-full object-cover h-[400px] min-h-[300px]"
                            />
                        </div>

                    </div>
                </div>
            </section >
            <div className="flex items-center justify-between bg-white text-[#F2994A] md:bg-[#F2994A] md:text-white">
                <div className="p-4 font-bold">Category : {pageExerciseData[0].category}</div>
                <div className="p-4 font-bold ">Time: {pageExerciseData[0].time}  </div>
                <div className="p-4 font-bold ">Difficulty: {pageExerciseData[0].difficulty}  </div>
            </div>
            <section className="relative">
                <div className="flex flex-col md:flex-row " >
                    <div className="p-2 sm:w-1/2">
                        <video
                            controls
                            className=" h-[400px] sm:h-[500px]  sm:m-8 flex justify-center"
                            poster="thumbnail.png"
                        >
                            <source src={pageExerciseData[0]?.videoUrl} type="video/mp4" />
                        </video>
                    </div>
                    <div className="ml-1">
                        <h3 className="font-bold text-xl text-center m-8">Instructions</h3>
                        <div className="text-xl ml-8">
                            <p className="font-sans" dangerouslySetInnerHTML={{ __html: pageExerciseData[0].instructions.slice(0, pageExerciseData[0].instructions.length / 2) }} />
                        </div>
                    </div>

                </div>
                <div className="text-xl ml-8">
                    <p className="font-sans mb-8" dangerouslySetInnerHTML={{ __html: pageExerciseData[0].instructions.slice(pageExerciseData[0].instructions.length / 2) }} />
                    For more information click:
                    <span className="block md:inline text-[#f2994a]">
                        {pageExerciseData[0].externalLinks}
                    </span>
                </div>
            </section>
            <section className="relative">
                <h1 className="font-bold text-2xl text-center bg-[#f5f5f5] pt-2">You might also be interested in</h1>
                <div className="hidden sm:block bg-[#f5f5f5]">
                    <Carousel
                        showArrows={false}
                        infiniteLoop={false}
                        showThumbs={false}
                        showStatus={false}
                        centerMode={false}
                        showIndicators={true}
                        autoPlay={true}
                        interval={3000}
                    >
                        {otherExercises && otherExercises.length > 0 && (
                            [...Array(Math.ceil(otherExercises.length / 3))].map((_, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    {otherExercises.slice(index * 3, (index + 1) * 3).map((exercise: IExercise) => (
                                        <div key={exercise._id} className="px-5 py-10">
                                            <Link href={`/exercises/${exercise._id}`}>
                                                <ExerciseUserCard exercise={exercise} />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ))
                        )}
                    </Carousel>
                </div>
                <div className="sm:hidden">
                    <Carousel
                        showArrows={false}
                        infiniteLoop={false}
                        showThumbs={false}
                        showStatus={false}
                        centerMode={true}
                        showIndicators={true}
                        autoPlay={true}
                        centerSlidePercentage={centerSlidePercentage}
                    // onChange={(index) => setCurrentSlide(index)}
                    >
                        {otherExercises.map((exercise: IExercise) => (
                            <div key={exercise._id} className="py-10 px-5 flex flex-col items-center justify-center sm:flex-row">
                                <Link href={`/exercises/${exercise._id}`}>
                                    <ExerciseUserCard exercise={exercise} />
                                </Link>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
            <FAQ />
            <Footer />
        </div>
    );
};

export default ExerciseView;
