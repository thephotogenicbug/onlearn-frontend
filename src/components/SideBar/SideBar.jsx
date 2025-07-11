import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const SideBar = () => {
  return (
    <div className=" p-3  shadow-lg  h-screen  w-[250px] mr-10">
      <div className=" p-3">
        <img src={assets.logo} className="w-40 object-contain " />
      </div>
      <div>
        <ul className=" space-y-4">
          <li className="  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <Link to="/admin/dashboard">
              <i className="fa-solid fa-house mr-2"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <Link to="/admin/add-course">
              <i className="fa-solid fa-shapes mr-2"></i>
              <span>Add New Course</span>
            </Link>
          </li>
          <li className="  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-user-graduate mr-2"></i>
            <span>View Courses</span>
          </li>

          <li className="  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-arrows-to-eye mr-2"></i>
            <span>Assessments</span>
          </li>
          <li className="  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-certificate mr-2"></i>
            <span>Certifications</span>
          </li>
          <li className="  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-tarp-droplet mr-2"></i>
            <span>Projects</span>
          </li>
          <li className="  hover:bg-gray-200  py-3.5 px-4 rounded-lg cursor-pointer  ">
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
