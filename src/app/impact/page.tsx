import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { EditorialImage } from "@/components/interior/EditorialImage";
import { EditorialHeroReveal } from "@/components/interior/EditorialHeroReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SANTOSH_ARORA_TRUST } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/impact",
  title: "Future Impact & Social Welfare Vision",
  description:
    "Discover the long-term vision of Santosh Arora Trust for education and literacy, women empowerment, healthcare access, and accountable community development across India.",
  keywords: [
    "Future Impact & Vision",
    "Social Welfare Organisation",
    "Community Development",
    "Education and Literacy",
    "Women Empowerment",
  ],
  ogImage: {
    url: "/images/interior/impact-hero.jpg",
    width: 1280,
    height: 853,
    alt: "Community vision and future social welfare goals — Santosh Arora Trust",
  },
});

const ASPIRATION_CHAPTERS = [
  {
    number: "01",
    eyebrow: "Education & Opportunity",
    tone: "lime" as const,
    title: "Opening Doors Through Learning",
    narrative:
      "We want to help girls and students who have to stop studying because of money problems. We hope to give books, study materials, library access and support, so that learning leads to a better future.",
    deedAnchor: "Clause 4(c) Education & Clause 4(j) Research",
  },
  {
    number: "02",
    eyebrow: "Women & Income",
    tone: "lavender" as const,
    title: "Confidence, Safety & Independence",
    narrative:
      "Supporting women is our main goal. We hope to help women know their rights and earn their own money, through safety and counselling support, job skills and self-help groups.",
    deedAnchor: "Clause 4(a) Women Empowerment & Clause 4(b) Livelihood",
  },
  {
    number: "03",
    eyebrow: "Community Care & Relief",
    tone: "orange" as const,
    title: "Strong Neighbourhoods That Care",
    narrative:
      "A community does well when no one is left behind. In the future, we hope to support health awareness, clean neighbourhoods, tree planting, legal awareness and help during emergencies.",
    deedAnchor: "Clause 4(d), 4(e), 4(f), 4(g) & 4(h)",
  },
  {
    number: "04",
    eyebrow: "Respect & Wellbeing",
    tone: "forest" as const,
    title: "Fair Support for Everyone",
    narrative:
      "Everything we do follows one simple rule from Clause 4: help women, children, young people, older people, people with disabilities and low-income families with respect, whatever their religion, caste or beliefs.",
    deedAnchor: "Clause 4 General Public Benefit & Clause 4(i) Wellness",
  },
] as const;

const FUTURE_COMMITMENTS = [
  {
    title: "Listen First",
    clause: "Clause 4(j)",
    body: "We will talk to communities and do surveys before we plan any programme, so our help meets real local needs.",
  },
  {
    title: "Trustees Decide Together",
    clause: "Clause 6",
    body: "Every new programme must be approved by the trustees at a proper meeting, with written records.",
  },
  {
    title: "No Profit, Only Charity",
    clause: "Clause 8",
    body: "All of our money and resources will be used only for charity in India. No one will make a personal profit.",
  },
  {
    title: "Only Real Results",
    clause: "Clauses 10 & 13",
    body: "We will only share stories or numbers after a programme has actually run, been recorded and passed the yearly audit.",
  },
] as const;

export default function ImpactPage() {
  const { intendedBeneficiaryScope, registration } = SANTOSH_ARORA_TRUST;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Vision", path: "/impact" },
        ])}
      />
      {/* 1. Warm Cream Poetic Essay Hero */}
      <section
        aria-labelledby="impact-hero-heading"
        className="relative overflow-hidden bg-bg-cream text-text-primary"
      >
        <div className="mx-auto max-w-[var(--container-standard)] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <EditorialHeroReveal variant="eyebrow">
                <Eyebrow tone="lime">Vision</Eyebrow>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="bottomMask" delay={0.08}>
                <h1
                  id="impact-hero-heading"
                  className="text-display mt-5 text-text-primary"
                >
                  A Better Future for{" "}
                  <em className="font-medium italic text-brand-forest">
                    Everyone.
                  </em>
                </h1>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="fromLeft" delay={0.16}>
                <p className="text-lead mt-5 max-w-xl">
                  Santosh Arora Trust is new. This page shares the change we
                  hope to bring in the future. We do not show made-up numbers,
                  dates or results.
                </p>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="fromLeft" delay={0.24}>
                <div className="mt-8 border-l-2 border-brand-lavender-deep pl-5 text-sm leading-relaxed text-text-secondary">
                  <p className="font-semibold text-text-primary">
                    Where We Are Today
                  </p>
                  <p className="mt-1">
                    Registered on NGO DARPAN ({registration.darpanId}). We are
                    starting honestly, from the beginning.
                  </p>
                </div>
              </EditorialHeroReveal>
            </div>

            <div className="lg:col-span-6">
              <EditorialImage
                src="/images/interior/impact-hero.jpg"
                alt="Hands gently cradling a young green sapling rooted in dark soil"
                aspect="4/3"
                direction="liquidBottom"
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                caption="Real change grows slowly, with care and good planning."
              />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="separator-editorial" />
      </section>

      {/* 2. Long-Term Social Welfare Aspirations — Editorial Chapters */}
      <Section surface="white" spacing="lg" separatorBottom>
        <MotionReveal variant="bottomMask">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow tone="lavender">Our Hopes</Eyebrow>
              <h2 className="text-heading-1 mt-4 text-text-primary">
                Where We Hope to Make a Difference
              </h2>
            </div>
            <p className="text-lead lg:col-span-5">
              {intendedBeneficiaryScope}
            </p>
          </div>
        </MotionReveal>

        <div className="mt-14 divide-y divide-border-warm border-y border-border-warm">
          {ASPIRATION_CHAPTERS.map((chapter, idx) => (
            <article key={chapter.number} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10">
              <MotionReveal variant="fromLeft" delay={idx * 0.05} className="flex items-start gap-4 lg:col-span-5">
                <span className="font-serif text-4xl font-medium italic leading-none text-brand-lavender-deep sm:text-5xl">
                  {chapter.number}
                </span>
                <div>
                  <Eyebrow tone={chapter.tone} withDot={false}>
                    {chapter.eyebrow}
                  </Eyebrow>
                  <h3 className="text-heading-2 mt-3 text-text-primary">
                    {chapter.title}
                  </h3>
                </div>
              </MotionReveal>

              <MotionReveal variant="fromRight" delay={idx * 0.05 + 0.06} className="space-y-3 lg:col-span-7">
                <p className="text-base leading-[1.8] text-text-secondary sm:text-[17px]">
                  {chapter.narrative}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                  From our Trust Deed: {chapter.deedAnchor}
                </p>
              </MotionReveal>
            </article>
          ))}
        </div>
      </Section>

      {/* 3. Responsible Future Initiatives — Obsidian Dark Band */}
      <Section surface="forest" spacing="lg">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <MotionReveal variant="fromLeft" className="lg:col-span-5">
            <span className="text-eyebrow inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 text-white ring-1 ring-white/25">
              <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden="true" />
              Our Promise
            </span>
            <h2 className="text-heading-1 mt-5 text-white">
              How We Will Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              How we do our work matters as much as what we want to achieve.
              All our future work will follow these four promises from our
              Trust Deed.
            </p>
          </MotionReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {FUTURE_COMMITMENTS.map((item, idx) => (
              <MotionReveal
                key={item.title}
                variant={idx % 2 === 0 ? "fromRight" : "softScale"}
                delay={0.06 + idx * 0.06}
              >
                <div className="h-full border-t border-white/25 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                    {item.clause}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                    {item.body}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
