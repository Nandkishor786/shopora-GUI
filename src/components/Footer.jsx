import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const appData = [
  {
    Image: assets.facebook,
    link: "https://www.facebook.com/",
  },
  {
    Image: assets.instagram,
    link: "https://www.instagram.com/",
  },
  {
    Image: assets.whatsapp,
    link: "https://web.whatsapp.com/",
  },
  {
    Image: assets.gmail,
    link: "nandkishorpal0404@gmail.com",
  },
  {
    Image: assets.linkedin,
    link: "https://www.linkedin.com/in/nandkishor-pal",
  },
  {
    Image: assets.github,
    link: "https://github.com/Nandkishor786",
  },
];

const shopData = [
  {
    title: "All Products",
    link: "/category/all-products",
  },
  {
    title: "Women",
    link: "/category/women",
  },
  {
    title: "Men",
    link: "/category/men",
  },
  {
    title: "Accessories",
    link: "/category/accessories",
  },
  {
    title: "Search Results",
    link: "/search",
  },
];

const helpData = [
  {
    title: "Privacy Policy",
  },
  {
    title: "Terms & Conditions",
  },
  {
    title: "Shipping & Returns",
  },
  {
    title: "Contact Us",
  },
  {
    title: "FAQ",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 px-2 border-t py-6">
      {/* 1 */}
      <div className="sm:flex items-start justify-start sm:gap-8  gap-12 border-b grid grid-cols-1 pb-3">
        {/* apps */}
        <div className="flex flex-col justify-center items-center gap-8 px-8">
          <img src={assets.Shopora} alt="logo" className="w-28 " />
          <div className="flex justify-start items-center gap-4">
            {appData.map((item, index) => (
              <Link to={item.link} key={index}>
                <img src={item.Image} alt="image" className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
        {/* shops */}
        <div className="sm:border-l pl-10 pr-24">
          <h3 className=" text-xl sm:text-2xl font-semibold pb-4">SHOP</h3>
          <div className="flex flex-col justify-start sm:gap-4 gap-2 ">
            {shopData.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="text-sm sm:text-lg font-semibold hover:underline"
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* helps and legal */}
        <div className="sm:border-x pl-8 pr-24 ">
          <h3 className="text-xl sm:text-2xl font-semibold pb-4">
            HELP & LEGAL
          </h3>
          <ul className=" list-disc flex flex-col justify-start sm:gap-1   pl-6">
            {helpData.map((item, index) => (
              <li key={index}>
                <Link
                  to="/"
                  className=" text:sm sm:text-lg font-semibold hover:underline text-[#404040]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* stay updated */}
        <div className="sm:pl-0 pl-8 pb-10">
          <h3 className="text-xl sm:text-2xl font-semibold  ">STAY UPDATED</h3>
        </div>
      </div>
      {/* 2 */}
      <div className="pb-10  ">
        <p className="font-semibold text-sm leading-tight sm:px-8 pl-6">
          © 2035 Shopora. Designed for the modern individual.
        </p>
      </div>
    </div>
  );
};

export default Footer;
