import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import ProductGrid from "../components/product/ProductGrid";
import { assets } from "../assets/assets";

const linksData = [
  {
    title: "All Products",
    link: "/category/all-products",
  },
  {
    title: "Men",
    link: "/category/men",
  },
  {
    title: "Women",
    link: "/category/women",
  },
  {
    title: "Accessories",
    link: "/category/accessories",
  },
];

const topData = {
  "/category/all-products": "All Products",
  "/category/men": "Men",
  "/category/women": "Women",
  "/category/accessories": "Accessories",
};

const CategoryLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-7xl  flex flex-col justify-start items-start gap-16 py-8 mb-20 px-4">
      {/* top */}
      <div className="space-y-2">
        <h3 className="text-3xl font-semibold">{topData[pathname]}</h3>
        <p
          className="text-base font-semibold text-black leading-tight
        "
        >
          This is your category description. It’s a great place to tell
          customers what this category is about, <br /> connect with your
          audience and draw attention to your products
        </p>
      </div>
      {/* bottom*/}
      <div className="flex flex-col sm:flex-row justify-start items-start gap-6 w-full">
        {/* sidebar */}
        <div className="w-full lg:w-1/6 pr-8">
          <h3 className="text-2xl font-semibold pb-4 border-b ">Browse by</h3>
          {/* links */}
          <div className="flex flex-col gap-3 pt-4">
            {linksData.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                className={({ isActive }) =>
                  `text-base font-semibold ${isActive ? "underline underline-offset-4 decoration-1 " : "hover:underline"}
                `
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
        {/* products grid */}
        <div className=" w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
