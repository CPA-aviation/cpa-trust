import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
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
  path: "/about",
  title: "About the Trust — Social Welfare Organisation in Delhi",
  description:
    "Learn why Santosh Arora Trust was established as an irrevocable public charitable trust in New Delhi, our vision, charitable values, non-discrimination mandate, and Board of Trustees.",
  keywords: [
    "About Santosh Arora Trust",
    "Charitable Trust in Delhi",
    "Social Welfare Organisation",
    "Board of Trustees",
  ],
  ogImage: {
    url: "/images/interior/about-hero.jpg",
    width: 1280,
    height: 853,
    alt: "Community learning and social welfare support — About Santosh Arora Trust",
  },
});

const CORE_VALUES = [
  {
    number: "01",
    title: "Respect for Everyone",
    accent: "bg-brand-lime",
    detail:
      "Our Trust Deed (Clause 4) says we must help everyone equally, whatever their religion, caste or beliefs.",
  },
  {
    number: "02",
    title: "Only for Charity",
    accent: "bg-brand-lavender-deep",
    detail:
      "The founder, trustees, their relatives and large donors can never take a profit or bonus. All money and property must be used only for charity in India.",
  },
  {
    number: "03",
    title: "Decisions Made Together",
    accent: "bg-brand-orange",
    detail:
      "No one person is in control. Trustees decide together at proper meetings, with a two-thirds majority, and our accounts are checked every year.",
  },
  {
    number: "04",
    title: "A Lasting Promise",
    accent: "bg-brand-forest",
    detail:
      "The trust cannot be cancelled (Clause 14). Its money and property will always stay with charity, even if the trust ever closes.",
  },
] as const;

export default function AboutPage() {
  const {
    registration,
    preamblePurpose,
    intendedBeneficiaryScope,
    objectProvisos,
    trustees,
    trusteeGovernanceSummary,
  } = SANTOSH_ARORA_TRUST;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About the Trust", path: "/about" },
        ])}
      />
      {/* 1. Cerulean & White Split Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative overflow-hidden border-b border-white/40 bg-gradient-to-br from-[#2a579c] via-[#3f6fba] to-[#5687d4] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 88% 15%, rgba(255, 255, 255, 0.24) 0%, transparent 65%), radial-gradient(45% 50% at 12% 85%, rgba(255, 255, 255, 0.14) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[var(--container-standard)] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <EditorialHeroReveal variant="eyebrow">
                <span className="text-eyebrow inline-flex items-center gap-2.5 rounded-full bg-white/12 px-4 py-1.5 text-white ring-1 ring-white/25">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-white"
                  />
                  About the Trust
                </span>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="bottomMask" delay={0.08}>
                <h1
                  id="about-hero-heading"
                  className="text-display mt-6 text-white"
                >
                  A Lasting Trust for the{" "}
                  <em className="font-medium italic text-white/85">
                    Public Good.
                  </em>
                </h1>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="fromLeft" delay={0.16}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {preamblePurpose}
                </p>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="rise" delay={0.14}>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/25 pt-6 text-xs text-white/95 sm:text-sm">
                  <span>
                    <strong className="font-semibold text-white">Type:</strong>{" "}
                    {registration.entityType}
                  </span>
                  <span>
                    <strong className="font-semibold text-white">Law:</strong>{" "}
                    {registration.applicableLaw}
                  </span>
                  <span>
                    <strong className="font-semibold text-white">DARPAN:</strong>{" "}
                    {registration.darpanId} ({registration.darpanStatus})
                  </span>
                </div>
              </EditorialHeroReveal>
            </div>

            <div className="lg:col-span-5">
              <EditorialImage
                src="/images/interior/about-hero.jpg"
                alt="Two young schoolgirls seated at a wooden desk reading an illustrated textbook together"
                aspect="4/3"
                direction="fromRight"
                priority
                tone="dark"
                sizes="(max-width: 1024px) 100vw, 42vw"
                imageClassName="object-[48%_28%]"
                caption="Education for girls and support for women are at the heart of our Trust Deed."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Narrative: Why the Trust Was Established */}
      <Section surface="cream" spacing="lg" separatorBottom>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <MotionReveal variant="fromLeft" className="lg:sticky lg:top-28">
              <Eyebrow tone="lavender">In Simple Words</Eyebrow>
              <blockquote className="mt-5 border-l-2 border-brand-orange pl-5 font-serif text-2xl font-medium italic leading-snug text-text-primary sm:text-3xl">
                &ldquo;Set up only for charity, not for profit, to support women
                and help the public.&rdquo;
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-text-subtle">
                Based on our Trust Deed · Preamble &amp; Clause 4
              </p>
            </MotionReveal>
          </div>

          <div className="space-y-6 lg:col-span-8">
            <MotionReveal variant="bottomMask">
              <h2 className="text-heading-1 text-text-primary">
                Why We Started Santosh Arora Trust
              </h2>
            </MotionReveal>

            <MotionReveal variant="fromRight" delay={0.08}>
              <div className="space-y-5 text-base leading-[1.8] text-text-secondary sm:text-[17px]">
                <p>
                  Santosh Arora Trust was started by Mr. Karun Arora, together
                  with trustees Ms. Ridhima Arora, Mr. Vansh Arora and Mr.
                  Manan Arora. It is a public charitable trust, registered at
                  the Sub-Registrar office in Patel Nagar, New Delhi
                  (Registration No.{" "}
                  <strong className="font-medium text-text-primary">
                    {registration.registrationNumber}
                  </strong>
                  ).
                </p>
                <p>
                  The trust was set up to help people across India in ten
                  areas. The most important are support for women, education,
                  job skills, health, legal help, disaster relief and care for
                  the environment.
                </p>
                <p>
                  We are a newly registered trust. Right now we are setting up
                  proper systems, sorting out our paperwork and carefully
                  planning realistic programmes. We do not want to rush or make
                  big claims.
                </p>
              </div>
            </MotionReveal>

            {/* Editorial Inline Fact Strip (No heavy boxed cards) */}
            <MotionStagger className="grid gap-6 border-t border-border-warm pt-7 sm:grid-cols-3">
              <MotionStaggerItem direction="fromLeft">
                <div>
                  <p className="text-eyebrow text-brand-forest">Where We Are</p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                    Just Registered
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-subtle">
                    Setting up and planning our work.
                  </p>
                </div>
              </MotionStaggerItem>
              <MotionStaggerItem direction="rise">
                <div>
                  <p className="text-eyebrow text-brand-lavender-deep">
                    Our Goals
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                    10 Charity Goals
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-subtle">
                    Clause 4(a) to 4(j) of our Trust Deed.
                  </p>
                </div>
              </MotionStaggerItem>
              <MotionStaggerItem direction="fromRight">
                <div>
                  <p className="text-eyebrow text-text-primary">
                    Who We Help
                  </p>
                  <p className="mt-2 font-serif text-2xl font-semibold text-text-primary">
                    All India
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-text-subtle">
                    Used only for charity within India.
                  </p>
                </div>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </div>
      </Section>

      {/* 3. Vision, Mission & Commitment to Broad Social Welfare */}
      <Section surface="white" spacing="lg" separatorBottom>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-6">
            <MotionReveal variant="fromLeft">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-bg-sage-wash text-brand-forest">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </span>
                <Eyebrow tone="lime" withDot={false}>
                  Vision &amp; Mission
                </Eyebrow>
              </div>
              <h2 className="text-heading-2 mt-4 text-text-primary">
                Respect, Fair Chances and Honesty
              </h2>
            </MotionReveal>

            <MotionReveal variant="fromLeft" delay={0.08}>
              <div className="space-y-6 border-t border-border-subtle pt-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-brand-forest">
                    Vision
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary">
                    A society where women feel safe, confident and able to earn;
                    where children and young people can go to school and learn
                    useful skills; and where families in need get healthcare,
                    help and respect.
                  </p>
                </div>

                <div className="border-t border-border-subtle pt-6">
                  <h3 className="font-serif text-2xl font-semibold text-brand-lavender-deep">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary">
                    To plan and run honest, non-profit programmes based on our
                    Trust Deed. We will focus first on support for women,
                    basic education, job skills, health awareness and caring
                    for the community.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>

          <div className="space-y-8 lg:col-span-6">
            <EditorialImage
              src="/images/home/intro.jpg"
              alt="Parent sharing an open book with a young child seated together at a sunlit wooden table"
              aspect="4/3"
              direction="liquidBottom"
              sizes="(max-width: 1024px) 100vw, 48vw"
              caption="We want to help with education, support families and build strong communities."
            />

            <MotionReveal variant="fromRight" delay={0.12}>
              <div className="rounded-[var(--radius-panel)] border border-border-warm bg-bg-cream-soft p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <HeartHandshake
                    className="h-5 w-5 text-brand-forest"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-xl font-semibold text-text-primary">
                    Who We Help &amp; Our Rules
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {intendedBeneficiaryScope}
                </p>
                <ul className="mt-4 space-y-2.5 border-t border-border-warm pt-4 text-xs leading-relaxed text-text-secondary sm:text-sm">
                  {objectProvisos.map((proviso, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                      />
                      <span>{proviso}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Section>

      {/* 4. Core Values Editorial Ledger (No repeated card grids) */}
      <Section surface="lavender" spacing="lg" separatorBottom>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MotionReveal variant="fromLeft">
              <Eyebrow tone="lavender">Our Values</Eyebrow>
              <h2 className="text-heading-1 mt-4 text-text-primary">
                Values Written Into Our Trust Deed
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                These values are not just words. They are rules we must follow,
                written in Clauses 4, 5, 6, 8 and 14 of our Trust Deed.
              </p>
            </MotionReveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-brand-lavender/45 border-y border-brand-lavender/45">
              {CORE_VALUES.map((value, idx) => (
                <MotionReveal key={value.number} variant="fromRight" delay={idx * 0.06}>
                  <div className="grid gap-3 py-6 transition-transform duration-300 hover:translate-x-1.5 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                    <div className="flex items-center gap-3 sm:col-span-5">
                      <span
                        aria-hidden="true"
                        className={`h-2.5 w-2.5 rounded-full ${value.accent}`}
                      />
                      <span className="font-serif text-2xl font-medium italic text-brand-lavender-deep">
                        {value.number}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-text-primary sm:text-2xl">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary sm:col-span-7 sm:text-[15px]">
                      {value.detail}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Founding Board of Trustees Roster & Internal Navigation */}
      <Section surface="cream" spacing="lg">
        <div className="flex flex-col justify-between gap-6 border-b border-border-warm pb-8 md:flex-row md:items-end">
          <MotionReveal variant="fromLeft">
            <Eyebrow tone="forest">Our People</Eyebrow>
            <h2 className="text-heading-1 mt-4 text-text-primary">
              Our Trustees
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              The trust is run by four trustees who work together for the
              public good. Clause 5 allows{" "}
              {trusteeGovernanceSummary.minimumTrustees} to{" "}
              {trusteeGovernanceSummary.maximumTrustees} trustees. We keep their
              personal details private.
            </p>
          </MotionReveal>

          <MotionReveal variant="fromRight" delay={0.1}>
            <Link
              href="/governance"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-forest underline decoration-brand-lime underline-offset-4 transition-colors hover:text-text-primary"
            >
              <span>How We Are Run</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </MotionReveal>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustees.map((trustee, index) => {
            const topBorders = [
              "border-brand-forest",
              "border-brand-lavender-deep",
              "border-brand-orange",
              "border-brand-lime",
            ];
            return (
              <MotionReveal
                key={trustee.fullName}
                variant={index % 2 === 0 ? "softScale" : "rise"}
                delay={index * 0.06}
              >
                <div
                  className={`group border-t-2 ${topBorders[index % topBorders.length]} pt-5`}
                >
                  <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-bg-white ring-1 ring-border-warm">
                    <Image
                      src={trustee.photo}
                      alt={`Portrait of ${trustee.fullName}, ${trustee.deedRole} of Santosh Arora Trust`}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                      className="object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-text-primary">
                    {trustee.fullName}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest">
                    {trustee.deedRole}
                  </p>
                  <p className="mt-0.5 text-xs text-text-subtle">
                    DARPAN: {trustee.darpanDesignation}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {trustee.summary}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Bottom Internal Navigation */}
        <MotionReveal variant="softScale" delay={0.14}>
          <div className="mt-14 flex flex-col justify-between gap-6 rounded-[var(--radius-panel)] border border-border-warm bg-bg-white p-6 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-eyebrow text-text-subtle">Keep Reading</p>
              <p className="mt-1 font-serif text-2xl font-semibold text-text-primary">
                See Our Goals and Plans
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/focus-areas" variant="primary" size="md">
                <span>Focus Areas</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/initiatives" variant="secondary" size="md">
                <span>Planned Initiatives</span>
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost" size="md">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Contact Us</span>
              </ButtonLink>
            </div>
          </div>
        </MotionReveal>
      </Section>
    </>
  );
}
