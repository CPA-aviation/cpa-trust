import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { EditorialImage } from "@/components/interior/EditorialImage";
import { EditorialHeroReveal } from "@/components/interior/EditorialHeroReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { SANTOSH_ARORA_TRUST } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/governance",
  title: "Governance, Registration & NGO DARPAN Disclosures",
  description:
    "Registration No. 2026/22/IV/1415, NGO DARPAN DL/2026/1252835, Board of Trustees, audit rules, and statutory disclosures for Santosh Arora Trust.",
  keywords: [
    "Santosh Arora Trust Governance",
    "Charitable Trust in Delhi",
    "NGO DARPAN DL/2026/1252835",
    "Indian Trusts Act 1882",
  ],
  ogImage: {
    url: "/images/interior/governance-hero.jpg",
    width: 1920,
    height: 806,
    alt: "Institutional governance and verified registration records — Santosh Arora Trust",
  },
});

export default function GovernancePage() {
  const {
    registration,
    trustees,
    trusteeGovernanceSummary,
    governanceProvisions,
    regulatoryStatus,
    verificationConflicts,
  } = SANTOSH_ARORA_TRUST;

  const meetingAndBoardRules = governanceProvisions.filter(
    (p) => p.category === "board" || p.category === "meetings"
  );
  const financialAndContinuityRules = governanceProvisions.filter(
    (p) =>
      p.category === "financial" ||
      p.category === "accountability" ||
      p.category === "continuity"
  );

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Governance & Registration", path: "/governance" },
        ])}
      />
      {/* 1. Cerulean & White Institutional Hero */}
      <section
        aria-labelledby="governance-hero-heading"
        className="relative overflow-hidden border-b border-white/40 bg-gradient-to-br from-[#2a579c] via-[#3f6fba] to-[#5687d4] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 86% 18%, rgba(255, 255, 255, 0.24), transparent 65%), radial-gradient(40% 50% at 15% 88%, rgba(255, 255, 255, 0.14), transparent 65%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[var(--container-standard)] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <EditorialHeroReveal variant="eyebrow">
                <span className="text-eyebrow inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-white ring-1 ring-white/25">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-white"
                  />
                  Governance &amp; Registration
                </span>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="bottomMask" delay={0.08}>
                <h1
                  id="governance-hero-heading"
                  className="text-display mt-6 text-white"
                >
                  Open, Clear &amp;{" "}
                  <em className="font-medium italic text-white/85">
                    Honest.
                  </em>
                </h1>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="fromLeft" delay={0.16}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Our registration details, NGO DARPAN listing, how our trustees
                  make decisions and how our money is checked, exactly as written
                  in our Trust Deed and registration certificate.
                </p>
              </EditorialHeroReveal>

              <EditorialHeroReveal variant="rise" delay={0.14}>
                <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-white sm:text-sm">
                  <span className="rounded-full bg-white/16 px-4 py-1.5 ring-1 ring-white/35">
                    Reg. No. {registration.registrationNumber}
                  </span>
                  <span className="rounded-full bg-white/16 px-4 py-1.5 ring-1 ring-white/35">
                    DARPAN: {registration.darpanId} ({registration.darpanStatus})
                  </span>
                </div>
              </EditorialHeroReveal>
            </div>

            <div className="lg:col-span-6">
              <EditorialImage
                src="/images/interior/governance-hero.jpg"
                alt="Historic sandstone institutional architecture along Raisina Hill in New Delhi representing legal registration jurisdiction"
                aspect="16/10"
                direction="fromRight"
                priority
                tone="dark"
                sizes="(max-width: 1024px) 100vw, 48vw"
                caption="Registered at the Sub-Registrar office in Patel Nagar, New Delhi (Book IV)."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Registration & NGO DARPAN Ledger + Pending Clarifications */}
      <Section surface="white" spacing="lg" separatorBottom>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Official Ledger */}
          <div className="lg:col-span-7">
            <MotionReveal variant="fromLeft">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-bg-sage-wash text-brand-forest">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <Eyebrow tone="forest" withDot={false}>
                  Official Record
                </Eyebrow>
              </div>
              <h2 className="text-heading-2 mt-4 text-text-primary">
                Our Registration Details
              </h2>
            </MotionReveal>

            <MotionReveal variant="fromLeft" delay={0.08}>
              <dl className="mt-8 divide-y divide-border-subtle border-y border-border-subtle text-sm sm:text-[15px]">
                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    Official Trust Name
                  </dt>
                  <dd className="font-medium text-text-primary sm:col-span-7">
                    {registration.legalName}
                  </dd>
                </div>

                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    Type of Trust
                  </dt>
                  <dd className="font-medium text-text-primary sm:col-span-7">
                    {registration.entityType}
                  </dd>
                </div>

                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    Law It Follows
                  </dt>
                  <dd className="font-medium text-text-primary sm:col-span-7">
                    {registration.applicableLaw}
                  </dd>
                </div>

                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    Registration Number
                  </dt>
                  <dd className="font-medium text-text-primary sm:col-span-7">
                    {registration.registrationNumber} (Book{" "}
                    {registration.bookNumber}, Volume{" "}
                    {registration.volumeNumber}, Pages {registration.pageRange})
                  </dd>
                </div>

                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    Registered By
                  </dt>
                  <dd className="font-medium text-text-primary sm:col-span-7">
                    {registration.registeringAuthority}
                  </dd>
                </div>

                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    NGO DARPAN ID &amp; Status
                  </dt>
                  <dd className="font-semibold text-brand-forest sm:col-span-7">
                    {registration.darpanId} — {registration.darpanStatus}
                  </dd>
                </div>

                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    Our Areas on DARPAN
                  </dt>
                  <dd className="text-text-primary sm:col-span-7">
                    Main: {registration.darpanPrimarySector}; Second:{" "}
                    {registration.darpanSecondarySector}
                  </dd>
                </div>

                <div className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                  <dt className="font-semibold text-text-subtle sm:col-span-5">
                    Location &amp; Where Money Is Used
                  </dt>
                  <dd className="text-text-primary sm:col-span-7">
                    {registration.jurisdiction} (money and property used only
                    in {registration.charitableAreaOfOperation})
                  </dd>
                </div>
              </dl>
            </MotionReveal>
          </div>

          {/* Pending Clarification Ledger (Unpublished Disputed Fields) */}
          <div className="lg:col-span-5">
            <MotionReveal variant="fromRight" delay={0.1}>
              <div className="rounded-[var(--radius-panel)] border border-brand-orange/45 bg-bg-orange-wash/70 p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-eyebrow text-text-primary">
                      Still Being Checked
                    </p>
                    <h3 className="text-heading-3 mt-2 text-text-primary">
                      Details Not Shown Yet
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-primary/85">
                  A few details are written slightly differently in our
                  documents. We will not show them until the trustees confirm the
                  correct version:
                </p>

                <ul className="mt-5 space-y-3 border-t border-brand-orange/30 pt-4 text-xs leading-relaxed text-text-primary/90 sm:text-sm">
                  {verificationConflicts.map((conflict) => (
                    <li key={conflict.field} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-forest"
                      />
                      <span>
                        <strong>{conflict.field}:</strong>{" "}
                        {conflict.publicDisplayPolicy}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Section>

      {/* 3. Board of Trustees & Clause 5 Governance Rules */}
      <Section surface="cream" spacing="lg" separatorBottom>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <MotionReveal variant="fromLeft">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-bg-white text-brand-forest ring-1 ring-border-warm">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </span>
                <Eyebrow tone="lime" withDot={false}>
                  Clause 5 · Trustees
                </Eyebrow>
              </div>
              <h2 className="text-heading-2 mt-4 text-text-primary">
                Our Trustees &amp; Their Rules
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                Our Trust Deed says there must always be between{" "}
                <strong className="font-medium text-text-primary">
                  {trusteeGovernanceSummary.minimumTrustees} and{" "}
                  {trusteeGovernanceSummary.maximumTrustees} trustees
                </strong>
                . If there are fewer than three, a new trustee must be added
                within {trusteeGovernanceSummary.vacancyFillDays} days.
              </p>

              <dl className="mt-6 space-y-4 border-t border-border-warm pt-5 text-sm">
                <div>
                  <dt className="font-semibold text-text-primary">
                    Adding a Trustee
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {trusteeGovernanceSummary.newTrusteeVotingRule}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-primary">
                    Removing a Trustee
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {trusteeGovernanceSummary.removalVotingRule}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-text-primary">
                    Day-to-Day Leader
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {trusteeGovernanceSummary.chairpersonProvision}
                  </dd>
                </div>
              </dl>
            </MotionReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-border-warm border-y border-border-warm bg-bg-white px-6 sm:px-8">
              {trustees.map((trustee, idx) => (
                <MotionReveal key={trustee.fullName} variant="fromRight" delay={idx * 0.06}>
                  <div className="grid gap-4 py-6 sm:grid-cols-12 sm:items-center sm:gap-5">
                    <div className="flex items-center gap-4 sm:col-span-6">
                      <div className="relative aspect-[3/4] w-20 shrink-0 overflow-hidden rounded-xl bg-bg-cream ring-1 ring-border-warm">
                        <Image
                          src={trustee.photo}
                          alt={`Portrait of ${trustee.fullName}, ${trustee.deedRole}`}
                          fill
                          sizes="80px"
                          className="object-cover object-[50%_15%]"
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-text-primary">
                          {trustee.fullName}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-forest">
                          {trustee.deedRole}
                        </p>
                        <p className="mt-0.5 text-xs text-text-subtle">
                          DARPAN: {trustee.darpanDesignation}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary sm:col-span-6">
                      {trustee.summary}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-text-subtle">
              To protect privacy, we do not show trustees&apos; PAN, Aadhaar,
              dates of birth, mobile numbers or home addresses.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Board Meetings, Decision-Making, Financial Management & Audit */}
      <Section surface="white" spacing="lg" separatorBottom>
        <MotionReveal variant="bottomMask">
          <div className="max-w-3xl">
            <Eyebrow tone="orange">Clauses 5–15 · Our Rules</Eyebrow>
            <h2 className="text-heading-1 mt-4 text-text-primary">
              Meetings, Money &amp; Yearly Audit
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              The main rules in our Trust Deed about making decisions, keeping
              accounts and looking after money.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Left Chapter: Board & Meeting Rules */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-border-warm pb-4">
              <Scale className="h-5 w-5 text-brand-lavender-deep" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-text-primary">
                Trustees &amp; Meetings
              </h3>
            </div>

            <div className="space-y-6">
              {meetingAndBoardRules.map((item, idx) => (
                <MotionReveal key={item.id} variant="fromLeft" delay={idx * 0.06}>
                  <div className="border-l-2 border-brand-lavender pl-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-lavender-deep">
                        {item.clauseRef}
                      </span>
                    </div>
                    <h4 className="mt-1.5 font-serif text-xl font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-[15px]">
                      {item.summary}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>

          {/* Right Chapter: Financial Management, Accounts & Audit */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 border-b border-border-warm pb-4">
              <Landmark className="h-5 w-5 text-brand-forest" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-text-primary">
                Money, Audit &amp; the Future
              </h3>
            </div>

            <div className="space-y-6">
              {financialAndContinuityRules.map((item, idx) => (
                <MotionReveal key={item.id} variant="fromRight" delay={idx * 0.06}>
                  <div className="border-l-2 border-brand-lime pl-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-forest">
                        {item.clauseRef}
                      </span>
                    </div>
                    <h4 className="mt-1.5 font-serif text-xl font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-[15px]">
                      {item.summary}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Regulatory & Tax Status Disclosure */}
      <Section surface="lavender" spacing="md">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <MotionReveal variant="fromLeft" className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <FileCheck2
                className="h-5 w-5 text-brand-lavender-deep"
                aria-hidden="true"
              />
              <Eyebrow tone="lavender" withDot={false}>
                Tax &amp; Legal Status
              </Eyebrow>
            </div>
            <h2 className="text-heading-2 mt-4 text-text-primary">
              Our FCRA, 12A &amp; 80G Status
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-primary/85 sm:text-base">
              {regulatoryStatus.disclosureNote}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
              {regulatoryStatus.fcraClauseNote}
            </p>
          </MotionReveal>

          <MotionReveal variant="fromRight" delay={0.1} className="lg:col-span-4">
            <div className="space-y-3 rounded-[var(--radius-card)] bg-bg-white p-5 shadow-[var(--shadow-soft)] ring-1 ring-brand-lavender/45">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-text-primary">Foreign Donations (FCRA)</span>
                <span className="rounded-full bg-bg-cream px-3 py-0.5 text-xs font-semibold text-text-primary">
                  {regulatoryStatus.darpanFcraStatus} (DARPAN)
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-border-subtle pt-3 text-sm">
                <span className="font-medium text-text-primary">
                  12A / 80G Tax Certificates
                </span>
                <span className="rounded-full bg-bg-cream px-3 py-0.5 text-xs font-semibold text-text-subtle">
                  Not Held Yet
                </span>
              </div>
              <div className="border-t border-border-subtle pt-3">
                <ButtonLink href="/contact" variant="secondary" size="sm" className="w-full">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Ask Us a Question</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </ButtonLink>
              </div>
            </div>
          </MotionReveal>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 border-t border-brand-lavender/40 pt-6 text-sm font-medium text-brand-forest">
          <Link href="/about" className="underline decoration-brand-lime underline-offset-4 hover:text-text-primary">
            Read About the Trust
          </Link>
          <Link href="/focus-areas" className="underline decoration-brand-lime underline-offset-4 hover:text-text-primary">
            See Our Goals
          </Link>
          <Link href="/impact" className="underline decoration-brand-lime underline-offset-4 hover:text-text-primary">
            Vision
          </Link>
        </div>
      </Section>
    </>
  );
}
