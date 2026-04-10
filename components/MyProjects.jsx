import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Letterboxd Blend",
    description:
      "Blends the film tastes of two Letterboxd users and generates a combined watchlist of movies neither has seen.",
    link: "https://letterboxd-blend-3kn3.vercel.app/",
    video: "https://www.youtube.com/embed/zR_ww0QuANY"
  },
  {
    title: "Letterboxd Wrapped 2025",
    description:
      "A cinematic breakdown of your 2025 Letterboxd journey. Your habits, ratings, and taste built with Next.js and TMDb API.",
    link: "https://letterboxd-wrapped-nu.vercel.app/".
    video: "https://www.youtube.com/embed/oHzCBpLX3w4"
  },
  {
    title: "Chakudya – Restaurant Ordering App",
    description:
      "A responsive restaurant web app for ordering food online, built with React, Tailwind CSS, and Context API.",
    link: "https://chakudya-three.vercel.app/"
  },
  {
    title: "MaFilum – Movie Discovery + Chatbot",
    description:
      "A movie app with search, favorites, and a chatbot that recommends movies based on your mood.",
    link: "https://ma-filum.vercel.app/"
  },
  {
    title: "E-commerce website for local Malawian businesses",
    description:
      "An e-commerce platform built using Next.js, Supabase, Stripe & Zustand.",
    link: "https://za-malawi.vercel.app/"
  },
  {
    title: "AI Portfolio Generator",
    description:
      "A website that lets users quickly create personalized portfolio websites using AI.",
    link: "https://ai-portfolio-website-generator.vercel.app/"
  },
  {
    title: "Student & Work Permit Management System",
    description:
      "A system for Botswana built with Laravel, Flask (facial auth), OpenCV, and Stripe.",
    link: "https://immigrationbw-main-ssxsqs.laravel.cloud/landing"
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
                {/* 🎬 Video (only shows if exists) */}
                {project.video && (
                  <iframe
                    className="w-full h-48 rounded-lg mb-4"
                    src={project.video}
                    title="Project Demo"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}

                <h3 className="text-xl font-semibold text-black mb-3 font-serif">
                  {project.title}
                </h3>
                <p className="text-gray-800 text-sm">
                  {project.description}
                </p>
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
