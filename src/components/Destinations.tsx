import React from "react";
import { FaHouseTsunami } from "react-icons/fa6";
import { GiWallet, GiRollingSuitcase } from "react-icons/gi";
import { data } from "../Data";

const Destinations = () => {
  return (
    <div className="relative max-w-[1640px] mx-auto py-20 lg:px-20 xl:px-48 md:px-20 sm:px-8 px-5">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
        <div className="flex items-center gap-4">
          <FaHouseTsunami size={100} className="text-gray-500" />
          <div>
            <h1 className="text-xl font-semibold">Top Destinations</h1>
            <p className="text-gray-700">Nulla pretium tincidunt fells, nec.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <GiWallet size={100} className="text-gray-500" />
          <div>
            <h1 className="text-xl font-semibold">The Best Prices</h1>
            <p className="text-gray-700">Sollicitudin mauris lobortis in.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <GiRollingSuitcase size={100} className="text-gray-500" />
          <div>
            <h1 className="text-xl font-semibold">Amazing Services</h1>
            <p className="text-gray-700">Nulla pretium tincidunt fells, nec.</p>
          </div>
        </div>
      </div>
      <hr className="mt-32 border-t-gray-400" />
      <div className="mt-32">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-gray-500">SIMPLY AMAZING PLACES</p>
          <h1 className="text-5xl lg:text-6xl">Popular Destinations</h1>
        </div>
        <div className="grid gap-6 mt-24 lg:grid-cols-3 md:grid-cols-2">
          {data.map((items) => {
            return (
              <div key={items.id} className="">
                <img
                  className="object-cover h-full  max-h-[240px] w-full"
                  src={items.img}
                  alt=""
                />
                <div className="flex flex-col mt-4">
                  <h1 className="text-2xl">{items.title}</h1>
                  <p className="mt-2 text-gray-500">{items.text}</p>
                  <p className="mt-4 font-semibold">From ${items.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
