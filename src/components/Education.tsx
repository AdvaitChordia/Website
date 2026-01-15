"use client";

import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export const Education = () => {
    return (
        <Section id="about" className="bg-background pt-0">
            <div className="max-w-5xl mx-auto px-4">
                <div className="border border-border bg-card/30 p-8 md:p-12 relative overflow-hidden rounded-sm">

                    <div className="flex flex-col md:flex-row gap-12 relative z-10">
                        <div className="md:w-1/3 md:border-r border-border md:pr-8">
                            <h2 className="text-3xl font-bold mb-4">
                                Education
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed font-light">
                                Academic background and foundational engineering knowledge base.
                            </p>
                        </div>

                        <div className="md:w-2/3">
                            {resumeData.education.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{edu.school}</h3>
                                    </div>
                                    <div className="text-lg text-primary mb-2 font-medium">{edu.degree}</div>
                                    <div className="text-muted-foreground font-light italic mb-4 text-sm">{edu.minors}</div>

                                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                                        <span>{edu.location}</span>
                                        <span className="text-primary">•</span>
                                        <span>{edu.date}</span>
                                        <span className="text-primary">•</span>
                                        <span className="text-foreground">GPA: {edu.gpa}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
