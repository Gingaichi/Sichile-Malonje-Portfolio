import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Student & Work Permit Management System",
    description: "A Student and Work Permit Management System for Botswana built with Laravel for the backend, Flask for facial authentication using OpenCV, and Stripe for secure online payments. Features include permit application, biometric verification, and real-time permit status tracking.",
    link: "https://immigrationbw-main-ssxsqs.laravel.cloud/landing"
  },
  {
    title: "E-commerce website for local Malawian businesses",
    description: "An e-commerce platform for Malawian businesses built using Next.js, Supabase, Stripe & Zustand.",
    link: "https://za-malawi.vercel.app/"
  },
  {
    title: "AI Portfolio Generator",
    description: "A website built with Next.js that lets users quickly create personalized portfolio websites by filling out a form.",
    link: "https://ai-portfolio-website-generator.vercel.app/"
  }
];

const MyProjects = () => {
  return (
    <section id="work" className="py-20 px-6 bg-black border-t-4 border-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold font-serif text-white mb-4 border-b-4 border-black inline-block px-4">
          My Projects
        </h2>
        <p className="text-white mb-12 max-w-2xl mx-auto text-base leading-relaxed">
          Here are a few of the projects I've worked on recently. Feel free to explore what I've been building.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-[2.5px] border-white rounded-2xl shadow-manga p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-black mb-3 font-serif">{project.title}</h3>
                <p className="text-gray-800 text-sm">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-black hover:underline text-sm font-medium"
              >
                View Project <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
