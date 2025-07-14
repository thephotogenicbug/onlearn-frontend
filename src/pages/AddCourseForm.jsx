import React, { useCallback, useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewCourse, resetCourseState } from "../../redux/courseSlice";

const AddCourseForm = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const { course, loading, error } = useSelector((state) => state.course);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]); // This is the actual File object
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const SubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("coursename", courseName);
    formData.append("coursedesc", description);
    formData.append("baseprice", basePrice);
    formData.append("price", discountedPrice);
    formData.append("image", image);

    dispatch(createNewCourse(formData));
  };

  useEffect(() => {
    if (course) {
      toast.success("Course Submitted Successfully");
      setCourseName("");
      setDescription("");
      setBasePrice("");
      setDiscountedPrice("");
      setImage();
    }
  }, [course]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <div className=" flex flex-row ">
        <SideBar />

        <div className=" mt-20 w-full">
          <div className=" mb-5">
            <p className="ml-2 text-gray-600 ">Form</p>
            <h1 className=" text-[20px] md:text-[30px] text-[#0B7077] font-semibold">
              Add New Courses
            </h1>
          </div>
          <form onSubmit={SubmitForm}>
            <div className=" mt-20">
              <div className=" grid grid-cols-1 md:grid-cols-3 space-y-15 md:space-y-0 md:space-x-10 ">
                <input
                  type="text"
                  placeholder="Course Name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
                />
                <input
                  type="number"
                  placeholder="Course Base Price"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                  className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
                />
                <input
                  type="number"
                  placeholder="Discounted Price"
                  value={discountedPrice}
                  onChange={(e) => setDiscountedPrice(e.target.value)}
                  className=" border-b-1 border-gray-400 placeholder:text-gray-600 outline-none"
                />
              </div>
              <div className=" mt-20">
                <div className=" grid grid-cols-1 md:grid-cols-1 space-y-15 md:space-y-0 md:space-x-10 ">
                  <textarea
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className=" w-full  border-b-1 border-gray-400 placeholder:text-gray-600 outline-none "
                  ></textarea>
                </div>
              </div>
              <div className=" mt-20">
                <div className=" flex justify-center items-center space-y-15 md:space-y-0 md:space-x-10 ">
                  <div
                    {...getRootProps()}
                    className="border-2 p-10 border-dashed rounded-md text-center"
                  >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the image here...</p>
                    ) : image ? (
                      <p>Selected file: {image.name}</p>
                    ) : (
                      <p>Drag & drop an image here, or click to select</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-15 flex ">
                <button
                  type="submit"
                  className="bg-[#0B7077] text-[12px] px-4   py-3 rounded-lg cursor-pointer text-white hover:bg-[#0B7077]/90"
                >
                  {loading ? "Please wait" : "Submit"}{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;
