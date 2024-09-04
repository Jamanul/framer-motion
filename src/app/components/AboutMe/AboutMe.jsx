"use client"
import React from "react";
import { FiDownload, FiGithub, FiInstagram } from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import CountUp from 'react-countup';
import Image from "next/image";
import Reveal from "@/app/lib/page";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl mt-16 md:mt-32 mb-6 font-semibold text-text font-sora">
        <Reveal>
        I am Md Jamanul Karim
        </Reveal>
        </h2>
        <button><Link href="/animate">
              Animation
              </Link></button>
        <h2 className="text-5xl md:text-6xl bg-clip-text font-bold text-primary bg-gradient-to-r from-primary to-slate-400 text-transparent inline-block ">
          Mern Stack Developer
        </h2>
        <h6 className="md:text-2xl mt-6">
          Motivated web developer with the knowledge of various modern
          technology who have strong foundation in creating responsive,
          user-friendly web applications with the help of modern frameworks like
          React and Next JS. My goal is to make myself better everyday
          with the technologies I am familiar with to ensure the best
          performance.
        </h6>
        <div className="mt-10 flex gap-1 md:gap-6 items-center">
           <a href="/Orginal resume.pdf" download={'resume'}><button className="px-9 py-2 md:py-4 border-2 hover:bg-primary hover:text-text hover:transition hover:duration-1000 border-primary text-primary rounded-l-full rounded-r-full flex items-center gap-2">Download Resume <FiDownload/></button></a> 
           <div className="space-x-1 flex items-center gap-2">
               <a href="https://www.facebook.com/profile.php?id=100009156974257"><h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><RiFacebookLine className="text-4xl p-2"/></h2></a> 
              <a href="https://www.linkedin.com/in/md-jamanul-karim/"><h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><TiSocialLinkedin className="text-4xl p-2"/></h2></a>  
                <a href="https://github.com/Jamanul"><h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><FiGithub className="text-4xl p-2"/></h2></a>
                <a href="https://www.instagram.com/jk_skb/"><h2 className="text-primary border-2 rounded-full border-primary hover:bg-primary hover:text-text hover:transition hover:duration-1000"><FiInstagram className="text-4xl p-2"/></h2></a>
           </div>
        </div>
      </div>
      <div>
        <Image src="/me.jpg" width={400} height={400} className="border-primary border-2 md:ml-16 md:translate-x-5 md:translate-y-10 transform rotate-12 hover:rotate-0 hover:transition hover:duration-1000 hover:border-violet-300 mt-12 md:mt-32 rounded-3xl h-[400px] w-[400px]" alt="" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 mt-20">
        <div className="flex items-center gap-1">
            <h2 className="text-7xl md:text-7xl"><CountUp end={1} /></h2>
            <h2 className="md:text-2xl">Years of <br /> experience</h2>
        </div>
        <div className="flex items-center">
            <h2 className="text-7xl"><CountUp end={20} />+</h2>
            <h2 className="text-2xl">Project <br /> completed</h2>
        </div>
        <div className="flex items-center gap-1">
            <h2 className="text-7xl"><CountUp end={8} /></h2>
            <h2 className="text-2xl">Technology <br /> mastered</h2>
        </div>
        <div className="flex items-center">
            <h2 className="text-7xl"><CountUp end={500} />+</h2>
            <h2 className="text-2xl">Github <br /> contributions</h2>
        </div>
    </div>
    </div>
  );
};

export default AboutMe;
