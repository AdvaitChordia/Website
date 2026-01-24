import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionHashTracker } from "@/components/SectionHashTracker";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20 relative">
      <ScrollProgress />
      <SectionHashTracker />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
