import Hero from "@/components/Hero";
import { Images } from "@/types/type";

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

const AboutUs = () => {
  return (
    <>
      <Hero data={heroImages} />
    </>
  );
};

export default AboutUs;
