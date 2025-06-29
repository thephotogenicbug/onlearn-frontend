import React from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div>
        <LayoutWrapper>
          <Navbar />
          <div>
            <div className=" flex flex-col md:flex-row md:justify-between items-center">
              <div className="mt-20">
                <p className="ml-2 text-gray-600 text-center md:text-start">
                  Get Started
                </p>
                <h1 className=" text-[20px] md:text-[60px] text-[#0B7077] text-center md:text-start font-semibold">
                  Get in touch with us. <br className="hidden md:block" /> We're
                  here to assist you.
                </h1>
              </div>
              <div>
                <div className="mt-20 flex md:flex-col space-x-10 md:space-x-0 md:space-y-10">
                  <i className="fa-brands fa-facebook text-[#0B7077] hover:text-[#0B7077]/90 text-[30px] cursor-pointer"></i>
                  <i className="fa-brands fa-instagram  text-[#0B7077] hover:text-[#0B7077]/90 text-[30px] cursor-pointer"></i>
                  <i className="fa-brands fa-x-twitter  text-[#0B7077] hover:text-[#0B7077]/90 text-[30px] cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-20">
            <div className=" grid grid-cols-1 md:grid-cols-3 space-y-15 md:space-y-0 md:space-x-10">
              <input
                type="text"
                placeholder="Your Name"
                className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
              />
              <input
                type="text"
                placeholder="Email Address"
                className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
              />
            </div>
            <div className="w-full mt-20">
              <textarea
                placeholder="Message"
                className="w-full border-b-1 border-gray-400 placeholder:text-gray-700 outline-none"
              ></textarea>
            </div>
            <div className="mt-15">
              <button className="bg-[#0B7077] w-[220px]  py-4 rounded-lg cursor-pointer text-white hover:bg-[#0B7077]/90">
                Leave us a Message <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </LayoutWrapper>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
