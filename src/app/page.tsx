"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/providers/SmoothScroll";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import InterestsSection from "@/components/sections/InterestsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

// Dynamically import CosmicBackground to avoid SSR issues with Canvas
const CosmicBackground = dynamic(() => import("@/components/3d/CosmicBackground"), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-brand-black text-white overflow-x-hidden selection:bg-brand-blue selection:text-white">
        <CosmicBackground />

        <Navbar />

        <div className="relative z-10 flex flex-col gap-0 md:gap-12 lg:gap-24">
          <HeroSection />
          <AboutSection />
          <InterestsSection />
          <SkillsSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </div>
      </main>
    </SmoothScroll>
  );
}
