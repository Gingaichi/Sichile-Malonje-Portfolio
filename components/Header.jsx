import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.wow} alt='' className='rounded-full w-32' />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl
            mb-3'>Hi, I am Sichile Malonje 
            <Image src={assets.hand_icon} alt='' className='w-6' />
            </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>
            Full-stack Developer Developer based in Malawi</h1>
            <p className='max-w-2xl mx-auto'>
            I'm a passionate full-stack developer based in Lilongwe, Malawi who loves turning ideas into exciting web and mobile applications
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                className='px-10 py-3 rounded-full bg-black border-white flex
                items-center text-white gap-2'>Contact Me
                <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </a>

                <a href="/Resume_Sichile_Malonje.pdf" download className='
                px-10 py-3 border rounded-full border-gray-500 flex
                items-center gap-2'>My Resume
                <Image src={assets.download_icon} alt='' className='w-4' />
                </a>
            </div>
    </div>
  )
}

export default Header