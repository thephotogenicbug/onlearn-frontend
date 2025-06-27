import React from "react";
import Navbar from "../Navbar/Navbar";
import { assets } from "../../assets/assets";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import PopularCourses from "../PopularCourses/PopularCourses";

const Header = () => {
  return (
    <>
      <div
        className="bg-[#D2E6E4] bg-no-repeat bg-top  rounded-b-[50px] border "
        style={{ backgroundImage: `url(${assets.swrills})` }}
      >
        <LayoutWrapper>
          <Navbar />

          <div className="flex items-center justify-center md:flex-row  md:items-start md:justify-between relative">
            {/* LEFT: Text Section */}
            <div className="mt-24 flex flex-col justify-center items-center md:justify-start md:items-start  ">
              <button className=" bg-white px-6 py-2 rounded-lg text-sm font-medium">
                Never Stop Learning
              </button>
              <h1 className="text-[#0B7077] text-[30px] text-center md:text-start md:text-[50px] font-bold leading-tight mt-3">
                Grow up your skills by <br />
                online courses with <br />
                <span className="text-[#01767B]">Onlearning</span>
              </h1>

              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <button className="bg-[#FD661F] py-3 px-6 rounded-lg text-white font-semibold cursor-pointer">
                  Explore Path
                </button>
                <div className="flex -space-x-4">
                  <img
                    src={assets.user_1}
                    alt=""
                    className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src={assets.user_2}
                    alt=""
                    className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src={assets.user_3}
                    alt=""
                    className="w-[40px] h-[40px] object-cover rounded-full border-2 border-white"
                  />
                </div>
                <div>
                  <div>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">(10k Reviews)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Man Image and Floating Boxes */}
            <div className=" hidden md:flex relative">
              {/* Floating Calendar Card */}
              <div className="absolute left-20 bottom-[120px] z-20">
                <div className="hidden md:flex items-center bg-white/80 rounded-xl shadow-lg px-6 py-4">
                  <div className="bg-[#23BDEE] p-3 rounded-lg">
                    <img
                      src={assets.calendar}
                      alt="Calendar"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-[18px] font-semibold text-gray-800">
                      250k
                    </p>
                    <p className="text-[14px] text-gray-600">
                      Assisted Students
                    </p>
                  </div>
                </div>
              </div>

              {/* Man Image */}
              <img
                src={assets.header_img_man}
                alt="Student"
                className=" hidden md:flex md:h-[550px] object-contain relative z-10"
              />

              {/* Floating Graph Icon */}
              <div className="absolute -right-10 bottom-[100px] z-20">
                <img
                  src={assets.graph}
                  alt="Graph"
                  className="hidden md:flex md:w-[140px] md:h-[140px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[#D2E6E4] relative mt-28 md:mt-0">
            <div className="flex items-center justify-center bg-[#D2E6E4] p-3 w-[180px] h-[180px] absolute rounded-full">
              <div className="bg-[#0B7077] flex flex-col justify-center items-center p-3 w-[150px] h-[150px] m-5 absolute rounded-full z-10">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute w-[140px] h-[140px] z-0"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text
                    fill="white"
                    fontSize="24"
                    fontWeight="bold"
                    letterSpacing="3"
                  >
                    <textPath
                      href="#circlePath"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      • Explore More • Explore More • Explore More •
                    </textPath>
                  </text>
                </svg>

                <div>
                  <i className="fa-solid fa-play text-white text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
      {/* Popular Courses */}
      <LayoutWrapper>
        <PopularCourses />
      </LayoutWrapper>
    </>
  );
};

export default Header;
