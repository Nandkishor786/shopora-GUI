import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AddShoppingCart, Menu, Close } from "@mui/icons-material";
import { assets } from "../assets/assets";
import AuthPage from "../pages/AuthPage";
import { logoutUser } from "../services/authService";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const token = localStorage.getItem("accessToken");
  const { logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="flex justify-between  items-center  w-full py-6 sticky top-0 z-10 bg-white border-b px-4 sm:px-6  ">
        {/* Desktop */}
        {/* logo */}
        <NavLink to="/" className="">
          <img src={assets.Shopora} alt="shopora" className="h-10" />
        </NavLink>
        <div className="hidden md:flex items-center justify-around gap-8 w-[80%]">
           <NavLink
            to="/category/all-products"
            className={({ isActive }) => `
          text-lg font-bold hidden md:block
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            ALL PRODUCTS
          </NavLink>
          <NavLink
            to="/category/women"
            className={({ isActive }) => `
          text-lg font-bold hidden md:block
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/category/men"
            className={({ isActive }) => `
          text-lg font-bold  hidden md:block
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            MEN
          </NavLink>
          <NavLink
            to="/category/accessories"
            className={({ isActive }) => `
          text-lg font-bold hidden md:block
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            ACCESSORIES
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) => `
          text-lg font-bold hidden md:block
          ${isActive ? "underline underline-offset-1 decoration-1" : "hover:underline"}
          `}
          >
            SEARCH RESULT
          </NavLink>
          {token ? (
            <button
              onClick={handleLogout}
              className="text-lg hover:underline underline-offset-1 font-bold hidden md:block"
            >
              LOGOUT
            </button>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="text-lg hover:underline underline-offset-1 font-bold hidden md:block"
            >
              LOGIN
            </button>
          )}
          <NavLink to="/cart" className="hidden md:block">
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
             {token ? (
              <button
                onClick={handleLogout}
                className="text-lg hover:underline underline-offset-1 font-bold"
              >
                LOGOUT
              </button>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="text-base underline hover:underline underline-offset-1 "
              >
                LOGIN
              </button>
            )}
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
      {/* auth page */}
      {authOpen && (
        <div className="fixed inset-0 bg-white backdrop-blur-sm z-50 ">
          <AuthPage setAuthOpen={setAuthOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
