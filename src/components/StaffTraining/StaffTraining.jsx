import React from "react";
import { assets } from "../../assets/assets";

const StaffTraining = () => {
  return (
    <div className=" mt-36 ">
      <div className=" flex flex-col md:flex-row justify-between items-center  md:items-start">
        <div className=" flex justify-center items-center w-[300px] h-[300px] md:w-[500px] md:h-[550px] mt-10 md:mt-0 ">
          <img
            src={assets.staff_training}
            className=" w-[300px] md:w-[500px] object-cover"
            alt=""
          />
        </div>
        <div className="space-y-8">
          <div className=" flex justify-center items-center md:items-start md:justify-start">
            <button className=" bg-[#F5F5F5] w-32 py-2.5   text-[#0B7077] cursor-pointer rounded-lg">
              Training
            </button>
          </div>
          <h1 className="text-[#FD661F] text-[30px] text-center md:text-start md:text-[44px] font-bold">
            Staff training
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
      </div>
    </div>
  );
};

export default StaffTraining;
