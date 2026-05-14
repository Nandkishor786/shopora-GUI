import React from "react";
import { assets } from "../assets/assets";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-end overflow-hidden bg-white w-full h-full pb-8">
      {/* bg banner */}
      <div className="absolute inset-0">
        <img
          src={assets.herofashion}
          alt="banner"
          className="w-full h-full object-cover blur-xl scale-110 opacity-60"
        />
      </div>
      {/* overlays */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-md"></div>

      {/* content */}
      <div className="relative  flex flex-col items-center justify-between  h-[400px] font-mono px-4">
        {/* top */}
        <div className="text-center space-y-8 ">
          <h1 className="text-2xl sm:text-3xl font-medium">
            {" "}
            Shop Smarter with Shopora
          </h1>
          <p className="text-sm sm:text-base">
            Discover premium products, seamless <br />shopping experiences, and
            modern ecommerce solutions designed for the next generation.
          </p>
        </div>
        {/* miidle   */}
        <div className="flex gap-4 w-full items-center justify-center ">
          <div className="w-20 h-20 border-8 text-[#4a0101] text-4xl animate-spin  flex items-center justify-center rounded-full border-t-[#4a0101]">
            <img src="/shopora.png" alt="" />
          </div>

        </div>
        {/* down */}
        <div className="text-center space-y-4">
          {/* logo */}
          <h2 className="text-lg font-mono">Shopora</h2>
          {/* loading line */}
          <div className=" h-2 w-[200px] bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-black animate-loading"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
