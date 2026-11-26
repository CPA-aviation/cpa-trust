import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Compass, FileCheck2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { EditorialImage } from "@/components/interior/EditorialImage";
import { EditorialHeroReveal } from "@/components/interior/EditorialHeroReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SANTOSH_ARORA_TRUST } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/initiatives",
  title: "Planned Charitable Activities & Initiatives",
  description:
    "Review upcoming charitable programmes planned by Santosh Arora Trust in women empowerment, education, vocational skills, and health, with honest disclosures.",
  keywords: [
    "Charitable Activities",
    "Planned Initiatives",
    "Women Empowerment",
    "Skill Development",
    "Community Development",
  ],
  ogImage: {
    url: "/images/interior/initiatives-hero.jpg",
    width: 1280,
    height: 954,
    alt: "Community planning and upcoming charitable initiatives — Santosh Arora Trust",
  },
});

export default function InitiativesPage() {
  const { plannedDirections, registration } = SANTOSH_ARORA_TRUST;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Planned Initiatives", path: "/initiatives" },
        ])}
      />
      {/* 1. Pure White Editorial Broadsheet Hero */}
      <section
        aria-labelledby="initiatives-hero-heading"
        className="relative overflow-hidden bg-bg-white text-text-primary"
      >
        <div className="mx-auto max-w-[var(--container-standard)] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <EditorialHeroReveal variant="eyebrow">
                <Eyebrow tone="orange">Planned Initiatives</Eyebrow>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="bottomMask" delay={0.08}>
                <h1
                  id="initiatives-hero-heading"
                  className="text-display mt-5 text-text-primary"
                >
                  From Goals to{" "}
                  <em className="font-medium italic text-brand-forest">
                    Real Plans.
                  </em>
                </h1>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="fromLeft" delay={0.16}>
                <p className="text-lead mt-5 max-w-xl">
                  Santosh Arora Trust is new and still planning its work.
                  Everything on this page is work we hope to do in the future,
                  based on Clause 4 of our Trust Deed. None of it has started
                  yet.
                </p>
              </EditorialHeroReveal>
            </div>

            <div className="lg:col-span-6">
              <EditorialImage
                src="/images/interior/initiatives-hero.jpg"
                alt="Woman educator sharing digital learning resources on a laptop with three young children seated outdoors"
                aspect="4/3"
                direction="scaleMask"
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                imageClassName="object-[55%_25%]"
                caption="We plan to help with learning, support for women, jobs, health and the environment."
              />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="separator-editorial" />
      </section>

      {/* 2. Strict Stage Distinction Strip */}
      <Section surface="cream" spacing="md" separatorBottom>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <MotionReveal variant="fromLeft">
            <div className="border-l-2 border-brand-orange pl-5">
              <div className="flex items-center gap-2.5">
                <Compass
                  className="h-4 w-4 text-text-primary"
                  aria-hidden="true"
                />
                <span className="text-eyebrow text-text-primary">
                  Step 1 · Our Plans
                </span>
              </div>
              <h2 className="text-heading-3 mt-3 text-text-primary">
                These Are Plans Only
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                The six areas below show where the trustees want to start work.
                They are based on Clause 4 of our Trust Deed and our main areas
                on NGO DARPAN ({registration.darpanPrimarySector} and{" "}
                {registration.darpanSecondarySector}). No dates, budgets or
                places have been decided yet.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal variant="fromRight" delay={0.1}>
            <div className="border-l-2 border-brand-forest pl-5">
              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  className="h-4 w-4 text-brand-forest"
                  aria-hidden="true"
                />
                <span className="text-eyebrow text-brand-forest">
                  Step 2 · The Facts Today
                </span>
              </div>
              <h2 className="text-heading-3 mt-3 text-text-primary">
                No Projects Done Yet
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                Our NGO DARPAN profile also shows no projects or activities yet.
                We have not carried out any work on the ground so far, and we
                will never make up activities or numbers.
              </p>
            </div>
          </MotionReveal>
        </div>
      </Section>

      {/* 3. Editorial Index of Six Planned Charitable Directions */}
      <Section
        surface="white"
        spacing="lg"
        ariaLabel="Six planned areas of future charitable work"
      >
        <MotionReveal variant="bottomMask">
          <div className="max-w-3xl">
            <Eyebrow tone="lavender">Our Plans</Eyebrow>
            <h2 className="text-heading-1 mt-4 text-text-primary">
              Six Areas We Plan to Work On
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              Each plan turns a goal from our Trust Deed into a future
              programme. The trustees are still reviewing them.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 divide-y divide-border-warm border-y border-border-warm">
          {plannedDirections.map((track, idx) => (
            <article
              key={track.id}
              id={track.id}
              className="grid gap-6 py-9 lg:grid-cols-12 lg:gap-10 lg:py-11"
            >
              {/* Left Track Header */}
              <MotionReveal variant="fromLeft" delay={idx * 0.04} className="lg:col-span-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-serif text-4xl font-medium italic leading-none text-brand-lavender-deep">
                    {track.number}
                  </span>
                  <span className="rounded-full bg-bg-orange-wash px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-primary ring-1 ring-brand-orange/45">
                    Planned · Not Started
                  </span>
                </div>

                <h3 className="text-heading-2 mt-4 text-text-primary">
                  {track.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-text-subtle">
                  {track.subtitle}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {track.alignedObjectives.map((clause) => (
                    <span
                      key={clause}
                      className="rounded-full bg-bg-sage-wash px-2.5 py-0.5 text-xs font-semibold text-brand-forest"
                    >
                      {clause}
                    </span>
                  ))}
                </div>
              </MotionReveal>

              {/* Right Intended Focus & Scope */}
              <MotionReveal variant="fromRight" delay={idx * 0.04 + 0.06} className="space-y-4 lg:col-span-7">
                <p className="text-base leading-relaxed text-text-secondary sm:text-[17px]">
                  {track.summary}
                </p>

                <div className="border-t border-border-subtle pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                    How We Hope to Help
                  </p>
                  <MotionStagger staggerDelay={0.05} className="mt-3 grid gap-2.5 text-sm text-text-primary/90 sm:grid-cols-2">
                    {track.intendedForms.map((item) => (
                      <MotionStaggerItem key={item} direction="rise">
                        <div className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lime"
                          />
                          <span>{item}</span>
                        </div>
                      </MotionStaggerItem>
                    ))}
                  </MotionStagger>
                </div>
              </MotionReveal>
            </article>
          ))}
        </div>
      </Section>

      {/* 4. Obsidian Governance Readiness Closing Band */}
      <Section surface="forest" spacing="lg">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <MotionReveal variant="fromLeft" className="lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <FileCheck2
                className="h-5 w-5 text-white/80"
                aria-hidden="true"
              />
              <span className="text-eyebrow text-white/80">
                Before Launch
              </span>
            </div>
            <h2 className="text-heading-1 mt-4 text-white">
              Careful Planning Before We Start
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              Our Trust Deed (Clauses 6, 8, 10 and 13) says a programme can only
              start after the trustees approve it. It must follow our no-profit
              rules and be recorded in yearly audited accounts (1 April to 31
              March). We will only share results after the work has really
              happened.
            </p>
          </MotionReveal>

          <MotionReveal variant="fromRight" delay={0.12} className="lg:col-span-5 lg:text-right">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/focus-areas" variant="accent" size="lg">
                <span>See All 10 Goals</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white/12 text-white ring-white/30 hover:bg-white/20 hover:text-white"
              >
                <span>Work With Us</span>
              </ButtonLink>
            </div>
          </MotionReveal>
        </div>
      </Section>
    </>
  );
}
