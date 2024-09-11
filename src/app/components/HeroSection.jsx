"use client"
import next from "next";
import { TypeAnimation } from 'react-type-animation';
import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="text-white py-10 lg:py-15">
      <div className="grid grid-cols-2 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl font-extrabold sm:text-6xl md:text-5xl">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
    Hello, I'm{" "}
  </span>
  <br />
  <span className="mt-4 block">
    <TypeAnimation
      sequence={[
       "Simran",
        1000,
        "FullStack Developer",
        1000,
       "Frontend Developer",
        1000,
        "Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h1>


          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sit
            quis asperiores.
          </p>
          <div>
            <button className=" rounded-full mr-0 sm:mr-4 w-full sm:w-auto hover:bg-slate-200 text-white px-6 py-3 mb-4 sm:mb-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-800">
              Hire me
            </button>
            <button className="bg-transparent text-white w-full sm:w-auto rounded-full 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-800 
           border border-white px-1 py-1">
              <span className="block bg-[#121212] border rounded-full py-2 px-5  hover:bg-slate-800 "> Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-2">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[300px] lg:h-[300px]">
             <Image
        src="/images/hi.jpg"
        width={300}
        height={300}
        alt="Simran Photo"
        className="rounded-full object-cover w-full h-full"
      />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
