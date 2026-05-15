import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Heart, Lightbulb, Target, Users2, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerContainer, itemVariants } from "@/components/Reveal";
import { CtaBanner, SectionHeading } from "@/components/ServicePage";

// Import client logos
import balaji1 from "../../clients/balaji1.png";
import companyLogo from "../../clients/company_logo_Png.png";
import finalLogo from "../../clients/Final-Logo.png";
import layer1 from "../../clients/Layer-1.png";
import new2 from "../../clients/New-2.png";
import new7 from "../../clients/New-7.png";
import newProject1 from "../../clients/New-Project-1.png";
import newProject11 from "../../clients/New-Project-11.png";
import newProject12 from "../../clients/New-Project-12.png";
import newProject16 from "../../clients/New-Project-16.png";
import newProject17 from "../../clients/New-Project-17.png";
import newProject19 from "../../clients/New-Project-19.png";
import newProject2 from "../../clients/New-Project-2.png";
import newProject20 from "../../clients/New-Project-20.png";
import newProject26 from "../../clients/New-Project-26-1.png";
import newProject3 from "../../clients/New-Project-3.png";
import newProject4 from "../../clients/New-Project-4.png";
import newProject5 from "../../clients/New-Project-5.png";
import newProject6 from "../../clients/New-Project-6.png";
import newProject7 from "../../clients/New-Project-7.png";
import newProject8 from "../../clients/New-Project-8.png";
import newProject9 from "../../clients/New-Project-9.png";
import newProject from "../../clients/New-Project.png";
import newProject21 from "../../clients/New-Project21.png";
import newProject22 from "../../clients/New-Project22.png";
import newProject25 from "../../clients/New-Project25.png";
import newProject27 from "../../clients/New-Project27.png";
import newProject29 from "../../clients/New-Project29.png";
import newProject30 from "../../clients/New-Project30.png";
import newProject31 from "../../clients/New-Project31.png";
import newProject66 from "../../clients/New-Project66.png";
import newProject67 from "../../clients/New-Project67.png";
import renukaGroup from "../../clients/Renuka-Group-Logo-1.png";

const clientLogos = [
  balaji1, companyLogo, finalLogo, layer1, new2, new7, newProject1, newProject11, newProject12, newProject16, newProject17,
  newProject19, newProject2, newProject20, newProject26, newProject3, newProject4, newProject5, newProject6, newProject7,
  newProject8, newProject9, newProject, newProject21, newProject22, newProject25, newProject27, newProject29, newProject30,
  newProject31, newProject66, newProject67, renukaGroup
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dark Elite Creations" },
      { name: "description", content: "Meet the senior-only studio behind cinematic digital experiences for ambitious brands worldwide." },
      { property: "og:title", content: "About Dark Elite Creations" },
      { property: "og:description", content: "A multidisciplinary studio of designers, engineers and filmmakers." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Craft & Excellence", desc: "We sweat details others miss, delivering exceptional quality in every project." },
  { icon: Heart, title: "Honesty & Cooperation", desc: "Direct, transparent partnership built on trust and seamless teamwork." },
  { icon: Lightbulb, title: "Strategy & Innovation", desc: "We craft intelligent strategies and chase unexpected solutions that drive growth." },
  { icon: Target, title: "Goal Achievement", desc: "Beautiful work that moves metrics and helps you achieve your business goals." },
  { icon: Users2, title: "Team Collaboration", desc: "Senior-only experts working together with no handoffs, ensuring consistent excellence." },
  { icon: Globe2, title: "Growth & Scale", desc: "Empowering businesses to grow faster with scalable solutions across continents." },
];

const team = [
  { name: "Aria Khan", role: "Creative Director", initials: "AK" },
  { name: "Daniel Reeves", role: "Engineering Lead", initials: "DR" },
  { name: "Mei Tanaka", role: "Design Principal", initials: "MT" },
  { name: "Omar Faruq", role: "Motion Director", initials: "OF" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>We're a studio of <span className="text-gradient-red">obsessives</span>.</>}
        subtitle="Twelve years. Three continents. One mission — make digital feel cinematic again."
      />

      {/* Story */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">⏤ Our Story</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
              Founded by people who hate <span className="text-gradient-red">mediocre work</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Dark Elite Creations began as a four-person collective in 2013, frustrated by agencies that traded craft for scale. We built the studio we wanted to hire.</p>
              <p>Today we're a tight team of senior designers, engineers, filmmakers and strategists — no juniors, no offshore handoffs, no vanity awards. Just relentless craft.</p>
              <p>We've shipped over 240 projects for funded startups, public brands and challenger companies on six continents.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-radial)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="What we stand for" />
          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <motion.div key={v.title} variants={itemVariants} className="glass rounded-2xl p-7 neon-border-hover">
                <v.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Faces behind the work" />
          <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m) => (
              <motion.div key={m.name} variants={itemVariants} className="glass rounded-2xl p-6 text-center neon-border-hover">
                <div className="mx-auto grid place-items-center h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary-glow font-display font-bold text-2xl text-primary-foreground shadow-[0_0_24px_var(--glow-red)]">
                  {m.initials}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Clients */}
      <section className="py-32 border-y border-border overflow-hidden bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
          <SectionHeading eyebrow="Trusted By" title="Our Clients" />
        </div>
        
        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <div className="flex animate-[marquee_50s_linear_infinite] whitespace-nowrap">
            {[...clientLogos.slice(0, 11), ...clientLogos.slice(0, 11)].map((logo, i) => (
              <div key={`row1-${i}`} className="mx-4 flex-shrink-0">
                <div className="bg-white/95 rounded-2xl p-10 h-40 w-64 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <img src={logo} alt="Client logo" className="max-h-28 max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex animate-[marquee-reverse_50s_linear_infinite] whitespace-nowrap">
            {[...clientLogos.slice(11, 22), ...clientLogos.slice(11, 22)].map((logo, i) => (
              <div key={`row2-${i}`} className="mx-4 flex-shrink-0">
                <div className="bg-white/95 rounded-2xl p-10 h-40 w-64 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <img src={logo} alt="Client logo" className="max-h-28 max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - Left to Right */}
          <div className="flex animate-[marquee_50s_linear_infinite] whitespace-nowrap">
            {[...clientLogos.slice(22), ...clientLogos.slice(22)].map((logo, i) => (
              <div key={`row3-${i}`} className="mx-4 flex-shrink-0">
                <div className="bg-white/95 rounded-2xl p-10 h-40 w-64 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <img src={logo} alt="Client logo" className="max-h-28 max-w-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
