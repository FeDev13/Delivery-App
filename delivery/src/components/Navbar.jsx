import { motion } from "framer-motion";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { useState } from "react";
import ProfilePic from "../assets/avatar.png";
import Logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";

export default function Navbar({ user }) {
  /*  const login = () => {}; */
  return (
    <>
      <header className="fixed z-40 w-screen p-3 px-4 md:p-6 md:px-16 bg-red-400">
        {/* desktop version */}
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <div className="flex gap-2 items-center">
            <img
              src={Logo}
              className="object-cover w-20 h-20"
              alt="logo"
              style={{ marginTop: "-5rem", marginBottom: "-5rem" }}
            />
            <span className="text-headingColor text-2xl font-bold text-white">
              Fast & Foodious
            </span>
          </div>
          {user ? (
            <div className="flex items-center gap-10">
              <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex items-center gap-10"
              >
                <NavLink to="/">
                  <a className=" text-lg text-white" href="home">
                    Home
                  </a>
                </NavLink>
              </motion.ul>
              <motion.ul
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="flex items-center gap-10"
              >
                <NavLink to="/restaurants">
                  <a className=" text-lg text-white" href="home">
                    Menu
                  </a>
                </NavLink>
              </motion.ul>

              <div className="relative flex items-center justify-center">
                <MdShoppingBasket className="text-textColor text-3xl  cursor-pointer" />
                <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <span className="text-xs text-black font-semibold">2</span>
                </div>
              </div>
              <Dropdown2 />
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              <NavLink to="/">
                <Dropdown />
              </NavLink>
            </div>
          )}
        </div>

        {/* mobile version*/}
        <div className="flex items-center justify-between md:hidden w-full h-full ">
          <NavLink to="/home" className="flex items-center gap-2">
            <img src={Logo} className="w-8  object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">
              {" "}
              Fast & Foodious
            </p>
          </NavLink>
          <Dropdown />
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
}
