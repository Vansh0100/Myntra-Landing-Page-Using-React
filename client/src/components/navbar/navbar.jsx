import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell, BsBookmarkDash, BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
function NavSm() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState({});
  return (
    <>
      <div className="flex w-full flex-row gap-3  md:hidden p-2">
        <div className="w-2/5 h-16">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMuzTBXXpa8ItyYN3-FOU1P4YjnqWs2HOU1lnB1ntiFRolKGJBUFExzOvZ8XUDdMwxbw&usqp=CAU"
            alt="myntra"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className=" p-2 flex flex-row gap-5 w-4/5">
          <div className="w-1/5">
            <BiSearch className="w-full h-full" />
          </div>
          <div className="w-1/5">
            <BsBell className="w-full h-full" />
          </div>
          <div className="w-1/5">
            <BsBookmarkDash className="w-full h-full" />
          </div>
          <div className="w-1/5">
            <BsHandbag className="w-full h-full" />
          </div>

          {user?.fullname ? (
            <>
              <div
                className="w-1/5 border-gray-700 "
                onClick={() => setIsDropDownOpen((prev) => !prev)}
              >
                <CgProfile className="w-full h-full" />
                </div>
                {isDropDownOpen && (
                  <div className='className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                    <button>SignOut</button>
                  </div>
                )}
            </>
          ) : (
            <>
              <div
                className="w-1/5"
                onClick={() => setIsDropDownOpen((prev) => !prev)}
              >
                <CgProfile className="w-full h-full" />
                </div>
                {isDropDownOpen && (
                  <div className='className="absolute shadow-lg  -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2'>
                    <button>SignIn</button>
                    <button>SignUp</button>
                  </div>
                )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
function NavLg() {
  return (
    <>
      <div className="hidden md:flex flex-row w-full p-2 gap-3 ">
        <div className='w-60 h-16'>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMuzTBXXpa8ItyYN3-FOU1P4YjnqWs2HOU1lnB1ntiFRolKGJBUFExzOvZ8XUDdMwxbw&usqp=CAU"
            alt="myntra"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className='w-96 flex flex-row gap-3  align-middle justify-start pt-3'>
          <span className="w-1/10">
          <a  className='hover:border-b-4
          border-pink-600 text-gray-900 w-full' style={{textDecoration:"none"}}>MEN</a>
          </span>
          <span className="w-1/10">
          <a className="hover:border-b-4-yellow-400 text-gray-900" style={{textDecoration:"none"}}>WOMEN</a>
          </span>
          <span className="w-1/10">
          <a href="#" className="hover:border-b-4-yellow-400 text-gray-900" style={{textDecoration:"none"}}>KIDS</a>
          </span>
          <span className="w-1/10">
          <a href="#" className="hover:border-b-4-yellow-400 text-gray-900" style={{textDecoration:"none"}}>HOME&LIVING</a>
          </span>
          <span className="w-1/10">
          <a href="#" className="hover:border-b-4-yellow-400 text-gray-900 w-full h-full" style={{textDecoration:"none"}}>BEAUTY</a>
          </span>
       </div>
       <div className="hidden lg:flex flex-row border-2 gap-2 w-2/5 h-12 mt-2 rounded-lg shadow-md">
       <div className="w-8 border-r-2">
            <BiSearch className="w-full h-full text-gray-400"/>
          </div>
            <input type="search" name="" id="" placeholder="Search for brands and products" className="w-72 focus:outline-none"/>
          
       </div>
        <div className="w-1/5 flex flex-row gap-2  justify-center pt-3">
          <button className='bg-red-400 text-white rounded-lg  h-8 p-1 w-full'>Login</button>
          <button className='bg-red-400 text-white rounded-lg h-8 p-1 w-full'>SignUp</button>
        </div>
      </div>
    </>
  );
}
function Navbar() {
  return (
    <>
      <nav className="px-2  border-2 w-screen">
        <NavSm />
        <NavLg />
      </nav>
    </>
  );
}

export default Navbar;
