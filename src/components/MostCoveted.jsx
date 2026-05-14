import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import React from "react";
import { useState } from "react";

const collections1 = [
  {
    image: assets.trouser,
    heading: "The Perfect Trouser",
    desc: "Impeccably tailored for a modern fit. The cornerstone of a versatile wardrobe.",
    linktittle: "Menswear",
    link: "/category/men",
  },
  {
    image: assets.dress,
    heading: "The Statement Dress",
    desc: "A study in modern elegance. Effortlessly transitions from work to evening.",
    linktittle: "Womenswear",
    link: "/category/women",
  },
];
const collections2 = [
  {
    image: assets.trouserfull,
    zoomimage: assets.relaxTrouser,
    desc: "Relaxed Straight-Leg Trousers",
    price: "₹78.00",
  },
  {
    image: assets.babyteefull,
    zoomimage: assets.babytee,
    desc: "Classic Cotton Bay Tee",
    price: "₹35.00",
  },
  {
    image: assets.trenchcoatfull,
    zoomimage: assets.trenchcoat,
    desc: "Classic Trench Coat",
    price: "₹260.00",
  },
  {
    image: assets.shocks1,
    zoomimage: assets.shocks,
    desc: "Ribbed Wool Socks",
    price: "₹30.00",
  },
];

const MostCoveted = () => {
  // const [hovered,setHovered] =useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="pt-24 w-full h-full">
      <h2 className="text-center text-xl sm:text-3xl font-bold tracking-tight ">
        Most Coveted
      </h2>
      {/* 1 */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:px-0 px-4 mb-8">
        {collections1.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.image} alt="image" />
            <div className="absolute sm:bottom-4 sm:left-4 bottom-2 bg-white sm:py-4 sm:px-6 sm:w-80 mx-2  p-2">
              <h3 className="capitalize font-bold text-xl  sm:text-2xl sm:pb-2 pb-1  ">
                {item.heading}
              </h3>
              <p className="text-sm sm:text-base font-semibold sm:leading-tight leading-none sm:pb-4 pb-2 ">
                {item.desc}
              </p>
              <Link
                to={item.link}
                className=" inline-block text-sm   sm:text-xl text-red-600 font-semibold hover:underline border border-[#eb2d2d] p-1 sm:px-4 sm:py-2 bg-white  text-center"
              >
                <span className="block">Shop</span>
                <span className="block">{item.linktittle}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* 2 */}
      <div
        className="flex  flex-col sm:flex-row
       justify-center items-start gap-4 sm:px-0 px-4 mb-4"
      >
        <div className="relative">
          <img src={assets.shoplook} alt="shoplook" className="" />
          <p className="absolute sm:top-8 sm:left-8 top-0 left-0 font-semibold text-2xl sm:text-5xl text-white pl-8 pt-8  sm:leading-tight">
            Shop the <br className="hidden sm:block" />
            Look
          </p>
        </div>

        <div className="flex flex-col justify-center items-start gap-8">
          {collections2.map((item, index) => (
            <div className="" key={index}>
              <div
                className="overflow-hidden w-full h-400px] sm:h-[535px] relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
              >
                <img
                  src={item.image}
                  alt="image"
                  className={`
                    absolute inset-0
                    sm:w-[600px] object-contain transition-transform duration-300  hover:scale-110
                    ${hoveredIndex===index ? "opacity-0 scale-110" :"opacity-100 scale-100"}`}
                />
                    <img
                  src={item.zoomimage}
                  alt="image"
                  className={`sm:w-[600px] object-contain transition-transform duration-300  hover:scale-110
                    ${hoveredIndex===index ?"opacity-100 scale-110": "opacity-0 scale-100"}`}
                />
              </div>
              <div className="flex justify-between  pt-2">
                <p className="font-semibold text-xl sm:text-2xl">{item.desc}</p>
                <p className="font-semibold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 3 */}
      <div className="flex flex-col sm:flex-row justify-center sm:items-center items-start sm:gap-24 gap-6 mb-16 px-4">
        <div className="max-w-3xl sm:pt-4 pt-10">
          <img src={assets.ourstory} alt="img" className="" />
        </div>
        <div className="flex flex-col sm:space-y-4 space-y-2">
          <h3 className="text-3xl sm:text-6xl font-semibold ">Our Story </h3>
          <p className="text-sm sm:text-xl font-semibold text-[#404040] leading-tight ">
            Shopora is about effortless <br className="hidden sm:block " />{" "}
            sophistication. We create the <br className="hidden sm:block " />
            foundational pieces that simplify <br className="hidden sm:block" />
            dressing, so you can focus on what{" "}
            <br className="hidden sm:block" />
            matters most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MostCoveted;
