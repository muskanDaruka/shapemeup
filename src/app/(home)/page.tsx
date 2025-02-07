/* eslint-disable @next/next/no-img-element */
"use client";
import Hero from "@/components/Hero";
import HeroCard from "@/components/HeroCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import { useEffect, useState } from "react";
import { IcardImages, Images } from "@/types/image.type";
import CardSection from "@/components/CardSection";
import MobileApp from "@/components/MobileApp";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import BlogUserCards from "@/components/BlogUserCard";
import ExerciseUserCard from "@/components/ExerciseUserCard";
import { useAllExercise } from "@/hooks/exercise.hooks";
import { IExercise } from "@/types/exercise.type";
import { IBlog } from "@/types/blog.type";
import { useRouter } from "next/navigation";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const images: string[] = ["shapeme", "diet", "gym"];
const cardImages: IcardImages[] = [
  {
    title: "YOGA",
    description:
      "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
    image: "yoga",
    href: "#",
  },
  {
    title: "FITNESS",
    description:
      "Train on your time with Strength, Barre, Pilates, HIIT, Core, and more.",
    image: "fitness",
    href: "exercise/fitness",
  },
  {
    title: "ZUMBA",
    description: "Zumba is a fun, high-energy workout experience .",
    image: "zumba",
    href: "#",
  },
];
const productImages: IcardImages[] = [
  {
    title: "Protein suppliments",
    image: "protein_supplements",
  },
  {
    title: "Fitness Clothing",
    image: "fitness_clothing",
  },
  {
    title: "Fitness Equipments",
    image: "fitness_equipment",
  },
];
const heroImages: Images[] = [
  {
    image: "home/banner",
    title: "Exercise Your Happiness.",
    description:
      "Get in Ship-Shape the best way. But wondering how to start and where to start? We offer everything you need to tune your shape at the comfort of your homes.",
    buttonText: "Check out our Workouts",
  },
  {
    image: "home/home_banner",
    title: "On Demand Digital Personal Coaches",
    description:
      "Need to unplug stress? By turning off your lethargy and directing it into exercises, our trainers can transform your life! Tone up, firm up, and sculpt your body into the shape you've always wanted. Get instant motivation and guidance to reach your fitness goals.Lose weight, build muscle, or just get in better shape with no muss, no fuss!",
    buttonText: "Our Coaches",
  },
  {
    image: "home/homebanner",
    title: "Tired of the same old routine at the gym?",
    description:
      "We all know that getting in shape can be a real challenge. That’s why we offer a variety of programs to help you meet your fitness goals. Our trainers will work with you to create a program that is tailored specifically for you – so you can see results faster than ever before.",
    buttonText: "Check out our Fitness Classes",
  },
];

export default function Home() {
  const { data: blogData } = useAllBlogs();
  const blogs = blogData?.data?.data || [];
  const { data: exerciseData } = useAllExercise();
  const navigation = useRouter();
  // const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.3333);
  const exercises = exerciseData?.data?.data || [];
  const handleButtonClick = (buttonText: string) => {
    if (buttonText === 'Check out our Workouts') {
      navigation.push(`/exercises`)
    }
    if (buttonText === 'Our Coaches') {
      navigation.push(`/coaches`)
    }
    if (buttonText === 'Check out our Fitness Classes') {
      navigation.push(`/classes`)
    }
  }

  return (
    <>
      <Hero data={heroImages} onButtonClick={handleButtonClick} />
      <HeroCard />
      <section className="relative bg-[#f5f5f5] pb-4 -top-10">
        <h3 className="text-center text-4xl font-bold bg-[#f5f5f5]">
          Get acess to thousands of workouts
        </h3>
        <h4 className="w-full flex justify-center bg-[#f5f5f5]">
          <p className="text-center font-normal text-lg w-10/12 sm:w-6/12">
            Get the entire studio experience at home with hundreds of classes for
            body, mind, and spirit, whether you&apos;re a complete beginner or
            want to pick up your routine.
          </p>
        </h4>
        {Array.isArray(exercises) && exercises.length > 0 && (
          <div className="bg-[#f5f5f5] py-10 px-5 flex flex-col gap-5 items-center justify-center sm:flex-row">
            {exercises.slice(-3).reverse().map((exercise: IExercise, index: number) => (
              <div key={index}>
                <Link href={`/exercises/${exercise._id}`}>
                  <ExerciseUserCard key={exercise.id} exercise={exercise} />
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="w-full flex justify-center">
          <Link href={"/exercises"}>
            <button className="bg-[#f2994a] text-black py-4 px-16 rounded-md text-lg">
              View more
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-white flex flex-col sm:flex-row px-5 py-10 relative gap-5">
        <div className="relative flex-1 sm:m-10">
          <div className="relative flex flex-col items-start justif-between">
            <h2 className="text-4xl font-bold text-center ml-0 sm:ml-10">Get customized classes</h2>
            <h5 className="w-full">
              <p className=" text-justify lg:text-left text-lg font-normal leading-9 mt-4 ml-0 sm:ml-10">
                It&apos;s time to get in shape! With Shape Me Up, you can create
                a customized diet plan that fits your needs and lifestyle.
                Whether you&apos;re looking to lose weight, gain muscle, or just
                maintain your current health, Shape Me Up can help. We&apos;ll
                work with you to develop a plan that is tailored specifically
                for you, and we&apos;ll provide all the support you need to make
                sure you reach your goals. So don&apos;t wait any longer! Get
                started today with us.
              </p>
            </h5>
            <Link href={"/classes"} className="mt-5 lg:mt-20 ml-0 sm:ml-10">
              <button className=" text-[#f2994a] underline text-2xl font-bold">
                View more
              </button>
              <span className="text-[#f2994a] text-2xl font-bold">⟶</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center ml-0 sm:ml-10">
          <img
            src={"/assets/images/home/customized classes.png"}
            alt="Image"
            className="object-contain mx-auto"
          />
        </div>
      </section>
      <section className="bg-[#f5f5f5] w-full px-5 py-10 space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Stay connected.Stay healthy.
        </h2>
        <h4 className="text-center flex items-center justify-center">
          <p className="font-normal w-11/12 sm:w-6/12">
            Our team of personal trainers will help sculpt your perfect body in
            the comfort of your own home. Transform your physique with our safe
            and effective exercises - what are you waiting for? Get in touch
            with our coaches!
          </p>
        </h4>
        <div className="w-full flex justify-center">
          <Link href={"/coaches"}>
            <button className="bg-[#f2994a] text-black sm:py-4 sm:px-16 px-10 py-4 rounded-md text-lg">
              Connect with a Coach
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full px-5 py-10 space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          The fitness blog
        </h2>
        <div className="flex items-center justify-center">
          <h4 className="text-center mb-4 w-11/12 sm:w-6/12 ">
            A blog about fitness is a great way for people to stay in touch with
            the latest news and trends on healthy living.
          </h4>
        </div>
        <div className="mx-auto w-full sm:w-[1100px]">
          <div className="flex flex-col sm:flex-row mx-auto items-center justify-center text-center md:ml-[48px]">
            {blogs?.slice(-3).map((blog: IBlog, index: number) => (
              <div
                key={index}
                className={`mb-4 flex ${index % 2 === 0
                  ? " sm:w-1/2 md:ml-2"
                  : " md:w-1/2 md:ml-2 "
                  } `}
              >
                <Link href={`/blogs/${blog._id}`}>
                  <BlogUserCards
                    key={blog.id}
                    blog={blog}
                    useInImg
                    useInName
                    useInSummary
                    useInRead
                    useInDate
                    useInCategory
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Link href="/blogs">
            <div className="flex">
              <p className="text-[#f2994a] underline text-2xl font-bold">
                View blogs
              </p>
              <span className="text-[#f2994a] text-2xl font-bold">⟶</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="mt-4 relative bg-[#f5f5f5] px-5 py-10 space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          Our fitness shop
        </h2>
        <h4 className="text-center">We provide Renowned Fitness Products.</h4>
        <h4 className="text-center">Shop by category.</h4>
        <div className="flex flex-col sm:flex-row justify-evenly">
          {productImages.map((cardImage) => (
            <div
              key={cardImage.image}
              className="rounded-md overflow-hidden relative mb-4 sm:mb-0 sm:mr-4"
            >
              <img
                src={`/assets/images/products/${cardImage.image}.png`}
                alt={cardImage.image}
                className="object-cover rounded-md w-full h-40 sm:h-auto"
              />
              <div className="absolute z-[1] h-full flex items-center justify-center text-white top-0 text-center w-full px-2">
                <h4 className="font-bold text-3xl opacity-80">
                  {cardImage.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Link href={"/products"}>
            <button className="bg-[#f2994a] text-black py-4 px-16 rounded-md text-lg">
              View shop
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-4 relative">
        <div className="flex items-center justify-center">
          <p className="text-center font-bold text-4xl my-4 w-11/12 sm:w-6/12">
            Making healthy living affordable, approachable, and attainable is our
            goal.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-between px-5 ">
          {images.map((image) => (
            <div key={image} className="w-full sm:w-auto relative flex-1 ">
              <img
                src={`/assets/images/home/${image}.png`}
                alt={image}
                className="object-cover rounded-md w-full h-auto"
              />
            </div>
          ))}
        </div>
        <h4 className="flex justify-center w-full my-5">
          <p className="text-lg font-normal text-center w-9/12">
            A ground-breaking new solution for staying healthy, Shape Me Up is
            an online fitness training platform. We attempt to go above and
            beyond with highly skilled instructors and customized training
            programs. Everyone who wishes to develop healthy habits are cheered
            by Shape me up!
          </p>
        </h4>
      </section>
      <MobileApp />
      <FAQ />
      <Footer />
    </>
  );
}
