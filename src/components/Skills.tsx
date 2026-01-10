"use client";

import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <Section id="skills" className="bg-background relative">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
             <span className="text-primary">04.</span> 
             <span>Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Software & Tools */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground border-b border-border pb-2">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.technical.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-secondary/10 border border-transparent text-sm text-foreground rounded hover:border-primary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Coursework */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground border-b border-border pb-2">
              Relevant Courses
            </h3>
            <ul className="space-y-2">
              {resumeData.skills.courses.map((course, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                   <span className="text-primary mt-1">•</span> {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
             <h3 className="text-lg font-bold mb-6 text-foreground border-b border-border pb-2">
              Certifications
            </h3>
            <ul className="space-y-2">
              {resumeData.skills.certifications.map((cert, i) => (
                <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">•</span> {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
