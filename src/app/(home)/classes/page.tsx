/* eslint-disable @next/next/no-img-element */
"use client"
import HorizontalList from "@/components/HorizontalList";
import Footer from "@/components/Footer";
import React from "react";
import ClassUserCard from "@/components/ClassUserCard";
import { IClass } from "@/types/classes.type";
import { useAllClasses } from "@/hooks/classes.hooks";
import Link from "next/link";
import { AuthContext } from "@/context/Auth";
import { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const list = [
  "Weight loss",
  "Walk fitness",
  "Body toning",
  "Strength training",
  " Calorie Crush",
];
// const classImages = [
//   {
//     imageSrc: "/assets/images/classes/full_body_workout.png",
//     date: "21 October 2023",
//     description: "October 2023 Weight Loss Course",
//   },
//   {
//     imageSrc: "/assets/images/exercise/situp.png",
//     date: "21 November 2023",
//     description: "November 2023 Weight Loss Course",
//   },
//   {
//     imageSrc: "/assets/images/classes/abs_workout.png",
//     date: "21 December 2023",
//     description: "December 2023 Weight Loss Course",
//   },
// ];
const Classes = () => {
  const { data: classesData, isLoading, isError } = useAllClasses();
  const classess = classesData?.data?.data || [];
  const { setIsForgotPasswordOpen, setIsOpen, setIsRegistrationOpen, setIsEnroll } = useContext(AuthContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);
  const handlePrevClick = () => {
    const newSlide = currentSlide > 0 ? currentSlide - 1 : classess.length - 1;
    setCurrentSlide(newSlide);
  };

  const handleNextClick = () => {
    const newSlide = currentSlide < classess.length - 1 ? currentSlide + 1 : 0;
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
  const enroll = () => {
    setIsEnroll(true),
      setIsRegistrationOpen(false),
      setIsOpen(false),
      setIsForgotPasswordOpen(false)
  };
  // if (classess.length === 0) {
  //   return null;
  // }
  return (
    <div>
      <section className="relative">
        <div className="relative flex flex-col lg:flex-row bg-gradient-to-r from-[#f0f5ff] via-[#f0f5ff] to-[#c2d4f7]">
          <div className="mx-5 my-5 font-bold lg:block order-1 lg:order-2 sm:pt-26 pt-10">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
              March 2024 Weight Loss Class
            </h2>
            <p className="text-2xl font-normal mx-10 my-5 w-10/12 sm:w-6/12">
              Looking for a way to get in shape? With this course you can
              achieve real results faster than you imagined. Mark this event in
              your calender for an early access.
            </p>
            <button onClick={enroll} className="bg-[#f2994a] text-white h-10 px-20 rounded-md mx-10 ">
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
      <section className="text-2xl md:text-4xl m-8 md:m-24">
        <h2 className="font-bold text-center">
          <center>Classes for you</center>
        </h2>
        <br />
        <HorizontalList data={list} setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
        <div className="hidden sm:block">
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
            {classess && classess.length > 0 && (
              [...Array(Math.ceil(classess.length / 3))].map((_, index) => (
                <div key={index} className="flex justify-center items-center">
                  {classess.slice(index * 3, (index + 1) * 3).map((classes: IClass) => (
                    <div key={classes._id} className="px-5 py-10">
                      <Link href={`/classes/${classes._id}`}>
                        <ClassUserCard classes={classes} />
                      </Link>
                    </div>
                  ))}
                </div>
              ))
            )}
          </Carousel>
        </div>
        {classess.length > 0 && (
          <img
            src="/assets/images/icons/previous.png"
            alt="previous"
            onClick={handlePrevClick}
            className="cursor-pointer absolute left-0 hidden sm:block transform -translate-y-1/2 sm:bottom-0 sm:left-2%"
          />
        )}
        <div className="sm:hidden">
          <Carousel
            showArrows={false}
            infiniteLoop={false}
            showThumbs={false}
            showStatus={false}
            centerMode={true}
            autoPlay={true}
            centerSlidePercentage={centerSlidePercentage}
            selectedItem={currentSlide}
            onChange={(index) => setCurrentSlide(index)}
          >
            {classess.map((classes: IClass) => (
              <div key={classes._id} className="py-10 px-5 flex flex-col items-center justify-center w-full sm:flex-row">
                <Link href={`/classes/${classes._id}`}>
                  <ClassUserCard classes={classes} />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
        {classess.length > 0 && ( // Conditionally render "next" arrow
          <img
            src="/assets/images/icons/next.png"
            alt="next"
            onClick={handleNextClick}
            className="cursor-pointer absolute right-0 hidden sm:block transform -translate-y-1/2 sm:bottom-0 sm:right-2%"
          />
        )
        }
      </section >
      <section className="md:mt-2">
        <div className="bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 h-full w-full">
          <div className="flex justify-center items-center">
            <h1 className="text-black text-4xl font-bold m-8 ">
              Use our app to access courses anywhere.
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-black text-2xl w-10/12 sm:w-6/12 text-center">
              You can create a customized diet plan that fits your needs and
              lifestyle. We&apos;ll work with you to develop a plan that is
              tailored specifically for you, and we&apos;ll provide all the
              support you need to make sure you reach your goals. So don&apos;t
              wait any longer! Get started today with us.
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-center gap-5 mx-40 m-5">
            <Image
              src={"/assets/images/home/googleplay.png"}
              alt="Image"
              className="object-contain max-sm:w-[150px]"
              width={190}
              height={63}
            />
            <Image
              src={"/assets/images/home/appstore.png"}
              alt="Image"
              className="object-contain max-sm:w-[168px]"
              width={211}
              height={63}
            />
          </div>
          <Image
            src={"/assets/images/classes/classes_app.png"}
            alt="Image"
            className="relative w-screen"
            width={1695}
            height={900}
          />
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default Classes;
