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
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-muted-foreground text-base leading-normal mb-4 font-light text-center">
                        I am an Engineering Mechanics student at the University of Illinois Urbana-Champaign, complementing it with a minor in Materials Science. My pursuit of engineering as a career is rooted in a fascination with problem solving, but my academic career has narrowed that curiosity into structural analysis, design optimization, and mechanical theory.
                    </p>
                    <p className="text-muted-foreground text-base leading-normal mb-4 font-light text-center">
                        My professional experiences have been the true catalyst for my career trajectory. My time at Force Motors gave me a firsthand look at the rigors of the automotive industry, teaching me that effective product development requires balancing high-performance engineering with manufacturability. Whether I am running FEA simulations to validate a design or iterating on a prototype, I approach every problem with a focus on precision and reliability.
                    </p>
                    <p className="text-muted-foreground text-base leading-normal mb-4 font-light text-center">
                        I am particularly passionate about the intersection of automotive engineering and sustainability. As a petrolhead myself, I want to build towards a generation of vehicles that are as sustainable as they are powerful. I am driven to create engineering solutions that reduce environmental impact without sacrificing performance.
                    </p>
                    <p className="text-muted-foreground text-base leading-normal font-light text-center">
                        Currently, I am seeking an internship in the automotive, sustainability, or product development sectors for the summer of 2026. I am eager to join a forward-thinking team where I can apply my background in design and analysis to build systems that define the future of mobility, while continuously expanding my technical expertise.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};
