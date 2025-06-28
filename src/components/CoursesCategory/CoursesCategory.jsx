import React from "react";
import { assets } from "../../assets/assets";

const CoursesCategory = () => {
  return (
    <>
      <div className=" mt-24 flex justify-center items-center">
        <div className=" flex flex-col text-center items-center">
          <h1 className=" text-[30px] md:text-[40px] text-[#0B7077] font-bold ">
            Courses Category
          </h1>
          <p className=" mt-5 text-gray-400 text-[18px] text-center md:text-2xl font-light text-wrap">
            Onlearing is one powerful online software suite that combines all
            the tools <br className="hidden md:block" /> needed to run a
            successful school or office.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-5 md:grid-cols-4 md:gap-56 place-items-center ">
        <div className=" flex flex-col justify-center items-center hover:shadow-lg h-[350px] w-[350px] p-4 m-4 rounded-lg transition-all cursor-pointer">
          <img
            src={assets.category_1}
            className=" w-[50px] object-cover"
            alt=""
          />
          <h2 className="text-[#0B7077] text-[24px] font-semibold mt-4">
            Beauty
          </h2>
          <p className="mt-3 text-gray-400 text-[18px] font-medium text-center">
            {" "}
            One powerful online software <br /> suite that combines
          </p>
          <button className="text-[#0B7077] bg-white w-32 py-2.5 rounded-lg shadow-md mt-10 hover:bg-[#FD661F] hover:text-white transition-all cursor-pointer">
            more
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center hover:shadow-lg h-[350px] w-[350px] p-4 m-4 rounded-lg transition-all cursor-pointer">
          <img
            src={assets.category_2}
            className=" w-[60px] object-cover"
            alt=""
          />
          <h2 className="text-[#0B7077] text-[24px] font-semibold mt-4">
            medical
          </h2>
          <p className="mt-3 text-gray-400 text-[18px] font-medium text-center">
            {" "}
            One powerful online software <br /> suite that combines
          </p>
          <button className="text-[#0B7077] bg-white w-32 py-2.5 rounded-lg shadow-md mt-10 hover:bg-[#FD661F] hover:text-white transition-all cursor-pointer">
            more
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center hover:shadow-lg h-[350px] w-[350px] p-4 m-4 rounded-lg transition-all cursor-pointer">
          <img
            src={assets.category_3}
            className=" w-[70px] object-cover"
            alt=""
          />
          <h2 className="text-[#0B7077] text-[24px] font-semibold mt-4">
            Sports
          </h2>
          <p className="mt-3 text-gray-400 text-[18px] font-medium text-center">
            {" "}
            One powerful online software <br /> suite that combines
          </p>
          <button className="text-[#0B7077] bg-white w-32 py-2.5 rounded-lg shadow-md mt-10 hover:bg-[#FD661F] hover:text-white transition-all cursor-pointer">
            more
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center hover:shadow-lg h-[350px] w-[350px] p-4 m-4 rounded-lg transition-all cursor-pointer">
          <img
            src={assets.category_4}
            className=" w-[60px] object-cover"
            alt=""
          />
          <h2 className="text-[#0B7077] text-[24px] font-semibold mt-4">
            Nutrition
          </h2>
          <p className="mt-3 text-gray-400 text-[18px] font-medium text-center">
            {" "}
            One powerful online software <br /> suite that combines
          </p>
          <button className="text-[#0B7077] bg-white w-32 py-2.5 rounded-lg shadow-md mt-10 hover:bg-[#FD661F] hover:text-white transition-all cursor-pointer">
            more
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-4">
        <button className=" w-36 border-1 py-2.5 rounded-lg border-[#0B7077] text-[#0B7077] cursor-pointer">
          View all
        </button>
      </div>
    </>
  );
};

export default CoursesCategory;
