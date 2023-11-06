import React from "react";
import { destination } from "../Data";

export const Testimonials = () => {
  return (
    <div className=" max-w-[1640px] mx-auto py-20 ">
      <div className="relative bg-black/70">
        <img
          className="lg:h-[800px] h-[700px] w-full object-cover opacity-40   "
          src="https://plus.unsplash.com/premium_photo-1669274936462-5ac9832ba708?auto=format&fit=crop&q=80&w=1979&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-[20%] left-[10%] w-[80%] h-[80%] flex flex-col items-center text-center">
          <p className="text-xl text-gray-100">SIMPLY AMAZING PLACES</p>
          <h1 className="mt-4 text-5xl text-white md:text-7xl lg:text-8xl ">
            Testimonials
          </h1>
          <p className="text-gray-100 lg:w-[70%] w-full text-center mt-16 tracking-wide md:text-3xl text-2xl lg:text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non cumque
            sequi veritatis atque, impedit voluptatibus sunt sit laborum? Eum
          </p>
          <h1 className="mt-24 text-2xl text-white md:text-3xl lg:text-4xl">
            JOHN TURNER, <span className="text-2xl">client</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-20 px-5 mt-6 lg:flex-row lg:px-20 xl:px-48 md:px-20 sm:px-8">
        <div className="">
          {destination.map((items) => {
            return (
              <div className="flex flex-col gap-4 mt-4 md:flex-row">
                <img
                  className=" w-full lg:w-[300px] max-h-[300px] object-cover"
                  src={items.img}
                  alt=""
                />
                <div>
                  <h1 className="text-5xl ">
                    {items.day}{" "}
                    <span className="text-base text-gray-500">
                      {items.month}
                    </span>
                  </h1>
                  <h2 className="mt-4 text-3xl">{items.title}</h2>
                  <p>{items.subtext}</p>
                  <p>{items.para}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[30%] ">
          <img
            className=""
            src="https://images.unsplash.com/photo-1542992015-8b34590ec327?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
