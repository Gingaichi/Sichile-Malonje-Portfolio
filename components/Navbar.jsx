'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react';

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  return (
    <>
      {/* Background image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 
      flex items-center justify-between z-50 max-w-5xl mx-auto">

        {/* Desktop menu */}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8
          rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#work">My Projects</a></li>
        </ul>

        {/* Right-side buttons */}
        <div className='flex items-center gap-4'>

      

          

          {/* Contact button (desktop only) */}
          <a href="#contact" className='hidden text-red-600 lg:flex
           items-center gap-3 px-10 py-2.5 border
            border-gray-500 rounded-full ml-4'>
            Contact
            <Image src={assets.arrow_icon} alt='arrow_icon' className='w-3' />
          </a>

          {/* Hamburger menu (mobile only) */}
          <button className='block md:hidden ml-3' onClick={openMenu}>
  <Image
    src={assets.menu_black}
    alt='menu icon'
    className='w-6 filter text-red-600 invert sepia saturate-500 hue-rotate-[330deg] brightness-95 contrast-125'
  />
</button>

        </div>

        {/* Mobile slide-in menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
          top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#work" onClick={closeMenu}>My Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
