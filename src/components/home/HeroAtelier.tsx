"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/ui/MotionReveal";
import { HalftoneLiquidSphere } from "@/components/home/HalftoneLiquidSphere";
import "./hero-atelier.css";

const MARQUEE_ITEMS = [
  "Women Empowerment",
  "Education & Literacy",
  "Vocational Livelihoods",
  "Healthcare & Medical Relief",
  "Community Welfare",
  "Environment & Sanitation",
  "Registered Public Charitable Trust",
  "NGO DARPAN Active",
] as const;

interface Speck {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  phase: number;
}

export function HeroAtelier() {
  const stageRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle floating light specks + balanced fine-pointer parallax (pauses off-screen or under reduced motion)
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = stageRef.current;
    if (!canvas || !container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let rafId = 0;
    let visible = true;

    let pointerActive = false;
    let targetPx = width * 0.5;
    let targetPy = height * 0.5;
    let currentNx = 0;
    let currentNy = 0;
    let targetNx = 0;
    let targetNy = 0;

    const specks: Speck[] = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * Math.max(width, 320),
      y: Math.random() * Math.max(height, 420),
      vx: (Math.random() - 0.5) * 0.14,
      vy: -(0.12 + Math.random() * 0.18),
      r: 0.75 + (i % 3) * 0.28,
      alpha: 0.16 + Math.random() * 0.18,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onPointerMove = (e: PointerEvent) => {
      if (!finePointer) return;
      const rect = container.getBoundingClientRect();
      targetPx = e.clientX - rect.left;
      targetPy = e.clientY - rect.top;
      targetNx = ((targetPx / Math.max(rect.width, 1)) - 0.5) * 2;
      targetNy = ((targetPy / Math.max(rect.height, 1)) - 0.5) * 2;
      pointerActive = true;
    };

    const onPointerLeave = () => {
      pointerActive = false;
      targetNx = 0;
      targetNy = 0;
    };

    if (finePointer) {
      container.addEventListener("pointermove", onPointerMove, { passive: true });
      container.addEventListener("pointerleave", onPointerLeave);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const io = new IntersectionObserver(
      (entries) => {
        visible = Boolean(entries[0]?.isIntersecting);
      },
      { threshold: 0.02 }
    );
    io.observe(container);

    let tick = 0;
    const render = () => {
      rafId = window.requestAnimationFrame(render);
      if (!visible) return;

      tick += 0.015;

      // Interpolate normalized pointer offsets for balanced frame micro-parallax
      if (finePointer) {
        currentNx += (targetNx - currentNx) * 0.08;
        currentNy += (targetNy - currentNy) * 0.08;
        container.style.setProperty("--hx", (currentNx * 5).toFixed(2));
        container.style.setProperty("--hy", (currentNy * 4).toFixed(2));
      }

      ctx.clearRect(0, 0, width, height);

      for (const s of specks) {
        let repelX = 0;
        let repelY = 0;

        if (pointerActive && finePointer) {
          const dx = s.x - targetPx;
          const dy = s.y - targetPy;
          const distSq = dx * dx + dy * dy;
          if (distSq > 4 && distSq < 18000) {
            const dist = Math.sqrt(distSq);
            const force = ((134 - dist) / 134) * 0.32;
            repelX = (dx / dist) * force;
            repelY = (dy / dist) * force;
          }
        }

        s.x += s.vx + repelX + Math.sin(tick + s.phase) * 0.08;
        s.y += s.vy + repelY;

        if (s.y < -8) {
          s.y = height + 8;
          s.x = Math.random() * width;
        }
        if (s.x < -8) s.x = width + 8;
        if (s.x > width + 8) s.x = -8;

        const twinkle = 0.72 + 0.28 * Math.sin(tick * 1.4 + s.phase);
        ctx.fillStyle = `rgba(255, 255, 255, ${(s.alpha * twinkle).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    rafId = window.requestAnimationFrame(render);
    return () => {
      window.cancelAnimationFrame(rafId);
      if (finePointer) {
        container.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerleave", onPointerLeave);
      }
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <section
      ref={stageRef}
      aria-labelledby="home-hero-heading"
      className="hero-cinema"
    >
      <canvas ref={canvasRef} className="hero-particles-canvas" aria-hidden="true" />
      <HalftoneLiquidSphere />

      {/* Subtle ambient lavender & botanical lime lighting behind the stage */}
      <div
        aria-hidden="true"
        className="hero-ambient-layer pointer-events-none"
      >
        <span className="hero-orb hero-orb-lavender" />
        <span className="hero-orb hero-orb-lime" />
      </div>

      {/* Main Split Crystal-Clear Stage */}
      <div className="hero-stage">
        <div className="hero-copy-col">
          <h1 id="home-hero-heading" className="hero-display">
            <span className="hero-line-mask">
              <span className="hero-line hero-line-1">
                Building a Better Tomorrow,
              </span>
            </span>{" "}
            <span className="hero-line-mask">
              <span className="hero-line hero-line-2 hero-display-glow">
                Together.
              </span>
            </span>
          </h1>

          <p className="hero-subcopy hero-enter-subcopy">
            We want to help people live better lives through education, support
            for women, healthcare and community care.
          </p>

          <div className="hero-actions hero-enter-actions">
            <Magnetic>
              <Link href="/contact" className="hero-cta-main">
                <span>Get in Touch</span>
                <ArrowRight className="hero-cta-arrow h-4 w-4" aria-hidden="true" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/focus-areas" className="hero-cta-glass">
                See What We Focus On
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="hero-media-col">
          <div className="hero-photo-frame hero-photo-frame-square">
            <Image
              src="/images/home/children-care.jpg"
              alt="Smiling Indian children cradled in caring hands beneath a white world globe against a clear sky-blue background"
              fill
              priority
              fetchPriority="high"
              quality={100}
              sizes="(max-width: 960px) 86vw, 390px"
              className="hero-photo-img hero-photo-img-center"
            />
          </div>
        </div>
      </div>

      {/* Bottom Ticker Dock & Founder Scroll Trigger */}
      <div className="hero-bottom-dock">
        <div className="hero-marquee-viewport" aria-hidden="true">
          <div className="hero-marquee-track">
            {[
              ...MARQUEE_ITEMS,
              ...MARQUEE_ITEMS,
              ...MARQUEE_ITEMS,
              ...MARQUEE_ITEMS,
            ].map((item, idx) => (
              <span key={`${item}-${idx}`} className="hero-marquee-item">
                <span>{item}</span>
                <span className="hero-marquee-dot" />
              </span>
            ))}
          </div>
        </div>

        <a href="#founder" className="hero-scroll-anchor">
          <span>Meet Our Founder</span>
          <ArrowDown className="hero-anchor-arrow h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
