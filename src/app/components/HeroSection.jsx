"use client";

import React from 'react'
import Image from "next/image"

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm {" "}</span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'Arun',
                        1000, 
                        'Web Developer',
                        1000,
                        'Full Stack Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    
                    repeat={Infinity}
                />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                I'm a software developer with a passion for building scalable and efficient systems.
                </p>
                <div className="">
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                        </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div>
                <Image className="rounded-full " src="/images/Hero-Profile.png" alt="Profile Pic"
                width={350}
                height={350} />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default HeroSection