"use client";

import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { FolderOpen, ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  return (
    <Section id="projects" className="bg-background relative overflow-hidden">
      {/* Decorative background numbers */}
      <div className="absolute top-20 right-0 font-mono text-[200px] font-bold text-foreground/5 opacity-20 pointer-events-none select-none z-0">03</div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-primary font-mono text-xl">03.</span>
            <span className="border-b-2 border-primary/50 pb-1">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="grid md:grid-cols-5 h-full">
                {/* Project Image / Visual Area */}
                <div className="md:col-span-2 relative min-h-[200px] md:h-full bg-secondary/10 border-b md:border-b-0 md:border-r border-border overflow-hidden">
                  {'image' in project && project.image ? (
                    <img
                      src={project.image as string}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                      <FolderOpen className="w-12 h-12 text-muted-foreground mb-2" />
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="md:col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 cursor-pointer hover:underline decoration-primary/50 underline-offset-4">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-xs font-mono text-primary mb-4">
                      {project.role} | {project.date}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.description.filter((d: string) => !d.startsWith('<!--')).slice(0, 3).map((desc, i) => (
                        <li key={i} className="text-sm text-muted-foreground line-clamp-2 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border flex justify-end">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-sm font-mono font-medium text-primary hover:text-accent transition-colors flex items-center gap-2"
                    >
                      READ MORE <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* New Project Placeholder */}
          <div className="border border-dashed border-border rounded-sm bg-card/50 hover:bg-card transition-colors flex flex-col items-center justify-center p-8 gap-4 group cursor-default text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-muted-foreground">More Coming Soon</h3>
              <p className="font-mono text-xs text-muted-foreground/70 mt-1">Check back later for updates</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
