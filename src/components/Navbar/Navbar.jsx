import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = (navbar) => {
    setNavbar(navbar);
  };

  return (
    <>
      <div className=" w-full flex flex-row justify-between p-5 items-center">
        <div>
          <img src={assets.logo} alt="" className=" h-[2.5rem]" />
        </div>
        <ul className=" hidden md:flex flex-row space-x-10 font-medium">
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
        <div className=" hidden md:flex flex-row space-x-10 px-10">
          <Link to="/admin/login">
            <button className="bg-white text-[#0B7077] px-8 py-3 rounded-lg uppercase cursor-pointer hover:bg-white/80">
              Log in
            </button>
          </Link>
          <Link to="/admin/signup">
            <button className=" bg-[#0B7077] px-8 py-3 rounded-lg text-white uppercase cursor-pointer hover:bg-[#0B7077]/90">
              Sign up
            </button>
          </Link>
        </div>
        <div className=" flex md:hidden  items-center">
          {navbar ? (
            <i
              onClick={() => handleNavbar(!navbar)}
              className="fa-solid fa-xmark text-3xl cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={() => handleNavbar(!navbar)}
              className="fa-solid fa-bars text-3xl cursor-pointer"
            ></i>
          )}{" "}
        </div>
      </div>
      {navbar ? (
        <div className="flex md:hidden  w-full bg-white p-4 rounded-lg  ">
          <ul className=" flex flex-col space-x-10 font-medium space-y-4">
            <li className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]">
              <i className="fa-solid fa-circle-chevron-right "></i>
              <a className="cursor-pointer hover:text-[#FD661F]">Home</a>
            </li>
            <li className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]">
              <i className="fa-solid fa-circle-chevron-right "></i>
              <a className="cursor-pointer">Careers</a>
            </li>
            <li className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]">
              <i className="fa-solid fa-circle-chevron-right "></i>
              <a className="cursor-pointer">Blogs</a>
            </li>
            <li className="flex items-center gap-2 pl-4 text-gray-600 hover:text-[#FD661F]">
              <i className="fa-solid fa-circle-chevron-right "></i>
              <a className="cursor-pointer">About Us</a>
            </li>
            <div className=" flex flex-wrap ml-5 justify-center  items-center ">
              <div>
                <Link to="/admin/login">
                  <button className=" mb-5 w-full bg-[#0B7077] text-white px-8 py-3 rounded-lg uppercase cursor-pointer hover:bg-[#0B7077]/90">
                    Log in
                  </button>
                </Link>
                <Link to="/admin/signup">
                  <button className=" w-full bg-[#0B7077] text-white px-8 py-3 rounded-lg uppercase cursor-pointer hover:bg-[#0B7077]/90">
                    Signup
                  </button>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
