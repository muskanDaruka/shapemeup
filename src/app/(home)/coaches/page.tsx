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
    console.log("prev button clicked")

    const newSlide = currentSlide > 0 ? currentSlide - 1 : coachs.length - 1;
    setCurrentSlide(newSlide);

  };

  const handleNextClick = () => {
    console.log("next button clicked")
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
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full sm:gap-10 mt-5">
            <h2 className="text-white text-3xl font-bold text-center">
              On Demand Digital Personal Coaches
            </h2>
            <div className="flex justify-center items-center">
              <h3 className="text-white text-2xl font-normal m-8 text-center w-10/12 sm:w-6/12">
                &quot;Tone up, firm up, and sculpt your body into the shape you&apos;ve always wanted with the help of a workout coach! These personal coaches will help motivate you to reach your fitness goals, whether you&apos;re looking to lose weight, build muscle, or just get in better shape.&quot;
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f5f5] w-full py-10 space-y-5 relative">
        <h3 className="text-black text-2xl md:text-4xl font-bold mb-8 text-center">Our Coaches</h3>
        {coachs.length > 0 && (
          <Image
            src="/assets/images/icons/previous.png"
            width={37}
            height={37}
            alt="previous"
            onClick={handlePrevClick}
            className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 hidden sm:block"
          />
        )}
        <div className="hidden sm:block">
          <Carousel
            showArrows={false}
            infiniteLoop={false}
            showThumbs={false}
            showStatus={false}
            centerMode={false}
            autoPlay={true}
            centerSlidePercentage={centerSlidePercentage}
            selectedItem={currentSlide}
            onChange={(index) => setCurrentSlide(index)}
          >
            {coachs && coachs.length > 0 && (
              [...Array(Math.ceil(coachs.length / 3))].map((_, index) => (
                <div key={index} className=" flex flex-row justify-center items-center">
                  {coachs.slice(index * 3, (index + 1) * 3).map((coachs: ICoach, index: number) => (
                    <div key={index} className={`mb-4 py-5 px-10`}>
                      <Link href={`/coaches/${coachs._id}`}>
                        <CoachUserCard key={coachs._id} coach={coachs} />
                      </Link>
                    </div>
                  ))}
                </div>
              )))}
          </Carousel>
        </div>
        {coachs.length > 0 && (
          <Image
            src="/assets/images/icons/next.png"
            width={37}
            height={37}
            alt="next"
            onClick={handleNextClick}
            className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 hidden sm:block"
          />
        )}
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
            {coachs && coachs.map((coachs: ICoach) => (
              <div key={coachs._id} className="py-10 px-5 flex flex-col items-center justify-center sm:flex-row">
                <Link href={`/coaches/${coachs._id}`}>
                  <CoachUserCard coach={coachs} />
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </section >
      <section className="w-full px-5 py-10 space-y-5 ">
        <div>
          <h3 className="text-black text-2xl  md:text-4xl font-bold mb-8 text-center">Your very own personal coaches</h3>
          <div className="flex flex-col md:flex-row md:items-center justify-center">
            <div className="md:ml-8 sm:mt-8">
              <div className="md:pt-1 w-full md:w-96 h-80 bg-[#FBEFB0] text-black mt-10 rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/images/coaches/fitness.png"
                    alt="coaches_fitness"
                    width={36}
                    height={36}
                    className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <h2 className="sm:mt-10 text-center font-bold">
                    Fitness + diet plan and questions answered
                  </h2>
                </div>
                <div className="flex justify-center items-center">
                  <p className="mt-6 text-center">
                    We answer all of your fitness and nutrition questions, so you can focus on getting in shape. Logging your food intake and workouts is easy with our user-friendly app, and our team of experts are always here to help. So what are you waiting for.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-[#FBEFB0] border-r-[50px] border-r-transparent"></div>
              </div>
            </div>

            <div className="md:m-10 w-full md:w-96 h-80 border-slate-250 border-2 rounded-lg">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/images/coaches/personalized.png"
                  alt="coaches_personalized"
                  width={36}
                  height={36}
                  className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                />
              </div>
              <div className="flex justify-center items-center">
                <h2 className="mt-10 text-center font-bold">
                  Personalized coaching + recommendations
                </h2>
              </div>
              <div className="flex justify-center items-center">
                <p className="mt-5 text-center">
                  We offer personalized coaching and recommendations to help you reach your fitness goals. Whether you&apos;re looking to lose weight, gain muscle, or just get healthy, we can help.
                </p>
              </div>
            </div >
            <div className="w-full md:w-96 h-80 border-slate-250 border-2 rounded-lg">
              <div className="flex justify-center items-center">
                <Image
                  src="/assets/images/coaches/fitness.png"
                  alt="coaches_fitness"
                  width={36}
                  height={36}
                  className="rounded-full w-14 h-14 bg-[#f2994a] p-4 mt-5"
                />
              </div>
              <div className="flex justify-center items-center">
                <h2 className="mt-10 text-center font-bold">
                  Get help from your coaches
                </h2>
              </div>
              <div className="flex justify-center items-center">
                <p className="mt-5 text-center">
                  These personal trainers will help motivate you to reach your fitness goals, whether you&apos;re looking to lose weight, build muscle, or just get in better shape.
                </p>
              </div>
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
