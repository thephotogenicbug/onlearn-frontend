import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../redux/user_authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error, token } = useSelector(
    (state) => state.user_auth
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    dispatch(userRegister(formData));
  };

  useEffect(() => {
    if (user && token) {
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, token, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 h-screen hidden md:block">
        <img
          src={assets.login_img}
          alt="Login"
          className="w-full h-full object-cover rounded-r-md"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-12">
          <h1 className="text-2xl text-center text-[#0B7077] font-semibold uppercase mb-8">
            Signup
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-200 w-full p-3 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-200 w-full p-3 rounded-lg focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-200 w-full p-3 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#0B7077] text-white p-3 rounded-lg hover:bg-[#095f63] transition cursor-pointer uppercase"
            >
              {loading ? "Please wait..." : "Signup"}
            </button>
            <p className="text-red-500 text-center">{error && error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
