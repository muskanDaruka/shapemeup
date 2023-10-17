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
        <>
            {data.map((item, index) => (
                <li onClick={() => { setActiveIndex(index) }} className={`${index === activeIndex ? "text-[#f2994a]" : ""}`}>{item}</li>
            ))}
        </>
    );
};

export default HorizontalList;
