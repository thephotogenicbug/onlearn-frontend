import React from "react";
import { assets } from "../../assets/assets";

const StudentId = () => {
  return (
    <div className=" mt-36 ">
      <div className=" flex flex-col md:flex-row justify-between items-center  md:items-start">
        <div className="space-y-8">
          <div className=" flex justify-center items-center md:items-start md:justify-start">
            <button className=" bg-[#F5F5F5] w-32 py-2.5   text-[#0B7077] cursor-pointer rounded-lg">
              Benefits
            </button>
          </div>
          <h1 className="text-[#0B7077] text-[30px] text-center md:text-start md:text-[44px] font-bold">
            Get Student ID card
          </h1>
          <div className=" flex flex-col items-start space-y-14">
            <div className=" flex flex-row items-center justify-between gap-4 ">
              <div className="p-4 bg-[#FBFBFB] rounded-full shadow-lg">
                <img
                  src={assets.student_id_icon_1}
                  className=" w-[25px] object-cover "
                  alt=""
                />
              </div>
              <div>
                <p className=" text-gray-500 text-[18px]">
                  Teachers don’t get lost in the grid view and have a <br />{" "}
                  dedicated Podium space.
                </p>
              </div>
            </div>
            <div className=" flex flex-row items-center justify-between gap-4 ">
              <div className="p-4 bg-[#FBFBFB] rounded-full shadow-lg">
                <img
                  src={assets.student_id_icon_2}
                  className=" w-[25px] object-cover "
                  alt=""
                />
              </div>
              <div>
                <p className=" text-gray-500 text-[18px]">
                  TA’s and presenters can be moved to the front of <br /> the
                  class.
                </p>
              </div>
            </div>
            <div className=" flex flex-row items-center justify-between gap-4 ">
              <div className="p-4 bg-[#FBFBFB] rounded-full shadow-lg">
                <img
                  src={assets.student_id_icon_3}
                  className=" w-[25px] object-cover "
                  alt=""
                />
              </div>
              <div>
                <p className=" text-gray-500 text-[18px]">
                  Teachers can easily see all students and class data <br /> at
                  one time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center w-[300px] h-[300px] md:w-[600px] md:h-[450px] bg-[#D2E6E4] rounded-lg mt-10 md:mt-0 ">
          <img
            src={assets.student_id}
            className=" w-[250px] md:w-[450px] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default StudentId;
