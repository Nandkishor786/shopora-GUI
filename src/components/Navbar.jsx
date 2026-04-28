import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AddShoppingCart, Menu, Close } from "@mui/icons-material";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between    items-center  max-w-7xl mx-auto sm:px-8 px-4 py-6 sticky top-0 z-10 bg-white border-b ">
        {/* logo */}
        <NavLink to="/" className="">
          <img src={assets.Shopora} alt="shopora" className="h-10" />
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="/category/all-products"
            className={({ isActive }) => `
          text-lg font-bold 
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            ALL PRODUCTS
          </NavLink>
          <NavLink
            to="/category/women"
            className={({ isActive }) => `
          text-lg font-bold 
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/category/men"
            className={({ isActive }) => `
          text-lg font-bold 
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            MEN
          </NavLink>
          <NavLink
            to="/category/accessories"
            className={({ isActive }) => `
          text-lg font-bold 
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            ACCESSORIES
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) => `
          text-lg font-bold 
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            SEARCH RESULT
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => `
          text-lg font-bold 
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            SIGN UP
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => `
          text-lg font-bold 
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            LOGIN
          </NavLink>
          <NavLink to="/cart">
            <AddShoppingCart />
          </NavLink>
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
            <NavLink
              to="/category/all-products"
              onClick={() => setOpen(false)}
              className="underline "
            >
              ALL PRODUCTS
            </NavLink>
            <NavLink
              to="/category/women"
              onClick={() => setOpen(false)}
              className="underline "
            >
              WOMEN
            </NavLink>
            <NavLink
              to="/category/men"
              onClick={() => setOpen(false)}
              className="underline "
            >
              MEN
            </NavLink>
            <NavLink
              to="/category/accessories"
              onClick={() => setOpen(false)}
              className="underline "
            >
              ACCESSORIES
            </NavLink>
            <NavLink
              to="/search"
              onClick={() => setOpen(false)}
              className="underline "
            >
              SEARCH RESULT
            </NavLink>
            <NavLink
              to="/signup"
              onClick={() => setOpen(false)}
              className="underline "
            >
              SIGN UP
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setOpen(false)}
              className="underline "
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setOpen(false)}
              className="underline "
            >
              CART
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
