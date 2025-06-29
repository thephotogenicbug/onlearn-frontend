import React, { useRef } from "react";
import { assets } from "../../assets/assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Bundles = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className=" mt-24 flex justify-center items-center">
        <div className=" flex flex-col text-center items-center">
          <h1 className=" text-[30px] md:text-[40px] text-[#0B7077] font-bold ">
            Exclusive Bundles
          </h1>
          <p className=" mt-5 text-gray-400 text-[18px] text-center md:text-2xl font-light text-wrap">
            Onlearing is one powerful online software suite that combines all
            the tools <br className="hidden md:block" /> needed to run a
            successful school or office.
          </p>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" flex flex-row items-center justify-center mt-15">
              <div className="  flex flex-row items-start justify-center space-x-2 bg-[#FFFFFF] rounded-lg shadow-xl">
                <div>
                  <img
                    src={assets.bundle_course}
                    alt=""
                    className="w-[350px] rounded-l-xl "
                  />
                  <div className=" absolute  -mt-15 ml-40 ">
                    <div className=" w-[140px] h-[50px] flex flex-row justify-center items-center gap-4 p-4 bg-white shadow-lg relative rounded-full">
                      <p className="text-[#FD661F] font-bold text-xl">$350 </p>
                      <p className=" text-gray-500 line-through ">$500 </p>
                    </div>
                  </div>
                </div>
                <div className=" mt-10">
                  <p className="pl-4 text-sm text-gray-500 text-start">
                    1 - 28 July 2022
                  </p>
                  <h3 className="text-[#0B7077] text-start text-xl font-semibold p-4">
                    Product Management Basic - <br /> Course
                  </h3>
                  <p className="text-sm text-start text-gray-600 pl-4 pr-4">
                    Product Management Masterclass, you will learn with <br />{" "}
                    Sarah Johnson - Head of Product Customer Platform <br />{" "}
                    Gojek Indonesia.
                  </p>
                  <div className=" mt-2 mb-6 flex flex-row items-center justify-center w-[250px] bg-white shadow-xl rounded-full p-2 relative gap-2">
                    <div>
                      <img src={assets.course_users} alt="" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">+40 students </p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Bundles;
