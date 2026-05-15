import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Reveal, StaggerContainer, itemVariants } from "./Reveal";
import { motion } from "framer-motion";

export type Feature = { icon: ReactNode; title: string; desc: string };
export type Step = { title: string; desc: string };
export type Faq = { q: string; a: string };

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  intro,
  features,
  process,
  tech,
  faqs,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  intro: string;
  features: Feature[];
  process: Step[];
  tech: string[];
  faqs: Faq[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <Link to="/contact" className="btn-primary">Get a Quote <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/portfolio" className="btn-ghost">See Work</Link>
      </PageHero>

      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">{intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Capabilities" title="What we build" />
          <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} variants={itemVariants} className="group glass rounded-2xl p-7 neon-border-hover">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-5">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="How we deliver" />
          <div className="mt-14 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
            <div className="space-y-10 md:space-y-16">
              {process.map((s, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className={`grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                      <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
                        <span>0{i + 1}</span>
                        <span className="h-px w-8 bg-primary/50" />
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
                    </div>
                    <div className="glass rounded-2xl p-6 neon-border-hover">
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Stack" title="Tools & Technologies" />
          <Reveal>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {tech.map((t) => (
                <span key={t} className="glass rounded-full px-5 py-2.5 text-sm font-mono text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <details className="group glass rounded-xl p-5 cursor-pointer">
                  <summary className="flex items-center justify-between font-medium list-none">
                    <span>{f.q}</span>
                    <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

export function SectionHeading({ eyebrow, title, center = true }: { eyebrow?: string; title: ReactNode; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {eyebrow && (
        <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-primary mb-4">
          ⏤ {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </Reveal>
  );
}

export function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center neon-border">
            <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-radial)" }} />
            <div className="relative">
              <Sparkles className="mx-auto h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-3xl md:text-5xl font-bold">
                Ready to build something <span className="text-gradient-red">unforgettable</span>?
              </h3>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Tell us about your idea — we'll respond within 24 hours with a tailored plan.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-primary">Start a Project <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/portfolio" className="btn-ghost">Explore Portfolio</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
