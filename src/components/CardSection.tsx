/* eslint-disable @next/next/no-img-element */
import { IcardImages } from "@/types/type";
import Link from "next/link";
import { FC } from "react";

interface Props {
  data: IcardImages[];
  title: string;
  description: string;
}


const CardSection: FC<Props> = ({ data, title, description }) => {
  return (
    <section className="bg-[#f5f5f5] py-10 px-5 flex flex-col gap-5">
      <h3 className="text-center text-4xl font-bold">{title}</h3>
      <h4 className="w-full flex justify-center">
        <p className="text-center font-normal text-lg w-10/12 sm:w-6/12">
          {description}
        </p>
      </h4>
      <div className="flex flex-col items-center justify-evenly lg:gap-10 sm:flex-row">
        {data.map((cardImage) => (
          <div
            key={cardImage.image}
            className="rounded-md overflow-hidden relative"
          >
            <img
              src={`/assets/images/exercise/${cardImage.image}.png`}
              alt={cardImage.image}
              className="object-cover rounded-md max-sm:w-full"
            />
            <div className="absolute z-[1] gap-y-5 flex flex-col items-center bottom-10 w-full text-center text-white">
              <h4 className="text-xl font-normal">{cardImage.title}</h4>
              <h5 className="font-extralight text-base w-full flex justify-center">
                <p className="w-9/12 text-center text-[#fffc] border-b-[0.5px] border-[#fffc] border-opacity-50 pb-6">
                  {cardImage.description}
                </p>
              </h5>
              <Link href={`/${cardImage.href}`}>
                <button className="font-light text-base">
                  Click here to see more &gt;&gt;
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {<div className="w-full flex justify-center">
        <button className="bg-[#f2994a] text-black py-4 px-16 rounded-md text-lg">
          View more
        </button>
      </div>}
    </section>
  );
};

export default CardSection;
