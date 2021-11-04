import React from "react";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

export default function Main() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Projects />
    </div>
  );
}
