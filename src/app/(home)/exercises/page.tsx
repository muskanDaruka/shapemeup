/* eslint-disable @next/next/no-img-element */
import CardSection from "@/components/CardSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileApp from "@/components/MobileApp";
import { IcardImages, Images } from "@/types/image.type";
import Link from "next/link";

const heroImages: Images[] = [
  {
    image: "exercise/exercise_banner_01",
    title: "Tone up with Shape me up for a better you.",
    description:
      "Maximize your wellness with our engaging fitness program, dedicated trainers, and in-depth insights.",
    buttonText: "View more",
  },
  {
    image: "exercise/exercise_banner",
    title: "Explore what drives you?",
    description:
      "A newbie, pro fitter, or just to ramp up your routine, Shape Me Up can give you a full studio experience at home with hundreds of classes for body, mind and spirit.",
    buttonText: "",
  },
];

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

const Exercises = () => {
  return (
    <main>
      <Hero data={heroImages} />

      <CardSection
        data={cardImages}
        title="Explore what drives you?"
        description="
        A newbie, pro fitter, or just to ramp up your routine, Shape Me Up can give you a full studio experience at home with hundreds of classes for body, mind and spirit."
      />

      <section className="relative">
        <div className="relative">
          <img
            src="/assets/images/coaches/coach_banner.png"
            alt="coach_banner"
            className="relative w-full object-cover h-auto min-h-[490px]"
          />
          <div className="absolute flex flex-col items-center justify-center w-full top-0 h-full gap-10">
            <h2 className="text-white text-4xl font-bold">
              Get customized classes
            </h2>
            <Link href={"/coaches"}>
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
