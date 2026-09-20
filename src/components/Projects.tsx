"use client";

import { useState } from "react";
import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Combine all skills for filters
  const allFilters = [
    ...resumeData.skills.cad,
    ...resumeData.skills.software,
    ...resumeData.skills.certifications
  ];

  // Filter logic
  const filteredProjects = resumeData.projects.filter(project => {
    if (activeFilter === "All") {
      return !('hideFromMain' in project && project.hideFromMain);
    }

    // When a filter is active, skip the hub tile (it's just a container)
    if ('customUrl' in project) return false;

    // Check if filter is in project tags
    const hasTag = project.tags?.includes(activeFilter);

    // Check mapping in skillProjects
    const mappedResult = resumeData.skillProjects[activeFilter]?.includes(project.id);

    // Check mapping in certificationProjects
    const certResult = resumeData.certificationProjects[activeFilter]?.includes(project.id);

    return hasTag || mappedResult || certResult;
  });

  return (
    <Section id="projects" className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - Styled like Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-primary/40"></div>
            <span className="font-mono text-primary text-sm tracking-widest uppercase">
              PROJECTS
            </span>
            <div className="h-[1px] w-12 bg-primary/40"></div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            <button
              onClick={() => setActiveFilter("All")}
              className={`px-6 py-2 border font-mono tracking-wider uppercase text-[10px] md:text-xs font-medium rounded-sm transition-all duration-300 ${activeFilter === "All"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-primary border-primary/50 hover:bg-primary/10 hover:border-primary"
                }`}
            >
              All Work
            </button>
            {allFilters.map((filter, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(filter === activeFilter ? "All" : filter)}
                className={`px-6 py-2 border font-mono tracking-wider uppercase text-[10px] md:text-xs font-medium rounded-sm transition-all duration-300 ${activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-primary border-primary/50 hover:bg-primary/10 hover:border-primary"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px] bg-secondary/10 rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Link href={'customUrl' in project && typeof project.customUrl === 'string' ? project.customUrl : `/projects/${project.id}`} className="block w-full h-full">

                  {/* Image Background */}
                  {'image' in project && project.image ? (
                    <Image
                      src={project.image as string}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                      <span className="font-mono text-sm text-muted-foreground">No Image</span>
                    </div>
                  )}

                  {/* Impact Metric Badge */}
                  {'impactMetric' in project && project.impactMetric && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-primary/90 text-primary-foreground text-[10px] font-mono font-bold tracking-wider rounded-sm shadow-lg backdrop-blur-sm z-10">
                      {project.impactMetric as string}
                    </div>
                  )}

                  {/* Overlay Text */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-16 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-primary-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/80 font-mono text-[10px] tracking-wide uppercase mb-2">
                      {project.role} | {project.date}
                    </p>
                    {/* Engineering headline */}
                    {'headline' in project && project.headline && (
                      <p className="text-white/70 text-xs leading-relaxed mb-2 line-clamp-2">
                        {project.headline as string}
                      </p>
                    )}
                    {/* Tag pills - always visible */}
                    {'tags' in project && project.tags && (
                      <div className="flex flex-wrap gap-1">
                        {(project.tags as string[]).slice(0, 3).map((tag: string, j: number) => (
                          <span key={j} className="px-1.5 py-0.5 bg-white/15 text-[9px] font-mono text-white/80 rounded-sm backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found for filter: {activeFilter}</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-primary hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};
