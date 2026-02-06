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
    // Grid indices for spatial lookup
    col: number;
    row: number;
}

export const InteractiveGridBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const staticCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const pointsRef = useRef<GridPoint[]>([]);
    const gridMapRef = useRef<Map<string, GridPoint>>(new Map());
    const pathname = usePathname();
    const isLifePage = pathname === '/life';
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Track both actual mouse and the "lens" (lagged) position
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const lensRef = useRef({ x: -1000, y: -1000 });
    const prevLensRef = useRef({ x: -1000, y: -1000 });

    // Track cursor presence and animated radius for ripple-away effect
    const isActiveRef = useRef(false);
    const currentRadiusRef = useRef(0);

    // Breathing pulse effect when idle
    const lastMoveTimeRef = useRef(0);
    const breathingPhaseRef = useRef(0);

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

        // Create offscreen canvas for static grid
        const createStaticCanvas = (width: number, height: number, dpr: number) => {
            const offscreen = document.createElement('canvas');
            offscreen.width = width * dpr;
            offscreen.height = height * dpr;
            return offscreen;
        };

        // Render static grid to offscreen canvas
        const renderStaticGrid = (
            offscreen: HTMLCanvasElement,
            points: GridPoint[],
            dpr: number,
            effectiveBaseOpacity: number,
            physicalArmLength: number
        ) => {
            const offCtx = offscreen.getContext('2d');
            if (!offCtx) return;

            offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
            offCtx.strokeStyle = theme.gridColor;
            offCtx.fillStyle = theme.gridColor;
            offCtx.globalAlpha = effectiveBaseOpacity;
            offCtx.lineWidth = 0.5 * dpr;

            if (theme.shape === 'circle') {
                // Batch all circles
                for (let i = 0; i < points.length; i++) {
                    const point = points[i];
                    offCtx.beginPath();
                    offCtx.arc(point.x, point.y, physicalArmLength, 0, Math.PI * 2);
                    offCtx.fill();
                }
            } else {
                // Batch all plus signs into one path
                offCtx.beginPath();
                for (let i = 0; i < points.length; i++) {
                    const point = points[i];
                    offCtx.moveTo(point.x - physicalArmLength, point.y);
                    offCtx.lineTo(point.x + physicalArmLength, point.y);
                    offCtx.moveTo(point.x, point.y - physicalArmLength);
                    offCtx.lineTo(point.x, point.y + physicalArmLength);
                }
                offCtx.stroke();
            }
        };

        const initGrid = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            // No ctx.scale - we work in physical pixels for perfect alignment
            ctx.setTransform(1, 0, 0, 1, 0, 0);

            const { gridSpacing, baseOpacity, mobileBaseOpacity, baseArmLength } = LENS_CONFIG;
            // Scale spacing by DPR so the visual size remains consistent (20 CSS pixels)
            const physicalSpacing = gridSpacing * dpr;
            const physicalArmLength = baseArmLength * dpr;
            const effectiveBaseOpacity = isTouchDevice ? mobileBaseOpacity : baseOpacity;

            const cols = Math.ceil(width * dpr / physicalSpacing);
            const rows = Math.ceil(height * dpr / physicalSpacing);

            const newPoints: GridPoint[] = [];
            const newGridMap = new Map<string, GridPoint>();

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    const point = {
                        x: i * physicalSpacing,
                        y: j * physicalSpacing,
                        col: i,
                        row: j,
                    };
                    newPoints.push(point);
                    newGridMap.set(`${i},${j}`, point);
                }
            }
            pointsRef.current = newPoints;
            gridMapRef.current = newGridMap;

            // Create and render static canvas
            staticCanvasRef.current = createStaticCanvas(width, height, dpr);
            renderStaticGrid(
                staticCanvasRef.current,
                newPoints,
                dpr,
                effectiveBaseOpacity,
                physicalArmLength
            );
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            mouseRef.current = {
                x: (e.clientX - rect.left) * dpr,
                y: (e.clientY - rect.top) * dpr
            };
            isActiveRef.current = true;
        };

        const handleMouseLeave = () => {
            isActiveRef.current = false;
        };

        const handleMouseEnter = () => {
            isActiveRef.current = true;
        };

        const handleResize = () => {
            initGrid();
        };

        initGrid();

        // Only add mouse listeners on non-touch devices
        if (!isTouchDevice) {
            window.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseleave", handleMouseLeave);
            document.addEventListener("mouseenter", handleMouseEnter);
        }
        window.addEventListener("resize", handleResize);

        // Animation Loop - Optimized
        const draw = () => {
            // Check canvas dimensions to prevent drawing on 0x0
            if (canvas.width === 0 || canvas.height === 0) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            const staticCanvas = staticCanvasRef.current;
            if (!staticCanvas) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            const lens = lensRef.current;
            const mouse = mouseRef.current;
            const prevLens = prevLensRef.current;
            const dpr = window.devicePixelRatio || 1;

            const {
                activeRadius,
                distortionStrength,
                magnificationStrength,
                opacityBoost,
                baseOpacity,
                mobileBaseOpacity,
                baseArmLength,
                gridSpacing,
            } = LENS_CONFIG;

            // Use theme-specific inertia
            const inertia = theme.inertia;
            const effectiveBaseOpacity = isTouchDevice ? mobileBaseOpacity : baseOpacity;

            // Scale config values to physical pixels
            const targetRadius = activeRadius * dpr;
            const physicalArmLength = baseArmLength * dpr;
            const physicalDistortion = distortionStrength * dpr;
            const physicalSpacing = gridSpacing * dpr;

            // Animate radius for ripple-away effect
            const isActive = isActiveRef.current;
            const radiusFadeSpeed = 0.08; // How fast the lens fades in/out
            if (isActive) {
                // Fade in toward target radius
                currentRadiusRef.current += (targetRadius - currentRadiusRef.current) * radiusFadeSpeed;
            } else {
                // Fade out toward 0
                currentRadiusRef.current += (0 - currentRadiusRef.current) * radiusFadeSpeed;
            }

            // Ripple-out effect when cursor is idle (like a water droplet)
            const now = performance.now();
            const idleThreshold = 300; // ms before ripple starts
            const timeSinceMove = now - lastMoveTimeRef.current;
            const isIdle = timeSinceMove > idleThreshold && isActive;

            let breathingMultiplier = 1.0;
            let breathingMagnification = 1.0;
            let rippleFadeOut = 1.0; // For fading the entire effect away

            if (isIdle) {
                // Advance ripple phase (only outward, no coming back)
                breathingPhaseRef.current += 0.025; // Faster ripple

                // Exponential decay for the ripple dying out
                const rippleStrength = Math.exp(-breathingPhaseRef.current * 0.6);

                // More exaggerated ripple - expands up to 60% outward
                const expansion = (1 - rippleStrength) * 0.6;
                breathingMultiplier = 1.0 + expansion;

                // Magnification shrinks as ripple expands
                breathingMagnification = rippleStrength;

                // Fade out the entire effect as ripple progresses
                rippleFadeOut = rippleStrength;

                // Once ripple has fully died, the effect is gone
                if (rippleStrength < 0.01) {
                    breathingMultiplier = 0;
                    breathingMagnification = 0;
                    rippleFadeOut = 0;
                }
            } else {
                // Reset ripple when cursor moves
                breathingPhaseRef.current = 0;
            }

            const physicalRadius = currentRadiusRef.current * breathingMultiplier;
            const physicalRadiusSq = physicalRadius * physicalRadius;
            const effectiveMagnification = magnificationStrength * breathingMagnification;

            // 1. UPDATE LENS POSITION (LERP) - Only on non-touch devices
            if (!isTouchDevice) {
                lens.x += (mouse.x - lens.x) * inertia;
                lens.y += (mouse.y - lens.y) * inertia;
            }

            // For touch devices, just draw static grid and return
            if (isTouchDevice) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(staticCanvas, 0, 0);
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            // Check if lens moved significantly OR if radius is animating OR if breathing
            const lensDx = lens.x - prevLens.x;
            const lensDy = lens.y - prevLens.y;
            const lensMovedSq = lensDx * lensDx + lensDy * lensDy;
            const isRadiusAnimating = physicalRadius > 0.5; // Still shrinking

            // Update last move time if lens moved
            if (lensMovedSq > 0.25) {
                lastMoveTimeRef.current = now;
            }

            // Never skip frames when breathing (always need to animate)
            // If lens barely moved AND radius is done animating AND not breathing, skip redraw
            if (lensMovedSq < 0.25 && !isRadiusAnimating && isActive && !isIdle) {
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            // If radius has fully faded out, just draw static and continue checking
            if (physicalRadius < 0.5 && !isActive) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(staticCanvas, 0, 0);
                animationFrameId = requestAnimationFrame(draw);
                return;
            }

            // Update previous lens position
            prevLens.x = lens.x;
            prevLens.y = lens.y;

            // Clear and draw static grid as base
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(staticCanvas, 0, 0);

            // Calculate which grid cells are affected by the lens
            const minCol = Math.max(0, Math.floor((lens.x - physicalRadius) / physicalSpacing) - 1);
            const maxCol = Math.ceil((lens.x + physicalRadius) / physicalSpacing) + 1;
            const minRow = Math.max(0, Math.floor((lens.y - physicalRadius) / physicalSpacing) - 1);
            const maxRow = Math.ceil((lens.y + physicalRadius) / physicalSpacing) + 1;

            const gridMap = gridMapRef.current;

            // First pass: "erase" the static points in the lens area by drawing background over them
            ctx.fillStyle = theme.backgroundColor;
            for (let col = minCol; col <= maxCol; col++) {
                for (let row = minRow; row <= maxRow; row++) {
                    const point = gridMap.get(`${col},${row}`);
                    if (!point) continue;

                    const dx = point.x - lens.x;
                    const dy = point.y - lens.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < physicalRadiusSq) {
                        // Erase this point by drawing a small background rect over it
                        const eraseSize = physicalArmLength * (effectiveMagnification + 2);
                        ctx.fillRect(
                            point.x - eraseSize,
                            point.y - eraseSize,
                            eraseSize * 2,
                            eraseSize * 2
                        );
                    }
                }
            }

            // Second pass: draw distorted points
            ctx.lineWidth = 0.5 * dpr;

            for (let col = minCol; col <= maxCol; col++) {
                for (let row = minRow; row <= maxRow; row++) {
                    const point = gridMap.get(`${col},${row}`);
                    if (!point) continue;

                    const dx = point.x - lens.x;
                    const dy = point.y - lens.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq >= physicalRadiusSq) continue;

                    const dist = Math.sqrt(distSq);
                    const ratio = 1 - dist / physicalRadius;
                    const factor = ratio * ratio * ratio; // Cubic curve

                    let renderX = point.x;
                    let renderY = point.y;

                    // Displace OUTWARD to simulate lens magnification
                    const displacement = factor * physicalDistortion;
                    if (dist > 0.1) {
                        const dirX = dx / dist;
                        const dirY = dy / dist;
                        renderX += dirX * displacement;
                        renderY += dirY * displacement;
                    }

                    const renderOpacity = Math.min(effectiveBaseOpacity + factor * opacityBoost, 1.0) * rippleFadeOut;
                    const renderScale = 1 + (factor * effectiveMagnification);
                    const size = physicalArmLength * renderScale;

                    ctx.strokeStyle = theme.gridColor;
                    ctx.fillStyle = theme.gridColor;
                    ctx.globalAlpha = renderOpacity;

                    if (theme.shape === 'circle') {
                        ctx.beginPath();
                        ctx.arc(renderX, renderY, size, 0, Math.PI * 2);
                        ctx.fill();
                    } else {
                        ctx.beginPath();
                        ctx.moveTo(renderX - size, renderY);
                        ctx.lineTo(renderX + size, renderY);
                        ctx.moveTo(renderX, renderY - size);
                        ctx.lineTo(renderX, renderY + size);
                        ctx.stroke();
                    }
                }
            }

            // Reset alpha for next frame
            ctx.globalAlpha = 1.0;

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            document.body.style.cursor = 'auto'; // Restore cursor
            if (!isTouchDevice) {
                window.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseleave", handleMouseLeave);
                document.removeEventListener("mouseenter", handleMouseEnter);
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
