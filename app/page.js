'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header />
    <About />
    <MyProjects />
    <Contact />
    <Footer />
    </>
  );
}
