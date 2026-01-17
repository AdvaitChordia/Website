"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Must match LENS_CONFIG in CooperativeGridBackground for synchronization
const CURSOR_CONFIG = {
    inertia: 0.1,
    activeRadius: 280,
    magnificationStrength: 4,
    baseArmLength: 1.5,
    cursorColor: "#701C22",
};

export const CustomCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const lensRef = useRef({ x: -1000, y: -1000 });
    const pathname = usePathname();
    const isLifePage = pathname === '/life';
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Detect touch device on mount
    useEffect(() => {
        const checkTouchDevice = () => {
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const hasHover = window.matchMedia('(hover: hover)').matches;
            const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
            setIsTouchDevice(hasTouch && (!hasHover || hasCoarsePointer));
        };
        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);
        return () => window.removeEventListener('resize', checkTouchDevice);
    }, []);

    useEffect(() => {
        // Don't run cursor logic on touch devices
        if (isTouchDevice) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            mouseRef.current = {
                x: (e.clientX - rect.left) * dpr,
                y: (e.clientY - rect.top) * dpr
            };
        };

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);
        handleResize(); // Init size

        const draw = () => {
            if (canvas.width === 0 || canvas.height === 0) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const lens = lensRef.current;
            const dpr = window.devicePixelRatio || 1;

            const { baseArmLength, magnificationStrength, cursorColor } = CURSOR_CONFIG;

            // 1. Update Position (Instant - No Inertia for Cursor)
            lens.x = mouse.x;
            lens.y = mouse.y;

            // 2. Draw Custom Cursor
            // It corresponds to the "Summit" effect in the grid
            const physicalArmLength = baseArmLength * dpr;
            const cursorScale = 1 + (1.0 * magnificationStrength) + 1.5;
            const cursorSize = physicalArmLength * cursorScale;

            ctx.globalAlpha = 1.0;
            ctx.strokeStyle = cursorColor;
            ctx.lineWidth = 1 * dpr;

            if (isLifePage) {
                // Hollow Circle Cursor for Life Page
                ctx.strokeStyle = cursorColor;
                ctx.beginPath();
                ctx.arc(lens.x, lens.y, cursorSize, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                // Plus Cursor for other pages
                ctx.beginPath();
                ctx.moveTo(lens.x - cursorSize, lens.y);
                ctx.lineTo(lens.x + cursorSize, lens.y);
                ctx.moveTo(lens.x, lens.y - cursorSize);
                ctx.lineTo(lens.x, lens.y + cursorSize);
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLifePage, isTouchDevice]); // Re-run when page or touch detection changes

    // Don't render the canvas on touch devices
    if (isTouchDevice) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[100] pointer-events-none"
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
};
