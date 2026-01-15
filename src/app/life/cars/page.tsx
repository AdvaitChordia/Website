"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Car photography images
const carPhotos = [
    { src: "/Beyond Engineering/Car photos/220 SE(3).jpg", title: "Mercedes-Benz 220 SE" },
    { src: "/Beyond Engineering/Car photos/DSC_1917.jpg", title: "Classic Beauty" },
    { src: "/Beyond Engineering/Car photos/DSC_4145.jpg", title: "Street Spot" },
    { src: "/Beyond Engineering/Car photos/DSC_5204.jpg", title: "Details" },
    { src: "/Beyond Engineering/Car photos/DSC_8305.JPG", title: "Weekend Find" },
    { src: "/Beyond Engineering/Car photos/DSC_8719.jpg", title: "Curves" },
    { src: "/Beyond Engineering/Car photos/DSC_8812.JPG", title: "In Motion" },
    { src: "/Beyond Engineering/Car photos/DSC_8831.JPG", title: "Sunset Drive" },
];

export default function CarsPage() {
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
            if (e.key === "ArrowRight") setSelectedIndex((prev) => prev !== null ? (prev + 1) % carPhotos.length : null);
            if (e.key === "ArrowLeft") setSelectedIndex((prev) => prev !== null ? (prev - 1 + carPhotos.length) % carPhotos.length : null);
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
                        <span className="text-sm font-mono text-white/50">Car Spotting</span>
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
                            Car <span className="italic font-serif text-red-500">Spotting</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-white/60 max-w-2xl mx-auto"
                        >
                            The most incredible machines I've encountered — from rare supercars on city streets
                            to vintage classics at meets. Each one has a story.
                        </motion.p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="px-4 pb-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {carPhotos.map((photo, index) => (
                                <motion.div
                                    key={photo.src}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative aspect-[4/3] cursor-pointer group overflow-hidden rounded-xl"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.title}
                                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded.has(index) ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        loading="lazy"
                                        onLoad={() => setLoaded((prev) => new Set(prev).add(index))}
                                    />
                                    {!loaded.has(index) && (
                                        <div className="absolute inset-0 bg-white/5 animate-pulse" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-bold text-xl">{photo.title}</h3>
                                    </div>
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
                                    setSelectedIndex((prev) => prev !== null ? (prev - 1 + carPhotos.length) % carPhotos.length : null);
                                }}
                            >
                                <ChevronLeft className="w-10 h-10" />
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex((prev) => prev !== null ? (prev + 1) % carPhotos.length : null);
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
                                src={carPhotos[selectedIndex].src}
                                alt={carPhotos[selectedIndex].title}
                                className="max-h-[90vh] max-w-[90vw] object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Title and Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                                <p className="text-white font-bold text-lg mb-1">{carPhotos[selectedIndex].title}</p>
                                <p className="text-white/50 font-mono text-sm">{selectedIndex + 1} / {carPhotos.length}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </>
    );
}
