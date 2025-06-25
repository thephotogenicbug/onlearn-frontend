import React from "react";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className=" w-full flex flex-row justify-between p-5 items-center">
      <div>
        <img src={assets.logo} alt="" className=" h-[2.5rem]" />
      </div>
      <ul className=" flex flex-row space-x-10 font-semibold">
        <li>
          <a className="cursor-pointer hover:text-[#FD661F]">Home</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-[#FD661F]">Careers</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-[#FD661F]">Blogs</a>
        </li>
        <li>
          <a className="cursor-pointer hover:text-[#FD661F]">About Us</a>
        </li>
      </ul>
      <div className=" flex flex-row space-x-10 px-10">
        <button className="bg-white text-[#0B7077] px-8 py-3 rounded-lg uppercase cursor-pointer hover:bg-white/80">
          Log in
        </button>
        <button className=" bg-[#0B7077] px-8 py-3 rounded-lg text-white uppercase cursor-pointer hover:bg-[#0B7077]/90">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
