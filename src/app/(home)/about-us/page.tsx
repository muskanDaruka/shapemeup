import Hero from "@/components/Hero";
import { IcardImages, Images } from "@/types/type";
import HeroCard from "@/components/HeroCard";

import Footer from "@/components/Footer";


const images: string[] = ["shapeme", "diet", "gym"];
const images2: string[] = ["banner_img", "about_img", "about img"];
const heroImages: Images[] = [
  {
    image: "about/about_banner",
    title: "About us",
    description:
      "Making Healthy living affordable, approachable and attainable is our goal.",
    buttonText: "",
  }
  // {
  //   image: "home/home_banner",
  //   title: "On demand digital personal coaches",
  //   description:
  //     "Need to unplug stress? By turning off your lethargy and directing it into exercises, our trainers can transform your life! Tone up, firm up, and sculpt your body into the shape you've always wanted. Get instant motivation and guidance to reach your fitness goals.Lose weight, build muscle, or just get in better shape with no muss, no fuss!",
  //   buttonText: "Our Coaches",
  // },
  // {
  //   image: "home/homebanner",
  //   title: "Bored of the same old training workouts?",
  //   description:
  //     "Build a Healthy Routine with New Ways to Train. We are all mindful of the challenges of maintaining a healthy body balance. We provide a range of programs to empower you in reaching your fitness goals. For you to experience results faster than ever before, our trainers will design a program that is personalized just for you.",
  // buttonText: "Check out our Workouts",
  // },
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
const cardImages: IcardImages[] = [
  {
    title: "ZUMBA",
    description: "Zumba is a fun, high-energy workout experience .",
    image: "zumba",
    href: "#",
  },
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

];
const AboutUs = () => {
  return (
    <>
      <Hero data={heroImages} />
      <HeroCard />
      <section className="mt-4 mb-10 relative px-5 py-10 space-y-5">
        <div className="flex sm:flex-row flex-col items-center justify-evenly gap-5 px-5">
          {images.map((image) => (
            <div key={image} className="relative flex ">
              <img
                src={`/assets/images/home/${image}.png`}
                alt={image}
                className=" object-cover w-250 h-96 rounded-md..."
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f5f5f5] w-full px-5 py-10 space-y-5">
        <h5 className=" text-[#f2994a] font-bold text-4xl text-center">
          Designed to assist you in living a better, happier, and healthier life.
        </h5>
      </section>

      <section className="mt-4 mb-8 relative px-5 py-10 space-y-5">
        <div className="flex sm:flex-row flex-col items-center justify-evenly gap-5 px-5">
          {images2.map((image) => (
            <div key={image} className="relative flex">
              <img
                src={`/assets/images/about/${image}.png`}
                alt={image}
                className="object-cover w-250 h-96 rounded-md..."
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;

