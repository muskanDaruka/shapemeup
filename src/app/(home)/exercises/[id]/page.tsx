/* eslint-disable @next/next/no-img-element */
"use client"
import React, { FC } from "react";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import { IcardImages, Images } from "@/types/image.type";
import Link from "next/link";
import { useAllExercise } from "@/hooks/exercise.hooks";
import leftArrow from "@/images/icons/leftArrow.svg"
import Image from "next/image";
import FAQ from "@/components/FAQ";
import ExerciseUserCard from "@/components/ExerciseUserCard";

interface ExerciseViewProps {
    params: {
        id: string;
    };
}

const ExerciseView: FC<ExerciseViewProps> = ({ params }) => {

    const { data: exerciseData, isLoading, isError } = useAllExercise();
    const exercises = exerciseData?.data?.data || [];
    const pageExerciseData = exercises.filter(function (element) {
        return element._id === params.id
    })
    console.log("pageExerciseData", pageExerciseData)
    console.log("exercises", exercises)
    if (exercises.length === 0) {
        return null;
    }

    return (
        <div>
            <section className="relative">
                <Link href={`/blogs`}>
                    <div className="flex lg:flex-row">
                        <h2 className="font-bold text-[#f2994a] mt-5  ml-[20px] lg:text-left">&lt;</h2>
                        <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left">Back</h2>
                    </div>
                </Link>
                <div className="relative flex flex-col lg:flex-row bg-white">
                    <div className="lg:flex mx-5 my-5 font-bold">
                        <div className="lg:w-1/2">
                            <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
                                {pageExerciseData[0].name}
                            </h2>
                            <h2 className="font-normal md:ml-8 my-5">
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                                {pageExerciseData[0].description}
                                Lorem ipsum dolor sit amet, consectetur iscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis
                            </h2>
                        </div>
                        <div className="lg:w-1/2 ">
                            <img
                                src={pageExerciseData[0].imageUrl}
                                alt="image"
                                className="relative mx-300 w-full object-cover h-[400px] min-h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </section >
            <div className="flex bg-[#F2994A] text-white w-full">
                <div className="p-4 font-bold">Category : {pageExerciseData[0].category}</div>
                <div className="p-4 font-bold lg:ml-[660px]">Time: {pageExerciseData[0].time}  </div>
                <div className="p-4 font-bold lg:ml-[660px]">Difficulty: {pageExerciseData[0].difficulty}  </div>
            </div>
            <section className="relative">
                <div className="flex flex-col md:flex-row" >
                    <video controls className="w-full md:w-1/3 h-[400px] md:h-[500px] sm:m-8">
                        <source src={pageExerciseData[0].videoUrl} type="video/mp4" />
                    </video>
                    <div className="md:w-1/2">
                        <h3 className="font-bold text-xl text-center m-8">Instructions</h3>
                        <p className="text-xl ml-8" >{pageExerciseData[0].instructions}</p>
                        <p className="text-xl ml-8" >{pageExerciseData[0].instructions}</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl m-8">{pageExerciseData[0].instructions}</p>
                    <p className="text-xl m-8">{pageExerciseData[0].instructions}</p>
                    <p className="m-8 font-bold">
                        For more information click:
                        <span className="block md:inline text-[#f2994a]">
                            https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/14/bird-dog/
                        </span>
                    </p>
                </div>
            </section>
            <section className="relative">
                <h1 className="font-bold text-2xl text-center bg-[#f5f5f5]">You might also be interested in</h1>
                <div className="bg-[#f5f5f5] py-10 px-5 flex flex-col gap-5 items-center justify-center sm:flex-row">
                    {exercises.slice(0, 3).map((exercise, index) => (
                        <div key={index}>
                            <Link href={`/exercises/${exercise._id}`}>
                                <ExerciseUserCard key={exercise.id} exercise={exercise} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <FAQ />
            <Footer />
        </div>
    );
};

export default ExerciseView;
