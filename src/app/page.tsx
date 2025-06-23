import AcademicExperienceSection from "@/components/AcademicExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <TechnologiesSection />
      <AcademicExperienceSection />
      <ProjectsSection />
    </main>
  );
}
