import { createFileRoute } from "@tanstack/react-router";
import { Palette, Layers, Eye, Users, Sparkles, Workflow } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/ui-ux-designing")({
  head: () => ({
    meta: [
      { title: "UI/UX Designing — Dark Elite Creations" },
      { name: "description", content: "Design systems and product interfaces grounded in research, craft, and clarity." },
      { property: "og:title", content: "UI/UX Designing — Dark Elite Creations" },
      { property: "og:description", content: "Interfaces that feel inevitable — for web, mobile, and beyond." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="UI / UX Designing"
      title={<>Interfaces that feel <span className="text-gradient-red">inevitable</span>.</>}
      subtitle="Research, design systems, and product surfaces built for clarity and delight."
      intro="We design products that earn their place. Through research, prototyping, and obsessive iteration, we craft interfaces people love — and teams can scale."
      features={[
        { icon: <Eye className="h-6 w-6" />, title: "User Research", desc: "Interviews, usability tests, and analytics turned into actionable insight." },
        { icon: <Workflow className="h-6 w-6" />, title: "IA & Flows", desc: "Information architecture and journeys that reduce friction." },
        { icon: <Palette className="h-6 w-6" />, title: "Visual Design", desc: "High-fidelity, on-brand, ready for production." },
        { icon: <Layers className="h-6 w-6" />, title: "Design Systems", desc: "Tokens, components, and documentation your team will actually use." },
        { icon: <Sparkles className="h-6 w-6" />, title: "Motion", desc: "Microinteractions and transitions designed alongside the static UI." },
        { icon: <Users className="h-6 w-6" />, title: "Accessibility", desc: "WCAG-compliant by default — design that includes everyone." },
      ]}
      process={[
        { title: "Research", desc: "Interview users, analyze data, audit competitors, define jobs-to-be-done." },
        { title: "Wireframe", desc: "Low-fidelity flows pressure-tested with stakeholders before pixels." },
        { title: "Visual & Prototype", desc: "High-fidelity design with interactive prototypes for validation." },
        { title: "Design System", desc: "Documented components and tokens delivered in Figma + code." },
      ]}
      tech={["Figma", "FigJam", "Framer", "Maze", "Hotjar", "Lottie", "Tokens Studio", "Storybook"]}
      faqs={[
        { q: "Do you only design or also build?", a: "Both. Our designers and engineers sit on the same teams." },
        { q: "Can we just hire a designer?", a: "Yes — embedded designer engagements are popular for in-house product teams." },
        { q: "What deliverables do we get?", a: "Figma files, prototypes, design tokens, and a written design system." },
        { q: "Do you do user testing?", a: "Yes — both moderated and unmoderated, depending on your needs." },
      ]}
    />
  ),
});
