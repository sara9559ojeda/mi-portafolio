import AcademicExperienceSection from "@/app/AcademicExperienceSection/page";
import HeroSection from "@/app/HeroSection/page";
import ProjectsSection from "@/app/ProjectsSection/page";
import TechnologiesSection from "@/app/TechnologiesSection/page";
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
