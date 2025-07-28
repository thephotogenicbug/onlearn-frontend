import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between items-center p-5 ">
        <div>
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="h-[2.5rem]" />
          </Link>
        </div>

        <ul className="hidden md:flex flex-row space-x-10 font-medium">
          <li>
            <Link to="/" className="cursor-pointer hover:text-[#FD661F]">
              Home
            </Link>
          </li>
          <li>
            <span className="cursor-pointer hover:text-[#FD661F]">Careers</span>
          </li>
          <li>
            <span className="cursor-pointer hover:text-[#FD661F]">Blogs</span>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="cursor-pointer hover:text-[#FD661F]"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <span className="cursor-pointer hover:text-[#FD661F]">
              About Us
            </span>
          </li>
        </ul>

        <div className="hidden md:flex flex-row space-x-5 px-5">
          <Link to="/login">
            <button className="bg-white text-[#0B7077] px-6 py-2 rounded-lg uppercase hover:bg-white/80 border border-[#0B7077] cursor-pointer">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#0B7077] text-white px-6 py-2 rounded-lg uppercase hover:bg-[#0B7077]/90 cursor-pointer">
              Sign up
            </button>
          </Link>
        </div>

        <div className="flex md:hidden">
          <i
            onClick={() => setNavbar(!navbar)}
            className={`fa-solid ${
              navbar ? "fa-xmark" : "fa-bars"
            } text-2xl cursor-pointer`}
          ></i>
        </div>
      </div>

      {navbar && (
        <div className="md:hidden w-full bg-white p-6 rounded-lg shadow-lg space-y-5 z-50">
          <ul className="flex flex-col space-y-4 font-medium text-gray-700">
            <li>
              <Link
                to="/"
                onClick={() => setNavbar(false)}
                className="flex items-center gap-2 hover:text-[#FD661F]"
              >
                <i className="fa-solid fa-circle-chevron-right text-[#FD661F]"></i>
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FD661F] pl-1">
              <i className="fa-solid fa-circle-chevron-right text-[#FD661F]"></i>
              Careers
            </li>
            <li className="flex items-center gap-2 hover:text-[#FD661F] pl-1">
              <i className="fa-solid fa-circle-chevron-right text-[#FD661F]"></i>
              Blogs
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => setNavbar(false)}
                className="flex items-center gap-2 hover:text-[#FD661F]"
              >
                <i className="fa-solid fa-circle-chevron-right text-[#FD661F]"></i>
                Contact Us
              </Link>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FD661F] pl-1">
              <i className="fa-solid fa-circle-chevron-right text-[#FD661F]"></i>
              About Us
            </li>
          </ul>

          <div className="pt-4 space-y-3">
            <Link to="/login">
              <button className=" mb-5 w-full bg-[#0B7077] text-white px-5 py-3 rounded-lg uppercase hover:bg-[#0B7077]/90">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-full bg-[#0B7077] text-white px-5 py-3 rounded-lg uppercase hover:bg-[#0B7077]/90">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
