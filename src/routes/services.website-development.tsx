import { createFileRoute } from "@tanstack/react-router";
import { Code2, Gauge, Layers, Search, Smartphone, Wand2 } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development — Dark Elite Creations" },
      { name: "description", content: "Performance-obsessed, beautifully engineered websites built with React, Next.js and Astro." },
      { property: "og:title", content: "Website Development — Dark Elite Creations" },
      { property: "og:description", content: "Cinematic, fast, accessible websites — engineered by a senior team." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Website Development"
      title={<>Sites that <span className="text-gradient-red">load fast</span> and feel <span className="text-gradient-red">cinematic</span>.</>}
      subtitle="Production-grade websites engineered for performance, SEO, and conversion."
      intro="From marketing sites to complex web apps, we craft web experiences that balance breathtaking design with rock-solid engineering. Server-rendered, accessible, lightning-fast — and built to scale."
      features={[
        { icon: <Code2 className="h-6 w-6" />, title: "Modern Stack", desc: "React, Next.js, Astro, TypeScript — chosen per project, never dogma." },
        { icon: <Gauge className="h-6 w-6" />, title: "Lighthouse 100", desc: "We benchmark every build. Performance is a design feature, not a bonus." },
        { icon: <Layers className="h-6 w-6" />, title: "Headless CMS", desc: "Sanity, Contentful, Storyblok — your team owns content without touching code." },
        { icon: <Search className="h-6 w-6" />, title: "SEO Foundation", desc: "Server-rendered, schema-marked, structured for organic growth." },
        { icon: <Smartphone className="h-6 w-6" />, title: "Responsive by Default", desc: "Pixel-perfect from 320px to 4K. Touch and motion considered." },
        { icon: <Wand2 className="h-6 w-6" />, title: "Cinematic Motion", desc: "GSAP and Framer Motion choreography that elevates without distracting." },
      ]}
      process={[
        { title: "Strategy", desc: "Audience, goals, IA, success metrics — we lock the foundation first." },
        { title: "Design System", desc: "Components, type, motion principles built for your brand and team." },
        { title: "Build", desc: "Engineered with TypeScript, tested, accessible, and SEO-ready." },
        { title: "Launch", desc: "Edge-deployed with monitoring, analytics, and ongoing optimization." },
      ]}
      tech={["React", "Next.js", "Astro", "TypeScript", "Tailwind", "GSAP", "Framer Motion", "Sanity", "Contentful", "Vercel", "Cloudflare"]}
      faqs={[
        { q: "Do you handle hosting?", a: "Yes — we deploy to Vercel, Cloudflare, or your existing infrastructure." },
        { q: "Can you work with our existing brand?", a: "Absolutely. We extend brands as often as we build new ones." },
        { q: "What about SEO and analytics?", a: "Every site ships with technical SEO, schema, and analytics wired up." },
        { q: "Do you offer maintenance?", a: "Yes — flexible monthly retainers for design, dev, and content updates." },
      ]}
    />
  ),
});
