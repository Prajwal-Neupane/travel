import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto h-full ">
      <div className="relative ">
        <img
          className="w-full h-[710px] lg:h-screen "
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 w-full h-full text-white bg-black/70 ">
          <Navbar />
        </div>
        <div className="flex items-center justify-center px-40 text-center text-white">
          <h1 className="  absolute top-[20%] lg:top-[30%]  text-center text-5xl sm:text-5xl md:text-7xl lg:text-8xl  text-gray-300 ">
            Let us take you away
          </h1>
        </div>
      </div>
      <div className=" rounded-md absolute top-[55%]  lg:left-[10%] left-auto right-auto text-center flex flex-col items-center justify-center bg-white bg-opacity-20  lg:px-20 lg:py-14 w-full lg:w-[80%]">
        <div className="flex flex-col w-full px-12 py-5 bg-white lg:w-auto rounded-t-md lg:flex-row">
          <p className="text-xl text-gray-600">Search for your trip</p>
        </div>
        <div className="grid w-full gap-5 bg-white lg:grid-cols-5 lg:gap-0 py-7 px-9">
          <input
            className="px-3 py-2 bg-gray-100 border-none focus:outline-none"
            type="text"
            name=""
            placeholder="City"
            id=""
          />
          <input
            className="px-3 py-2 bg-gray-100 border-none focus:outline-none"
            type="text"
            name=""
            placeholder="Departure"
            id=""
          />
          <input
            className="px-3 py-2 bg-gray-100 border-none focus:outline-none"
            type="text"
            name=""
            placeholder="Arrival"
            id=""
          />
          <input
            className="px-3 py-2 bg-gray-100 border-none focus:outline-none"
            type="text"
            name=""
            placeholder="Budget"
            id=""
          />
          <button className="py-3 text-white px-9 lg:px-9 bg-gray-950 rounded-xl">
            SEARCH
          </button>
        </div>
      </div>
      <hr className="flex lg:hidden mt-3 w-[90%]  mx-auto  border-t-black " />
    </div>
  );
};

export default Hero;
