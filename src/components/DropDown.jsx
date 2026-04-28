import React, { useState } from "react";
import { assets } from "../assets/assets";

const DropDown = ({ options , text="Sort By:",onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Recommended");

  return (
    <div className="relative ">
      {/* buttons */}
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 font-semibold text-sm hover:text-gray-600 transition-colors duration-100 cursor-pointer">
        <span className="inline-block">{text} {selected}</span>
        <img
          src={assets.dropdown} 
          alt="dropdown"
          className={`w-5 h-5 inline-block transition-transform ${open ? "rotate-180 " : ""}`}
        />
      </button>
      {/* menu */}
      {open && (
        <div className="absolute right-0 w-52  my-2 flex flex-col justify-start items-start  py-4 bg-white border border-gray-300 z-50 shadow-lg shadow-gray-300 rounded-none">
          {options.map((item, index) => (
            <p className={`text-sm font-semibold w-full  hover:bg-[#efefef] cursor-pointer px-4 py-1 ${selected ===item  ? "bg-[#e0e0e0]" :" "}`} key={index}
            onClick={()=>{
              setSelected(item);
              setOpen(false);
              onSelect && onSelect(item);//connect with products grid
            }}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
