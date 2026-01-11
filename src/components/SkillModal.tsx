"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, FolderOpen, Sparkles } from "lucide-react";
import { resumeData } from "@/data/resume";
import Link from "next/link";

interface SkillModalProps {
    skill: string | null;
    onClose: () => void;
}

// Animation variants for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 24,
        },
    },
};

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotateX: 10,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring" as const,
            damping: 22,
            stiffness: 300,
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: -30,
        transition: {
            duration: 0.2,
        },
    },
};

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, delay: 0.1 },
    },
};

export const SkillModal = ({ skill, onClose }: SkillModalProps) => {
    if (!skill) return null;

    const projectIds = resumeData.skillProjects[skill] || [];
    const projects = resumeData.projects.filter((p) => projectIds.includes(p.id));

    return (
        <AnimatePresence>
            {skill && (
                <>
                    {/* Backdrop with blur animation */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
                    />

                    {/* Floating particles effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
                    >
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    x: Math.random() * window.innerWidth,
                                    y: window.innerHeight,
                                }}
                                animate={{
                                    opacity: [0, 0.5, 0],
                                    y: -100,
                                    x: Math.random() * window.innerWidth,
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    delay: i * 0.1,
                                    ease: "easeOut",
                                }}
                                className="absolute w-2 h-2 rounded-full bg-primary/40"
                            />
                        ))}
                    </motion.div>

                    {/* Modal with 3D perspective */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center perspective-1000 pointer-events-none">
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-[90vw] max-w-2xl max-h-[80vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl pointer-events-auto"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Glowing border effect */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10"
                            />

                            {/* Header with icon animation */}
                            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between rounded-t-2xl">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                        className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
                                    >
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </motion.div>
                                    <div>
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-xs font-mono text-primary uppercase tracking-wider"
                                        >
                                            Skill
                                        </motion.p>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-2xl font-bold text-foreground"
                                        >
                                            {skill}
                                        </motion.h3>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-secondary/20 transition-colors"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </motion.button>
                            </div>

                            {/* Content with staggered animations */}
                            <div className="p-6">
                                {projects.length > 0 ? (
                                    <>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-sm text-muted-foreground mb-6"
                                        >
                                            Projects where I applied <span className="text-primary font-medium">{skill}</span>:
                                        </motion.p>
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="space-y-4"
                                        >
                                            {projects.map((project, index) => (
                                                <motion.div key={project.id} variants={itemVariants}>
                                                    <Link
                                                        href={`/projects/${project.id}`}
                                                        onClick={onClose}
                                                        className="group block bg-secondary/5 border border-border rounded-xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-all relative overflow-hidden"
                                                    >
                                                        {/* Hover shimmer effect */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                        />

                                                        <div className="flex items-start gap-4 relative">
                                                            {/* Icon/Image with bounce */}
                                                            <motion.div
                                                                whileHover={{ scale: 1.1 }}
                                                                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden"
                                                            >
                                                                {'image' in project && project.image ? (
                                                                    <img
                                                                        src={project.image as string}
                                                                        alt={project.title}
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <FolderOpen className="w-6 h-6 text-primary" />
                                                                )}
                                                            </motion.div>

                                                            {/* Info */}
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                                                    {project.title}
                                                                </h4>
                                                                <p className="text-xs font-mono text-muted-foreground mt-1">
                                                                    {project.role} • {project.date}
                                                                </p>
                                                                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                                                    {project.description[0]}
                                                                </p>
                                                            </div>

                                                            {/* Animated arrow */}
                                                            <motion.div
                                                                animate={{ x: [0, 5, 0] }}
                                                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                                                className="flex-shrink-0 mt-1"
                                                            >
                                                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                                            </motion.div>
                                                        </div>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <FolderOpen className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                                        </motion.div>
                                        <p className="text-muted-foreground">
                                            No featured projects for this skill yet.
                                        </p>
                                        <p className="text-sm text-muted-foreground/70 mt-2">
                                            Check back as I add more projects!
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
