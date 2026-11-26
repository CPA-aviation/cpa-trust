"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useReplayInView } from "@/components/ui/MotionReveal";

const LIQUID_EASE = [0.36, 0.04, 0.22, 1] as const;

function buildWaveClipPath(p: number): string {
  const clamped = Math.max(0, Math.min(1, p));
  const y = 1.08 - clamped * 1.28;
  const amp = Math.sin(clamped * Math.PI) * 0.18;
  const c1y = (y - amp).toFixed(4);
  const c2y = (y + amp).toFixed(4);
  const yStr = y.toFixed(4);
  return `M -0.02,1.08 L 1.02,1.08 L 1.02,${yStr} C 0.72,${c1y} 0.28,${c2y} -0.02,${yStr} Z`;
}

export function LiquidReveal({
  children,
  delay = 0,
  duration = 0.95,
  replay = true,
  priority = false,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  replay?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const effectiveReplay = replay && !priority;
  const rawId = useId();
  const clipId = `liquid-wave-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { isVisible: inView, prefersReduced } = useReplayInView(
    containerRef,
    effectiveReplay,
    priority
  );
  const hasPlayedInitialRef = useRef(false);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  const initialP = priority ? 0.35 : 0;
  const progress = useMotionValue(initialP);
  const sheenY = useTransform(progress, [0, 1], ["100%", "-35%"]);
  const sheenOpacity = useTransform(progress, [0, 0.18, 0.78, 1], [0, 0.85, 0.6, 0]);
  const innerScale = useTransform(progress, [0, 1], [1.11, 1]);

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (pathRef.current) {
        pathRef.current.setAttribute("d", buildWaveClipPath(latest));
      }
    });
    return () => unsubscribe();
  }, [progress]);

  useEffect(() => {
    controlsRef.current?.stop();
    controlsRef.current = null;

    const syncPath = (value: number) => {
      progress.set(value);
      if (pathRef.current) {
        pathRef.current.setAttribute("d", buildWaveClipPath(value));
      }
    };

    if (prefersReduced) {
      syncPath(1);
      return;
    }

    if (inView) {
      const startP = priority && !hasPlayedInitialRef.current ? 0.35 : 0;
      hasPlayedInitialRef.current = true;
      syncPath(startP);
      const controls = animate(progress, 1, {
        duration: priority && startP > 0 ? 0.72 : duration,
        delay,
        ease: LIQUID_EASE,
      });
      controlsRef.current = controls;
      return () => {
        controls.stop();
        if (controlsRef.current === controls) {
          controlsRef.current = null;
        }
      };
    }

    if (effectiveReplay) {
      syncPath(0);
    }
  }, [inView, priority, effectiveReplay, duration, delay, prefersReduced, progress]);

  return (
    <div ref={containerRef} className={`relative h-full w-full overflow-hidden ${className}`}>
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        className="pointer-events-none absolute"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path ref={pathRef} d={buildWaveClipPath(initialP)} />
          </clipPath>
        </defs>
      </svg>

      <div
        style={{
          clipPath: `url(#${clipId})`,
          WebkitClipPath: `url(#${clipId})`,
        }}
        className="relative h-full w-full motion-reduce:[clip-path:none!important]"
      >
        <motion.div
          style={{ scale: innerScale }}
          className="h-full w-full will-change-transform motion-reduce:!transform-none"
        >
          {children}
        </motion.div>

        {/* Reflective wave highlight riding ahead of the curved liquid boundary */}
        <motion.div
          aria-hidden="true"
          style={{
            top: sheenY,
            opacity: sheenOpacity,
          }}
          className="pointer-events-none absolute inset-x-[-10%] h-24 -skew-y-3 bg-gradient-to-b from-transparent via-white/60 to-transparent blur-sm will-change-[top,opacity] motion-reduce:!hidden"
        />
      </div>
    </div>
  );
}
