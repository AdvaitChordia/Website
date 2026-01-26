'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

export function ProjectContent({ project }: { project: any }) {
    const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

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
    const hasPhotos = 'photos' in project && project.photos?.length > 0;

    return (
        <>
            {/* Overview */}
            {hasOverview && (
                <div className="mb-16 p-8 bg-gradient-to-br from-primary/5 to-transparent border border-border rounded-2xl">
                    <p className="text-xl text-foreground leading-relaxed italic">
                        "{project.overview}"
                    </p>
                </div>
            )}

            {/* Journal Entries - Custom Layouts */}
            {hasJournal && (
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-foreground">My Journey</h2>
                    <div className="space-y-16">
                        {project.journal.map((entry: any, i: number) => {
                            const isHeroImage = entry.image === project.image;

                            return (
                                <article key={i} className="relative">
                                    {/* Entry number indicator */}
                                    <div className="absolute -left-4 top-0 w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                                        {i + 1}
                                    </div>

                                    <div className="pl-8">
                                        <h3 className="text-xl font-bold text-primary mb-6">{entry.title}</h3>

                                        {/* Image handling - Interactive & Floated */}
                                        {entry.image && !isHeroImage && (
                                            <div className="md:float-right md:ml-8 mb-6 md:mb-2 md:max-w-[45%]">
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
                                        <div className="text-muted-foreground leading-relaxed text-lg font-light">

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

                                            {/* 5. Text Layout */}
                                            {(entry.layout === 'text' || (!entry.layout && !entry.bullets && !entry.checklist && !entry.items && !entry.table)) && (
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

            {/* Photo Gallery - Interactive */}
            {hasPhotos && (
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.photos
                            .filter((photo: { src: string }) => photo.src !== project.image) // Skip hero image
                            .map((photo: { src: string; caption: string }, i: number) => (
                                <motion.button
                                    key={i}
                                    layoutId={`gallery-${photo.src}`}
                                    onClick={() => setSelectedImage({ src: photo.src, caption: photo.caption })}
                                    className="group relative rounded-xl overflow-hidden border border-border text-left w-full cursor-zoom-in bg-card"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="p-2">
                                        <Image
                                            src={photo.src}
                                            alt={photo.caption}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                                        <p className="absolute bottom-3 left-3 right-3 text-white text-sm leading-relaxed px-2">
                                            {photo.caption}
                                        </p>
                                    </div>
                                </motion.button>
                            ))}
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
