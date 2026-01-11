"use client";

import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact" className="py-24 text-center relative overflow-hidden">
      {/* Background radial gradient */}
      {/* Background overlay removed to reveal grid */}

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-12 bg-primary/40"></div>
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            CONTACT
          </span>
          <div className="h-[1px] w-12 bg-primary/40"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          Let's Build Something Great
        </h2>

        <p className="text-muted-foreground mb-12 text-lg md:text-xl font-light max-w-2xl mx-auto">
          I'm currently looking for new opportunities in mechanical design and analysis.
          Whether you have a question about my work or want to discuss a project, my inbox is open.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          <a href={`mailto:${resumeData.personal.email}`} className="group relative flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">
            <Mail className="w-5 h-5 text-inherit group-hover:scale-110 transition-transform" />
            <span className="text-sm font-mono tracking-wider text-inherit">{resumeData.personal.email}</span>
          </a>

          <a href="https://www.linkedin.com/in/advait-chordia-3bbb31206" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">
            <Linkedin className="w-5 h-5 text-inherit group-hover:scale-110 transition-transform" />
            <span className="text-sm font-mono tracking-wider text-inherit">LinkedIn</span>
          </a>

          <div className="flex items-center gap-3 px-6 py-3 border border-transparent text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-mono">{resumeData.personal.location}</span>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.</p>
          <p>Designed & Built by Advait Chordia</p>
        </footer>
      </div>
    </Section>
  );
};
