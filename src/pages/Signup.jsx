import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";

import useAuth from "../hooks/useAuth";

const Signup = () => {
  const { register, loading } = useAuth();

  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="px-8 py-10 relative bg-white shadow-2xl rounded-xl space-y-4">
        {/* close button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-2 right-8 sm:top-4  sm:right-4 text-gray-500  hover:text-black"
        >
          <CloseIcon />
        </button>
        {/* top part */}
        <div className="space-y-6 text-center w-full">
          <h3 className="text-5xl font-semibold">Sign Up</h3>
          <div className="text-lg">
            <p className="inline-block">Already a member?</p>
            <Link to="/login" className="px-1 text-[#e60000]">
              Log In
            </Link>
          </div>
        </div>
        {/* form part */}
        <div className="flex flex-col items-center gap-4 w-[300px] px-4">
          <div className="flex flex-col w-full">
            <label className="text-base text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              disabled={loading}
              onChange={handleChange}
              className="border-0 border-b border-gray-400 outline-none focus:border-black py-1 w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-base text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              disabled={loading}
              onChange={handleChange}
              className="border-0 border-b border-gray-400 outline-none focus:border-black py-1 w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-base text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              disabled={loading}
              onChange={handleChange}
              className="border-0 border-b border-gray-400 outline-none focus:border-black py-1 w-full"
            />
          </div>
          <Button type="submit" loading={loading} onClick={handleSubmit}>
            Sign Up
          </Button>
        </div>
        {/* google part */}
        <div className="w-[300px]">
          <div className="w-full flex items-center gap-3">
            <div className=" flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-700 text-base">or sign up with </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-center gap-6 pt-4">
            <button className="cursor-pointer hover:scale-110 transition-all duration-300">
              <FcGoogle size={30} />
            </button>
            <button className="cursor-pointer hover:scale-110 transition-all duration-300">
              <FaFacebook size={30} color="#1877F2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
