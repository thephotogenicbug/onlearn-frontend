import React, { useEffect } from "react";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginAdmin } from "../../redux/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const { user, loading, error, token } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(formData));
    setSubmitted(true);
  };

  useEffect(() => {
    if (user && token && submitted) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1500);
    }
  }, [user, token, submitted, navigate]);

  useEffect(() => {
    if (error && submitted) {
      toast.error(error);
      setSubmitted(false);
    }
  }, [error, submitted]);

  return (
    <div>
      <LayoutWrapper>
        <div className="h-screen flex items-center justify-center p-5">
          <div className=" bg-white shadow-lg max-w-screen p-4 m-5 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-7">
                <h1 className=" text-[#0B7077] text-center font-semibold text-xl uppercase">
                  Admin Login
                </h1>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="bg-gray-300/40 h-[48px] p-4  rounded-lg outline-[#0B7077]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  required
                  className="bg-gray-300/40 h-[48px] p-4 rounded-lg outline-[#0B7077]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0B7077] text-white  py-2.5 rounded-lg cursor-pointer hover:bg-[#0B7077]/90 uppercase"
                >
                  {loading ? "Logging in" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Login;
