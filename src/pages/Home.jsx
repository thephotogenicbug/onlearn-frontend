import React from "react";
import Header from "../components/Header/Header";
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
      <Header />
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
