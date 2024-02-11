/* eslint-disable @next/next/no-img-element */
"use client"
import HorizontalList from "@/components/HorizontalList";
import Footer from "@/components/Footer";
import React, { FC } from "react";
import Link from "next/link";
import ClassUserCard from "@/components/ClassUserCard";
import { IClass } from "@/types/classes.type";
import { useAllClasses } from "@/hooks/classes.hooks";
interface ClassViewProps {
  params: {
    id: string;
  };
}
const list = [
  "Weight loss",
  "Walk fitness",
  "Body toning",
  "Strength training",
  " Calorie Crush",
];

const ClassView: FC<ClassViewProps> = ({ params }) => {

  const { data: classesData, isLoading, isError } = useAllClasses();
  const classess = classesData?.data?.data || [];
  const pageClassesData = classess.filter(
    (element: { _id: string }) => element._id === params.id
  );
  console.log("pageClassesData", pageClassesData)
  console.log("classess", classess)
  // if (classess.length === 0) {
  //   return null;
  // }

  return (
    <div>
      <section className="relative">

        <div className="relative flex flex-col lg:flex-row bg-gradient-to-r from-[#f0f5ff] via-[#f0f5ff] to-[#c2d4f7]">
          <Link href={`/classes`}>
            <div className="flex lg:flex-row">
              <h2 className="font-bold text-[#f2994a] mt-5  ml-[20px] lg:text-left">&lt;</h2>
              <h2 className="font-bold text-[#f2994a] mt-5 ml-2 lg:text-left">Back</h2>
            </div>
          </Link>
          <div className="mx-5 my-5 font-bold lg:block order-1 lg:order-2">
            <div className="flex">
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
                {pageClassesData[0].releaseDate}
              </h2>
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8 lg:ml-0">
                {pageClassesData[0].name}
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:w-2/3 xl:w-1/2 p-4 space-y-4 lg:space-y-0 lg:space-x-4">
              <div className=" p-4 flex-1">
                <h5 className="text-black font-normal text-xl lg:text-2xl mt-0 mb-2">
                  Type: {pageClassesData[0].type}
                </h5>
              </div>
              <div className="p-4 flex-1">
                <h5 className="text-black font-normal text-xl lg:text-2xl mt-0 mb-2">
                  Number of Days: {pageClassesData[0].days}
                </h5>
              </div>
              <div className="p-4 flex-1">
                <h5 className="text-black font-normal text-xl lg:text-2xl mt-0 mb-2">
                  Duration: {pageClassesData[0].duration}
                </h5>
              </div>
            </div>
            <p className="text-2xl font-normal mx-10 my-5">
              Looking for a way to get in shape? With this course you can
              achieve real results faster than you imagined. Mark this event in
              your calender for an early access.
            </p>

            <button className="bg-[#f2994a] text-white h-10 px-20 rounded-md mx-10 ">
              Enroll
            </button>
          </div>
          <div className="lg:block order-1 lg:order-2">
            <img
              src="/assets/images/classes/class_banner.png"
              alt="class"
              className="relative mx-300 w-full object-cover h-full min-h-[490px]"
            />
          </div>
        </div>
      </section>
      <section className=" md:text-xl ]]m-8 md:m-24">
        <div>
          <center>
            <img
              src={pageClassesData[0].photoUrl}
              alt="image"
              className="relative w-[793px] object-cover h-[343px]"
            />
          </center>
          <h3 className="font-bold text-xl m-8">About this course:</h3>
          <p className="text-xl m-8">{pageClassesData[0].about}</p>
          <h3 className="font-bold text-xl m-8">Benefits:</h3>
          <p className="text-xl m-8">{pageClassesData[0].benefits}</p>
          <p className="m-8 font-bold">
            For more zoom click:
            <span className="block md:inline text-[#f2994a]">
              https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/14/bird-dog/
            </span>
          </p>
        </div>
      </section>
      <section className="relative ">
        <h1 className="font-bold text-2xl text-center bg-[#f5f5f5]">You might also be interested in</h1>
        <div className="bg-[#f5f5f5] py-10 px-5 flex flex-col gap-5 items-center justify-center sm:flex-row">
          {classess.slice(0, 3).map((classes: IClass, index: number) => (
            <div key={index} className="mb-5">
              <Link href={`/classes/${classes._id}`}>
                <ClassUserCard classes={classes} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClassView;
