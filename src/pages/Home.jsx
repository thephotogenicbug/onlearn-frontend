import React from "react";
import HomeComponent from "../components/Home/HomeComponent";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import PopularCourses from "../components/PopularCourses/PopularCourses";
import CoursesCategory from "../components/CoursesCategory/CoursesCategory";
import StudentId from "../components/StudentId/StudentId";
import StaffTraining from "../components/StaffTraining/StaffTraining";
import GiftCard from "../components/GiftCard/GiftCard";
import Bundles from "../components/Bundles/Bundles";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <LayoutWrapper>
        <PopularCourses />
        <CoursesCategory />
        <StudentId />
        <StaffTraining />
        <GiftCard />
        <Bundles />
      </LayoutWrapper>
      <Footer />
    </div>
  );
};

export default Home;
