import React from "react";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute -top-[50px] left-0 w-full overflow-hidden leading-[0] z-[1]">
          <svg
            className="w-full h-[60px] hidden md:block"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#D2E6E4"
              d="M0,220 C60,160 1080,0 1440,96 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
        <div className="mt-26 w-full bg-[#D2E6E4] max-h-screen p-15 z-[2] relative">
          <LayoutWrapper>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center ">
              <div className="flex flex-col">
                <div>
                  <img src={assets.logo} className="w-48 object-cover" alt="" />
                </div>
                <div className="mt-8">
                  <p className="text-[#0B7077] font-semibold">
                    <i className="fa-solid fa-location-dot" />
                    <span className="ml-2">Address:</span>
                  </p>
                  <p className="text-[#0B7077] font-medium mt-2 ml-6">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit,
                  </p>
                  <p className="text-[#0B7077] font-medium mt-5">
                    <i className="fa-solid fa-phone" />
                    <span className="ml-2">Tel :+9229341037</span>
                  </p>
                  <p className="text-[#0B7077] font-medium mt-5">
                    <i className="fa-solid fa-clock" />
                    <span className="ml-2">Response hours: 8 to 20</span>
                  </p>
                  <p className="text-[#0B7077] font-medium mt-5">
                    <i className="fa-solid fa-envelope" />
                    <span className="ml-2">Email: info@onlearn.com</span>
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mt-0">
                <p className="font-semibold">Categories</p>
                <p className="mt-2 text-[#0B7077] cursor-pointer hover:text-[#0B7077]/80">
                  Counseling
                </p>
                <p className="mt-2 text-[#0B7077] cursor-pointer hover:text-[#0B7077]/80">
                  Health and fitness
                </p>
                <p className="mt-2 text-[#0B7077] cursor-pointer hover:text-[#0B7077]/80">
                  Individual development
                </p>
              </div>

              <div className="mt-5 md:mt-0">
                <p className="font-semibold ">Links</p>
                <p className="mt-2 text-[#0B7077] cursor-pointer hover:text-[#0B7077]/80">
                  About us
                </p>
                <p className="mt-2 text-[#0B7077] cursor-pointer hover:text-[#0B7077]/80">
                  blog
                </p>
              </div>

              <div className="w-full max-w-md mt-5 md:mt-0">
                <h3 className="text-gray-700 text-center  mb-4">
                  Stay up to date with the latest courses
                </h3>

                <form className="flex flex-col gap-3 md:relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[50px] w-full px-4 pr-[100px] bg-white rounded-lg outline-none shadow-md text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="h-[40px] px-5 bg-[#0B7077] text-white rounded-lg font-semibold hover:bg-[#095e62] transition cursor-pointer 
        md:absolute md:right-2 md:top-1.5"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </LayoutWrapper>
          <img
            src={assets.gift_card_header_swrill}
            alt="swirl"
            className="absolute bottom-0 right-0 w-full max-w-[500px] md:max-w-[600px] object-contain z-10 pointer-events-none"
          />
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 " />

          <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4 gap-4 text-center">
            <div className="flex gap-4">
              <div>
                <i className="fa-brands fa-instagram text-[24px] text-[#0B7077] hover:text-[#0B7077]/70 cursor-pointer"></i>
              </div>
              <div>
                <i className="fa-brands fa-facebook text-[24px] text-[#0B7077] hover:text-[#0B7077]/70 cursor-pointer"></i>
              </div>
              <div>
                <i className="fa-brands fa-x-twitter text-[24px] text-[#0B7077] hover:text-[#0B7077]/70 cursor-pointer"></i>
              </div>
            </div>
            <div className="text-sm text-[#0B7077]">
              <p>
                &copy; {new Date().getFullYear()} thephotogenicbug. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
