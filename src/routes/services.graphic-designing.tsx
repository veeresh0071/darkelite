import { createFileRoute } from "@tanstack/react-router";
import { PenTool, BookOpen, Layers, Image, Sparkles, Type } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/graphic-designing")({
  head: () => ({
    meta: [
      { title: "Graphic Designing — Dark Elite Creations" },
      { name: "description", content: "Brand identities, visual systems, packaging, and editorial design with serious presence." },
      { property: "og:title", content: "Graphic Designing — Dark Elite Creations" },
      { property: "og:description", content: "Bold identities and visual systems that make brands feel inevitable." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Graphic Designing"
      title={<>Identities with <span className="text-gradient-red">presence</span>.</>}
      subtitle="Brand systems, editorial, packaging — design that earns attention without shouting."
      intro="We design brands that feel timeless and contemporary at once. Logos, typography, color, motion, packaging, and every touchpoint between — built into a system your team can scale."
      features={[
        { icon: <PenTool className="h-6 w-6" />, title: "Brand Identity", desc: "Logos, marks, and visual language with a strong point of view." },
        { icon: <Type className="h-6 w-6" />, title: "Typography", desc: "Custom and curated type systems that carry the brand." },
        { icon: <Layers className="h-6 w-6" />, title: "Brand Systems", desc: "Tokens, grids, and components — documented for any team." },
        { icon: <Image className="h-6 w-6" />, title: "Editorial & Print", desc: "Magazines, books, reports — long-form design with rhythm." },
        { icon: <Sparkles className="h-6 w-6" />, title: "Packaging", desc: "Premium packaging design with production-ready dielines." },
        { icon: <BookOpen className="h-6 w-6" />, title: "Brand Guidelines", desc: "Living documentation that keeps the brand on-key." },
      ]}
      process={[
        { title: "Discovery", desc: "Workshops to extract brand essence, audience, and ambition." },
        { title: "Concept", desc: "Three distinct creative directions — chosen, not compromised." },
        { title: "Refine & System", desc: "Selected direction expanded into a full visual system." },
        { title: "Rollout", desc: "Templates, assets, and guidelines ready for any team." },
      ]}
      tech={["Adobe CC", "Figma", "Glyphs", "Cinema 4D", "After Effects", "Frontify", "Notion"]}
      faqs={[
        { q: "How many logo concepts do you present?", a: "Three distinct directions — each fully developed, never throwaway." },
        { q: "Do you design custom fonts?", a: "Yes, when the project warrants it. Otherwise we curate from leading foundries." },
        { q: "What about rollout?", a: "We help apply the brand to web, social, packaging, and print." },
        { q: "Do you provide source files?", a: "Always — full ownership of editable Figma + Adobe files." },
      ]}
    />
  ),
});
