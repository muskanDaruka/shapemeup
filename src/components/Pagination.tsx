import React from "react";
import Image from "next/image";
import { useState } from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  // const [currentbtn, setCurrentbtn] = useState(0); // Assuming starting from page 0

  // Function to handle moving to the next page
  const nextBtn = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
    // Perform any other actions you want when moving to the next page
  };
  const previousBtn = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  }
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button onClick={previousBtn}>
            <Image src="/assets/images/icons/pagination_left.png" width={46} height={44} alt="left" className="flex items-center justify-center px-4 h-10 w-16 ml-0 leading-tight text-gray-500 bg-[#FEEFA8] border border-gray-300 rounded-l-lg hover:bg-opacity-50 hover:text-gray-700 dark:bg-opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-opacity-50 dark:hover:text-white" />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              className={`flex items-center justify-center px-4 h-10 ${currentPage === number
                ? 'text-[#f2994a]'
                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <button onClick={nextBtn}>
            <Image src="/assets/images/icons/pagination_right.png" alt="right" className="flex items-center justify-center px-4 h-10 w-16 leading-tight text-gray-500 bg-[#F2994A] border border-gray-300 rounded-r-lg hover:bg-opacity-50 hover:text-gray-700 dark:bg-opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-opacity-50 dark:hover:text-white" width={46} height={44} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
