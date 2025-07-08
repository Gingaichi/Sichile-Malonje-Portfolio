'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import im2 from '../assets/im2.png';
import { motion } from 'framer-motion';

const Header = () => {
  const fullText = "Hii, I am Sichile Malonje 👋🏿";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Speed of typing

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full bg-black text-white h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      

      {/* Typewriter Text */}
      <motion.h3
        className="text-xl md:text-2xl mb-3 text-gray-300 h-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {typedText}
        <span className="animate-pulse">|</span>
      </motion.h3>

      {/* Floating animated letters */}
      <motion.h1
        className="text-1xl  lg:text-[66px] font-bold text-white text-center flex flex-wrap justify-center"
      >
        {"Welcome to my Portfolio".split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block "
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.05,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="max-w-2xl mx-auto text-gray-400 mt-4 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I'm a passionate full-stack developer based in Lilongwe, Malawi who loves turning ideas into exciting web and mobile applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="px-10 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4 invert" />
        </a>

        <a
          href="/Resume_Sichile_Malonje.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-400 text-white flex items-center gap-2 hover:bg-gray-800 transition"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4 invert" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
