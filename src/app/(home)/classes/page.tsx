import HorizontalList from "@/components/HorizontalList";
import Footer from "@/components/Footer";
import React, { useState } from "react";

const list = ["Weight loss", "Walk fitness", "Body toning", "Strength training", " Calorie Crush"]
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
const Classes = () => {
  return (
    <div>
      <section className="relative">
        <div className="relative flex bg-gradient-to-r from-[#f0f5ff] via-[#f0f5ff] to-[#c2d4f7]">
          <div className="mx-5 my-5 font-bold">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold m-2 sm:m-4 lg:m-8">
              April 2022 Weight Loss class
            </h2>
            {/* <div className="flex w-full lg:w-1/3 p-4 space-x-20">
              <h5 className="text-black font-normal text-2xl mt-0 mx-5 gap-10">Type:Weightloss</h5>
              <h5 className="text-black font-normal text-2xl mt-0 mx-5 gap-10">Number of Days:10 days</h5>
              <h5 className="text-black font-normal text-2xl mt-0 mx-5 gap-10">Duration:30 minutes/day</h5>
            </div> */}
            <div className="flex flex-col lg:flex-row w-full lg:w-2/3 xl:w-1/2 p-4 space-y-4 lg:space-y-0 lg:space-x-4">
              <div className=" p-4 flex-1">
                <h5 className="text-black font-normal text-xl lg:text-2xl mt-0 mb-2">Type: Weightloss</h5>
              </div>
              <div className="p-4 flex-1">
                <h5 className="text-black font-normal text-xl lg:text-2xl mt-0 mb-2">Number of Days: 10 days</h5>
              </div>
              <div className="p-4 flex-1">
                <h5 className="text-black font-normal text-xl lg:text-2xl mt-0 mb-2">Duration: 30 minutes/day</h5>
              </div>
            </div>
            <p className="text-2xl font-normal mx-10 my-5">
              Looking for a way to get in shape? With this course you can
              achieve real results faster than you imagined. Mark this event
              in your calender for an early access.
            </p>

            <button className="bg-[#f2994a] text-white h-10 px-20 rounded-md mx-10 ">
              Enroll
            </button>
          </div>
          <div>
            <img
              src="/assets/images/classes/class_banner.png"
              alt="class"
              className="relative mx-300 w-full object-cover h-full min-h-[490px]"
            />
          </div>
        </div>
      </section>
      <section className="text-4xl m-24">
        <h2 className="font-bold"><center>Classes for you</center></h2><br />
        <HorizontalList data={list} />
        <div className="flex relative">
          {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold float-right absolute left-0">⟵</span> */}
          <div className="ml-[140px] w-[1100px] h-[202px] relative">
            <div className="flex">
              {classImages.map((items, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[394px] h-[400px] m-[50px] ml-5 relative"
                >
                  <img src={items.imageSrc} alt="classes" className="w-full object-cover-fit h-full flex-shrink rounded-lg" />
                  <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white"><center>
                    <span className="text-white text-[15px]  font-normal">{items.date}</span>
                    <hr />
                    <p className="text-white text-[20px] font-bold">{items.description}</p>
                  </center>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold float-left absolute right-0">⟶</span> */}
        </div>
        <div className="flex relative mt-[200px]">
          {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold float-right absolute left-0">⟵</span> */}
          <div className="ml-[140px] w-[1100px] h-[202px] relative">
            <div className="flex">
              {classImages.map((items, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[394px] h-[400px] m-[50px] ml-5 relative"
                >
                  <img src={items.imageSrc} alt="classes" className="w-full object-cover-fit h-full flex-shrink rounded-lg" />
                  <div className="absolute top-20 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-5 text-white"><center>
                    <span className="text-white text-[15px]  font-normal">{items.date}</span>
                    <hr />
                    <p className="text-white text-[20px] font-bold">{items.description}</p>
                  </center>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <span className="text-[#FBEFB0] bg-[#f2994a] w-10 h-8 mt-64 rounded-full text-2xl font-bold float-left absolute right-0">⟶</span> */}
        </div>
      </section>
      <section className="mt-[300px]" >
        <div className="bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 h-full w-full">
          <h1 className="text-black text-4xl font-bold m-8 "><center>Use our app to access courses anywhere.</center></h1>
          <p className="text-black text-2xl  m-8"><center>
            You can create a customized diet plan that fits your
            needs and lifestyle. We'll work with you to develop a
            plan that is tailored specifically for you, and we'll
            provide all the support you need to make sure you reach
            your goals. So don't wait any longer! Get started today
            with us.</center>
          </p>
          <div className="flex items-center justify-center sm:justify-center gap-5 mx-40">
            <img
              src={"/assets/images/home/googleplay.png"}
              alt="Image"
              className="object-contain max-sm:w-[150px]"
            />
            <img
              src={"/assets/images/home/appstore.png"}
              alt="Image"
              className="object-contain max-sm:w-[168px]"
            />
          </div>
          <img
            src={"/assets/images/classes/classes_app.png"}
            alt="Image"
            className="relative w-screen"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Classes;
