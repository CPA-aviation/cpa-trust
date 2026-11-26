import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck2,
  HandHeart,
  Landmark,
  Lock,
  Scale,
  Users,
} from "lucide-react";
import { SANTOSH_ARORA_TRUST } from "@/data/trust";
import { HOME_FOCUS_AREAS } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
  ParallaxMedia,
  SectionDividerReveal,
  TextReveal,
} from "@/components/ui/MotionReveal";
import { LiquidReveal } from "@/components/ui/LiquidReveal";
import { EditorialImage } from "@/components/interior/EditorialImage";
import { FounderSection } from "@/components/home/FounderSection";
import { HeroAtelier } from "@/components/home/HeroAtelier";
import { ElegantContactDetails } from "@/components/contact/ElegantContactDetails";

const { registration, plannedInitiatives } = SANTOSH_ARORA_TRUST;

const PROMISES = [
  {
    icon: Lock,
    title: "No personal profit",
    text: "Every rupee goes to charity. Trustees and their families cannot take any profit from the trust.",
    clause: "Clause 8",
  },
  {
    icon: FileCheck2,
    title: "Checked every year",
    text: "We keep clear accounts in the trust's own name, and an auditor checks them every year.",
    clause: "Clauses 10, 11 & 13",
  },
  {
    icon: Users,
    title: "Decisions made together",
    text: "No one person decides alone. Big decisions need at least two-thirds of the trustees to agree.",
    clause: "Clause 6",
  },
  {
    icon: Scale,
    title: "Charity, for good",
    text: "The trust cannot be cancelled. If it ever closes, what is left goes only to another charity.",
    clause: "Clauses 14 & 15",
  },
] as const;

export function TrustHomeExperience() {
  const [mainArea, ...otherAreas] = HOME_FOCUS_AREAS;

  return (
    <div className="overflow-x-clip">
      {/* ================= HERO ATELIER ================= */}
      <HeroAtelier />

      {/* ================= FOUNDER TRIBUTE ================= */}
      <FounderSection />

      {/* ================= WHO WE ARE ================= */}
      <section
        aria-labelledby="home-about-heading"
        className="ambient-field bg-bg-cream py-20 sm:py-28"
      >
        <div
          aria-hidden="true"
          className="ambient-orb ambient-orb-lavender -left-24 top-12 h-80 w-80"
        />
        <div
          aria-hidden="true"
          className="ambient-orb ambient-orb-lime -right-24 bottom-12 h-72 w-72"
        />
        <Container size="wide" className="relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <ParallaxMedia offset={12} className="lg:col-span-5">
              <EditorialImage
                src="/images/home/intro.jpg"
                alt="An adult reading a book with a young child at a wooden table"
                aspect="4/5"
                direction="fromRight"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </ParallaxMedia>

            <div className="lg:col-span-7">
              <MotionReveal variant="eyebrow">
                <Eyebrow tone="forest">Who We Are</Eyebrow>
              </MotionReveal>
              <TextReveal delay={0.05}>
                <h2
                  id="home-about-heading"
                  className="text-heading-1 mt-5 text-brand-forest"
                >
                  A trust set up only to do good.
                </h2>
              </TextReveal>

              <MotionReveal variant="fromLeft" delay={0.08}>
                <blockquote className="mt-8 border-l-4 border-brand-orange pl-6 font-serif text-2xl font-medium italic leading-snug text-text-primary sm:text-[1.75rem]">
                  “{SANTOSH_ARORA_TRUST.preamblePurpose}”
                </blockquote>
              </MotionReveal>

              <MotionReveal variant="fromLeft" delay={0.14}>
                <p className="mt-7 text-lg leading-relaxed text-text-secondary">
                  {SANTOSH_ARORA_TRUST.intendedBeneficiaryScope}
                </p>
              </MotionReveal>

              <MotionReveal variant="fromRight" delay={0.14}>
                <Link
                  href="/about"
                  className="group mt-6 inline-flex min-h-[44px] items-center gap-2 py-2 font-semibold text-brand-forest underline decoration-brand-orange decoration-2 underline-offset-[6px] transition-colors hover:text-brand-orange"
                >
                  Read our story
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </MotionReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section
        aria-labelledby="home-focus-heading"
        className="ambient-field bg-bg-cream-soft py-20 sm:py-28"
      >
        <div
          aria-hidden="true"
          className="ambient-orb ambient-orb-orange right-10 top-8 h-80 w-80"
        />
        <Container size="wide" className="relative z-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <MotionReveal variant="fromLeft" className="max-w-2xl">
              <Eyebrow tone="orange">What We Focus On</Eyebrow>
              <TextReveal delay={0.05}>
                <h2
                  id="home-focus-heading"
                  className="text-heading-1 mt-5 text-brand-forest"
                >
                  Six causes close to our heart.
                </h2>
              </TextReveal>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                These come straight from the goals in our Trust Deed. We have
                not started work on the ground yet. We are planning each one
                carefully.
              </p>
            </MotionReveal>
            <MotionReveal variant="fromRight" delay={0.1}>
              <ButtonLink href="/focus-areas" variant="secondary">
                See All Areas
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </MotionReveal>
          </div>

          <MotionStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <MotionStaggerItem direction="fromLeft" className="sm:col-span-2 lg:row-span-2">
              <FocusTile area={mainArea} featured />
            </MotionStaggerItem>
            {otherAreas.map((area, idx) => (
              <MotionStaggerItem
                key={area.id}
                direction={
                  idx % 3 === 0 ? "fromRight" : idx % 3 === 1 ? "rise" : "softScale"
                }
              >
                <FocusTile area={area} />
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </Container>
      </section>

      {/* ================= OUR PROMISE ================= */}
      <section
        aria-labelledby="home-promise-heading"
        className="relative overflow-hidden border-y border-white/45 bg-gradient-to-br from-[#2a579c] via-[#4070bd] to-[#5888d4] py-20 text-white sm:py-28"
      >
        <Container size="wide" className="relative">
          <div className="grid gap-12 lg:grid-cols-12">
            <MotionReveal variant="fromLeft" className="lg:col-span-4">
              <span className="text-eyebrow inline-flex items-center gap-2 rounded-full bg-white/18 px-3.5 py-1.5 text-white ring-1 ring-white/40">
                <HandHeart className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                Our Promise
              </span>
              <h2
                id="home-promise-heading"
                className="text-heading-1 mt-5 text-white"
              >
                Trust is earned. Here is how we keep it.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/88">
                These rules are written into our registered Trust Deed. They
                cannot be quietly changed.
              </p>
              <Link
                href="/governance"
                className="group mt-6 inline-flex min-h-[44px] items-center gap-2 py-2 font-semibold text-white underline decoration-white/70 decoration-2 underline-offset-[6px] hover:text-white/85"
              >
                See how the trust is run
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </MotionReveal>

            <MotionStagger className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {PROMISES.map(({ icon: Icon, title, text, clause }, idx) => (
                <MotionStaggerItem
                  key={title}
                  direction={idx % 2 === 0 ? "fromLeft" : "fromRight"}
                >
                  <div className="h-full rounded-2xl bg-white/14 p-7 ring-1 ring-white/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/22 hover:ring-white/60">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-[#184385]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-serif text-2xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-white/88">{text}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                      Trust Deed · {clause}
                    </p>
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </Container>
      </section>

      {/* ================= PLANNED PROGRAMMES ================= */}
      <section aria-labelledby="home-plans-heading" className="bg-bg-cream py-20 sm:py-28">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <MotionReveal variant="fromLeft" className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionDividerReveal className="mb-8" />
                <Eyebrow tone="forest">What Comes Next</Eyebrow>
                <TextReveal delay={0.05}>
                  <h2
                    id="home-plans-heading"
                    className="text-heading-1 mt-5 text-brand-forest"
                  >
                    Our first programmes.
                  </h2>
                </TextReveal>
                <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                  We are a new trust, so we are taking our time to plan these
                  well before we begin. We will only show work as done once it
                  has really happened.
                </p>
                <ButtonLink href="/initiatives" className="mt-8">
                  See All Our Plans
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </div>
            </MotionReveal>

            <MotionStagger className="lg:col-span-8">
              <ol className="space-y-4">
                {plannedInitiatives.map((plan, idx) => (
                  <MotionStaggerItem
                    key={plan.id}
                    direction={idx % 2 === 0 ? "fromRight" : "softScale"}
                  >
                    <li className="group grid gap-4 rounded-2xl bg-bg-white p-6 ring-1 ring-border-warm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-[#77a2e2] sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:p-8">
                      <span className="font-serif text-5xl font-semibold italic text-brand-orange">
                        {plan.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-brand-forest">
                          {plan.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-text-secondary">
                          {plan.summary}
                        </p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#edf4fd] px-3 py-1 text-xs font-semibold text-[#184385] ring-1 ring-[#77a2e2]/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2457a6]" aria-hidden="true" />
                        In planning
                      </span>
                    </li>
                  </MotionStaggerItem>
                ))}
              </ol>
            </MotionStagger>
          </div>
        </Container>
      </section>

      {/* ================= SHARED CARE SHOWCASE ================= */}
      <section aria-labelledby="home-care-heading" className="border-t border-white/25 bg-bg-cream pt-16 pb-8 sm:pt-24 sm:pb-10">
        <Container size="wide">
          <div className="grid items-center gap-8 rounded-[var(--radius-panel)] bg-bg-white p-6 ring-1 ring-white sm:p-10 lg:grid-cols-12 lg:gap-12">
            <MotionReveal variant="fromLeft" className="lg:col-span-5">
              <ParallaxMedia offset={24}>
                <div
                  className="group relative aspect-[3/2] w-full overflow-hidden rounded-[var(--radius-media)] border border-[#d7e5fb] bg-[#edf4fd]"
                >
                  <LiquidReveal duration={1.45} replay>
                    <Image
                      src="/images/home/hero-india.jpg"
                      alt="Women and children learning together in an Indian community classroom"
                      fill
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-[50%_30%] transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                  </LiquidReveal>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-16deg] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[120%] motion-reduce:hidden"
                  />
                </div>
              </ParallaxMedia>
            </MotionReveal>

            <MotionReveal variant="fromRight" delay={0.08} className="lg:col-span-7">
              <Eyebrow tone="lime">Learning &amp; Community</Eyebrow>
              <h2
                id="home-care-heading"
                className="text-heading-1 mt-4 text-[#0d2140]"
              >
                Open education and support in the heart of our communities.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#1a3560]">
                Guided by our registered Trust Deed, our goal is simple: open,
                non-profit support for children&apos;s education, women&apos;s
                dignity, nutrition, and compassionate care — welcoming people
                without distinction of background.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/focus-areas" variant="primary">
                  Explore Our Focus Areas
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/about" variant="secondary">
                  About the Trust
                </ButtonLink>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      {/* ================= OFFICIAL RECORD + CTA ================= */}
      <section aria-labelledby="home-cta-heading" className="bg-bg-cream py-20 sm:py-28">
        <Container size="wide">
          <div className="grid gap-6 lg:grid-cols-12">
            <MotionReveal variant="fromLeft" className="lg:col-span-5">
              <div className="h-full rounded-[var(--radius-panel)] bg-bg-white p-8 ring-1 ring-border-warm sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-bg-sage-wash text-brand-forest">
                    <Landmark className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-brand-forest">
                    Our official record
                  </h2>
                </div>

                <dl className="mt-6 divide-y divide-border-warm text-sm">
                  {[
                    ["Registration No.", registration.registrationNumber],
                    ["NGO DARPAN ID", `${registration.darpanId} (${registration.darpanStatus})`],
                    ["Registered under", registration.applicableLaw],
                    ["Type", registration.entityType],
                    ["Area", registration.jurisdiction],
                  ].map(([term, detail]) => (
                    <div key={term} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                      <dt className="text-text-secondary">{term}</dt>
                      <dd className="font-semibold text-text-primary">{detail}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href="/governance"
                  className="group mt-4 inline-flex min-h-[44px] items-center gap-2 py-2 text-sm font-semibold text-brand-forest underline decoration-brand-orange underline-offset-4 hover:text-brand-orange"
                >
                  View all registration details
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal variant="fromRight" delay={0.08} className="lg:col-span-7">
              <div className="relative h-full overflow-hidden rounded-[var(--radius-panel)] bg-gradient-to-br from-[#2a579c] via-[#4070bd] to-[#5888d4] p-8 text-white ring-1 ring-white/45 sm:p-12">
                <div className="relative flex h-full flex-col justify-center">
                  <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-white ring-1 ring-white/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                    Get Involved
                  </span>
                  <h2
                    id="home-cta-heading"
                    className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl"
                  >
                    Start a conversation{" "}
                    <em className="font-medium italic text-white/90">
                      with us.
                    </em>
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                    Want to help, work with us or ask a question? We would love
                    to hear from you.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink href="/contact" variant="accent" size="lg">
                      Get in Touch
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                  </div>
                  <div className="mt-6 max-w-xl">
                    <ElegantContactDetails tone="forest" />
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

function FocusTile({
  area,
  featured = false,
}: {
  area: (typeof HOME_FOCUS_AREAS)[number];
  featured?: boolean;
}) {
  return (
    <Link
      href={`/focus-areas#${area.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white ring-1 ring-white/90 transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:ring-[#184385] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#184385] focus-visible:ring-offset-2 focus-visible:ring-offset-[#77a2e2]"
    >
      <div
        className={`relative w-full shrink-0 overflow-hidden bg-[#edf4fd] ${
          featured ? "min-h-[16rem] flex-1" : "aspect-[16/10]"
        }`}
      >
        <LiquidReveal duration={1.35} replay>
          <Image
            src={area.imageSrc}
            alt={area.imageAlt}
            fill
            quality={90}
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.10]"
          />
        </LiquidReveal>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent transition-transform duration-900 ease-out group-hover:translate-x-[125%] motion-reduce:hidden"
        />
        {featured ? (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0d2140] ring-1 ring-[#77a2e2]/35 transition-transform duration-300 group-hover:translate-x-1">
            Our main goal
          </span>
        ) : null}
      </div>

      <div className={featured ? "p-7 sm:p-8" : "flex flex-1 flex-col p-5 sm:p-6"}>
        <h3
          className={`font-serif font-semibold text-[#0d2140] transition-transform duration-300 ease-out group-hover:translate-x-2 ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {area.title}
        </h3>
        <p
          className={`mt-2 leading-relaxed text-[#1a3560] ${
            featured ? "max-w-lg text-base" : "line-clamp-2 text-sm"
          }`}
        >
          {area.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#184385]">
          Learn more
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:translate-x-2"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
