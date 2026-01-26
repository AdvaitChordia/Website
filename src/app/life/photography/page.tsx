"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Film photography images
const filmPhotos = [
    // Main folder
    "/Beyond Engineering/Film/ics_001.jpg",
    "/Beyond Engineering/Film/ics_001-2.jpg",
    "/Beyond Engineering/Film/ics_002.jpg",
    "/Beyond Engineering/Film/ics_003.jpg",
    "/Beyond Engineering/Film/ics_004.jpg",
    "/Beyond Engineering/Film/ics_005.jpg",
    "/Beyond Engineering/Film/ics_006.jpg",
    "/Beyond Engineering/Film/ics_007.jpg",
    "/Beyond Engineering/Film/ics_008.jpg",
    "/Beyond Engineering/Film/ics_008.2.jpeg",
    "/Beyond Engineering/Film/ics_009.jpg",
    "/Beyond Engineering/Film/ics_011.jpg",
    "/Beyond Engineering/Film/ics_012.jpg",
    "/Beyond Engineering/Film/ics_013.jpg",
    "/Beyond Engineering/Film/ics_016.jpg",
    "/Beyond Engineering/Film/ics_018-2.jpg",
    "/Beyond Engineering/Film/ics_024.jpg",
    "/Beyond Engineering/Film/ics_028.jpg",
    "/Beyond Engineering/Film/ics_030.jpg",
    "/Beyond Engineering/Film/ics_032.jpg",
    "/Beyond Engineering/Film/ics_034.jpg",
    "/Beyond Engineering/Film/ics_035.jpg",
    "/Beyond Engineering/Film/ics_040.jpg",
    "/Beyond Engineering/Film/ics_042.jpg",
    "/Beyond Engineering/Film/ics_043.jpg",
    "/Beyond Engineering/Film/ics_047.jpg",
    // More folder
    "/Beyond Engineering/Film/more/ics_001.jpg",
    "/Beyond Engineering/Film/more/ics_001-2.jpg",
    "/Beyond Engineering/Film/more/ics_002.jpg",
    "/Beyond Engineering/Film/more/ics_003.jpg",
    "/Beyond Engineering/Film/more/ics_004.jpg",
    "/Beyond Engineering/Film/more/ics_006.jpg",
    "/Beyond Engineering/Film/more/ics_007.jpg",
    "/Beyond Engineering/Film/more/ics_008.jpg",
    "/Beyond Engineering/Film/more/ics_012.jpg",
    "/Beyond Engineering/Film/more/ics_012-2.jpg",
    "/Beyond Engineering/Film/more/ics_014.jpg",
    "/Beyond Engineering/Film/more/ics_016.jpg",
    "/Beyond Engineering/Film/more/ics_018-2.jpg",
    "/Beyond Engineering/Film/more/ics_022.jpg",
    "/Beyond Engineering/Film/more/ics_024.jpg",
    "/Beyond Engineering/Film/more/ics_028.jpg",
    "/Beyond Engineering/Film/more/ics_030-2.jpg",
    "/Beyond Engineering/Film/more/ics_032.jpg",
    "/Beyond Engineering/Film/more/ics_039.jpg",
];

export default function PhotographyPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [loaded, setLoaded] = useState<Set<number>>(new Set());

    useEffect(() => {
        document.documentElement.classList.add('life-theme');
        return () => {
            document.documentElement.classList.remove('life-theme');
        };
    }, []);

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowRight") setSelectedIndex((prev) => prev !== null ? (prev + 1) % filmPhotos.length : null);
            if (e.key === "ArrowLeft") setSelectedIndex((prev) => prev !== null ? (prev - 1 + filmPhotos.length) % filmPhotos.length : null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex]);

    return (
        <>
            {/* Page transition */}
            <motion.div
                initial={{ transform: "translateY(0%)" }}
                animate={{ transform: "translateY(-100%)" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 z-[100] bg-[#1E382B] pointer-events-none"
            />

            <main className="min-h-screen bg-[#0a0a0a]">
                {/* Minimal Nav */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <Link
                            href="/life"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-mono">Back to Life</span>
                        </Link>
                        <span className="text-sm font-mono text-white/50">Film Photography</span>
                    </div>
                </nav>

                {/* Hero */}
                <section className="pt-32 pb-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                        >
                            Film <span className="italic font-serif text-amber-400">Photography</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-white/60 max-w-2xl mx-auto"
                        >
                            A collection of moments captured on analog film. There's something magical about
                            the grain, the colors, and the intentionality of each frame.
                        </motion.p>
                    </div>
                </section>

                {/* Masonry Gallery */}
                <section className="px-4 pb-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {filmPhotos.map((src, index) => (
                                <motion.div
                                    key={src}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: Math.min(index * 0.03, 0.5) }}
                                    className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Film photo ${index + 1}`}
                                        width={400}
                                        height={600}
                                        className={`w-full h-auto transition-all duration-500 group-hover:scale-105 ${loaded.has(index) ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        onLoad={() => setLoaded((prev) => new Set(prev).add(index))}
                                    />
                                    {!loaded.has(index) && (
                                        <div className="absolute inset-0 bg-white/5 animate-pulse" />
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
                            onClick={() => setSelectedIndex(null)}
                        >
                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                                onClick={() => setSelectedIndex(null)}
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* Navigation */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex((prev) => prev !== null ? (prev - 1 + filmPhotos.length) % filmPhotos.length : null);
                                }}
                            >
                                <ChevronLeft className="w-10 h-10" />
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex((prev) => prev !== null ? (prev + 1) % filmPhotos.length : null);
                                }}
                            >
                                <ChevronRight className="w-10 h-10" />
                            </button>

                            {/* Image */}
                            <motion.img
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                src={filmPhotos[selectedIndex]}
                                alt={`Film photo ${selectedIndex + 1}`}
                                className="max-h-[90vh] max-w-[90vw] object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm">
                                {selectedIndex + 1} / {filmPhotos.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </>
    );
}
