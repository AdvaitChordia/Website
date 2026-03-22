"use client";

import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <Section id="experience" className="bg-background relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-primary/40"></div>
            <span className="font-mono text-primary text-sm tracking-widest uppercase">
              EXPERIENCE
            </span>
            <div className="h-[1px] w-12 bg-primary/40"></div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {resumeData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l border-border"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-background" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1">
                    {job.company}
                  </div>
                </div>
                <div className="flex flex-col sm:items-end text-sm text-muted-foreground font-mono">
                  <span>{job.date}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3 font-light">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
