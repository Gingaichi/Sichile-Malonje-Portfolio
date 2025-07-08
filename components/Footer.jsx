import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-20 border-t-4 border-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <p className="font-semibold tracking-wide">
            © {new Date().getFullYear()} Sichile Malonje. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">Built with 💻 and a love for manga.</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/Gingaichi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sichile-malonje-59bb852bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:s.malonjel@gmail.com"
            className="hover:text-gray-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
