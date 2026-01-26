"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// ============================================================================
// LENS DISTORTION CONFIGURATION
// Be careful with these values - subtle is usually better for background effects.
// ============================================================================
const LENS_CONFIG = {
    // ------------------------------------------------------------------------
    // INERTIA: The "heavy/floating" feel.
    // 0.05 = Very slow lag (heavy)
    // 0.20 = Responsive
    // ------------------------------------------------------------------------
    inertia: 0.1,

    // ------------------------------------------------------------------------
    // RADIUS: Size of the magnifying glass effect (in pixels).
    // ------------------------------------------------------------------------
    activeRadius: 280,

    // ------------------------------------------------------------------------
    // MAGNIFICATION STRENGTH: How much the grid warps/bubbles.
    // Higher values = stronger "fish-eye" distortion.
    // ------------------------------------------------------------------------
    distortionStrength: 30,

    // ------------------------------------------------------------------------
    // ZOOM STRENGTH: How much grid points scale up at the center.
    // 5.0 = Points become 5x larger at center
    // ------------------------------------------------------------------------
    magnificationStrength: 4,

    // ------------------------------------------------------------------------
    // OPACITY BOOST: How much brighter the center gets.
    // ------------------------------------------------------------------------
    opacityBoost: 0.75,

    // Base properties of the grid
    gridSpacing: 20,
    baseOpacity: 0.08,
    mobileBaseOpacity: 0.18, // Higher opacity for mobile so grid is visible
    baseArmLength: 1.5,
    // Colors are now dynamic based on theme
};
// ============================================================================

interface GridPoint {
    x: number;
    y: number;
    // We only need base coordinates; distorted pos is calculated per-frame
}

export const InteractiveGridBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointsRef = useRef<GridPoint[]>([]);
    const pathname = usePathname();
    const isLifePage = pathname === '/life';
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Track both actual mouse and the "lens" (lagged) position
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const lensRef = useRef({ x: -1000, y: -1000 });

    // Theme Configuration
    const theme = isLifePage ? {
        backgroundColor: '#E6D8C7', // Beige
        gridColor: '#1E382B',       // Dark Green
        shape: 'circle' as const,
        inertia: 0.05,              // Lower inertia = slower/relaxed feel
    } : {
        backgroundColor: '#F8F3EA', // Off-White
        gridColor: '#0B1957',       // Navy Blue
        shape: 'plus' as const,
        inertia: 0.18,              // Higher inertia = snappy/nimble feel
    };

    // Detect touch device on mount
    useEffect(() => {
        const checkTouchDevice = () => {
            const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const hasHover = window.matchMedia('(hover: hover)').matches;
            const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
            // It's a touch device if it has touch AND (no hover OR coarse pointer)
            setIsTouchDevice(hasTouch && (!hasHover || hasCoarsePointer));
        };
        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);
        return () => window.removeEventListener('resize', checkTouchDevice);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Only hide system cursor on non-touch devices
        if (!isTouchDevice) {
            document.body.style.cursor = 'none';
        }

        let animationFrameId: number;

        const initGrid = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            // No ctx.scale - we work in physical pixels for perfect alignment
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            const { gridSpacing } = LENS_CONFIG;
            // Scale spacing by DPR so the visual size remains consistent (20 CSS pixels)
            const physicalSpacing = gridSpacing * dpr;

            const cols = Math.ceil(width * dpr / physicalSpacing);
            const rows = Math.ceil(height * dpr / physicalSpacing);

            const newPoints: GridPoint[] = [];
            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    newPoints.push({
                        x: i * physicalSpacing,
                        y: j * physicalSpacing,
                    });
                }
            }
            pointsRef.current = newPoints;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            mouseRef.current = {
                x: (e.clientX - rect.left) * dpr,
                y: (e.clientY - rect.top) * dpr
            };
        };

        const handleResize = () => {
            initGrid();
        };

        initGrid();

        // Only add mouse listeners on non-touch devices
        if (!isTouchDevice) {
            window.addEventListener("mousemove", handleMouseMove);
        }
        window.addEventListener("resize", handleResize);

        // Animation Loop
        const draw = () => {
            // Check canvas dimensions to prevent drawing on 0x0
            if (canvas.width === 0 || canvas.height === 0) return;

            // Clear in physical pixels
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const points = pointsRef.current;
            const mouse = mouseRef.current;
            const lens = lensRef.current;
            const dpr = window.devicePixelRatio || 1;

            const {
                activeRadius,
                distortionStrength,
                magnificationStrength,
                opacityBoost,
                baseOpacity,
                mobileBaseOpacity,
                baseArmLength,
            } = LENS_CONFIG;

            // Use theme-specific inertia
            const inertia = theme.inertia;

            // Use higher base opacity on touch devices
            const effectiveBaseOpacity = isTouchDevice ? mobileBaseOpacity : baseOpacity;

            // Scale config values to physical pixels
            const physicalRadius = activeRadius * dpr;
            const physicalArmLength = baseArmLength * dpr;
            // Distortion strength is a displacement, so scale it too
            const physicalDistortion = distortionStrength * dpr;

            // 1. UPDATE LENS POSITION (LERP) - Only on non-touch devices
            if (!isTouchDevice) {
                lens.x += (mouse.x - lens.x) * inertia;
                lens.y += (mouse.y - lens.y) * inertia;
            }

            ctx.lineWidth = 0.5 * dpr; // Scale line width too

            // 2. RENDER POINTS
            for (let i = 0; i < points.length; i++) {
                const point = points[i];

                let renderX = point.x;
                let renderY = point.y;
                let renderOpacity = effectiveBaseOpacity;
                let renderScale = 1;

                // 3. CALCULATE DISTORTION - Only on non-touch devices
                if (!isTouchDevice) {
                    const dx = renderX - lens.x;
                    const dy = renderY - lens.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < physicalRadius) {
                        // Non-linear falloff
                        // Use cubic falloff for steeper centering
                        const ratio = 1 - dist / physicalRadius;
                        const factor = ratio * ratio * ratio; // Cubic curve

                        // Displace OUTWARD to simulate lens magnification
                        const displacement = factor * physicalDistortion;

                        if (dist > 0.1) {
                            const dirX = dx / dist;
                            const dirY = dy / dist;
                            renderX += dirX * displacement;
                            renderY += dirY * displacement;
                        }

                        // Boost opacity and scale at center
                        // "Summit" effect: points approach the cursor size
                        renderOpacity += factor * opacityBoost;
                        renderScale = 1 + (factor * magnificationStrength);
                    }
                }

                ctx.strokeStyle = theme.gridColor;
                ctx.globalAlpha = Math.min(renderOpacity, 1.0);

                const size = physicalArmLength * renderScale;

                if (theme.shape === 'circle') {
                    // Draw Solid Circle
                    ctx.fillStyle = theme.gridColor;
                    ctx.beginPath();
                    ctx.arc(renderX, renderY, size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Draw Plus Cross
                    ctx.beginPath();
                    ctx.moveTo(renderX - size, renderY);
                    ctx.lineTo(renderX + size, renderY);
                    ctx.moveTo(renderX, renderY - size);
                    ctx.lineTo(renderX, renderY + size);
                    ctx.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            document.body.style.cursor = 'auto'; // Restore cursor
            if (!isTouchDevice) {
                window.removeEventListener("mousemove", handleMouseMove);
            }
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, isTouchDevice]); // Re-run effect when theme or touch detection changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none transition-colors duration-500"
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: theme.backgroundColor, // Dynamic background color
            }}
        />
    );
};
