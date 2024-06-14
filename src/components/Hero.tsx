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
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false}>
        {data.map((i) => (
          <div className="relative w-screen h-[577px]" key={i.image}>
            <Image
              src={`/assets/images/${i.image}.png`}
              alt={i.image}
              fill
              className="object-cover -z-10"
              priority
            />
            <div className="text-white flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold">
                {i.title}
              </h2>
              <p className="text-base sm:text-lg px-8 w-10/12 sm:w-6/12 pb-2">{i.description}</p>
              {i.buttonText !== "" && onButtonClick && (
                <button onClick={() => onButtonClick(i.buttonText)} className="bg-[#f2994a] sm:px-12 sm:py-5 px-2 py-2 rounded-md text-black text-xl">
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
