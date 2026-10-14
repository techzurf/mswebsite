import { useEffect, useRef, useState } from "react";

interface ContrailPoint {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  maxAge: number;
  age: number;
}

interface ClickBurst {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  maxAge: number;
  age: number;
}

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  '[role="button"]',
  '[role="link"]',
  "label",
  "select",
  "summary",
  "input",
  "textarea",
  '[contenteditable="true"]',
  '[tabindex="0"]',
  ".btn-23",
  ".service-card",
  ".ms-nav-link",
  ".visa-hero-cta",
  ".cursor-pointer",
  "[onclick]",
  ":disabled",
  "[disabled]",
  '[aria-disabled="true"]',
  ".disabled",
  ".cursor-not-allowed",
  ".cursor-text",
].join(", ");

function checkIsInteractive(target: Element | null): boolean {
  if (!target) return false;

  // 1. Selector match on self or ancestors
  if (target.closest(INTERACTIVE_SELECTOR)) {
    return true;
  }

  // 2. Computed style cursor check: if browser or CSS set cursor to pointer, text, not-allowed, etc.
  try {
    const win = target.ownerDocument?.defaultView || window;
    const computedCursor = win.getComputedStyle(target).cursor;
    if (
      computedCursor === "pointer" ||
      computedCursor === "text" ||
      computedCursor === "not-allowed" ||
      computedCursor === "grab" ||
      computedCursor === "grabbing"
    ) {
      return true;
    }
  } catch {
    // ignore
  }

  return false;
}

export function AirplaneCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // References for RAF animation loop and instantaneous event handling
  const isVisibleRef = useRef(false);
  const isInteractiveRef = useRef(false);
  const isClickingRef = useRef(false);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const planePos = useRef({ x: -100, y: -100 });
  const angleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const contrailPoints = useRef<ContrailPoint[]>([]);
  const clickBursts = useRef<ClickBurst[]>([]);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check if the device is touch-only or lacks fine pointer
    const touchCheck =
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window;
    setIsTouchDevice(touchCheck);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (touchCheck) {
      return;
    }

    // Enable custom cursor styles on desktop
    document.body.classList.add("airplane-cursor-enabled");

    const updateInteractiveState = (target: Element | null) => {
      const interactive = checkIsInteractive(target);
      if (interactive !== isInteractiveRef.current) {
        isInteractiveRef.current = interactive;
        setIsInteractive(interactive);
      }
    };

    // Handle mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      lastMoveTimeRef.current = performance.now();

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        // Instant position sync on first entry
        planePos.current.x = e.clientX;
        planePos.current.y = e.clientY;
        prevMousePos.current.x = e.clientX;
        prevMousePos.current.y = e.clientY;
      }

      // Check target element to detect interactive states
      const target = e.target as Element | null;
      updateInteractiveState(target);
    };

    // Fast boundary detection via mouseover & mouseout
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      updateInteractiveState(target);
    };

    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        isVisibleRef.current = false;
        setIsVisible(false);
      } else {
        updateInteractiveState(e.relatedTarget as Element | null);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        isClickingRef.current = true;
        setIsClicking(true);

        // Only emit background jet shockwave when clicking normal page areas
        if (!isInteractiveRef.current) {
          clickBursts.current.push({
            x: mousePos.current.x,
            y: mousePos.current.y,
            radius: 4,
            maxRadius: 26,
            alpha: 0.85,
            maxAge: 320,
            age: 0,
          });
        }
      }
    };

    const onMouseUp = () => {
      isClickingRef.current = false;
      setIsClicking(false);
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const onWindowBlur = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
      isClickingRef.current = false;
      setIsClicking(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("blur", onWindowBlur);

    // Canvas resize handler
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    // Main animation loop
    let lastFrameTime = performance.now();

    const animate = (time: number) => {
      const delta = Math.min(time - lastFrameTime, 32);
      lastFrameTime = time;

      // Smooth tracking towards mouse position
      const dx = mousePos.current.x - planePos.current.x;
      const dy = mousePos.current.y - planePos.current.y;

      // Fast, responsive tracking with minimal latency
      planePos.current.x += dx * 0.75;
      planePos.current.y += dy * 0.75;

      // Update flight direction angle based on mouse delta
      const moveDx = mousePos.current.x - prevMousePos.current.x;
      const moveDy = mousePos.current.y - prevMousePos.current.y;
      const moveDist = Math.hypot(moveDx, moveDy);

      if (moveDist > 1.2) {
        // Plane SVG nose points straight UP (North, 0 degrees).
        // Math.atan2(moveDy, moveDx) gives angle from East (+X axis).
        // Adding 90° aligns the plane's nose directly into flight trajectory.
        const targetDeg = (Math.atan2(moveDy, moveDx) * 180) / Math.PI + 90;
        targetAngleRef.current = targetDeg;

        // Smooth shortest-angle rotation interpolation
        let diff = targetAngleRef.current - angleRef.current;
        diff = (((diff + 180) % 360) + 360) % 360 - 180;
        angleRef.current += diff * 0.32;

        // Emit contrail puffs from the twin engines ONLY when moving on normal page area (not interactive)
        if (
          moveDist > 2.0 &&
          !motionQuery.matches &&
          !isInteractiveRef.current &&
          isVisibleRef.current
        ) {
          const rad = ((angleRef.current - 90) * Math.PI) / 180;
          // Left engine offset (relative to plane nose)
          const leftEngineX =
            planePos.current.x + Math.cos(rad) * -7 - Math.sin(rad) * 9;
          const leftEngineY =
            planePos.current.y + Math.sin(rad) * -7 + Math.cos(rad) * 9;
          // Right engine offset
          const rightEngineX =
            planePos.current.x + Math.cos(rad) * 7 - Math.sin(rad) * 9;
          const rightEngineY =
            planePos.current.y + Math.sin(rad) * 7 + Math.cos(rad) * 9;

          // Limit contrail density
          if (contrailPoints.current.length < 28) {
            contrailPoints.current.push(
              {
                x: leftEngineX,
                y: leftEngineY,
                radius: 1.8,
                alpha: 0.45,
                maxAge: 380,
                age: 0,
              },
              {
                x: rightEngineX,
                y: rightEngineY,
                radius: 1.8,
                alpha: 0.45,
                maxAge: 380,
                age: 0,
              }
            );
          }
        }
      } else {
        // When stationary, gently maintain angle with subtle cruising float
        const stationaryTime = time - lastMoveTimeRef.current;
        if (stationaryTime > 120 && !motionQuery.matches) {
          const idleBank = Math.sin(time * 0.0035) * 2;
          angleRef.current += idleBank * 0.04;
        }
      }

      prevMousePos.current.x = mousePos.current.x;
      prevMousePos.current.y = mousePos.current.y;

      // Apply transform to airplane cursor element
      if (cursorRef.current) {
        const renderAngle = motionQuery.matches ? 0 : angleRef.current;
        const scale = isClickingRef.current ? 0.88 : 1.0;

        cursorRef.current.style.transform = `translate3d(${planePos.current.x}px, ${planePos.current.y}px, 0) translate(-50%, -35%) rotate(${renderAngle}deg) scale(${scale})`;
      }

      // Render flight trail and click bursts on canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw contrail vapor dots
          for (let i = contrailPoints.current.length - 1; i >= 0; i--) {
            const p = contrailPoints.current[i];
            p.age += delta;
            if (p.age >= p.maxAge) {
              contrailPoints.current.splice(i, 1);
              continue;
            }

            const progress = p.age / p.maxAge;
            const currentAlpha = p.alpha * (1 - progress);
            const currentRadius = p.radius + progress * 2.8;

            ctx.beginPath();
            ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
            // Elegant dual-tone vapor: soft white with royal blue aura
            ctx.fillStyle = `rgba(224, 235, 255, ${currentAlpha})`;
            ctx.fill();

            // Inner core dot
            ctx.beginPath();
            ctx.arc(p.x, p.y, currentRadius * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 1.2})`;
            ctx.fill();
          }

          // Draw click burst shockwaves
          for (let i = clickBursts.current.length - 1; i >= 0; i--) {
            const b = clickBursts.current[i];
            b.age += delta;
            if (b.age >= b.maxAge) {
              clickBursts.current.splice(i, 1);
              continue;
            }

            const progress = b.age / b.maxAge;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentRadius = b.radius + (b.maxRadius - b.radius) * easeOut;
            const currentAlpha = b.alpha * (1 - progress);

            // Expanding ring in brand royal blue and red accent
            ctx.beginPath();
            ctx.arc(b.x, b.y, currentRadius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(36, 67, 154, ${currentAlpha * 0.7})`;
            ctx.lineWidth = 2 * (1 - progress);
            ctx.stroke();

            // Accent red ring
            ctx.beginPath();
            ctx.arc(b.x, b.y, Math.max(0, currentRadius - 3), 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(229, 35, 42, ${currentAlpha * 0.5})`;
            ctx.lineWidth = 1.2 * (1 - progress);
            ctx.stroke();
          }
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("airplane-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("resize", updateCanvasSize);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Hide completely on mobile/touch devices
  if (isTouchDevice) {
    return null;
  }

  // Determine visibility: show airplane only when visible AND not hovering over interactive elements
  const shouldShowAirplane = isVisible && !isInteractive;

  return (
    <>
      {/* Contrail Canvas Layer */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[99998] transition-opacity duration-200"
        style={{
          opacity: shouldShowAirplane ? 1 : 0,
        }}
      />

      {/* Airplane Cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[99999] will-change-transform transition-opacity duration-150 ${
          shouldShowAirplane ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: "28px",
          height: "28px",
        }}
      >
        {/* Sleek MS World Travels Commercial Airliner SVG */}
        <svg
          viewBox="0 0 36 36"
          width="28"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
          style={{
            filter:
              "drop-shadow(0 2px 4px rgba(0,0,0,0.32)) drop-shadow(0 4px 8px rgba(36,67,154,0.25))",
          }}
        >
          {/* Main Wings */}
          {/* Left & Right swept wings in royal blue #24439A */}
          <path
            d="M18 13 L3.5 22 C2.3 22.8 2.2 23.6 3.4 23.6 L7 23.6 L15 19.5 L18 19.5 L21 19.5 L29 23.6 L32.6 23.6 C33.8 23.6 33.7 22.8 32.5 22 L18 13 Z"
            fill="#24439A"
          />

          {/* Wing Leading Edge Highlight */}
          <path
            d="M18 13 L3.5 22 C3 22.3 2.8 22.6 3.4 22.6 L7 22.6 L15 18.8 L18 18.8 L21 18.8 L29 22.6 L32.6 22.6 C33.2 22.6 33 22.3 32.5 22 L18 13 Z"
            fill="#3B82F6"
            opacity="0.65"
          />

          {/* Brand Red Wingtips (#E5232A) */}
          {/* Left Wingtip Winglet */}
          <path
            d="M3.5 22 L2 20.8 C1.8 20.6 2 20.2 2.4 20.2 L4.2 21.6 L3.5 22 Z"
            fill="#E5232A"
          />
          {/* Right Wingtip Winglet */}
          <path
            d="M32.5 22 L34 20.8 C34.2 20.6 34 20.2 33.6 20.2 L31.8 21.6 L32.5 22 Z"
            fill="#E5232A"
          />

          {/* Horizontal Tail Stabilizers */}
          <path
            d="M18 27 L9.5 32 C8.8 32.5 9 33 9.8 33 L12.5 33 L16.5 30.5 L19.5 30.5 L23.5 33 L26.2 33 C27 33 27.2 32.5 26.5 32 L18 27 Z"
            fill="#1E3A8A"
          />
          {/* Tail Stabilizer Red Tips */}
          <path
            d="M9.5 32 L8.5 31.2 C8.3 31 8.5 30.8 8.8 30.8 L10.5 31.8 L9.5 32 Z"
            fill="#E5232A"
          />
          <path
            d="M26.5 32 L27.5 31.2 C27.7 31 27.5 30.8 27.2 30.8 L25.5 31.8 L26.5 32 Z"
            fill="#E5232A"
          />

          {/* Twin Jet Engines (mounted under wings) */}
          {/* Left Engine */}
          <rect
            x="9.2"
            y="17"
            width="2.6"
            height="5.2"
            rx="1.3"
            fill="#172554"
          />
          <ellipse cx="10.5" cy="17.2" rx="1.1" ry="0.6" fill="#E2E8F0" />
          {/* Right Engine */}
          <rect
            x="24.2"
            y="17"
            width="2.6"
            height="5.2"
            rx="1.3"
            fill="#172554"
          />
          <ellipse cx="25.5" cy="17.2" rx="1.1" ry="0.6" fill="#E2E8F0" />

          {/* Fuselage (Airliner Body) */}
          <path
            d="M18 1.5 C16.5 3.5 15.2 7 15.2 13 L15.2 27 C15.2 30.2 16.5 33 18 34.5 C19.5 33 20.8 30.2 20.8 27 L20.8 13 C20.8 7 19.5 3.5 18 1.5 Z"
            fill="#24439A"
          />

          {/* Fuselage Dorsal Highlight (gives 3D cylindrical shine) */}
          <path
            d="M18 2.2 C17.2 4 16.5 7.5 16.5 13 L16.5 26.5 C16.5 28.5 17.2 30.5 18 31.5 C18.8 30.5 19.5 28.5 19.5 26.5 L19.5 13 C19.5 7.5 18.8 4 18 2.2 Z"
            fill="#3B82F6"
            opacity="0.35"
          />

          {/* Cockpit Windshield (Glossy Sky Visor) */}
          <path
            d="M16.4 7.2 C16.4 5.8 19.6 5.8 19.6 7.2 L19.6 9 C19.6 9.4 16.4 9.4 16.4 9 Z"
            fill="#FFFFFF"
          />
          <path
            d="M17 7.6 C17 6.8 19 6.8 19 7.6 L19 8.6 C19 8.8 17 8.8 17 8.6 Z"
            fill="#BAE6FD"
          />

          {/* Vertical Stabilizer Tail Fin with MS Red Fin Logo */}
          <path
            d="M17.4 25.5 L17.4 32.8 C17.4 33.4 18.6 33.4 18.6 32.8 L18.6 25.5 C18.6 24.8 17.4 24.8 17.4 25.5 Z"
            fill="#E5232A"
          />
          {/* Subtle top dorsal ridge */}
          <rect
            x="17.7"
            y="13"
            width="0.6"
            height="11"
            rx="0.3"
            fill="#FFFFFF"
            opacity="0.6"
          />
        </svg>
      </div>
    </>
  );
}
