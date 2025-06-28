import React from "react";
import { assets } from "../../assets/assets";

const PopularCourses = () => {
  return (
    <>
      <div className=" mt-36  flex justify-center items-center">
        <div className=" flex justify-center md:justify-between items-center">
          <h1 className=" text-[30px] md:text-[40px] text-[#FD661F] font-bold ">
            Popular Courses
          </h1>
        </div>
      </div>
      <div className=" hidden  md:flex flex-row justify-evenly md:-space-x-20 mt-10">
        <div className=" bg-[#0B7077] p-3 rounded-lg">
          <p className="text-white text-sm ">All Programme</p>
        </div>
        <div className=" outline p-3 rounded-lg hover:bg-[#0B7077] cursor-pointer text-gray-600 hover:text-white">
          <p className=" text-sm ">UI/UX Design</p>
        </div>
        <div className=" outline p-3 rounded-lg hover:bg-[#0B7077] cursor-pointer text-gray-600  hover:text-white">
          <p className=" text-sm ">Program Design</p>
        </div>
        <div className=" outline p-3 rounded-lg hover:bg-[#0B7077] cursor-pointer text-gray-600 hover:text-white ">
          <p className=" text-sm ">Programming</p>
        </div>
        <div className=" outline p-3 rounded-lg hover:bg-[#0B7077] cursor-pointer text-gray-600  hover:text-white">
          <p className=" text-sm ">Data Science</p>
        </div>
        <div className=" outline p-3 rounded-lg hover:bg-[#0B7077] cursor-pointer text-gray-600  hover:text-white">
          <p className=" text-sm ">Data Analytics</p>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-56 place-items-center mt-10">
        <div className=" w-[320px]  flex flex-col flex-wrap bg-white shadow-xl rounded-xl">
          <div>
            <img
              src={assets.course_1}
              alt=""
              className="rounded-t-xl w-[350px] h-[150px] object-cover"
            />
          </div>
          <div>
            <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
              <div>
                <img src={assets.course_users} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-700">+40 students </p>
              </div>
            </div>
            <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
              1 - 28 July 2022
            </p>
            <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
              Product Management Basic - Course
            </h2>
            <p className=" text-sm text-gray-600 p-4 mt-2 text-wrap">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <div className=" flex flex-row  items-center justify-around p-3 mb-5">
            <div className=" flex flex-row items-center justify-center gap-3">
              <h2 className="text-[#FD661F] text-[16px] font-bold">$ 380</h2>
              <h2 className="text-gray-500 text-[16px] line-through">$ 500</h2>
            </div>
            <div>
              <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[320px] flex flex-col flex-wrap bg-white shadow-xl rounded-xl">
          <div>
            <img
              src={assets.course_2}
              alt=""
              className="rounded-t-xl w-[350px] h-[150px] object-cover"
            />
          </div>
          <div>
            <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
              <div>
                <img src={assets.course_users} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-700">+40 students </p>
              </div>
            </div>
            <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
              1 - 28 July 2022
            </p>
            <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
              BM Data Science Professional Certificate
            </h2>
            <p className=" text-sm text-gray-600 p-4 mt-2   text-wrap">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <div className=" flex flex-row  items-center justify-around p-3 mb-5">
            <div className=" flex flex-row items-center justify-center gap-3">
              <h2 className="text-[#FD661F] text-[16px] font-bold">$ 678</h2>
              <h2 className="text-gray-500 text-[16px] line-through">$ 500</h2>
            </div>
            <div>
              <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[320px] flex flex-col flex-wrap bg-white shadow-xl rounded-xl">
          <div>
            <img
              src={assets.course_3}
              alt=""
              className="rounded-t-xl w-[350px] h-[150px] object-cover"
            />
          </div>
          <div>
            <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
              <div>
                <img src={assets.course_users} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-700">+40 students </p>
              </div>
            </div>
            <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
              1 - 28 July 2022
            </p>
            <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
              The Science of Well-Being
            </h2>
            <p className=" text-sm text-gray-600 p-4 mt-2   text-wrap">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <div className=" flex flex-row  items-center justify-around p-3 mb-5">
            <div className=" flex flex-row items-center justify-center gap-3">
              <h2 className="text-[#FD661F] text-[16px] font-bold">$ 123</h2>
              <h2 className="text-gray-500 text-[16px] line-through">$ 500</h2>
            </div>
            <div>
              <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[320px] flex flex-col flex-wrap bg-white shadow-xl rounded-xl">
          <div>
            <img
              src={assets.course_4}
              alt=""
              className="rounded-t-xl w-[350px] h-[150px] object-cover"
            />
          </div>
          <div>
            <div className=" flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative left-10 bottom-4 gap-2">
              <div>
                <img src={assets.course_users} alt="" />
              </div>
              <div>
                <p className="text-sm text-gray-700">+40 students </p>
              </div>
            </div>
            <p className=" pt-1 pl-4 pr-4 text-sm text-gray-500">
              1 - 28 July 2022
            </p>
            <h2 className="text-[#0B7077] text-[17px] font-bold pt-4 pl-4 pr-4 h-[48px]">
              Python for Everybody Specialization
            </h2>
            <p className=" text-sm text-gray-600 p-4 mt-2   text-wrap">
              Product Management Masterclass, you will learn with Sarah Johnson
              - Head of Product Customer Platform Gojek Indonesia.
            </p>
          </div>
          <div className=" flex flex-row  items-center justify-around p-3 mb-5">
            <div className=" flex flex-row items-center justify-center gap-3">
              <h2 className="text-[#FD661F] text-[16px] font-bold">$ 567</h2>
              <h2 className="text-gray-500 text-[16px] line-through">$ 700</h2>
            </div>
            <div>
              <button className="bg-[#0B7077] text-white px-6 py-2.5 rounded-lg cursor-pointer ">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
