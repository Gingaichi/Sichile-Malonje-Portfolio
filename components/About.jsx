'use client';

import Image from 'next/image';
import React from 'react';
import { assets, infoList } from '@/assets/assets';
import sm1 from '../assets/sm1.jpg';


const About = () => {
  return (
    
    <div
      id="about"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-[#fdfdfd] border-t-4 border-black"
    >
      <h4 className="text-center mb-1 text-base tracking-widest uppercase text-gray-700 font-mono">
        
      </h4>
      <h2 className="text-center text-5xl font-extrabold font-serif text-black mb-10 border-b-4 border-black inline-block">
        About Me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 mt-16">
        <div className="w-64 sm:w-80 rounded-3xl border-[3px] border-black shadow-manga overflow-hidden">
          <Image
            src={sm1}
            width={2500}
            height={2500}
            alt="user"
            
          />
        </div>

        <div className="flex-1">
          <p
            className="mb-10 max-w-2xl bg-[#fff] border-2 border-black p-6 rounded-xl font-[serif] text-gray-800 leading-relaxed text-md shadow-md relative
            before:content-['“'] before:absolute before:top-[-20px] before:left-[-10px] before:text-6xl before:text-black
            after:content-['”'] after:absolute after:bottom-[-20px] after:right-[-10px] after:text-6xl after:text-black"
          >
            I’m a passionate full-stack developer with a strong foundation in Computer Science, 
            holding a Bachelor’s degree in the field. I enjoy bringing ideas to life through clean, efficient, and user-friendly applications. From web platforms and mobile apps to API integrations and automation tools, I’ve built and contributed to a variety of real-world projects. I’m always eager to learn, build, and push boundaries with tech that makes a difference.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-2 border-black rounded-xl p-5 bg-white text-black hover:shadow-mangaHover duration-300 hover:-translate-y-1"
              >
                <Image src={icon} alt={title} className="w-8 mb-3" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-700">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
