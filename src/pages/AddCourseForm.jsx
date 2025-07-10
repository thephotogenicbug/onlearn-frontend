import React from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";

const AddCourseForm = () => {
  return (
    <div>
      <LayoutWrapper>
        <div>
          <div className=" flex flex-col md:flex-row md:justify-center items-center">
            <div className="mt-20">
              <p className="ml-2 text-gray-600 text-center">Form</p>
              <h1 className=" text-[20px] md:text-[30px] text-[#0B7077] text-center font-semibold">
                Add New Courses
              </h1>
            </div>
            <div></div>
          </div>
        </div>
        <form>
          <div className=" mt-20">
            <div className=" grid grid-cols-1 md:grid-cols-3 space-y-15 md:space-y-0 md:space-x-10">
              <input
                type="text"
                placeholder="Course Name"
                className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
              />
              <input
                type="text"
                placeholder="Course Description"
                className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
              />
              <input
                type="number"
                placeholder="Course Price"
                className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
              />
            </div>
            <div className=" mt-20">
              <div className=" grid grid-cols-1 md:grid-cols-3 space-y-15 md:space-y-0 md:space-x-10">
                <input
                  type="number"
                  placeholder="Course Base Price"
                  className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
                />
                <input
                  type="text"
                  placeholder="Img url"
                  className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
                />
              </div>
            </div>

            <div className="mt-15 flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#0B7077] text-[12px] px-4   py-3 rounded-lg cursor-pointer text-white hover:bg-[#0B7077]/90"
              >
                Submit <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </form>
      </LayoutWrapper>
    </div>
  );
};

export default AddCourseForm;
