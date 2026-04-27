import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddShoppingCart, Menu, Close } from "@mui/icons-material";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between    items-center  max-w-7xl mx-auto sm:px-8 px-4 py-6 sticky top-0 z-10 bg-white border-b ">

        {/* logo */}  
        <Link to="/" className="">
          <img src={assets.Shopora} alt="shopora" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/products" className="text-lg font-bold hover:underline">
            ALL PRODUCTS
          </Link>
          <Link to="/women" className="text-lg font-bold hover:underline">
            WOMEN
          </Link>
          <Link to="/men" className="text-lg font-bold hover:underline">
            MEN
          </Link>
          <Link to="/accessories" className="text-lg font-bold hover:underline">
            ACCESSORIES
          </Link>
          <Link to="/search" className="text-lg font-bold hover:underline">
            SEARCH RESULT
          </Link>
          <Link to="/signup" className="text-lg font-bold hover:underline">
            SIGN UP
          </Link>
          <Link to="/login" className="text-lg font-bold hover:underline">
            LOGIN
          </Link>
          <Link to="/cart" className="text-lg font-bold hover:underline">
            <AddShoppingCart />
          </Link>
        </div>

        {/* mobile and humberger icon */}
        <div className="md:hidden relative  ">
          {open ? (
            <Close onClick={() => setOpen(false)} />
          ) : (
            <Menu onClick={() => setOpen(true)} />
          )}
        </div>
        {/* mobile menu */}
        {open && (
          <div className="md:hidden flex flex-col justify-center items-center gap-4 bg-[#4f2323c1] absolute top-full left-0 w-full py-6  text-white cursor-pointer">
            <Link to="/products" onClick={() => setOpen(false)} className="underline ">
              ALL PRODUCTS
            </Link>
            <Link to="/women" onClick={() => setOpen(false)} className="underline ">
              WOMEN
            </Link>
            <Link to="/men" onClick={() => setOpen(false)} className="underline ">
              MEN
            </Link>
            <Link to="/accessories" onClick={() => setOpen(false)}className="underline ">
              ACCESSORIES
            </Link>
            <Link to="/search" onClick={() => setOpen(false)} className="underline ">
              SEARCH RESULT
            </Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="underline ">
              SIGN UP
            </Link>
            <Link to="/login" onClick={() => setOpen(false)} className="underline ">
              LOGIN
            </Link>
            <Link to="/cart" onClick={() => setOpen(false)} className="underline ">
              CART
            </Link>
          </div>
        )}
      </div>

     </>
  );
};

export default Navbar;
