"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Camera, Car, TreePine, Heart, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const interests = [
    {
        id: "coffee",
        title: "Coffee",
        icon: Coffee,
        color: "from-amber-600/30 to-orange-500/30",
        borderColor: "border-amber-600/50",
        iconColor: "text-amber-700",
        description: "My journey through specialty coffee, brewing methods, and the best cafes I've discovered.",
        placeholder: "Photos and stories coming soon..."
    },
    {
        id: "photography",
        title: "Photography",
        icon: Camera,
        color: "from-rose-500/30 to-pink-500/30",
        borderColor: "border-rose-500/50",
        iconColor: "text-rose-600",
        description: "Capturing moments through my lens — from street photography to nature shots.",
        placeholder: "Gallery coming soon..."
    },
    {
        id: "cars",
        title: "Car Spotting",
        icon: Car,
        color: "from-red-500/30 to-orange-500/30",
        borderColor: "border-red-500/50",
        iconColor: "text-red-600",
        description: "The craziest, rarest, and most beautiful cars I've encountered on the streets.",
        placeholder: "Car collection coming soon..."
    },
    {
        id: "nature",
        title: "Nature & Outdoors",
        icon: TreePine,
        color: "from-emerald-500/30 to-green-500/30",
        borderColor: "border-emerald-500/50",
        iconColor: "text-emerald-600",
        description: "Hiking trails, sunsets, and finding peace in the natural world.",
        placeholder: "Adventures coming soon..."
    }
];

export default function LifePage() {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        // Trigger flip animation on mount
        setIsFlipped(true);
        // Add life-theme class to document
        document.documentElement.classList.add('life-theme');

        return () => {
            document.documentElement.classList.remove('life-theme');
        };
    }, []);

    return (
        <main className={`min-h-screen transition-all duration-500 ${isFlipped ? 'flip-enter' : ''}`}
            style={{
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)',
            }}
        >
            {/* Custom Navbar for Life page */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
                style={{
                    backgroundColor: 'rgba(254, 252, 232, 0.9)',
                    borderColor: 'var(--border)'
                }}
            >
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="font-bold text-xl" style={{ color: 'var(--foreground)' }}>
                        AC<span style={{ color: 'var(--primary)' }}>.</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Sun className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                        <span className="text-sm font-mono" style={{ color: 'var(--muted-foreground)' }}>Personal Side</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 relative overflow-hidden">
                {/* Warm gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-200/30 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-mono transition-colors mb-8 group"
                        style={{ color: 'var(--muted-foreground)' }}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="group-hover:text-amber-600">Back to Engineering</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
                            Beyond <span style={{ color: 'var(--primary)' }}>Engineering</span>
                        </h1>
                        <p className="text-xl max-w-2xl leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                            Engineering is what I do, but it's not all of who I am. Here's a glimpse into the things
                            that bring me joy outside of CAD and carbon fiber — the passions, hobbies, and moments
                            that make life interesting.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Interests Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-12 flex items-center gap-3"
                        style={{ color: 'var(--foreground)' }}
                    >
                        <Heart className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                        <span>Things I Love</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={interest.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.4 }}
                                className={`relative group rounded-2xl border ${interest.borderColor} bg-gradient-to-br ${interest.color} p-8 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <interest.icon className={`w-7 h-7 ${interest.iconColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{interest.title}</h3>
                                        <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>{interest.description}</p>
                                        <p className="text-sm italic" style={{ color: 'var(--primary)' }}>{interest.placeholder}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Car Spotting Gallery Placeholder */}
            <section className="py-16 px-4" style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)' }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: 'var(--foreground)' }}>
                            <Car className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                            <span>Car Spotting Gallery</span>
                        </h2>
                        <p className="mb-8 max-w-2xl" style={{ color: 'var(--muted-foreground)' }}>
                            The most incredible machines I've encountered — from rare supercars on city streets
                            to vintage classics at meets. Each one has a story.
                        </p>
                    </motion.div>

                    {/* Placeholder Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 + 0.5 }}
                                className="aspect-square rounded-xl bg-white/50 border-2 border-dashed flex items-center justify-center shadow-sm"
                                style={{ borderColor: 'var(--border)' }}
                            >
                                <div className="text-center" style={{ color: 'var(--muted-foreground)', opacity: 0.6 }}>
                                    <Camera className="w-8 h-8 mx-auto mb-2" />
                                    <p className="text-xs">Photo {i + 1}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-sm mt-8" style={{ color: 'var(--muted-foreground)' }}>
                        More photos coming soon...
                    </p>
                </div>
            </section>

            {/* Footer Quote */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl italic"
                        style={{ color: 'var(--muted-foreground)' }}
                    >
                        "The best engineers are those who understand that life is more than just solving problems —
                        it's about experiencing everything the world has to offer."
                    </motion.blockquote>
                </div>
            </section>

            {/* Yin-Yang indicator */}
            <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Sun className="w-6 h-6 text-white" />
            </div>
        </main>
    );
}
