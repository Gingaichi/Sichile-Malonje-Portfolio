'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f7f3f3] py-20 px-6 border-t-4 border-black scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold font-serif text-black mb-8 border-b-4 border-black inline-block px-4">
          Contact Me
        </h2>
        <p className="text-gray-800 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you want to connect, collaborate or just say hi, I'm always open to a good tech convo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
          {/* Phone */}
          <div className="flex items-center border-2 border-black rounded-xl p-4 bg-white hover:bg-gray-100 transition">
            <FaPhoneAlt className="text-black mr-4 text-xl" />
            <span className="text-black font-medium">+265 880 368 987</span>
          </div>

          {/* Email */}
          <div className="flex items-center border-2 border-black rounded-xl p-4 bg-white hover:bg-gray-100 transition">
            <FaEnvelope className="text-black mr-4 text-xl" />
            <span className="text-black font-medium">s.malonje@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sichile-malonje-59bb852bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-black rounded-xl p-4 bg-white hover:bg-gray-100 transition"
          >
            <FaLinkedin className="text-black mr-4 text-xl" />
            <span className="text-black font-medium">linkedin.com/in/sichile-malonje</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Gingaichi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-black rounded-xl p-4 bg-white hover:bg-gray-100 transition"
          >
            <FaGithub className="text-black mr-4 text-xl" />
            <span className="text-black font-medium">github.com/Gingaichi</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
