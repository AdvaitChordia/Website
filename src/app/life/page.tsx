"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Camera, Car, TreePine, Heart, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { TransitionLink } from "@/components/PageTransition";

// Unified Gold Theme for all interests
const GOLD_THEME = {
    color: "bg-[#1E382B]", // Solid Dark Green
    borderColor: "border-[#D49E36]",
    iconColor: "text-[#D49E36]",
};

const interests = [
    {
        id: "coffee",
        title: "Coffee",
        icon: Coffee,
        ...GOLD_THEME,
        description: "My journey through specialty coffee, brewing methods, and the best cafes I've discovered.",
        placeholder: "Photos and stories coming soon...",
        link: null
    },
    {
        id: "photography",
        title: "Photography",
        icon: Camera,
        ...GOLD_THEME,
        description: "Capturing moments through my lens — from street photography to nature shots.",
        placeholder: "View Gallery →",
        link: "/life/photography"
    },
    {
        id: "cars",
        title: "Car Spotting",
        icon: Car,
        ...GOLD_THEME,
        description: "The craziest, rarest, and most beautiful cars I've encountered on the streets.",
        placeholder: "View Gallery →",
        link: "/life/cars"
    },
    {
        id: "nature",
        title: "Nature & Outdoors",
        icon: TreePine,
        ...GOLD_THEME,
        description: "Hiking trails, sunsets, and finding peace in the natural world.",
        placeholder: "Adventures coming soon...",
        link: null
    }
];

export default function LifePage() {
    useEffect(() => {
        // Add life-theme class to document
        document.documentElement.classList.add('life-theme');

        return () => {
            document.documentElement.classList.remove('life-theme');
        };
    }, []);

    return (
        <>
            {/* Curtain Reveal Transition */}
            <motion.div
                initial={{ transform: "translateY(0%)" }}
                animate={{ transform: "translateY(-100%)" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Smooth ease
                className="fixed inset-0 z-[100] bg-[#F8F3EA] pointer-events-none" // Color of the previous page (Home)
            />

            <main className="min-h-screen">
                {/* Custom Navbar for Life page */}
                {/* Custom Navbar for Life page - Aligned with Global Navbar */}
                <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
                    style={{
                        backgroundColor: 'rgba(230, 216, 199, 0.9)', // Matching beige with opacity
                        borderColor: '#1E382B20',
                        height: '5rem' // h-20 matching global navbar
                    }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                        <div className="flex items-center justify-between h-full">
                            <TransitionLink href="/" className="font-bold text-xl font-mono tracking-tighter" style={{ color: '#0B1957' }}>
                                AC<span style={{ color: '#0B1957' }}>.</span>
                            </TransitionLink>

                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-40 pb-20 px-4 relative overflow-hidden text-center">
                    <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight" style={{ color: '#1E382B' }}>
                                Beyond <span className="italic font-serif" style={{ color: '#D49E36' }}>Engineering</span>
                            </h1>

                            <div className="h-1 w-24 bg-[#1E382B] opacity-20 mx-auto mb-8 rounded-full"></div>

                            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-light" style={{ color: '#1E382B', opacity: 0.9 }}>
                                Engineering is what I do, but it's not all of who I am.
                                <span className="block mt-4 text-lg opacity-80">
                                    This is a curated collection of the things that bring me joy outside of CAD and carbon fiber —
                                    the passions, hobbies, and moments that make life interesting.
                                </span>
                            </p>

                            <TransitionLink
                                href="/"
                                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-dashed rounded-sm group transition-all duration-300 hover:bg-[#1E382B]/10 hover:border-[#1E382B] hover:text-[#1E382B]"
                                style={{
                                    borderColor: 'rgba(30, 56, 43, 0.5)',
                                    color: '#1E382B'
                                }}
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <span className="font-mono tracking-wider font-bold">BACK TO ENGINEERING</span>
                            </TransitionLink>
                        </motion.div>
                    </div>
                </section>

                {/* Interests Grid - Now Single Row (4 cols) */}
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold mb-12 flex items-center gap-3"
                            style={{ color: '#1E382B' }}
                        >
                            <Heart className="w-6 h-6" style={{ color: '#1E382B' }} />
                            <span>Things I Love</span>
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {interests.map((interest, index) => {
                                const CardContent = (
                                    <>
                                        <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 shadow-sm">
                                            <interest.icon className={`w-6 h-6 ${interest.iconColor}`} />
                                        </div>
                                        <h3 className="text-lg font-bold mb-2" style={{ color: '#D49E36' }}>{interest.title}</h3>
                                        <p className="mb-4 text-sm flex-grow" style={{ color: '#D49E36', opacity: 0.9 }}>{interest.description}</p>
                                        <p className={`text-xs mt-auto ${interest.link ? 'font-mono' : 'italic'}`} style={{ color: '#D49E36', opacity: 0.7 }}>{interest.placeholder}</p>
                                    </>
                                );

                                return interest.link ? (
                                    <Link key={interest.id} href={interest.link}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.4 }}
                                            className={`relative group rounded-2xl border ${interest.borderColor} ${interest.color} p-6 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg flex flex-col h-full`}
                                        >
                                            {CardContent}
                                        </motion.div>
                                    </Link>
                                ) : (
                                    <motion.div
                                        key={interest.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                        className={`relative group rounded-2xl border ${interest.borderColor} ${interest.color} p-6 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg flex flex-col`}
                                    >
                                        {CardContent}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Car Spotting Gallery */}
                <section className="py-16 px-4" style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)' }}>
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3" style={{ color: '#1E382B' }}>
                                <Car className="w-6 h-6" style={{ color: '#1E382B' }} />
                                <span>Car Spotting Gallery</span>
                            </h2>
                            <p className="mb-8 max-w-2xl" style={{ color: '#1E382B', opacity: 0.8 }}>
                                The most incredible machines I've encountered — from rare supercars on city streets
                                to vintage classics at meets. Each one has a story.
                            </p>
                        </motion.div>

                        {/* Real Photos Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "/Beyond Engineering/Car photos/220 SE(3).jpg",
                                "/Beyond Engineering/Car photos/DSC_1917.jpg",
                                "/Beyond Engineering/Car photos/DSC_4145.jpg",
                                "/Beyond Engineering/Car photos/DSC_5204.jpg",
                                "/Beyond Engineering/Car photos/DSC_8305.JPG",
                                "/Beyond Engineering/Car photos/DSC_8719.jpg",
                                "/Beyond Engineering/Car photos/DSC_8812.JPG",
                                "/Beyond Engineering/Car photos/DSC_8831.JPG",
                            ].map((src, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 + 0.3 }}
                                    className="aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                                >
                                    <img
                                        src={src}
                                        alt={`Car photo ${i + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/life/cars" className="flex items-center justify-center gap-2 mt-8 text-sm font-mono hover:underline" style={{ color: '#1E382B' }}>
                            View Full Gallery →
                        </Link>
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
                            style={{ color: '#1E382B', opacity: 0.7 }}
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
            </main >
        </>
    );
}
