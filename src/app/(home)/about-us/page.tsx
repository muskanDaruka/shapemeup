import Hero from "@/components/Hero";
import { IcardImages, Images } from "@/types/image.type";
import HeroCard from "@/components/HeroCard";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Image from 'next/image';

const images: string[] = ["shapeme", "diet", "gym"];
const images2: string[] = ["banner_img", "about_img", "about img"];
const heroImages: Images[] = [
  {
    image: "about/about_banner",
    title: "About Us",
    description:
      "Making Healthy living affordable, approachable and attainable is our goal.",
    buttonText: "",
  },
];
// const handleButtonClick = (buttonText: string) => {
//   if (buttonText === 'Check out our Workouts') {
//     navigation.push(`/exercises`)
//   }
// }
const AboutUs = () => {
  return (
    <>
      <Hero data={heroImages} />
      <HeroCard />
      <section className="mt-4 mb-10 relative px-5 py-10 space-y-5">
        <div className="flex sm:flex-row flex-col items-center justify-between px-5 ">
          {images.map((image) => (
            <div key={image} className="w-full sm:w-auto relative flex-1 ">
              <Image
                src={`/assets/images/home/${image}.png`}
                alt={image}
                className="object-cover rounded-md w-full h-auto"
                width={480}
                height={350}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f5f5f5] w-full px-5 py-10 space-y-5 flex items-center justify-center">
        <h5 className=" text-[#f2994a] font-bold text-4xl text-center w-10/12 sm:w-6/12">
          Designed to assist you in living a better, happier, and healthier
          life.
        </h5>
      </section>

      <section className="mt-4 mb-8 relative px-5 py-10 space-y-5">
        <div className="flex sm:flex-row flex-col items-center justify-between px-5">
          {images2.map((image) => (
            <div key={image} className="w-full sm:w-auto relative flex-1">
              <Image
                src={`/assets/images/about/${image}.png`}
                alt={image}
                width={480}
                height={351.6}
                className="object-cover w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
};

export default AboutUs;
