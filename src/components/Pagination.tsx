import Image from "next/image";
import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <Image src="/assets/images/icons/pagination_left.png" width={46} height={44} alt="left" className="flex items-center justify-center px-4 h-10 w-16 ml-0 leading-tight text-gray-500 bg-[#FEEFA8] border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" />
        </li>
        <li>
          <a className="flex items-center justify-center px-4 h-10 text-blue-600  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            1
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            2
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
            3
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            4
          </a>
        </li>
        <li>
          <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            5
          </a>
        </li>
        <li>
          <Image src="/assets/images/icons/pagination_right.png" alt="right" className="flex items-center justify-center px-4 h-10 w-16 leading-tight text-gray-500 bg-[#F2994A] border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" width={46} height={44} />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
