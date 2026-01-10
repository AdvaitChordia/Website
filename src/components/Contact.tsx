"use client";

import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <Section id="contact" className="py-24 text-center relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          Let's Build Something Great
        </h2>
        
        <p className="text-muted-foreground mb-12 text-lg md:text-xl font-light max-w-2xl mx-auto">
          I'm currently looking for new opportunities in mechanical design and analysis. 
          Whether you have a question about my work or want to discuss a project, my inbox is open.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            <a href={`mailto:${resumeData.personal.email}`} className="group flex items-center gap-3 px-6 py-3 bg-card hover:bg-card/80 rounded-full transition-all border border-border hover:border-primary/50">
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-mono text-foreground">{resumeData.personal.email}</span>
            </a>
            
            <a href={resumeData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 bg-card hover:bg-card/80 rounded-full transition-all border border-border hover:border-primary/50">
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-mono text-foreground">LinkedIn</span>
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
