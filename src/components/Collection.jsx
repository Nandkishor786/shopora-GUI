import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "Men",
    image: assets.menshop,
    link: "/category/men",
  },
    {
    title: "Accessories",
    image: assets.accessoriesshop,
    link: "/category/accessories",
  },
  {
    title: "Women",
    image: assets.womenshop,
    link: "/category/women",
  },

];
const Collection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">

      <div className="text-center">
        <h3 className="text-xl sm:text-3xl font-bold leading-tight  pb-2 sm:pb-0">
          The <br className="hidden sm:block"/>
          Collections
        </h3>
        <p className="text-sm sm:text-lg font-semibold sm:leading-snug leading-none sm:pt-3">
          Explore our latest arrivals in men <br /> woman and accessories.
        </p>
      </div>
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-3  gap-4 sm:px-0 p-4">
        {collections.map((item, index) => (
          <div className="relative" key={index}>
            <img src={item.image} alt={item.title} className="w-full" />
            <Link
              to={item.link}
              className="absolute top-0  text-xl text-red-600 font-semibold hover:underline border border-[#eb2d2d] px-4 py-2 bg-white m-4 text-center"
            >
              <span>
                Shop <br />
                {item.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
