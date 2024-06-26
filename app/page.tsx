"use client";
import React, { useState } from "react";
import Skills from "@/components/skills/skills";
import Navbar from "@/components/navbar/navbar";
import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/footer";

export default function Home() {
  const [language, setLanguage] = useState<string>("en");
  return (
    <main className="overflow-x-hidden bg-black md:px-4">
      <Navbar setLanguage={setLanguage} />
      <Hero language={language} />
      <Projects language={language} />
      <Skills />
      <About language={language} />
      <Footer />
    </main>
  );
}
