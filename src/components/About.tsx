"use client";

import { Section } from "./Section";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <Section id="about" className="pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Heading - Styled like Hero Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-3 mb-12"
                >
                    <div className="h-[1px] w-12 bg-primary/40"></div>
                    <span className="font-mono text-primary text-sm tracking-widest uppercase">
                        ABOUT ME
                    </span>
                    <div className="h-[1px] w-12 bg-primary/40"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        I am a Mechanical Engineering student at UIUC with a passion for design and manufacturing.
                        This text is a placeholder for my personal bio. I will update this section with more details
                        about my background, interests, and professional journey soon.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};
