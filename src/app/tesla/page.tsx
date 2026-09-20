"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { resumeData } from "@/data/resume";
import { Section } from "@/components/Section";

// Short briefs for each Tesla sub-project displayed on the hub cards
const projectBriefs: Record<string, string> = {
  "tesla-abuse-fixture": "Designed a stiffness-matched underside abuse fixture for battery pack crash qualification, replicating vehicle monocoque boundary conditions in a lab setting.",
};

export default function TeslaHub() {
  // Get Tesla sub-projects (hidden from main page, with tesla- prefix)
  const teslaProjects = resumeData.projects.filter(
    p => 'hideFromMain' in p && p.hideFromMain && p.id.startsWith("tesla-")
  );

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
                src="/projects/tesla_hero.jpeg"
                alt="Tesla Model X — FSD ING"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-[50%_60%]"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
                TESLA — BATTERY ANALYSIS
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-4 max-w-2xl">
                Crash Analysis Intern
              </p>
              <div className="flex flex-wrap items-center gap-3 text-white/80 font-mono text-sm">
                <span className="text-primary-foreground bg-primary/80 px-2 py-0.5 rounded">Aug 2026 – Present</span>
                <span>Palo Alto, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Overview */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
        <div className="p-8 bg-gradient-to-br from-primary/5 to-transparent border border-border rounded-2xl">
          <p className="text-xl text-foreground leading-relaxed italic">
            &quot;I&apos;m currently at Tesla for the fall semester as a Battery Analysis intern, working on abuse and crash simulations for the battery pack. I&apos;m so pumped to be contributing alongside the incredible engineers here, building toward a cleaner future.&quot;
          </p>
        </div>
      </div>

      {/* Tools Overview */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {["LS-DYNA", "BETA CAE ANSA", "BETA CAE META", "Python", "Crash Simulation", "Fixture Design"].map((tool) => (
            <span key={tool} className="px-3 py-1 border border-border rounded-sm font-mono text-xs text-muted-foreground">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <Section id="tesla-projects" className="pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {teslaProjects.map((project) => (
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
