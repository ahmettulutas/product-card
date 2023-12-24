import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <section className="px-5 py-24 mx-auto animate-pulse">
      <div className="lg:w-4/5 mx-auto gap-2 grid grid-cols-1 md:grid-cols-2">
        <div className="lg:mt-0 bg-gray-200 dark:bg-gray-700 col-span-1 h-[500px]" />
        <div className="lg:pl-10 lg:py-6 mt-6 lg:mt-0 col-span-1">
          <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700" />
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 mt-4" />
          <div className="inline-block h-4 w-24 bg-gray-200 dark:bg-gray-700 mt-4" />
          <div className="inline-block h-4 w-20 bg-gray-200 dark:bg-gray-700 mt-4 ml-4" />
          <div className="h-4 w-[80%] bg-gray-200 dark:bg-gray-700 mt-4" />
          <div className="h-4 w-[80%] bg-gray-200 dark:bg-gray-700 mt-4" />
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
          <div className="flex items-center">
            <span className="h-12 w-16 bg-gray-200 dark:bg-gray-700"></span>
            <button className="ml-auto text-white bg-yellow-500 w-[30%] rounded h-12" />
            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
