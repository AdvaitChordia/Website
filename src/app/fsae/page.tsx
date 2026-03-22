"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { resumeData } from "@/data/resume";
import { Section } from "@/components/Section";

// Short briefs for each sub-project displayed on the hub cards
const projectBriefs: Record<string, string> = {
  "fsae-struts": "Replaced failure-prone CFRP struts with topology-optimized aluminum — 58% lighter than baseline, zero shear failures.",
  "fsae-aero-elasticity": "Solved the L⁴ deflection scaling problem on a 50\" span wing, achieving <0.1\" surface deflection at 95 mph.",
  "fsae-internal-structures": "Selected Corecell M80 from 13 foam candidates for a leading edge that absorbs cone strikes instead of shattering.",
  "fsae-manufacturing": "Reduced prepreg consumption by 70% and eliminated tribal-knowledge errors with standardized SOP manuals.",
};

export default function FSAEHub() {
  // Only get projects that are hidden from the main page (our FSAE sub-projects)
  const fsaeProjects = resumeData.projects.filter(p => 'hideFromMain' in p && p.hideFromMain);

  return (
    <main className="min-h-screen selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Main Portfolio
          </Link>

          <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/projects/fsae/car-drifting.jpg"
                alt="Illini Electric Motorsports FSAE Car"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-[50%_25%]"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
                ILLINI ELECTRIC MOTORSPORTS
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-4 max-w-2xl">
                Aerodynamics Structures Lead
              </p>
              <div className="flex flex-wrap items-center gap-3 text-white/80 font-mono text-sm">
                <span className="text-primary-foreground bg-primary/80 px-2 py-0.5 rounded">FSAE 2024 - Present</span>
                <span>University of Illinois</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Overview */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent border border-border rounded-2xl">
          <p className="text-xl text-foreground leading-relaxed italic">
            "While leading the front wing structures at Illini Electric Motorsport, I had the opportunity to expose myself to multiple different projects. From topology optimization to an aero elasticity study to actual manufacturing. Because each of these projects dealt with different engineering challenges, I thought it would be more valuable to split them into sub projects that can be found below :)"
          </p>
        </div>
      </div>

      <Section id="fsae-projects" className="pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {fsaeProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px] bg-secondary/10 rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Link href={`/projects/${project.id}`} className="block w-full h-full">
                  {'image' in project && project.image ? (
                    <Image
                      src={project.image as string}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                      <span className="font-mono text-sm text-muted-foreground">No Image</span>
                    </div>
                  )}

                  {/* Overlay Text */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-primary-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed mt-1">
                      {projectBriefs[project.id] || ''}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Contact />
    </main>
  );
}
