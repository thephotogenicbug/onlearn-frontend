import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
