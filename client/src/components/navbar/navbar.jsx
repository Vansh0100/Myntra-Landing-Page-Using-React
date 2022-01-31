import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell, BsBookmarkDash, BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import Signin from "../Auth/SignIn";
// import Signup from "../Auth/SignUp";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
function NavSm({ Signin, Signup }) {
  return (
    <>
      <div className="flex w-full flex-row gap-3  md:hidden p-2">
        <div className="w-3/5 h-16">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMuzTBXXpa8ItyYN3-FOU1P4YjnqWs2HOU1lnB1ntiFRolKGJBUFExzOvZ8XUDdMwxbw&usqp=CAU"
            alt="myntra"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className=" p-2 flex flex-row gap-3 w-full ">
          <div className="w-1/4">
            <BiSearch className="w-full h-full" />
          </div>
          <div className="w-1/4">
            <BsBell className="w-full h-full" />
          </div>
          <div className="w-1/4">
            <BsBookmarkDash className="w-full h-full" />
          </div>
          <div className="w-1/4">
            <BsHandbag className="w-full h-full" />
          </div>
        </div>
        <div className="w-1/5 flex flex-col gap-1  p-1">
          <button
            className="bg-red-400 text-white rounded-lg  h-7 p-1 w-full"
            onClick={Signin}
          >
            Login
          </button>
          <button
            className="bg-red-400 text-white rounded-lg h-7 p-1 w-full"
            onClick={Signup}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}
function NavLg({ Signin, Signup }) {
  return (
    <>
      <div className="hidden md:flex flex-row w-full p-2 gap-3 ">
        <div className="w-60 h-16">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMuzTBXXpa8ItyYN3-FOU1P4YjnqWs2HOU1lnB1ntiFRolKGJBUFExzOvZ8XUDdMwxbw&usqp=CAU"
            alt="myntra"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="w-96 flex flex-row gap-3  align-middle justify-start pt-3">
          <span className="w-1/10">
            <a
              className="hover:border-b-4
          border-pink-600 text-gray-900 w-full"
              style={{ textDecoration: "none" }}
            >
              MEN
            </a>
          </span>
          <span className="w-1/10">
            <a
              className="hover:border-b-4-yellow-400 text-gray-900"
              style={{ textDecoration: "none" }}
            >
              WOMEN
            </a>
          </span>
          <span className="w-1/10">
            <a
              href="#"
              className="hover:border-b-4-yellow-400 text-gray-900"
              style={{ textDecoration: "none" }}
            >
              KIDS
            </a>
          </span>
          <span className="w-1/10">
            <a
              href="#"
              className="hover:border-b-4-yellow-400 text-gray-900"
              style={{ textDecoration: "none" }}
            >
              HOME&LIVING
            </a>
          </span>
          <span className="w-1/10">
            <a
              href="#"
              className="hover:border-b-4-yellow-400 text-gray-900 w-full h-full"
              style={{ textDecoration: "none" }}
            >
              BEAUTY
            </a>
          </span>
        </div>
        <div className="hidden lg:flex flex-row border-2 gap-2 w-2/5 h-12 mt-2 rounded-lg shadow-md">
          <div className="w-8 border-r-2">
            <BiSearch className="w-full h-full text-gray-400" />
          </div>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for brands and products"
            className="w-72 focus:outline-none"
          />
        </div>
        <div className="w-1/5 flex flex-row gap-2  justify-center pt-3">
          <button
            className="bg-red-400 text-white rounded-lg  h-8 p-1 w-full"
            onClick={Signin}
          >
            Login
          </button>
          <button
            className="bg-red-400 text-white rounded-lg h-8 p-1 w-full"
            onClick={Signup}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
}
function Navbar() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const openSignInModal = () => setOpenSignIn(true);
  const openSignUpModal = () => setOpenSignUp(true);
  return (
    <>
      <Signin isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <Signup isOpen={openSignUp} setIsOpen={setOpenSignUp} />
      <nav className="px-2  border-2 w-screen">
        <NavSm Signin={openSignInModal} Signup={openSignUpModal} />
        <NavLg Signin={openSignInModal} Signup={openSignUpModal} />
      </nav>
    </>
  );
}

export default Navbar;
