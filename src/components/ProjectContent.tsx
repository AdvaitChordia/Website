'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronDown, ChevronUp, Target, Wrench, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export function ProjectContent({ project }: { project: any }) {
    const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);
    const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const hasOverview = 'overview' in project;
    const hasJournal = 'journal' in project && project.journal?.length > 0;
    const hasSections = 'sections' in project && project.sections?.length > 0;
    const hasTldr = 'tldr' in project && project.tldr;
    const hasConstraints = 'constraints' in project && project.constraints?.length > 0;

    const toggleSection = (index: number) => {
        setExpandedSections(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <>
            {/* Overview */}
            {hasOverview && (
                <div className="mb-10 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-border rounded-2xl">
                    <p className="text-xl text-foreground leading-relaxed italic">
                        &quot;{project.overview}&quot;
                    </p>
                </div>
            )}

            {/* ═══ TL;DR Banner ═══ */}
            {hasTldr && (
                <div className="mb-10">
                    <div className="bg-card border-2 border-primary/20 rounded-xl overflow-hidden shadow-sm">
                        <div className="px-6 py-3 bg-primary/5 border-b border-primary/10">
                            <span className="font-mono text-xs tracking-widest uppercase text-primary font-semibold">Engineering Summary</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <Target className="w-4 h-4 text-red-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">The Problem</p>
                                    <p className="text-foreground font-medium leading-relaxed">{project.tldr.problem}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <Wrench className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">My Approach</p>
                                    <p className="text-foreground font-medium leading-relaxed">{project.tldr.approach}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Key Result</p>
                                    <p className="text-foreground font-medium leading-relaxed">{project.tldr.result}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ═══ Constraints & Specifications Panel ═══ */}
            {hasConstraints && (
                <div className="mb-12">
                    <div className="bg-card border border-border rounded-xl overflow-hidden">
                        <div className="px-6 py-3 bg-primary/5 border-b border-border">
                            <span className="font-mono text-xs tracking-widest uppercase text-primary font-semibold">Design Constraints & Specifications</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                            {project.constraints.map((c: { label: string; value: string }, i: number) => (
                                <div
                                    key={i}
                                    className={`px-6 py-4 flex flex-col gap-1 border-b border-border last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0 ${i % 2 === 0 ? 'sm:border-r' : ''} ${i % 2 !== 0 ? '' : ''}`}
                                >
                                    <span className="text-xs font-mono uppercase tracking-wider text-primary/70">{c.label}</span>
                                    <span className="text-foreground font-medium text-sm">{c.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ═══ Case Study Sections (formerly "My Journey") ═══ */}
            {hasJournal && (
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-[1px] flex-1 bg-border"></div>
                        <h2 className="text-sm font-mono tracking-widest uppercase text-primary font-semibold">Engineering Deep Dive</h2>
                        <div className="h-[1px] flex-1 bg-border"></div>
                    </div>
                    <div className="space-y-10">
                        {project.journal.map((entry: any, i: number) => {
                            const isHeroImage = entry.image === project.image;
                            const isExpanded = expandedSections[i] !== false; // Default to expanded on desktop

                            return (
                                <article key={i} className="relative">
                                    {/* Section header with expand/collapse on mobile */}
                                    <button
                                        onClick={() => toggleSection(i)}
                                        className="w-full text-left flex items-start gap-4 group md:cursor-default"
                                    >
                                        {/* Section indicator */}
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold font-mono shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                                {entry.title}
                                            </h3>
                                        </div>
                                        {/* Mobile-only expand indicator */}
                                        <div className="md:hidden shrink-0 mt-1">
                                            {isExpanded ? (
                                                <ChevronUp className="w-5 h-5 text-muted-foreground" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Content — always visible on desktop, toggle on mobile */}
                                    <div className={`mt-4 pl-12 ${isExpanded ? 'block' : 'hidden md:block'}`}>

                                        {/* Image handling - Interactive & Floated */}
                                        {entry.image && !isHeroImage && (
                                            <div className="md:float-right md:ml-8 mb-6 md:mb-2 md:max-w-[55%]">
                                                <motion.button
                                                    layoutId={`image-${entry.image}`}
                                                    onClick={() => setSelectedImage({ src: entry.image, caption: entry.caption || entry.title })}
                                                    className="w-full text-left rounded-xl overflow-hidden border border-border shadow-lg cursor-zoom-in group bg-card"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="p-2">
                                                        <div className="relative rounded-lg overflow-hidden">
                                                            <Image
                                                                src={entry.image}
                                                                alt={entry.title}
                                                                width={600}
                                                                height={400}
                                                                className="w-full h-auto"
                                                                unoptimized={entry.image.endsWith('.gif')}
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                                <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {entry.caption && (
                                                        <p className="text-xs text-muted-foreground mt-0 mb-2 italic text-center px-4">{entry.caption}</p>
                                                    )}
                                                </motion.button>
                                            </div>
                                        )}

                                        {/* Layout Switcher */}
                                        <div className="text-muted-foreground leading-relaxed text-base font-light">

                                            {/* 1. Problem-Solution Layout */}
                                            {entry.layout === 'problem-solution' && entry.items?.map((item: any, j: number) => (
                                                <div key={j} className="mb-8 p-6 bg-card/50 border border-border rounded-xl">
                                                    <h4 className="font-bold text-foreground mb-2 text-base uppercase tracking-wider">{item.problem}</h4>
                                                    <div className="space-y-3 text-base">
                                                        <div className="flex gap-2">
                                                            <span className="font-semibold text-primary min-w-[100px] text-sm uppercase tracking-wide">Initial Idea:</span>
                                                            <span>{item.idea}</span>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <span className="font-semibold text-primary min-w-[100px] text-sm uppercase tracking-wide">Solution:</span>
                                                            <span>{item.solution}</span>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <span className="font-semibold text-primary min-w-[100px] text-sm uppercase tracking-wide">Why:</span>
                                                            <span>{item.rationale}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            {/* 2. Checklist Layout */}
                                            {entry.layout === 'checklist' && (
                                                <div className="space-y-3">
                                                    {entry.intro && (
                                                        <p className="text-muted-foreground mb-4 font-medium">{entry.intro}</p>
                                                    )}
                                                    {entry.checklist?.map((item: string, j: number) => (
                                                        <div key={j} className="flex items-start gap-4 p-3 bg-card/30 rounded-lg border border-transparent hover:border-border transition-colors">
                                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500 shrink-0 mt-0.5">
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </div>
                                                            <span className="text-foreground/90">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* 3. Table Layout */}
                                            {entry.layout === 'table' && (
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left">
                                                        <thead className="bg-primary/5 text-primary uppercase text-xs">
                                                            <tr>
                                                                {entry.table.headers.map((header: string, h: number) => (
                                                                    <th key={h} className="px-4 py-3 font-semibold tracking-wider">{header}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-border">
                                                            {entry.table.rows.map((row: string[], r: number) => (
                                                                <tr key={r} className="hover:bg-card/50 transition-colors">
                                                                    {row.map((cell: string, c: number) => (
                                                                        <td key={c} className="px-4 py-3 font-medium text-foreground/80">{cell}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                            {/* 4. Bullets Layout */}
                                            {(entry.layout === 'bullets' || (!entry.layout && entry.bullets)) && (
                                                <ul className="space-y-2">
                                                    {(entry.bullets || []).map((bullet: string, j: number) => (
                                                        <li key={j} className="flex items-start gap-3">
                                                            <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* 5. Code Layout */}
                                            {entry.layout === 'code' && entry.code && (
                                                <div className="rounded-xl overflow-hidden border border-border bg-[#1a1a2e]">
                                                    {entry.language && (
                                                        <div className="px-4 py-2 bg-[#16162a] text-xs text-gray-400 uppercase tracking-wider font-mono border-b border-border">
                                                            {entry.language}
                                                        </div>
                                                    )}
                                                    <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
                                                        <code className="text-gray-200 font-mono whitespace-pre">
                                                            {entry.code}
                                                        </code>
                                                    </pre>
                                                </div>
                                            )}

                                            {/* 6. Subsections Layout */}
                                            {entry.layout === 'subsections' && entry.subsections && (
                                                <div className="space-y-8">
                                                    {entry.intro && (
                                                        <div className="whitespace-pre-line mb-6">
                                                            {entry.intro}
                                                        </div>
                                                    )}
                                                    {entry.subsections.map((sub: any, j: number) => (
                                                        <div key={j} className="pl-4 border-l-2 border-primary/30">
                                                            <h4 className="text-lg font-semibold text-foreground mb-3">{sub.title}</h4>
                                                            {sub.image && (
                                                                <motion.button
                                                                    layoutId={`image-sub-${sub.image}`}
                                                                    onClick={() => setSelectedImage({ src: sub.image, caption: sub.caption || sub.title })}
                                                                    className="md:float-right md:ml-6 mb-4 md:mb-2 md:max-w-[50%] w-full text-left rounded-xl overflow-hidden border border-border shadow-lg cursor-zoom-in group bg-card"
                                                                    whileHover={{ scale: 1.02 }}
                                                                    transition={{ duration: 0.2 }}
                                                                >
                                                                    <div className="p-2">
                                                                        <div className="relative rounded-lg overflow-hidden">
                                                                            <Image
                                                                                src={sub.image}
                                                                                alt={sub.title}
                                                                                width={500}
                                                                                height={350}
                                                                                className="w-full h-auto"
                                                                                unoptimized={sub.image.endsWith('.gif')}
                                                                            />
                                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                                                <ZoomIn className="w-6 h-6 text-white drop-shadow-md" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {sub.caption && (
                                                                        <p className="text-xs text-muted-foreground mt-0 mb-2 italic text-center px-4">{sub.caption}</p>
                                                                    )}
                                                                </motion.button>
                                                            )}
                                                            <div className="whitespace-pre-line text-muted-foreground">
                                                                {sub.content}
                                                            </div>
                                                            <div className="clear-both" />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* 7. Decision Log Layout (NEW) */}
                                            {entry.layout === 'decision' && entry.decisions && (
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left border border-border rounded-xl overflow-hidden">
                                                        <thead className="bg-primary/5 text-primary uppercase text-xs">
                                                            <tr>
                                                                <th className="px-4 py-3 font-semibold tracking-wider">Decision</th>
                                                                <th className="px-4 py-3 font-semibold tracking-wider">Option A</th>
                                                                <th className="px-4 py-3 font-semibold tracking-wider">Option B</th>
                                                                <th className="px-4 py-3 font-semibold tracking-wider">Why I Chose</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-border">
                                                            {entry.decisions.map((d: any, j: number) => (
                                                                <tr key={j} className="hover:bg-card/50 transition-colors">
                                                                    <td className="px-4 py-3 font-semibold text-foreground">{d.decision}</td>
                                                                    <td className="px-4 py-3 text-foreground/70">{d.optionA}</td>
                                                                    <td className="px-4 py-3 text-foreground/70">{d.optionB}</td>
                                                                    <td className="px-4 py-3 text-foreground/90 font-medium">{d.rationale}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}

                                            {/* 8. Text Layout (default) */}
                                            {(entry.layout === 'text' || (!entry.layout && !entry.bullets && !entry.checklist && !entry.items && !entry.table && !entry.code && !entry.subsections && !entry.decisions)) && (
                                                <div className="whitespace-pre-line">
                                                    {entry.content}
                                                </div>
                                            )}

                                            <div className="clear-both" />
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Legacy sections support */}
            {hasSections && !hasJournal && (
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-8 text-foreground">Project Details</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {project.sections.map((section: { title: string; content: string }, i: number) => (
                            <div key={i} className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-bold text-primary mb-3">{section.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-light">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Fallback for projects without enhanced content */}
            {!hasOverview && !hasSections && !hasJournal && (
                <div className="mt-16 p-8 border border-dashed border-border rounded bg-card/50 text-center">
                    <p className="text-muted-foreground font-mono text-sm">
                        Detailed case study content coming soon.
                    </p>
                </div>
            )}

            {/* Expanded Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
                    >
                        <motion.button
                            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <div
                            className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center justify-center pointer-events-none"
                        >
                            <motion.img
                                layoutId={`image-${selectedImage.src}`}
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto cursor-default"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {selectedImage.caption && (
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-6 text-white text-center text-lg font-light pointer-events-auto max-w-2xl bg-black/50 px-4 py-2 rounded-full backdrop-blur-md"
                                >
                                    {selectedImage.caption}
                                </motion.p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
