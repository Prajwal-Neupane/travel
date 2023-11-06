import React from "react";
import { AiFillFlag } from "react-icons/ai";
import { TbTrekking } from "react-icons/tb";
import { FaEarthAmericas } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-[1640px] mx-auto pt-10">
      <div className="relative bg-black">
        <img
          className="md:h-auto h-[1600px] opacity-50"
          src="https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-[20%] left-[10%] w-[80%] h-[80%] text-center flex flex-col items-center ">
          <h1 className="text-4xl text-white">
            Subscribe to our newsletter to get the latest trends and news
          </h1>
          <p className="mt-8 text-white">Join our database NOW!</p>
          <div className="flex flex-col w-full gap-4 mt-6 md:flex-row">
            <input
              type="text"
              name=""
              className="lg:w-[30%] w-full px-4 py-4 bg-gray-400/50 text-white rounded-sm focus:border-b-2 border-white focus:outline-none duration-100 focus:text-white"
              id=""
              placeholder="Name"
            />
            <input
              type="text"
              name=""
              id=""
              className="lg:w-[60%] w-full px-4 py-4 bg-gray-400/50 rounded-sm focus:border-b-2 border-white focus:outline-none duration-100 focus:text-white text-white"
              placeholder="Email"
            />
            <button className="py-3 text-white rounded-lg px-9 bg-gray-400/50">
              SUBSCRIBE
            </button>
          </div>
          <div className="flex flex-col items-center justify-between w-full px-10 lg:flex-row mt-9">
            <div className="flex flex-col items-center gap-9">
              <AiFillFlag size={80} className="text-white" />
              <h1 className="text-4xl text-white">GIVE US A CALL</h1>
              <div>
                <p className="text-white">Office Landline: +44 345 678 903</p>
                <p className="text-white">Mobile: +44 567 890 123</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-9">
              <TbTrekking size={80} className="text-white" />
              <h1 className="text-4xl text-white">COME & DROP BY</h1>
              <div>
                <p className="text-white">4124 Crown Street, London</p>
                <p className="text-white">W1T 4T</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-9">
              <FaEarthAmericas size={80} className="text-white" />
              <h1 className="text-4xl text-white">SEND US A MESSAGE</h1>
              <div>
                <p className="text-white">youremail@gmail.com</p>
                <p className="text-white">Office@example.com</p>
              </div>
            </div>
          </div>
          <p className="mt-auto text-white">
            Copyright 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
