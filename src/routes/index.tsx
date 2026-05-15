import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowRight, Code2, Smartphone, Palette, Megaphone, PenTool, Film,
  Camera, Printer, Sparkles, Zap, Shield, Rocket, Users, Trophy,
  ChevronRight,
} from "lucide-react";
import { Particles } from "@/components/Particles";
import { Reveal, StaggerContainer, itemVariants } from "@/components/Reveal";
import { SectionHeading, CtaBanner } from "@/components/ServicePage";
import { Testimonials } from "@/components/Testimonials";
import { Card3D } from "@/components/Card3D";
import { FloatingOrbs } from "@/components/FloatingOrbs";
import { Text3D } from "@/components/Text3D";
import { Parallax3D } from "@/components/Parallax3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dark Elite Creations — Cinematic Digital Experiences" },
      { name: "description", content: "Premium creative technology studio building futuristic web, app, design, marketing & production for elite brands." },
      { property: "og:title", content: "Dark Elite Creations — Cinematic Digital Experiences" },
      { property: "og:description", content: "Premium creative technology studio building futuristic digital experiences." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Code2, title: "Website Development", to: "/services/website-development", desc: "Performance-obsessed sites built with modern stacks." },
  { icon: Smartphone, title: "App Development", to: "/services/app-development", desc: "Native-feel iOS, Android & cross-platform apps." },
  { icon: Palette, title: "UI / UX Designing", to: "/services/ui-ux-designing", desc: "Interfaces that feel inevitable and effortless." },
  { icon: Megaphone, title: "Digital Marketing", to: "/services/digital-marketing", desc: "Growth engines fueled by data and storytelling." },
  { icon: PenTool, title: "Graphic Designing", to: "/services/graphic-designing", desc: "Bold identities and visual systems." },
  { icon: Film, title: "2D / 3D Animation", to: "/services/animation", desc: "Cinematic motion that brings ideas to life." },
  { icon: Camera, title: "Production", to: "/services/production", desc: "Photo, video & post — end to end." },
  { icon: Printer, title: "Digital & Offset Print", to: "/services/print", desc: "Premium print finishing at any scale." },
];

const stats = [
  { value: 650, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "+", label: "Global Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 2, suffix: "Y", label: "Years Crafting" },
];

const why = [
  { icon: Rocket, title: "Cinematic Quality", desc: "Every pixel, frame and interaction is treated like a hero shot." },
  { icon: Zap, title: "Velocity Without Compromise", desc: "Senior-only teams move fast — without sacrificing craft." },
  { icon: Shield, title: "Built to Scale", desc: "Architectures that survive growth, traffic and pivots." },
  { icon: Users, title: "Embedded Partnership", desc: "We work as an extension of your team, not a vendor." },
];

const process = [
  { title: "Discover", desc: "We dive deep into your brand, audience, and ambitions." },
  { title: "Define", desc: "Strategy, IA, and the creative thesis that guides every decision." },
  { title: "Design", desc: "High-fidelity systems that look as good as they feel." },
  { title: "Develop", desc: "Production-grade engineering with obsessive QA." },
  { title: "Deploy", desc: "Launch, measure, iterate — together." },
];



const faqs = [
  { q: "What kinds of clients do you work with?", a: "Funded startups, scale-ups, and enterprise teams that care about craft. We're industry-agnostic but specialize in tech, finance, lifestyle, and SaaS." },
  { q: "How long does a typical project take?", a: "Brand sprints: 2–3 weeks. Marketing sites: 4–6 weeks. Full product builds: 8–16 weeks. We'll quote precisely after discovery." },
  { q: "Do you offer ongoing retainers?", a: "Yes — most clients continue with us in a monthly retainer for design, dev, content, or growth." },
  { q: "Where are you based?", a: "Distributed across Karachi, Dubai, and London — we work async with overlap windows for every timezone." },
];

const portfolioPreview = [
  { title: "Helios — Brand & Product", tag: "Web · App", grad: "from-rose-500/20 to-orange-500/10" },
  { title: "Vector AI — Launch Campaign", tag: "Marketing", grad: "from-red-500/20 to-amber-500/10" },
  { title: "Lumen — Design System", tag: "UI/UX", grad: "from-pink-500/20 to-red-600/10" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: undefined,
      onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
    });
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) tween.restart();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); tween.kill(); };
  }, [to]);
  return (
    <span className="font-display text-5xl md:text-6xl font-bold text-gradient">
      <span ref={ref}>0</span>{suffix}
    </span>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <FloatingOrbs />
      <Particles count={50} />
      <motion.div
        aria-hidden
        style={{ y, opacity }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full"
      >
        <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.58 0.24 25 / 0.35), transparent 60%)" }} />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-primary mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          A New Standard for Digital Craft
        </motion.div>

        <Text3D className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
          We design <span className="text-gradient-red glow-text">cinematic</span><br />
          digital experiences.
        </Text3D>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground/90 leading-relaxed"
        >
          Based in <span className="text-foreground font-medium">Belagavi</span>, we're transforming businesses across <span className="text-foreground font-medium">Karnataka and India</span> with cutting-edge digital solutions. From <span className="text-primary/90">intelligent web & mobile apps</span> to <span className="text-primary/90">AI-powered automation</span>, <span className="text-primary/90">strategic SEO</span>, and <span className="text-primary/90">brand storytelling</span>—we architect technology that drives real growth. Whether you're a bold startup or an established enterprise, we turn your vision into powerful digital experiences that captivate, convert, and scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/contact" className="btn-primary">Start a Project <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/portfolio" className="btn-ghost">View Our Work</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2 text-xs font-mono text-muted-foreground"
        >
          <span className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["HELIOS", "VECTOR AI", "LUMEN", "NORTHWIND", "ARCADIA", "OBSIDIAN", "AETHER", "PHOENIX"];
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="mx-12 font-display text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-primary transition-colors">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Intro */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">⏤ The Studio</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl md:text-6xl font-bold leading-tight text-balance">
              A multidisciplinary studio for brands that
              <span className="text-gradient-red"> refuse to be ordinary</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Designers, engineers, filmmakers and strategists working as one team.
              We blend craft with technology to ship work that moves people — and
              metrics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title={<>Eight disciplines. <span className="text-gradient-red">One studio.</span></>} />
          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 perspective-1000">
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants}>
                <Card3D intensity={10}>
                  <Link to={s.to} className="group block h-full glass rounded-2xl p-6 neon-border-hover">
                    <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-5 group-hover:scale-110 transition-transform">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ChevronRight className="h-3 w-3" />
                    </div>
                  </Link>
                </Card3D>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why */}
      <section className="py-32 relative">
        <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-radial)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Dark Elite Creations" title={<>Made for the <span className="text-gradient-red">ambitious</span>.</>} />
          <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 perspective-1000">
            {why.map((w) => (
              <motion.div key={w.title} variants={itemVariants}>
                <Parallax3D speed={0.3}>
                  <Card3D intensity={8} className="glass rounded-2xl p-7 neon-border-hover">
                    <w.icon className="h-7 w-7 text-primary" />
                    <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </Card3D>
                </Parallax3D>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="From spark to launch" />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block" />
            {process.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="text-center md:text-left relative">
                  <div className="mx-auto md:mx-0 grid place-items-center h-12 w-12 rounded-full bg-background border-2 border-primary/40 text-primary font-mono text-sm relative z-10">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeading eyebrow="Selected Work" title="Featured projects" center={false} />
            <Link to="/portfolio" className="hidden md:inline-flex items-center gap-1 text-sm font-mono uppercase tracking-widest text-primary hover:gap-2 transition-all">
              All Work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 perspective-1000">
            {portfolioPreview.map((p) => (
              <motion.div key={p.title} variants={itemVariants}>
                <Card3D intensity={12}>
                  <Link to="/portfolio" className="group block">
                    <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br ${p.grad} glass`}>
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <div className="absolute inset-0 grid place-items-center">
                        <Sparkles className="h-12 w-12 text-primary/60 group-hover:scale-125 group-hover:text-primary transition-all duration-500" />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                        <span className="font-mono text-xs uppercase tracking-widest text-primary">{p.tag}</span>
                        <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                </Card3D>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
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
