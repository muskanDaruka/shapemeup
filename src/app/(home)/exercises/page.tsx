/* eslint-disable @next/next/no-img-element */
"use client"
import CardSection from "@/components/CardSection";
import ExerciseUserCard from "@/components/ExerciseUserCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileApp from "@/components/MobileApp";
import { IcardImages, Images } from "@/types/image.type";
import Link from "next/link";
import { useRef, useState, useEffect } from 'react';
import { useAllExercise } from "@/hooks/exercise.hooks";
import { IExercise } from "@/types/exercise.type";
import { useRouter } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroImages: Images[] = [
  {
    image: "exercise/exercise_banner_01",
    title: "Tone Up With Shapefy Me up For A Better You.",
    description:
      "Maximize your wellness with our engaging fitness program, dedicated trainers, and in-depth insights.",
    buttonText: "View more",
  },
  {
    image: "exercise/exercise_banner",
    title: "Explore What Drives You?",
    description:
      "A newbie, pro fitter, or just to ramp up your routine, Shape Me Up can give you a full studio experience at home with hundreds of classes for body, mind and spirit.",
    buttonText: "",
  },
];

// const cardImages: IcardImages[] = [
//   {
//     title: "YOGA",
//     description:
//       "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
//     image: "yoga",
//     href: "#",
//   },
//   {
//     title: "FITNESS",
//     description:
//       "Train on your time with Strength, Barre, Pilates, HIIT, Core, and more.",
//     image: "fitness",
//     href: "exercise/fitness",
//   },
//   {
//     title: "ZUMBA",
//     description: "Zumba is a fun, high-energy workout experience .",
//     image: "zumba",
//     href: "#",
//   },
// ];

const Exercises = () => {
  const { data: exerciseData, isLoading, isError } = useAllExercise();
  const exercises = exerciseData?.data?.data || [];
  const navigation = useRouter();
  const findMovesSectionRef = useRef<HTMLDivElement>(null);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);

  const handleButtonClick = (buttonText: string) => {
    if (buttonText === 'View more' && findMovesSectionRef.current) {
      findMovesSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else if (buttonText === 'Check out our Workouts') {
      navigation.push(`/exercises`);
    }
  }
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
  // if (exercises.length === 0) {
  //   return null;
  // }
  return (
    <main>
      <Hero data={heroImages} onButtonClick={handleButtonClick} />

      {/* <CardSection
        data={cardImages}
        title="Explore what drives you?"
        description="
        A newbie, pro fitter, or just to ramp up your routine, Shape Me Up can give you a full studio experience at home with hundreds of classes for body, mind and spirit."
      /> */}
      <h3 ref={findMovesSectionRef} className="text-center text-4xl font-bold bg-[#f5f5f5]">Find what moves you</h3>
      <h4 className="w-full flex justify-center bg-[#f5f5f5]">
        <p className="text-center font-normal text-lg w-10/12 sm:w-6/12">
          Get the entire studio experience at home with hundreds of classes for body, mind, and spirit, whether you&apos;re a complete beginner or want to pick up your routine.        </p>
      </h4>
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
      // onChange={(index) => setCurrentSlide(index)}
      >
        {exercises.map((exercise: IExercise, index: number) => (
          <div key={index} className="bg-gray-100 py-10 px-5 flex flex-col  items-center justify-center sm:flex-row">
            <Link href={`/exercises/${exercise._id}`}>
              <ExerciseUserCard key={exercise.id} exercise={exercise} />
            </Link>
          </div>
        ))}
      </Carousel>
      {/* <ExerciseUserCard /> */}
      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/coaches/coach_banner.png"
            alt="coach_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-4xl font-bold text-center">
              Get customized classes
            </h2>
            <Link href={"/coaches"} >
              <button className="bg-[#f2994a] text-white py-4 px-16 rounded-md text-lg">
                See our Coaches
              </button>
            </Link>
          </div>
        </div>
      </section>

      <MobileApp />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Exercises;
