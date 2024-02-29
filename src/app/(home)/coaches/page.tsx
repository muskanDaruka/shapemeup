"use client"
import Footer from "@/components/Footer";
import MobileAppUpdated from "@/components/MobileAppUpdated";
import { useAllCoach } from "@/hooks/coach.hooks";
import CoachUserCard from "@/components/CoachUserCard";
import Link from "next/link";
import Image from 'next/image';
import { ICoach } from "@/types/coach.type";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";

// const coachesImage = [
//   {
//     imageSrc: "/assets/images/coaches/coach_header.png",
//     name: "FirstName LastName",
//     content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",

//   },
//   {
//     imageSrc: "/assets/images/coach_list/coach_07.png",
//     name: "FirstName LastName",
//     content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
//   },
//   {
//     imageSrc: "/assets/images/coach_list/coach_08.png",
//     name: "FirstName LastName",
//     content: "Lorem ipsum dolor sit amet, consectetur iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
//   },
// ];
const Coaches = () => {

  const { data: coachData, isLoading, isError } = useAllCoach();
  const coachs = coachData?.data?.data || [];
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
  // if (coachs.length === 0) {
  //   return null;
  // }
  return (
    <div>
      <section className="relative">
        <div className="relative">
          <Image
            src="/assets/images/coaches/coach_main_banner.png"
            width={1440}
            height={528}
            alt="coaches_coach_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10 mt-5">
            <h2 className="text-white text-3xl font-bold text-center">
              On Demand Digital Personal Coaches
            </h2>
            <h3 className="text-white text-2xl font-normal w-583 h-168 m-8 text-center">
              <center>
                &quot;Tone up, firm up, and sculpt your body into the shape you&apos;ve always wanted with the help of a workout coach! These personal coaches will help motivate you to reach your fitness goals, whether you&apos;re looking to lose weight, build muscle, or just get in better shape.&quot;
              </center>
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] w-full px-5 py-10 space-y-5">
        <h3 className="text-black text-2xl md:text-4xl font-bold mb-8 text-center">Our Coaches</h3>
        <Image src="/assets/images/icons/previous.png" width={37} height={37} alt="previous" onClick={handlePrevClick} className="cursor-pointer absolute left-0 bottom-14 hidden sm:block " />
        <div className="sm:ml-32 items-center justify-center ">
          <Carousel showArrows={false} infiniteLoop={true} showThumbs={false} showStatus={false} centerMode={true}
            centerSlidePercentage={centerSlidePercentage} selectedItem={currentSlide} onChange={(index) => setCurrentSlide(index)}>
            {coachs.map((coach: ICoach, index: number) => (
              <div key={index} className={`mb-4 flex py-5 ${index % 2 === 0 ? 'w-full md:w-1/2' : 'w-full md:w-1/2 md:ml-4 sm:ml-2'}`}>
                <Link href={`/coaches/${coach._id}`}>
                  <CoachUserCard key={coach.id} coach={coach} />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
        <Image src="/assets/images/icons/next.png" width={37} height={37} alt="next" onClick={handleNextClick} className="cursor-pointer absolute right-0 bottom-12 hidden sm:block" />
      </section >
      <section className="w-full px-5 py-10 space-y-5 ">
        <div>
          <h3 className="text-black text-2xl  md:text-4xl font-bold mb-8 text-center">Your very own personal coaches</h3>
          <div className="flex flex-col md:flex-row md:items-center justify-center">
            <div className="md:ml-8 mt-8">
              <div className="md:pt-1 w-full md:w-96 h-80 bg-[#FBEFB0] text-black mt-10 rounded-lg">
                <center>
                  <Image
                    src="/assets/images/coaches/fitness.png"
                    alt="coaches_fitness"
                    width={36}
                    height={36}
                    className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                  />
                </center>
                <h2 className="mt-10 text-center"><center>
                  Fitness + diet plan and questions answered</center>
                </h2>
                <p className="mt-6 text-center"><center>
                  We answer all of your fitness and nutrition questions, so you can focus on getting in shape. Logging your food intake and workouts is easy with our user-friendly app, and our team of experts are always here to help. So what are you waiting for.</center>
                </p>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-[#FBEFB0] border-r-[50px] border-r-transparent"></div>
              </div>
            </div>

            <div className="md:m-10 w-full md:w-96 h-80 border-slate-250 border-2 rounded-lg">
              <center>
                <Image
                  src="/assets/images/coaches/personalized.png"
                  alt="coaches_personalized"
                  width={36}
                  height={36}
                  className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                />
              </center>
              <h2 className="mt-5 text-center"><center>
                Personalized coaching + recommendations</center>
              </h2>
              <p className="mt-5 text-center"><center>
                We offer personalized coaching and recommendations to help you reach your fitness goals. Whether you&apos;re looking to lose weight, gain muscle, or just get healthy, we can help.</center>
              </p>
            </div >
            <div className="w-full md:w-96 h-80 border-slate-250 border-2 rounded-lg">
              <center>
                <Image
                  src="/assets/images/coaches/fitness.png"
                  alt="coaches_fitness"
                  width={36}
                  height={36}
                  className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                />
              </center>
              <h2 className="mt-5 text-center"><center>
                Get help from your coaches</center>
              </h2>
              <p className="mt-5 text-center"><center>
                These personal trainers will help motivate you to reach your fitness goals, whether you&apos;re looking to lose weight, build muscle, or just get in better shape.</center>
              </p>
            </div>
          </div>
        </div>
      </section>
      <MobileAppUpdated />
      <Footer />
    </div >
  );
};

export default Coaches;
