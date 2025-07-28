import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 h-screen hidden md:block">
        <img
          src={assets.login_signup}
          alt="Login"
          className="w-full h-full object-cover  p-4  rounded-3xl"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-6 py-12">
          <h1 className="text-2xl text-center text-[#0B7077] font-semibold uppercase mb-8">
            Signup
          </h1>

          <form className="space-y-6">
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
              Signup
            </button>
            <p className="text-center">
              Already have an account ?{" "}
              <Link to="/login">
                <span className="text-[#0B7077] underline">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
