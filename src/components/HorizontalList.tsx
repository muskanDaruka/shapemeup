import { Dispatch, SetStateAction } from "react";

interface HorizontalListProps {
    data: string[];
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    currentSlide: number;
}

const HorizontalList: React.FC<HorizontalListProps> = ({ data, setCurrentSlide, currentSlide }) => {
    const handleItemClick = (index: number) => {
        if (index >= 0 && index < data.length) {
            setCurrentSlide(index);
        }
    };

    return (
        <div className="flex items-center justify-center text-[#34383d80]">
            <ul className="flex flex-wrap space-x-2 sm:space-x-4 mb-2 ">
                {data.map((item, index) => (
                    <li
                        key={item}
                        onClick={() => handleItemClick(index)}
                        className={`mb-2 sm:mb-0 sm:mr-2 text-center text-xl sm:text-2xl cursor-pointer ${index === currentSlide ? "text-[#f2994a] font-bold text-lg underline text-xl sm:text-2xl" : "text-sm text-xl sm:text-2xl"}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalList;
