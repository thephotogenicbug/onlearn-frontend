import React from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";

const Signup = () => {
  return (
    <div>
      <LayoutWrapper>
        <div className="h-screen flex items-center justify-center">
          <div className=" bg-white shadow-lg max-w-screen p-4 rounded-lg">
            <div className="flex flex-col space-y-7">
              <h1 className=" text-[#0B7077] text-center font-semibold text-xl uppercase">
                Admin Signup
              </h1>
              <input
                type="text"
                placeholder="Username"
                className="bg-gray-300/40 h-[48px] p-4  rounded-lg outline-[#0B7077]"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-gray-300/40 h-[48px] p-4  rounded-lg outline-[#0B7077]"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-300/40 h-[48px] p-4 rounded-lg outline-[#0B7077]"
              />
              <button className="bg-[#0B7077] text-white  py-2.5 rounded-lg cursor-pointer hover:bg-[#0B7077]/90 uppercase">
                Signup
              </button>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Signup;
