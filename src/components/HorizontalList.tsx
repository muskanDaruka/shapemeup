/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

interface HorizontalListProps {
    data: string[];
}

const HorizontalList: React.FC<HorizontalListProps> = ({ data }: HorizontalListProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex, "This is the activeindex");
    return (
        <div className="flex flex-col items-center text-[#34383d80]">
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-2 ">
                {data.map((item, index) => (
                    <li key={item} onClick={() => { setActiveIndex(index) }} className={` mb-2 sm:mb-0 sm:mr-2 text-center   ${index === activeIndex ? "text-[#f2994a] font-bold text-lg underline" : "text-sm"}`}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalList;
