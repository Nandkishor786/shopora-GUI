import { Add } from "@mui/icons-material";
import React from "react";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="cursor-pointer "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* img */}
      <div className="relative overflow-hidden h-[300px] sm:h-[550px]">
        <img
          src={hovered ? item.hoverImage : item.image}
          alt="img"
          className="object-cover transition-all duration-500 w-full h-full "
        />
        <button className="absolute bottom-6 right-6 bg-white p-2 ">
          <Add className="text-black font-bold h-5 w-5" />
        </button>   
      </div>
      {/* text */}
      <div className="flex justify-between items-center pt-2">
        <p className="font-semibold text-2xl">{item.name}</p>
        <p className="font-semibold text-[#404040] text-base">₹{item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
