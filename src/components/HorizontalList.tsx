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
        <div className="flex justify-center text-[#34383d80]">
            <ul className="flex space-x-10 items-center">
                {data.map((item, index) => (
                    <li onClick={() => { setActiveIndex(index) }} className={` mb-2 sm:mb-0 sm:mr-4 ${index === activeIndex ? "text-[#f2994a] font-bold text-2xl underline" : ""}`}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalList;
