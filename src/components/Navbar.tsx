import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import {
  BsPinterest,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsDribbble,
  BsBehance,
} from "react-icons/bs";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`max-w-[1640px]  mx-auto py-20 lg:px-20 xl:px-48 md:px-20 sm:px-8 px-5 flex items-center justify-between ${
        isSticky
          ? "sticky top-0 left-0 right-0  bg-black z-10 h-1 py-9  duration-300"
          : ""
      }`}
    >
      <h1 className="text-3xl font-bold md:text-4xl ">Travello</h1>

      <div>
        <ul className="hidden gap-8 lg:flex">
          <li className="duration-300 cursor-pointer hover:underline">Home</li>
          <li className="duration-300 cursor-pointer hover:underline">
            About Us
          </li>
          <li className="duration-300 cursor-pointer hover:underline">
            Services
          </li>
          <li className="duration-300 cursor-pointer hover:underline">News</li>
          <li className="duration-300 cursor-pointer hover:underline">
            Contact
          </li>
        </ul>
        <FaBars
          className="text-gray-400 cursor-pointer lg:hidden hover:text-white"
          size={30}
          onClick={handleIsOpen}
        />
      </div>
      <h1 className="hidden text-xl font-semibold lg:flex ">9842106109</h1>
      {isOpen && (
        <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/70 "></div>
      )}
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-full h-screen bg-white z-10 duration-700 px-9 py-9 text-black"
            : "fixed top-0 left-[-100%] w-full h-screen bg-white z-10 duration-700"
        }
      >
        <AiOutlineClose
          onClick={handleIsOpen}
          size={30}
          className="absolute cursor-pointer right-12 top-12 hover:text-gray-400"
        />
        <h1 className="text-3xl font-semibold text-gray-900 ">Travello</h1>
        <nav className="mt-16 ">
          <ul className="flex flex-col gap-5">
            <li className="text-2xl tracking-wider duration-300 cursor-pointer hover:text-gray-600">
              Home
            </li>
            <li className="text-2xl tracking-wider duration-300 cursor-pointer hover:text-gray-600">
              About Us
            </li>
            <li className="text-2xl tracking-wider duration-300 cursor-pointer hover:text-gray-600">
              Services
            </li>
            <li className="text-2xl tracking-wider duration-300 cursor-pointer hover:text-gray-600">
              News
            </li>
            <li className="text-2xl tracking-wider duration-300 cursor-pointer hover:text-gray-600">
              Contact
            </li>
          </ul>
        </nav>
        <div className="mt-12 ">
          <p className="text-xl text-gray-800">Call us: 00-56 445 678 33</p>
        </div>
        <div className="z-10 flex mt-3 gap-9">
          <BsPinterest
            className="text-gray-600 hover:text-black hover:cursor-pointer"
            size={20}
          />
          <BsFacebook
            className="text-gray-600 hover:text-black hover:cursor-pointer"
            size={20}
          />
          <BsTwitter
            className="text-gray-600 hover:text-black hover:cursor-pointer"
            size={20}
          />
          <BsDribbble
            className="text-gray-600 hover:text-black hover:cursor-pointer"
            size={20}
          />
          <BsBehance
            className="text-gray-600 hover:text-black hover:cursor-pointer"
            size={20}
          />
          <BsLinkedin
            className="text-gray-600 hover:text-black hover:cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
