"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Images } from "@/types/image.type";
import { FC } from "react";
interface Props {
  data: Images[];
  onButtonClick?: (buttonText: string) => void;
}
const Hero: FC<Props> = ({ data, onButtonClick }) => {
  return (
    <div className="relative w-full">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {data.map((i) => (
          <div className="relative w-screen h-[577px]" key={i.image}>
            <Image
              src={`/assets/images/${i.image}.png`}
              alt={i.image}
              fill
              className="object-cover -z-10"
              priority
            />
            <div className="text-white flex flex-col items-center justify-center h-full space-y-5">
              <h2 className="text-[clamp(1.5rem,1.7em,2rem)] font-bold">
                {i.title}
              </h2>
              <p className="text-base sm:text-lg px-10">{i.description}</p>
              {i.buttonText !== "" && onButtonClick && (
                <button onClick={() => onButtonClick(i.buttonText)} className="bg-[#f2994a] px-12 py-5 rounded-md text-black text-xl">
                  {i.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
