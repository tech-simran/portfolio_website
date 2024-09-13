import Image from "next/image";


import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    bg-[#121212] ">
      <Navbar/>
    
    <section id="hero" className="container mx-auto py-4 px-12 mt-12">
        <HeroSection />
      </section>
    <section id="about">
        <AboutSection />
      </section>
      <section id="project">
        <ProjectSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
        </main>
        
  );
}
