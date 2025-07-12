import React from "react";
import { assets } from "../assets/assets";
import SideBar from "../components/SideBar/SideBar";

const Dashboard = () => {
  return (
    <div>
      <div className=" flex flex-row ">
        <SideBar />
        <div>
          <div className=" mt-20">
            <div className=" flex flex-row items-center space-x-5 ">
              <img src={assets.user_1} className=" w-14" />
              <div>
                <h1 className="text-[16px] font-medium">Welcome John Doe</h1>
                <p className=" text-[13px] font-light">
                  Here overview of your courses
                </p>
              </div>
            </div>
            <div className=" mt-10">
              <div className=" grid grid-cols-1 md:grid-cols-4 place-items-center  gap-x-10 gap-y-5">
                <div className=" w-[260px] h-[120px] shadow-gray-200 shadow-lg  rounded-lg p-4 ">
                  <div className=" flex justify-between items-center mt-2 ">
                    <h1 className=" font-semibold text-gray-600">
                      Total Courses
                    </h1>
                    <div className=" bg-gray-700 px-2 py-1 rounded-lg text-white">
                      <i className="fa-solid fa-book-open"></i>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <p className=" text-gray-600 font-medium">2</p>
                  </div>
                </div>
                <div className="  w-[260px] h-[120px] shadow-gray-200 shadow-lg  rounded-lg p-4 ">
                  <div className=" flex justify-between items-center mt-2 ">
                    <h1 className=" font-semibold text-gray-600">
                      Total Enrolled
                    </h1>
                    <div className=" bg-gray-700 px-2 py-1 rounded-lg text-white">
                      <i className="fa-solid fa-person-circle-plus"></i>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <p className=" text-gray-600 font-medium">1</p>
                  </div>
                </div>
                <div className=" w-[260px] h-[120px] shadow-gray-200 shadow-lg  rounded-lg p-4 ">
                  <div className=" flex justify-between items-center mt-2 ">
                    <h1 className=" font-semibold text-gray-600">
                      Total Completed
                    </h1>
                    <div className=" bg-gray-700 px-2 py-1 rounded-lg text-white">
                      <i className="fa-solid fa-list-ul"></i>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <p className=" text-gray-600 font-medium">1</p>
                  </div>
                </div>
                <div className=" w-[260px] h-[120px] shadow-gray-200 shadow-lg  rounded-lg p-4 ">
                  <div className=" flex justify-between items-center mt-2 ">
                    <h1 className=" font-semibold text-gray-600">
                      Total Students
                    </h1>
                    <div className=" bg-gray-700 px-2 py-1 rounded-lg text-white">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <p className=" text-gray-600 font-medium">10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
