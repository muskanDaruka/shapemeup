/* eslint-disable @next/next/no-img-element */
"use client"
import Hero from "@/components/Hero";
import HeroCard from "@/components/HeroCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IcardImages, Images } from "@/types/image.type";
import CardSection from "@/components/CardSection";
import MobileApp from "@/components/MobileApp";
import { useAllBlogs } from "@/hooks/blogs.hooks";
import BlogUserCards from "@/components/BlogUserCard";
import ExerciseUserCard from "@/components/ExerciseUserCard";
import { useAllExercise } from "@/hooks/exercise.hooks";

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
    title: "Exercise your happiness.",
    description:
      "Get in Ship-Shape the best way. But wondering how to start and where to start? We offer everything you need to tune your shape at the comfort of your homes.",
    buttonText: "Check out our Workouts",
  },
  {
    image: "home/home_banner",
    title: "On demand digital personal coaches",
    description:
      "Need to unplug stress? By turning off your lethargy and directing it into exercises, our trainers can transform your life! Tone up, firm up, and sculpt your body into the shape you've always wanted. Get instant motivation and guidance to reach your fitness goals.Lose weight, build muscle, or just get in better shape with no muss, no fuss!",
    buttonText: "Our Coaches",
  },
  {
    image: "home/homebanner",
    title: "Bored of the same old training workouts?",
    description:
      "Build a Healthy Routine with New Ways to Train. We are all mindful of the challenges of maintaining a healthy body balance. We provide a range of programs to empower you in reaching your fitness goals. For you to experience results faster than ever before, our trainers will design a program that is personalized just for you.",
    buttonText: "Check out our Workouts",
  },
];

export default function Home() {
  const { data: blogData } = useAllBlogs();
  const blogs = blogData?.data?.data || [];
  const { data: exerciseData } = useAllExercise();
  const exercises = exerciseData?.data?.data || [];

  if (exercises.length === 0) {
    return null;
  }
  if (blogs.length === 0) {
    return null;
  }
  return (
    <>
      <Hero data={heroImages} />
      <HeroCard />
      <h3 className="text-center text-4xl font-bold bg-[#f5f5f5]">Get acess to thousands of workouts</h3>
      <h4 className="w-full flex justify-center bg-[#f5f5f5]">
        <p className="text-center font-normal text-lg w-10/12 sm:w-6/12">
          Get the entire studio experience at home with hundreds of classes for body, mind, and spirit, whether you're a complete beginner or want to pick up your routine.
        </p>
      </h4>
      <div className="bg-[#f5f5f5] py-10 px-5 flex flex-col gap-5 items-center justify-center sm:flex-row">
        {exercises.slice(0, 3).map((exercise, index) => (
          <div key={index}>
            <Link href={`/exercises/${exercise._id}`}>
              <ExerciseUserCard key={exercise.id} exercise={exercise} />
            </Link>
          </div>
        ))}
      </div>
      <section className="bg-white flex flex-col sm:flex-row px-5 py-10 relative gap-5">
        <div className="relative flex-1">
          <div className="relative flex flex-col items-start justify-between">
            <h2 className="text-4xl font-bold">Get customized classes</h2>
            <h5 className="w-full">
              <p className="text-justify lg:text-left text-lg font-normal leading-9 mt-4">
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
            <Link href={"/classes"} className="mt-5 lg:mt-20">
              <button className="text-[#f2994a] underline text-2xl font-bold">
                View more
              </button>
              <span className="text-[#f2994a] text-2xl font-bold">⟶</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
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
        <h4 className="text-center">
          <p className="font-normal">
            Our team of personal trainers will help sculpt your perfect body in
            the comfort of your own home. Transform your physique with our safe
            and effective exercises - what are you waiting for? Get in touch
            with our coaches!
          </p>
        </h4>
        <div className="w-full flex justify-center">
          <Link href={"/coaches"}>
            <button className="bg-[#f2994a] text-black py-4 px-16 rounded-md text-lg">
              Connect with a Coach
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full px-5 py-10 space-y-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          The fitness blog
        </h2>
        <h4 className="text-center mb-4">
          A blog about fitness is a great way for people to stay in touch with
          the latest news and trends on healthy living.
        </h4>
        <div className="mx-auto w-full sm:w-[1100px]">
          <div className="flex flex-col sm:flex-row mx-auto items-center justify-center text-center md:ml-[50px]">
            {blogs.slice(1, 4).map((blog, index) => (
              <div key={index} className={`mb-4 flex ${index % 2 === 0 ? 'w-full sm:w-1/2' : 'w-full md:w-1/2 md:ml-4 sm:ml-2'} `}>
                <Link href={`/blogss/${blog._id}`}>
                  <BlogUserCards key={blog.id} blog={blog} useInImg useInName useInSummary useInRead useInDate useInCategory />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-5">
          <Link href="/blogs">
            <p className="text-[#f2994a] underline text-2xl font-bold">
              View blogs ⟶
            </p>
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
          <Link href={"/coaches"}>
            <button className="bg-[#f2994a] text-black py-4 px-16 rounded-md text-lg">
              View shop
            </button>
          </Link>
        </div>
      </section>
      <section className="mt-4 relative">
        <p className="text-center font-bold text-4xl my-4">
          Making healthy living affordable, approachable, and attainable is our
          goal.
        </p>
        <div className="flex sm:flex-row flex-col items-center justify-between gap-5 px-5 md:ml-24">
          {images.map((image) => (
            <div key={image} className="relative flex-1 ">
              <img
                src={`/assets/images/home/${image}.png`}
                alt={image}
                className="object-cover rounded-md"
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
      <Footer />
    </>
  );
}
