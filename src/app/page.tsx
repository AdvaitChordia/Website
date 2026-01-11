import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
