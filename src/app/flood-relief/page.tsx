import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Droplets,
  HeartHandshake,
  LifeBuoy,
  PackageCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/ui/MotionReveal";
import { EditorialHeroReveal } from "@/components/interior/EditorialHeroReveal";
import { LiquidReveal } from "@/components/ui/LiquidReveal";
import { ElegantContactDetails } from "@/components/contact/ElegantContactDetails";
import { JsonLd } from "@/components/seo/JsonLd";
import { FLOOD_RELIEF_CAMPAIGN } from "@/data/flood-relief";
import { SANTOSH_ARORA_TRUST } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/flood-relief",
  title: "Flood Relief & Emergency Support Campaign",
  description:
    "Santosh Arora Trust's primary Flood Relief campaign under Trust Deed Clause 4(g): boat rescue and evacuation, dry-ground ration and drinking water distribution, and volunteer kit packing.",
  keywords: [
    "Flood Relief India",
    "Santosh Arora Trust Flood Relief",
    "Disaster Relief Trust Delhi",
    "Ration Distribution",
    "Drinking Water Relief",
    "Emergency Evacuation Support",
  ],
  ogImage: {
    url: "/images/flood-relief/rescue-boats.jpg",
    width: 1280,
    height: 720,
    alt: "Flood Relief rescue and evacuation operations — Santosh Arora Trust",
  },
});

const PILLAR_ICONS = [LifeBuoy, Droplets, PackageCheck] as const;

export default function FloodReliefPage() {
  const { registration, regulatoryStatus } = SANTOSH_ARORA_TRUST;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Flood Relief Campaign", path: "/flood-relief" },
        ])}
      />

      {/* 1. Editorial Campaign Hero with Featured Video */}
      <section
        aria-labelledby="flood-relief-hero-heading"
        className="relative overflow-hidden bg-bg-white text-text-primary"
      >
        <div className="mx-auto max-w-[var(--container-standard)] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <EditorialHeroReveal variant="eyebrow">
                <Eyebrow tone="orange">{FLOOD_RELIEF_CAMPAIGN.badge}</Eyebrow>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="bottomMask" delay={0.08}>
                <h1
                  id="flood-relief-hero-heading"
                  className="text-display mt-5 text-text-primary"
                >
                  Flood Relief &amp;{" "}
                  <em className="font-medium italic text-brand-forest">
                    Emergency Support.
                  </em>
                </h1>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="fromLeft" delay={0.14}>
                <p className="text-lead mt-5 max-w-xl">
                  {FLOOD_RELIEF_CAMPAIGN.heroLead}
                </p>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="rise" delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <ButtonLink href="#support" variant="primary" size="lg">
                    <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                    Support This Campaign
                  </ButtonLink>
                  <ButtonLink
                    href="/contact#enquiry-form"
                    variant="secondary"
                    size="lg"
                  >
                    Volunteer With Us
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="rise" delay={0.26}>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border-subtle pt-5 text-xs text-text-subtle">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck
                      className="h-3.5 w-3.5 text-[#184385]"
                      aria-hidden="true"
                    />
                    Reg. No. {registration.registrationNumber}
                  </span>
                  <span>
                    DARPAN ID: {registration.darpanId} ({registration.darpanStatus})
                  </span>
                </div>
              </EditorialHeroReveal>
            </div>

            <EditorialHeroReveal
              variant="fromRight"
              delay={0.12}
              className="lg:col-span-6"
            >
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0d2140] shadow-[0_18px_42px_-16px_rgba(13,33,64,0.28)]">
                  <video
                    src={FLOOD_RELIEF_CAMPAIGN.video.src}
                    poster={FLOOD_RELIEF_CAMPAIGN.video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={FLOOD_RELIEF_CAMPAIGN.video.title}
                    className="pointer-events-none h-full w-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
            </EditorialHeroReveal>
          </div>
        </div>
        <div aria-hidden="true" className="separator-editorial" />
      </section>

      {/* 2. Mission & Essential Relief Kit Contents */}
      <Section
        id="mission"
        surface="cream"
        ariaLabel="Mission and objectives"
      >
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <MotionReveal variant="fromLeft" className="lg:col-span-7">
            <Eyebrow tone="forest">Mission &amp; Objectives</Eyebrow>
            <h2
              id="flood-mission-heading"
              className="text-heading-1 mt-5 text-[#0d2140]"
            >
              {FLOOD_RELIEF_CAMPAIGN.mission.heading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#1a3560] sm:text-lg">
              {FLOOD_RELIEF_CAMPAIGN.mission.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal
            variant="fromRight"
            delay={0.08}
            className="lg:col-span-5"
          >
            <div className="rounded-[var(--radius-panel)] bg-white p-7 ring-1 ring-white/80 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf4fd] text-[#184385]">
                  <PackageCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2457a6]">
                    Standardised Support
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-[#0d2140]">
                    What Relief Support Covers
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5 text-sm leading-relaxed text-[#1a3560]">
                {FLOOD_RELIEF_CAMPAIGN.kitContents.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#184385]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </Section>

      {/* 3. Rescue Operations, Dry-Ground Ration Distribution & Volunteer Activities */}
      <Section
        id="operations"
        surface="white"
        ariaLabel="On-ground relief pillars"
      >
        <MotionReveal variant="fromLeft" className="max-w-3xl">
          <Eyebrow tone="orange">On-Ground Relief Pillars</Eyebrow>
          <h2
            id="flood-operations-heading"
            className="text-heading-1 mt-5 text-[#0d2140]"
          >
            Structured rescue, dry-ground distribution, and volunteer care.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#1a3560]">
            Every operation follows clear safety principles: boats are used
            exclusively for genuine rescue and evacuation, volunteers assemble
            sealed kits cleanly indoors, and food and drinking water are
            distributed only on dry, raised ground.
          </p>
        </MotionReveal>

        <div className="mt-12 space-y-12">
          {FLOOD_RELIEF_CAMPAIGN.pillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index] ?? LifeBuoy;
            const imageFirst = index % 2 === 0;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-28 grid items-center gap-8 rounded-[var(--radius-panel)] border border-[#cfe0fa] bg-[#f4f8fe] p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
              >
                <MotionReveal
                  variant={imageFirst ? "fromLeft" : "fromRight"}
                  className={
                    imageFirst
                      ? "lg:col-span-6"
                      : "lg:col-span-6 lg:order-2"
                  }
                >
                  <figure className="m-0">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-card)] border border-white bg-white shadow-[var(--shadow-soft)]">
                      <LiquidReveal duration={1.3} replay>
                        <Image
                          src={pillar.imageSrc}
                          alt={pillar.imageAlt}
                          fill
                          quality={90}
                          sizes="(max-width: 1024px) 100vw, 48vw"
                          className="object-cover"
                        />
                      </LiquidReveal>
                    </div>
                    <figcaption className="mt-3 text-xs font-medium text-[#24477d]">
                      {pillar.caption}
                    </figcaption>
                  </figure>
                </MotionReveal>

                <MotionReveal
                  variant={imageFirst ? "fromRight" : "fromLeft"}
                  delay={0.06}
                  className={
                    imageFirst
                      ? "lg:col-span-6"
                      : "lg:col-span-6 lg:order-1"
                  }
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#184385] ring-1 ring-[#cfe0fa]">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>
                      Pillar {pillar.number} · {pillar.clauseRef}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-semibold text-[#0d2140] sm:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-[#1a3560]">
                    {pillar.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm text-[#0d2140]">
                    {pillar.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#184385]"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </MotionReveal>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 4. Updates & Transparent Reporting */}
      <Section
        id="updates"
        surface="sage"
        ariaLabel="Updates and transparent reporting"
      >
        <MotionReveal variant="fromLeft" className="max-w-2xl">
          <Eyebrow tone="forest">Updates &amp; Reporting</Eyebrow>
          <h2
            id="flood-updates-heading"
            className="text-heading-1 mt-5 text-[#0d2140]"
          >
            Honest updates, published only when verified.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#1a3560]">
            We keep our charitable objectives separate from completed field
            records and never display placeholder numbers.
          </p>
        </MotionReveal>

        <MotionStagger className="mt-10 grid gap-6 md:grid-cols-3">
          {FLOOD_RELIEF_CAMPAIGN.updates.map((item, idx) => (
            <MotionStaggerItem
              key={item.id}
              direction={idx === 0 ? "fromLeft" : idx === 2 ? "fromRight" : "rise"}
            >
              <div className="flex h-full flex-col rounded-[var(--radius-card)] bg-white p-6 ring-1 ring-white/80 shadow-[var(--shadow-soft)] sm:p-7">
                <span className="inline-flex w-fit items-center rounded-full bg-[#edf4fd] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#184385]">
                  {item.tag}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#0d2140]">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#1a3560]">
                  {item.description}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Section>

      {/* 5. Support & Donation Information (Verified Contact Channel Only) */}
      <Section
        id="support"
        surface="white"
        ariaLabel="Support and donation information"
      >
        <div className="scroll-mt-28 rounded-[var(--radius-panel)] bg-gradient-to-br from-[#2a579c] via-[#4070bd] to-[#5888d4] p-7 text-white ring-1 ring-white/45 shadow-[var(--shadow-elevated)] sm:p-10 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-eyebrow inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-white ring-1 ring-white/30">
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                Support &amp; Volunteer Desk
              </span>

              <h2
                id="flood-support-heading"
                className="mt-5 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
              >
                Stand with families affected by floods.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {FLOOD_RELIEF_CAMPAIGN.supportNote}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <ButtonLink
                  href="/contact#enquiry-form"
                  variant="accent"
                  size="lg"
                >
                  Write to the Trust Team
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <Link
                  href="/governance"
                  className="inline-flex min-h-[44px] items-center gap-2 px-3 text-sm font-semibold text-white underline decoration-white/70 underline-offset-4 hover:text-white/85"
                >
                  Inspect Trust Governance &amp; Registration
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ElegantContactDetails tone="forest" layout="stack" />

              <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-white/12 p-4 text-xs leading-relaxed text-white/85 ring-1 ring-white/25">
                <AlertCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  aria-hidden="true"
                />
                <p>{regulatoryStatus.disclosureNote}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
