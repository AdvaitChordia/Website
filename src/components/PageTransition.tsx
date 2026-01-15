"use client";

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

// =============================================================================
// PAGE TRANSITION COMPONENT - SMOOTH FULL-SCREEN DISSOLVE
// =============================================================================
// This creates a seamless, almost unnoticeable dissolve between pages.
// Uses a full-screen opacity fade instead of expanding circles for smoothness.
// 
// TO REMOVE THIS FEATURE:
// 1. Delete this entire file (PageTransition.tsx)
// 2. In Providers.tsx: Remove the PageTransitionProvider wrapper and import
// 3. In Hero.tsx and life/page.tsx: Replace <TransitionLink> with regular <a> or <Link>
// =============================================================================

// Color constants
const MAIN_PAGE_COLOR = "#F8F3EA"; // Off-white
const LIFE_PAGE_COLOR = "#E6D8C7"; // Creme/Beige

interface TransitionContextType {
    startTransition: (e: React.MouseEvent<HTMLElement>, href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const usePageTransition = () => {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error("usePageTransition must be used within PageTransitionProvider");
    }
    return context;
};

interface PageTransitionProviderProps {
    children: ReactNode;
}

export const PageTransitionProvider = ({ children }: PageTransitionProviderProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetHref, setTargetHref] = useState("");
    const [transitionPhase, setTransitionPhase] = useState<"idle" | "fadeOut" | "navigate" | "fadeIn">("idle");

    // Determine the target color based on destination
    const getTargetColor = (destination: string) => {
        const goingToLife = destination.startsWith("/life");
        return goingToLife ? LIFE_PAGE_COLOR : MAIN_PAGE_COLOR;
    };

    const targetColor = getTargetColor(targetHref);

    const startTransition = useCallback((e: React.MouseEvent<HTMLElement>, href: string) => {
        e.preventDefault();

        setTargetHref(href);
        setIsTransitioning(true);
        setTransitionPhase("fadeOut");

        // Phase 1: Fade out (overlay appears)
        setTimeout(() => {
            setTransitionPhase("navigate");
            router.push(href);

            // Phase 2: Brief hold at full opacity during navigation
            setTimeout(() => {
                setTransitionPhase("fadeIn");

                // Phase 3: Fade in (overlay disappears)
                setTimeout(() => {
                    setIsTransitioning(false);
                    setTransitionPhase("idle");
                }, 600);
            }, 100);
        }, 500);
    }, [router]);

    return (
        <TransitionContext.Provider value={{ startTransition }}>
            {children}

            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: transitionPhase === "fadeOut" || transitionPhase === "navigate" ? 1 : 0
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: transitionPhase === "fadeOut" ? 0.5 : 0.6,
                            ease: "easeInOut"
                        }}
                        className="fixed inset-0 z-[9999] pointer-events-none"
                        style={{
                            backgroundColor: targetColor,
                        }}
                    />
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    );
};

// =============================================================================
// TRANSITION LINK COMPONENT
// Use this instead of regular <a> or <Link> for links that should use the transition
// =============================================================================

interface TransitionLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const TransitionLink = ({ href, children, className, style }: TransitionLinkProps) => {
    const { startTransition } = usePageTransition();

    return (
        <a
            href={href}
            onClick={(e) => startTransition(e, href)}
            className={className}
            style={style}
        >
            {children}
        </a>
    );
};
