import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const [sideBarAction, setSideBarAction] = useState(true);

  return (
    <div
      className={`p-3  shadow-lg  h-screen   mr-10 ${
        sideBarAction === true ? "w-[100px]" : "w-[300px]"
      }`}
    >
      <div
        className={` p-3 flex flex-row ${
          sideBarAction ? "justify-center" : "justify-between"
        }`}
      >
        {!sideBarAction ? (
          <img src={assets.logo} className="w-40 object-contain " />
        ) : null}
        <button onClick={() => setSideBarAction(!sideBarAction)}>
          <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
        </button>
      </div>
      <div>
        <ul
          className={`flex flex-col ${
            sideBarAction
              ? "justify-center items-center space-y-4  ml-2.5"
              : "justify-center items-start space-y-4 "
          } `}
        >
          <li className=" w-full  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <Link to="/admin/dashboard">
              <i className="fa-solid fa-house mr-2"></i>
              <span>{sideBarAction ? null : " Dashboard"}</span>
            </Link>
          </li>
          <li className="  w-full hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <Link to="/admin/add-course">
              <i className="fa-solid fa-shapes mr-2"></i>
              <span>{sideBarAction ? null : " Add New Course"}</span>
            </Link>
          </li>
          <li className="  w-full hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-user-graduate mr-2"></i>
            <span>{sideBarAction ? null : "View Courses"}</span>
          </li>

          <li className="  w-full hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-arrows-to-eye mr-2"></i>
            <span>{sideBarAction ? null : "Assessments"}</span>
          </li>
          <li className="  w-full hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-certificate mr-2"></i>
            <span>{sideBarAction ? null : "Certifications"}</span>
          </li>
          <li className="  w-full hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-tarp-droplet mr-2"></i>
            <span>{sideBarAction ? null : "Projects"}</span>
          </li>

          <li className=" w-full  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
            <span>{sideBarAction ? null : "Logout"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
