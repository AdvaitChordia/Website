"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cpu, Cog } from "lucide-react";
import { resumeData } from "@/data/resume";
import { BlueprintBackground } from "./BlueprintBackground";

export const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background">
      <BlueprintBackground />
      
      <div className="z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-[1px] w-12 bg-primary/50"></div>
          <span className="font-mono text-primary text-sm tracking-widest uppercase">Portfolio</span>
          <div className="h-[1px] w-12 bg-primary/50"></div>
        </motion.div>
        
        {/* Name */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.1 }}
        >
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-white">
                HI, I'M <span className="text-primary">{resumeData.personal.name.toUpperCase()}</span>
            </h2>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold tracking-tight mb-8 text-muted-foreground"
        >
          {resumeData.personal.title}
        </motion.h1>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          {resumeData.personal.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            <span className="relative font-mono tracking-wider flex items-center gap-2">
              VIEW WORK
            </span>
          </a>
          
          <a
            href="#contact"
            className="group px-8 py-3 border border-border rounded-sm hover:bg-accent/10 hover:border-accent transition-colors"
          >
             <span className="text-foreground font-mono tracking-wider flex items-center gap-2 group-hover:text-accent transition-colors">
              CONTACT
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <ArrowDown className="text-muted-foreground w-5 h-5 animate-bounce" />
      </motion.div>
    </div>
  );
};
