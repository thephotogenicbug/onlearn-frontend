import React from "react";
import Navbar from "../Navbar/Navbar";
import { assets } from "../../assets/assets";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const Header = () => {
  return (
    <div
      className="bg-[#D2E6E4] bg-no-repeat bg-top bg-fixed"
      style={{ backgroundImage: `url(${assets.swrills})` }}
    >
      <LayoutWrapper>
        <Navbar />

        <div className="flex flex-row  justify-between relative">
          {/* LEFT: Text Section */}
          <div className="mt-24">
            <button className="bg-white px-6 py-2 rounded-lg text-sm font-medium">
              Never Stop Learning
            </button>
            <h1 className="text-[#0B7077] text-[50px] font-bold leading-tight mt-3">
              Grow up your skills by <br />
              online courses with <br />
              <span className="text-[#01767B]">Onlearning</span>
            </h1>

            <div className="flex items-center gap-4 mt-6">
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
            </div>
          </div>

          {/* RIGHT: Man Image and Floating Boxes */}
          <div className="relative">
            {/* Floating Calendar Card */}
            <div className="absolute left-20 bottom-[120px] z-20">
              <div className="flex items-center bg-white/80 rounded-xl shadow-lg px-6 py-4">
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
                  <p className="text-[14px] text-gray-600">Assisted Students</p>
                </div>
              </div>
            </div>

            {/* Man Image */}
            <img
              src={assets.header_img_man}
              alt="Student"
              className="h-[550px] object-contain relative z-10"
            />

            {/* Floating Graph Icon */}
            <div className="absolute -right-10 bottom-[100px] z-20">
              <img
                src={assets.graph}
                alt="Graph"
                className="w-[140px] h-[140px] object-contain"
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Header;
