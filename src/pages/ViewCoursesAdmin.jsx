import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourseAdmin, getCoursesAdmin } from "../../redux/courseSlice";
import { toast } from "react-toastify";
const ViewCoursesAdmin = () => {
  const dispatch = useDispatch();
  const { courses, error, loading } = useSelector((state) => state.course);

  const handleDelete = (course) => {
    dispatch(deleteCourseAdmin(course._id));
  };

  useEffect(() => {
    dispatch(getCoursesAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <div className=" flex flex-row">
        <SideBar />
        <div className=" mt-20 w-full  mr-5">
          <h1 className=" text-[20px] md:text-[30px] text-[#0B7077] font-semibold">
            View Added Courses
          </h1>

          <div class="relative overflow-x-auto mt-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-300 ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Thumbnail
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Course Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Base Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Discounted Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    No of Students
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses?.map((course) => {
                  return (
                    <tr
                      className=" text-gray-600 font-medium text-[16px]"
                      key={course._id}
                    >
                      <td className="px-6 py-4">
                        <img src={course.image} className=" w-20 mb-2 mt-5" />
                      </td>
                      <td className="px-6 py-4">{course.courseName}</td>
                      <td className="px-6 py-4">{course.Baseprice}</td>
                      <td className="px-6 py-4">{course.price}</td>
                      <td className="px-6 py-4">{course.noOfStudents}</td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-trash text-red-500 cursor-pointer"
                          onClick={() => handleDelete(course)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCoursesAdmin;
