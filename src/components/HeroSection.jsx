import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full h-full sm:mb-24 mb-20 flex flex-col bg-[#e8e8e8] sm:bg-white sm:relative ">
      {/* bgimage */}
      <img
        src={assets.herofashion}
        alt="herofashion"
        className="w-full  sm:pt-0 pt-2 sm:px-0 px-4"
      />
      {/* bag image      */}
      <div className="sm:absolute sm:right-16 h-full sm:bg-[#f5f5f5] bg-white sm:px-8 mx-4 flex flex-col sm:justify-between sm:items-center pb-4">
        <img
          src={assets.herobag}
          alt="shoppingbag"
          className="w-80 h-auto p-4 sm:p-0"
        />
        {/* sales text */}
        <div className="sm:absolute sm:-right-16 sm:bottom-4 sm:space-y-4 pl-4 ">
          <h2 className=" text-xl sm:text-3xl font-semibold sm:text-[#e60000]">
            Mid-Season Sale
          </h2>
          <p className="text-sm sm:text-lg text-[#0a0a0a] font-semibold leading-tight mb-6 pt-2">
            Up to 40% Off select core collections. <br /> Essential styles for a
            limited time.
          </p>
          <Link
            to="/"
            className="text-sm sm:text-base font-semibold underline text-red-600  sm:pl-0 pl-24"
          >
            Shop Now
          </Link>
        </div>
      </div>
      {/* hero text  */}
      <div className="pt-10 pb-16 pl-5 pr-4 sm:py-2 sm:pl-0 space-y-2   "> 
        <h2 className="text-2xl sm:text-7xl font-semibold  ">
          Style, Redefined
        </h2>
        <p className="sm:text-[#2f2f2f] sm:text-base text-sm text-black font-semibold leading-tight ">
          Uncomplicated, essential pieces you'll reach for again and again.{" "}
          <br className="hidden sm:block" />
          High-contrast designs for the modern individual.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
