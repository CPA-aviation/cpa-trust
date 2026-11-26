import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { FLOOD_RELIEF_CAMPAIGN } from "@/data/flood-relief";
import { SANTOSH_ARORA_TRUST } from "@/data/trust";
import { Container } from "@/components/ui/Container";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/ui/MotionReveal";
import { LiquidReveal } from "@/components/ui/LiquidReveal";

const FLOOD_TAGS = [
  "Boat Rescue & Evacuation",
  "Dry-Ground Ration Kits",
  "Clean Drinking Water",
] as const;

const WOMEN_TAGS = [
  "Education & Literacy",
  "Vocational Livelihoods",
  "Legal & Safe Support",
] as const;

export function FloodReliefSection() {
  const { registration } = SANTOSH_ARORA_TRUST;

  return (
    <section
      id="flood-relief"
      aria-labelledby="home-flood-relief-heading"
      className="relative overflow-hidden border-y border-white/20 bg-gradient-to-br from-[#0b1d3a] via-[#133262] to-[#1e4b8f] py-20 text-white sm:py-28"
    >
      {/* Subtle cinematic radial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#77a2e2]/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-[#9ec0f0]/15 blur-[110px]"
      />

      <Container size="wide" className="relative z-10">
        {/* Minimal Editorial Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-9 lg:flex-row lg:items-end">
          <MotionReveal variant="fromLeft" className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95 ring-1 ring-white/25 backdrop-blur-md">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#9ec0f0]"
                aria-hidden="true"
              />
              Featured Initiatives
            </span>
            <h2
              id="home-flood-relief-heading"
              className="mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl"
            >
              Flood Relief &amp;{" "}
              <span className="text-[#a8c8f5]">Women Empowerment.</span>
            </h2>
          </MotionReveal>

          <MotionReveal variant="fromRight" delay={0.06} className="max-w-md">
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              Action rooted in compassion — pairing rapid emergency flood
              support with lasting dignity, learning, and self-reliance for
              women.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-white/70">
              <ShieldCheck
                className="h-3.5 w-3.5 shrink-0 text-[#a8c8f5]"
                aria-hidden="true"
              />
              <span>
                Reg. No. {registration.registrationNumber} · DARPAN{" "}
                {registration.darpanStatus}
              </span>
            </p>
          </MotionReveal>
        </div>

        {/* Side-by-Side Cinema Video Spread: Flood Relief (Left) & Women Empowerment (Right) */}
        <div className="mt-12 grid items-stretch gap-12 lg:grid-cols-2 lg:gap-10">
          {/* LEFT: Flood Relief */}
          <MotionReveal variant="fromLeft" className="group flex flex-col">
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-[#081529] ring-1 ring-white/20 shadow-[0_28px_64px_-22px_rgba(3,10,24,0.7)]">
              <video
                src={FLOOD_RELIEF_CAMPAIGN.video.src}
                poster={FLOOD_RELIEF_CAMPAIGN.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={FLOOD_RELIEF_CAMPAIGN.video.title}
                className="pointer-events-none h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              >
                Your browser does not support the video tag.
              </video>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081529]/85 via-[#081529]/15 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5">
                <h3 className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {FLOOD_RELIEF_CAMPAIGN.title}
                </h3>
              </div>
            </div>

            <div className="mt-6 flex flex-1 flex-col px-1">
              <p className="text-base leading-relaxed text-white/82">
                Mobilising structured flood relief — prioritising safe boat
                evacuation, dry-ground ration distribution, clean drinking
                water, and dignified community support.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {FLOOD_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/95 ring-1 ring-white/20 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
                <Link
                  href="/flood-relief#support"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0d2140] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.45)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#edf4fd]"
                >
                  <HeartHandshake className="h-4 w-4 text-[#184385]" aria-hidden="true" />
                  Support Flood Relief
                </Link>
                <Link
                  href="/flood-relief"
                  className="group/link inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-white"
                >
                  <span className="underline decoration-white/45 decoration-1 underline-offset-[6px] group-hover/link:decoration-white">
                    View Full Campaign
                  </span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </MotionReveal>

          {/* RIGHT: Women Empowerment */}
          <MotionReveal
            variant="fromRight"
            delay={0.08}
            className="group flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-[#081529] ring-1 ring-white/20 shadow-[0_28px_64px_-22px_rgba(3,10,24,0.7)]">
              <video
                src="/videos/women.mp4"
                poster="/images/home/focus-women.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Women Empowerment — Santosh Arora Trust"
                className="pointer-events-none h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              >
                Your browser does not support the video tag.
              </video>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081529]/85 via-[#081529]/15 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5">
                <h3
                  id="home-women-heading"
                  className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl"
                >
                  Women Empowerment &amp; Dignity
                </h3>
              </div>
            </div>

            <div className="mt-6 flex flex-1 flex-col px-1">
              <p className="text-base leading-relaxed text-white/82">
                Listed as our primary sector on NGO DARPAN, women&apos;s
                empowerment sits at the heart of Santosh Arora Trust — enabling
                learning, livelihoods, and self-reliance.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {WOMEN_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/95 ring-1 ring-white/20 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-7">
                <Link
                  href="/focus-areas#women-empowerment"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0d2140] shadow-[0_12px_28px_-10px_rgba(0,0,0,0.45)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-[#edf4fd]"
                >
                  Explore Women Empowerment
                  <ArrowRight className="h-4 w-4 text-[#184385]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* Three Core Flood Relief Operations — Cinema Editorial Photo Strip */}
        <MotionStagger className="mt-16 grid gap-7 border-t border-white/15 pt-12 md:grid-cols-3">
          {FLOOD_RELIEF_CAMPAIGN.pillars.map((pillar, index) => (
            <MotionStaggerItem
              key={pillar.id}
              direction={
                index === 0 ? "fromLeft" : index === 2 ? "fromRight" : "rise"
              }
            >
              <Link
                href={`/flood-relief#${pillar.id}`}
                className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#081529] ring-1 ring-white/20">
                  <LiquidReveal delay={index * 0.06} duration={1.25} replay>
                    <Image
                      src={pillar.imageSrc}
                      alt={pillar.imageAlt}
                      fill
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                  </LiquidReveal>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081529]/80 via-[#081529]/10 to-transparent"
                  />
                  <div className="absolute inset-x-4 bottom-3.5 flex items-end justify-between gap-2">
                    <h4 className="font-serif text-lg font-semibold leading-snug text-white sm:text-xl">
                      {pillar.title}
                    </h4>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#0d2140]">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                <p className="mt-3.5 px-0.5 text-sm leading-relaxed text-white/75 transition-colors group-hover:text-white/95">
                  {pillar.summary}
                </p>
              </Link>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
}
