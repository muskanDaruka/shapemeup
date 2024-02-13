import { Dispatch, SetStateAction } from "react";

interface HorizontalListProps {
    data: string[];
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    currentSlide: number;
}

const HorizontalList: React.FC<HorizontalListProps> = ({ data, setCurrentSlide, currentSlide }) => {
    const handleItemClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="flex flex-col items-center text-[#34383d80]">
            <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-2 ">
                {data.map((item, index) => (
                    <li
                        key={item}
                        onClick={() => handleItemClick(index)}
                        className={`mb-2 sm:mb-0 sm:mr-2 text-center ${index === currentSlide ? "text-[#f2994a] font-bold text-lg underline" : "text-sm"}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalList;
