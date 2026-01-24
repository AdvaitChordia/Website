"use client";

import { useEffect, useRef } from "react";

/**
 * SectionHashTracker - Updates URL hash based on visible section
 * 
 * Uses Intersection Observer to track which section is most visible
 * and updates the URL hash accordingly. This ensures that on page
 * reload, the browser scrolls to the section the user was viewing.
 */

// Section IDs to track (in order of appearance)
const TRACKED_SECTIONS = ["about", "projects", "contact"];

export const SectionHashTracker = () => {
    const visibleSections = useRef<Map<string, number>>(new Map());
    const isUserScrolling = useRef(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Skip if not in browser
        if (typeof window === "undefined") return;

        // Don't update hash during initial load to allow browser's native hash scrolling
        let hasInitialized = false;
        const initTimeout = setTimeout(() => {
            hasInitialized = true;
        }, 1000);

        // Track scroll state to avoid updating hash during programmatic scrolls
        const handleScrollStart = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            isUserScrolling.current = true;
        };

        const handleScrollEnd = () => {
            scrollTimeout.current = setTimeout(() => {
                isUserScrolling.current = false;
            }, 150);
        };

        window.addEventListener("scroll", handleScrollStart, { passive: true });
        window.addEventListener("scrollend", handleScrollEnd, { passive: true });

        // Create intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (id) {
                        // Store the intersection ratio for each section
                        visibleSections.current.set(id, entry.intersectionRatio);
                    }
                });

                // Only update hash after initialization
                if (!hasInitialized) return;

                // Find the section with the highest visibility
                let maxRatio = 0;
                let mostVisibleSection: string | null = null;

                visibleSections.current.forEach((ratio, id) => {
                    if (ratio > maxRatio) {
                        maxRatio = ratio;
                        mostVisibleSection = id;
                    }
                });

                // Update URL hash if a section is visible enough
                if (mostVisibleSection && maxRatio > 0.3) {
                    const newHash = `#${mostVisibleSection}`;
                    if (window.location.hash !== newHash) {
                        // Use replaceState to avoid adding to history
                        window.history.replaceState(null, "", newHash);
                    }
                } else if (maxRatio < 0.1) {
                    // If no tracked section is visible, check if we're at the top (hero)
                    if (window.scrollY < 200) {
                        const newPath = window.location.pathname;
                        if (window.location.hash) {
                            window.history.replaceState(null, "", newPath);
                        }
                    }
                }
            },
            {
                // Use multiple thresholds for smoother detection
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                // Adjust root margin to account for navbar
                rootMargin: "-80px 0px -20% 0px",
            }
        );

        // Observe all tracked sections
        TRACKED_SECTIONS.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            clearTimeout(initTimeout);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            window.removeEventListener("scroll", handleScrollStart);
            window.removeEventListener("scrollend", handleScrollEnd);
            observer.disconnect();
        };
    }, []);

    // This component doesn't render anything
    return null;
};
