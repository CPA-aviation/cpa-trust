import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { EditorialImage } from "@/components/interior/EditorialImage";
import { EditorialHeroReveal } from "@/components/interior/EditorialHeroReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { FLOOD_RELIEF_CAMPAIGN } from "@/data/flood-relief";
import { SANTOSH_ARORA_TRUST, type TrustObjective } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/focus-areas",
  title: "Charitable Focus Areas — Flood Relief, Education, Women Empowerment & Healthcare",
  description:
    "Charitable focus areas and ten Trust Deed goals covering flood relief, women empowerment, education, vocational skills, healthcare, and community welfare.",
  keywords: [
    "Flood Relief",
    "Women Empowerment",
    "Education and Literacy",
    "Skill Development",
    "Healthcare and Medical Relief",
    "Community Development",
    "Charitable Activities",
  ],
  ogImage: {
    url: "/images/home/focus-flood-relief.jpg",
    width: 1280,
    height: 720,
    alt: "Flood relief volunteers distributing dry ration kits and clean drinking water on elevated ground — Santosh Arora Trust",
  },
});

const FOCUS_FLOOD_HIGHLIGHTS = [
  {
    id: "focus-shelter-care",
    title: "Elevated Community Shelter & Care",
    summary:
      "Providing dry, covered temporary shelter spaces with clean blankets, safe resting areas, and attentive support for displaced mothers, children, and elders.",
    imageSrc: "/images/flood-relief/focus-shelter-care.jpg",
    imageAlt:
      "Flood-affected Indian families resting safely inside a dry elevated community hall shelter while a volunteer hands clean folded blankets",
  },
  {
    id: "focus-drinking-water",
    title: "Safe Drinking Water & Dry Rations",
    summary:
      "Organising respectful, orderly distribution of sealed drinking water bottles and dry family food staples exclusively on dry, raised ground.",
    imageSrc: "/images/flood-relief/focus-drinking-water.jpg",
    imageAlt:
      "Humanitarian volunteers on dry raised stone-paved ground handing sealed drinking water packs and dry ration bags to families in an orderly queue",
  },
  {
    id: "focus-medical-camp",
    title: "Emergency Medical Relief Desk",
    summary:
      "Coordinating timely first-aid, basic health checkups, and preventive care inside clean dry relief tents to protect families from flood-related illness.",
    imageSrc: "/images/flood-relief/focus-medical-camp.jpg",
    imageAlt:
      "Indian doctor and volunteers conducting a hygienic medical checkup for a child and parent inside a dry elevated relief camp tent",
  },
] as const;

const ANCHOR_NAV = [
  { id: "flood-relief", num: "01", label: "Flood Relief" },
  { id: "women-empowerment", num: "02", label: "Women Empowerment" },
  { id: "education-literacy", num: "03", label: "Education & Literacy" },
  { id: "skill-development", num: "04", label: "Skill Development" },
  { id: "healthcare-medical-relief", num: "05", label: "Healthcare & Wellness" },
  { id: "social-welfare-relief", num: "06", label: "Social Welfare & Relief" },
  {
    id: "environment-community-development",
    num: "07",
    label: "Environment & Community",
  },
] as const;

function getClauses(anchor: string): readonly TrustObjective[] {
  return SANTOSH_ARORA_TRUST.deedObjectives.filter(
    (obj) => obj.groupAnchor === anchor
  );
}

export default function FocusAreasPage() {
  const { registration, intendedBeneficiaryScope, objectProvisos } =
    SANTOSH_ARORA_TRUST;

  const womenClauses = getClauses("women-empowerment");
  const eduClauses = getClauses("education-literacy");
  const skillClauses = getClauses("skill-development");
  const healthClauses = getClauses("healthcare-medical-relief");
  const welfareClauses = getClauses("social-welfare-relief");
  const envClauses = getClauses("environment-community-development");

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Focus Areas", path: "/focus-areas" },
        ])}
      />
      {/* 1. Luminous Editorial Hero + Anchor Navigation Strip */}
      <section
        aria-labelledby="focus-hero-heading"
        className="relative overflow-hidden surface-luminous"
      >
        <div className="mx-auto max-w-[var(--container-standard)] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <EditorialHeroReveal variant="eyebrow">
                <Eyebrow tone="lime">Focus Areas</Eyebrow>
              </EditorialHeroReveal>
              <EditorialHeroReveal variant="bottomMask" delay={0.08}>
                <h1
                  id="focus-hero-heading"
                  className="text-display mt-5 text-text-primary"
                >
                  Our Focus Areas,{" "}
                  <em className="font-medium italic text-brand-lavender-deep">
                    Ten Charity Goals.
                  </em>
                </h1>
              </EditorialHeroReveal>
              <EditorialHeroReveal variant="fromLeft" delay={0.16}>
                <p className="text-lead mt-5 max-w-2xl">
                  Our Trust Deed (Clause 4) lists ten charity goals, from (a) to
                  (j). Below we explain each one simply. These are the causes we
                  were set up to support, not work we have already done.
                </p>
              </EditorialHeroReveal>
            </div>

            <EditorialHeroReveal variant="fromRight" delay={0.2} className="lg:col-span-4">
              <div className="border-l-2 border-brand-forest pl-5">
                <p className="text-eyebrow text-brand-forest">
                  Our Areas on NGO DARPAN
                </p>
                <p className="mt-2 text-sm font-semibold text-text-primary">
                  Main: {registration.darpanPrimarySector}
                </p>
                <p className="mt-1 text-sm font-medium text-[#0d2140]">
                  Second: {registration.darpanSecondarySector}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#14305a]">
                  Who we want to help: {intendedBeneficiaryScope}
                </p>
              </div>
            </EditorialHeroReveal>
          </div>

          {/* Direct Smooth Anchor Jump Links matching Homepage Mosaic */}
          <EditorialHeroReveal variant="rise" delay={0.14}>
            <nav
              aria-label="Focus areas quick navigation"
              className="mt-10 flex flex-wrap gap-2.5 border-t border-white/45 pt-6"
            >
              {ANCHOR_NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white bg-white px-4 py-2 text-xs font-semibold text-[#0d2140] shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-px hover:bg-[#edf4fd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d2140] sm:text-sm"
                >
                  <span className="font-serif italic text-brand-lavender-deep">
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </EditorialHeroReveal>
        </div>
        <div aria-hidden="true" className="separator-editorial" />
      </section>

      {/* SECTION 01: Flood Relief & Emergency Support — Primary Campaign Spread */}
      <Section
        id="flood-relief"
        surface="white"
        spacing="lg"
        separatorBottom
        className="scroll-mt-24 sm:scroll-mt-28"
        ariaLabel="Flood Relief and Emergency Support"
      >
        <div className="space-y-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <EditorialImage
                src="/images/home/focus-flood-relief.jpg"
                alt="Indian humanitarian volunteers on dry, elevated ground distributing sealed dry ration kits and clean bottled drinking water to families with a rescue boat at the water's edge below"
                aspect="16/10"
                direction="scaleMask"
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                caption="Dry-ground ration and clean drinking water distribution at an elevated relief camp."
              />
            </div>

            <div className="space-y-5 lg:col-span-6">
              <MotionReveal variant="fromRight">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-serif text-4xl font-medium italic text-brand-forest">
                    01
                  </span>
                  <Eyebrow tone="orange" withDot={false}>
                    Clause 4(g) · Primary Relief Campaign
                  </Eyebrow>
                </div>
                <h2 className="text-heading-1 mt-4 text-text-primary">
                  Flood Relief &amp; Emergency Support
                </h2>
                <p className="mt-3 text-base leading-relaxed text-text-secondary sm:text-lg">
                  {FLOOD_RELIEF_CAMPAIGN.heroLead}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/flood-relief" variant="primary" size="md">
                    <span>View Full Campaign</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink
                    href="/flood-relief#support"
                    variant="secondary"
                    size="md"
                  >
                    <span>Support Flood Relief</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </MotionReveal>
            </div>
          </div>

          <div className="grid gap-6 border-t border-border-subtle pt-8 md:grid-cols-3">
            {FOCUS_FLOOD_HIGHLIGHTS.map((item, idx) => (
              <MotionReveal
                key={item.id}
                variant={idx === 0 ? "fromLeft" : idx === 2 ? "fromRight" : "rise"}
                delay={idx * 0.06}
              >
                <div className="space-y-3">
                  <EditorialImage
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    aspect="16/10"
                    direction="liquidBottom"
                    sizes="(max-width: 768px) 100vw, 31vw"
                  />
                  <h3 className="pt-1 font-serif text-xl font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.summary}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 02: Women Empowerment — Cerulean Spread */}
      <section
        id="women-empowerment"
        aria-labelledby="women-empowerment-heading"
        className="relative scroll-mt-24 overflow-hidden border-y border-white/40 bg-gradient-to-br from-[#2a579c] via-[#3f6fba] to-[#5687d4] py-16 text-white sm:scroll-mt-28 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 85% 20%, rgba(255, 255, 255, 0.24), transparent 68%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--container-standard)] px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <EditorialImage
                src="/images/home/focus-women.jpg"
                alt="Woman artisan weaving brightly coloured threads on a traditional handloom"
                aspect="4/5"
                direction="scaleMask"
                tone="dark"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                imageClassName="object-[50%_28%]"
              />
            </div>

            <div className="space-y-6 lg:col-span-7">
              <MotionReveal variant="fromRight">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-serif text-4xl font-medium italic text-white/80">
                    02
                  </span>
                  <span className="text-eyebrow rounded-full bg-white/12 px-3.5 py-1 text-white ring-1 ring-white/25">
                    Clause 4(a) · Our Main Goal
                  </span>
                </div>
                <h2
                  id="women-empowerment-heading"
                  className="text-heading-1 mt-4 text-white"
                >
                  Women Empowerment
                </h2>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                  Goal in our Trust Deed &amp; main area on DARPAN · No work completed yet
                </p>
              </MotionReveal>

              {womenClauses.map((clause, idx) => (
                <MotionReveal key={clause.id} variant="fromRight" delay={0.08 + idx * 0.08}>
                  <div className="border-t border-white/15 pt-5">
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {clause.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/80 sm:text-lg">
                      {clause.summary}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Education & Literacy — Asymmetric Overlap Plate on White */}
      <Section
        id="education-literacy"
        surface="white"
        spacing="lg"
        separatorBottom
        className="scroll-mt-24 sm:scroll-mt-28"
        ariaLabel="Education and Literacy"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-6">
            <MotionReveal variant="fromLeft">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-serif text-4xl font-medium italic text-brand-forest">
                  03
                </span>
                <Eyebrow tone="lime" withDot={false}>
                  Clauses 4(c) &amp; 4(j) · Second area on DARPAN
                </Eyebrow>
              </div>
              <h2 className="text-heading-1 mt-4 text-text-primary">
                Education &amp; Literacy
              </h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-subtle">
                Goal in our Trust Deed · Still being planned
              </p>
            </MotionReveal>

            <div className="divide-y divide-border-subtle border-y border-border-subtle">
              {eduClauses.map((clause, idx) => (
                <MotionReveal key={clause.id} variant="fromLeft" delay={idx * 0.08}>
                  <div className="py-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-forest">
                        {clause.clauseRef}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-serif text-2xl font-semibold text-text-primary">
                      {clause.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {clause.summary}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <EditorialImage
              src="/images/home/focus-education.jpg"
              alt="Students reading and studying together at shared tables in a public library"
              aspect="16/10"
              direction="fromRight"
              sizes="(max-width: 1024px) 100vw, 48vw"
              caption="Libraries, scholarships, books and uniforms for girls and students who need help."
            />
          </div>
        </div>
      </Section>

      {/* SECTION 03: Skill Development — Warm Cream Split Feature */}
      <Section
        id="skill-development"
        surface="cream"
        spacing="lg"
        separatorBottom
        className="scroll-mt-24 sm:scroll-mt-28"
        ariaLabel="Skill Development"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <EditorialImage
              src="/images/home/focus-skills.jpg"
              alt="Close-up of a tailor guiding striped fabric carefully under a sewing machine needle"
              aspect="3/2"
              direction="liquidBottom"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>

          <div className="space-y-5 lg:col-span-6">
            <MotionReveal variant="fromRight">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-medium italic text-text-primary">
                  04
                </span>
                <Eyebrow tone="orange" withDot={false}>
                  Clause 4(b)
                </Eyebrow>
              </div>
              <h2 className="text-heading-1 mt-4 text-text-primary">
                Skill Development
              </h2>
              <div
                aria-hidden="true"
                className="mt-4 h-0.5 w-16 bg-brand-orange"
              />
            </MotionReveal>

            {skillClauses.map((clause, idx) => (
              <MotionReveal key={clause.id} variant="fromRight" delay={0.08 + idx * 0.08}>
                <h3 className="font-serif text-2xl font-semibold text-text-primary">
                  {clause.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary sm:text-lg">
                  {clause.summary}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-text-subtle">
                  Goal only, not yet started
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 04: Healthcare & Medical Relief — Lavender Editorial Triptych */}
      <Section
        id="healthcare-medical-relief"
        surface="lavender"
        spacing="lg"
        separatorBottom
        className="scroll-mt-24 sm:scroll-mt-28"
        ariaLabel="Healthcare and Medical Relief"
      >
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <EditorialImage
              src="/images/home/focus-healthcare-india.jpg"
              alt="Indian doctor in scrubs standing in a hospital corridor outside the recovery and operating rooms"
              aspect="4/5"
              direction="fromLeft"
              sizes="(max-width: 1024px) 100vw, 32vw"
              imageClassName="object-[52%_30%]"
            />
          </div>

          <div className="space-y-8 lg:col-span-8">
            <MotionReveal variant="fromRight">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-serif text-4xl font-medium italic text-brand-lavender-deep">
                  05
                </span>
                <Eyebrow tone="lavender" withDot={false}>
                  Clauses 4(d) &amp; 4(i)
                </Eyebrow>
              </div>
              <h2 className="text-heading-1 mt-4 text-text-primary">
                Healthcare &amp; Medical Relief
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-secondary">
                Health care, good food, care for mothers and mental health,
                along with exercise, yoga and self-defence.
              </p>
            </MotionReveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {healthClauses.map((clause, idx) => (
                <MotionReveal
                  key={clause.id}
                  variant={idx % 2 === 0 ? "fromLeft" : "fromRight"}
                  delay={0.08 + idx * 0.08}
                >
                  <div className="h-full rounded-[var(--radius-card)] border border-brand-lavender/45 bg-bg-white p-6 shadow-[var(--shadow-soft)]">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-lavender-deep">
                      {clause.clauseRef}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                      {clause.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-[15px]">
                      {clause.summary}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 05: Social Welfare & Relief — Wide Banner + 3-Column Hairline Grid on White */}
      <Section
        id="social-welfare-relief"
        surface="white"
        spacing="lg"
        separatorBottom
        className="scroll-mt-24 sm:scroll-mt-28"
        ariaLabel="Social Welfare and Relief"
      >
        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <MotionReveal variant="fromLeft" className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-medium italic text-text-primary">
                  06
                </span>
                <Eyebrow tone="orange" withDot={false}>
                  Clauses 4(e), 4(f) &amp; 4(g)
                </Eyebrow>
              </div>
              <h2 className="text-heading-1 mt-4 text-text-primary">
                Social Welfare &amp; Relief
              </h2>
            </MotionReveal>
            <MotionReveal variant="fromRight" delay={0.1} className="lg:col-span-6">
              <p className="text-lead">
                Three goals from our Trust Deed: caring for people in need,
                helping people know their legal rights and get free or low-cost
                legal help, and helping during disasters.
              </p>
            </MotionReveal>
          </div>

          <EditorialImage
            src="/images/home/focus-welfare.jpg"
            alt="Community members sharing a warm meal seated together in a communal hall"
            aspect="21/9"
            direction="scaleMask"
            sizes="100vw"
            imageClassName="object-[50%_55%]"
          />

          <div className="grid gap-8 border-t border-border-warm pt-8 md:grid-cols-3">
            {welfareClauses.map((clause, idx) => (
              <MotionReveal
                key={clause.id}
                variant={idx === 0 ? "fromLeft" : idx === 1 ? "rise" : "fromRight"}
                delay={idx * 0.08}
              >
                <div className="border-t-2 border-brand-orange pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-subtle">
                    {clause.clauseRef}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                    {clause.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-secondary sm:text-[15px]">
                    {clause.summary}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 06: Environment & Community Development — Grounded Sage Spread */}
      <Section
        id="environment-community-development"
        surface="sage"
        spacing="lg"
        className="scroll-mt-24 sm:scroll-mt-28"
        ariaLabel="Environment and Community Development"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <EditorialImage
              src="/images/home/focus-environment.jpg"
              alt="Community planters carrying bundles of young tree saplings along a woodland trail"
              aspect="4/3"
              direction="fromLeft"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>

          <div className="space-y-6 lg:col-span-6">
            <MotionReveal variant="fromRight">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl font-medium italic text-brand-forest">
                  07
                </span>
                <Eyebrow tone="forest" withDot={false}>
                  Clause 4(h)
                </Eyebrow>
              </div>
              <h2 className="text-heading-1 mt-4 text-text-primary">
                Environment &amp; Community Development
              </h2>
            </MotionReveal>

            {envClauses.map((clause, idx) => (
              <MotionReveal key={clause.id} variant="fromRight" delay={0.08 + idx * 0.08}>
                <h3 className="font-serif text-2xl font-semibold text-text-primary">
                  {clause.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary sm:text-lg">
                  {clause.summary}
                </p>
                <p className="mt-3 text-xs text-text-subtle">
                  Caring for nature and keeping neighbourhoods clean.
                </p>
              </MotionReveal>
            ))}

            {/* Constitutional Conditions & Next Step Links */}
            <MotionReveal variant="rise" delay={0.14}>
              <div className="border-t border-brand-forest/20 pt-6">
                <p className="text-eyebrow text-brand-forest">
                  Important Rules
                </p>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-text-primary/85 sm:text-sm">
                  {objectProvisos.map((proviso, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <Sparkles
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-forest"
                        aria-hidden="true"
                      />
                      <span>{proviso}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/initiatives" variant="primary" size="md">
                    <Compass className="h-4 w-4" aria-hidden="true" />
                    <span>See Our Plans</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                  <ButtonLink href="/impact" variant="secondary" size="md">
                    <span>Vision</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
