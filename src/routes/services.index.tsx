import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Megaphone, PenTool, Film, Camera, Printer, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { StaggerContainer, itemVariants } from "@/components/Reveal";
import { CtaBanner } from "@/components/ServicePage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Dark Elite Creations" },
      { name: "description", content: "Eight disciplines under one roof: web, app, UI/UX, marketing, graphics, animation, production and print." },
      { property: "og:title", content: "Services — Dark Elite Creations" },
      { property: "og:description", content: "Eight disciplines, one studio. Cinematic craft from strategy to launch." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Code2, title: "Website Development", to: "/services/website-development", desc: "Performance-obsessed, beautifully engineered sites." },
  { icon: Smartphone, title: "App Development", to: "/services/app-development", desc: "Native and cross-platform apps that feel inevitable." },
  { icon: Palette, title: "UI / UX Designing", to: "/services/ui-ux-designing", desc: "Interfaces grounded in craft and clarity." },
  { icon: Megaphone, title: "Digital Marketing", to: "/services/digital-marketing", desc: "Growth engines blending data and storytelling." },
  { icon: PenTool, title: "Graphic Designing", to: "/services/graphic-designing", desc: "Identities and visual systems with serious presence." },
  { icon: Film, title: "2D / 3D Animation", to: "/services/animation", desc: "Motion that makes ideas unforgettable." },
  { icon: Camera, title: "Production", to: "/services/production", desc: "Photo, film and post — end to end." },
  { icon: Printer, title: "Digital & Offset Print", to: "/services/print", desc: "Premium print finishing at any scale." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Eight disciplines. <span className="text-gradient-red">One team.</span></>}
        subtitle="A complete creative-technology stack — from brand to ship."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants}>
                <Link to={s.to} className="group block h-full glass rounded-2xl p-8 neon-border-hover relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/15 transition-all" />
                  <div className="relative">
                    <div className="grid place-items-center h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-6 group-hover:scale-110 transition-transform">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-primary">
                      Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
