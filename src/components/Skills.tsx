"use client";

import { useState } from "react";
import { Section } from "./Section";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { SkillModal } from "./SkillModal";
import Image from "next/image";

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  return (
    <>
      <Section id="skills" className="bg-background relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-[1px] w-12 bg-primary/40"></div>
              <span className="font-mono text-primary text-sm tracking-widest uppercase">
                SKILLS & EXPERTISE
              </span>
              <div className="h-[1px] w-12 bg-primary/40"></div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* CAD/FEA Software - Vertical List */}
            <div className="lg:col-span-4">
              <h3 className="text-lg font-bold mb-6 text-foreground border-b border-border pb-2">
                CAD & FEA Software
              </h3>
              <div className="space-y-2">
                {resumeData.skills.cad.map((skill, i) => {
                  const hasProjects = (resumeData.skillProjects[skill]?.length || 0) > 0;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => setSelectedSkill(skill)}
                      whileHover={{ x: 4 }}
                      className={`w-full text-left px-4 py-2.5 bg-secondary/5 border-l-2 text-sm text-foreground transition-all cursor-pointer flex items-center justify-between group ${hasProjects
                        ? "border-l-primary hover:bg-primary/10 hover:text-primary"
                        : "border-l-border hover:border-l-muted-foreground hover:bg-secondary/10"
                        }`}
                    >
                      <span>{skill}</span>
                      {hasProjects && (
                        <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          View projects →
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Software, Courses, Certifications */}
            <div className="lg:col-span-8 space-y-8">
              {/* Common Software - Horizontal */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                  Software & Programming
                </h3>
                <div className="flex flex-wrap gap-3">
                  {resumeData.skills.software.map((software, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-secondary/10 border border-border text-sm text-foreground rounded-full hover:border-primary/30 transition-colors"
                    >
                      {software}
                    </span>
                  ))}
                </div>
              </div>

              {/* Relevant Courses - Interactive */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                  Relevant Courses
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Click to see projects using these concepts
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {resumeData.skills.courses.map((course, i) => {
                    const hasProjects = (resumeData.courseProjects[course]?.length || 0) > 0;
                    return (
                      <motion.button
                        key={i}
                        onClick={() => hasProjects && setSelectedCourse(course)}
                        whileHover={hasProjects ? { scale: 1.02 } : {}}
                        whileTap={hasProjects ? { scale: 0.98 } : {}}
                        className={`text-left px-4 py-3 rounded-lg border text-sm transition-all ${hasProjects
                          ? "bg-secondary/5 border-primary/20 hover:border-primary hover:bg-primary/5 cursor-pointer"
                          : "bg-secondary/5 border-border cursor-default"
                          }`}
                      >
                        <span className={hasProjects ? "text-foreground" : "text-muted-foreground"}>
                          {course}
                        </span>
                        {hasProjects && (
                          <span className="ml-2 text-xs text-primary">•</span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Certifications - Interactive */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-foreground border-b border-border pb-2">
                  Certifications
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Click to see projects using these skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.certifications.map((cert, i) => {
                    const hasProjects = (resumeData.certificationProjects[cert]?.length || 0) > 0;
                    return (
                      <motion.button
                        key={i}
                        onClick={() => hasProjects && setSelectedCertification(cert)}
                        whileHover={hasProjects ? { scale: 1.05 } : {}}
                        whileTap={hasProjects ? { scale: 0.95 } : {}}
                        className={`px-3 py-1.5 text-sm rounded border transition-all ${hasProjects
                          ? "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 cursor-pointer"
                          : "bg-secondary/5 border-border text-muted-foreground cursor-default"
                          }`}
                      >
                        {cert}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skill Modal */}
      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}

      {/* Certification Modal */}
      {selectedCertification && (
        <CertificationModal
          cert={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </>
  );
};

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
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 22,
      stiffness: 300,
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

// Course Modal Component with enhanced animations
const CourseModal = ({ course, onClose }: { course: string; onClose: () => void }) => {
  const projectIds = resumeData.courseProjects[course] || [];
  const projects = resumeData.projects.filter((p) => projectIds.includes(p.id));

  return (
    <>
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-[90vw] max-w-2xl max-h-[80vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl pointer-events-auto"
        >
          {/* Glowing border effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10"
          />

          {/* Header */}
          <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
              >
                <span className="text-lg">📚</span>
              </motion.div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs font-mono text-primary uppercase tracking-wider"
                >
                  Course
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-foreground"
                >
                  {course}
                </motion.h3>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary/20 transition-colors text-muted-foreground hover:text-foreground"
            >
              ✕
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground mb-6"
            >
              Projects where I applied concepts from <span className="text-primary font-medium">{course}</span>:
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <a
                    href={`/projects/${project.id}`}
                    onClick={onClose}
                    className="group block bg-secondary/5 border border-border rounded-xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-all relative overflow-hidden"
                  >
                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <div className="flex items-start gap-4 relative">
                      {/* Project image */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden"
                      >
                        {'image' in project && project.image ? (
                          <Image
                            src={project.image as string}
                            alt={project.title}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-2xl">📁</span>
                        )}
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
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
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        →
                      </motion.span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

// Certification Modal Component
const CertificationModal = ({ cert, onClose }: { cert: string; onClose: () => void }) => {
  const projectIds = resumeData.certificationProjects[cert] || [];
  const projects = resumeData.projects.filter((p) => projectIds.includes(p.id));

  return (
    <>
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-[90vw] max-w-2xl max-h-[80vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl pointer-events-auto"
        >
          {/* Glowing border effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl -z-10"
          />

          {/* Header */}
          <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"
              >
                <span className="text-lg">🎖️</span>
              </motion.div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs font-mono text-primary uppercase tracking-wider"
                >
                  Certification
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-foreground"
                >
                  {cert}
                </motion.h3>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary/20 transition-colors text-muted-foreground hover:text-foreground"
            >
              ✕
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground mb-6"
            >
              Projects where I utilized skills from <span className="text-primary font-medium">{cert}</span>:
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <a
                    href={`/projects/${project.id}`}
                    onClick={onClose}
                    className="group block bg-secondary/5 border border-border rounded-xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-all relative overflow-hidden"
                  >
                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <div className="flex items-start gap-4 relative">
                      {/* Project image */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden"
                      >
                        {'image' in project && project.image ? (
                          <Image
                            src={project.image as string}
                            alt={project.title}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-2xl">📁</span>
                        )}
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
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
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        →
                      </motion.span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
