import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Search, BarChart3, Mail, Share2, Target } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing — Dark Elite Creations" },
      { name: "description", content: "Performance, SEO, content, and paid growth engines for ambitious brands." },
      { property: "og:title", content: "Digital Marketing — Dark Elite Creations" },
      { property: "og:description", content: "Growth engines that pair data with serious storytelling." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Digital Marketing"
      title={<>Growth that doesn't <span className="text-gradient-red">embarrass</span> the brand.</>}
      subtitle="Performance, SEO, content and paid — strategy that respects craft."
      intro="We run integrated growth programs that compound. Paid ads, organic SEO, lifecycle email, social — designed and orchestrated together so every channel reinforces the rest."
      features={[
        { icon: <Search className="h-6 w-6" />, title: "SEO", desc: "Technical, on-page, and content strategy that earns lasting rankings." },
        { icon: <Target className="h-6 w-6" />, title: "Paid Ads", desc: "Meta, Google, TikTok, LinkedIn — creative-led performance." },
        { icon: <Mail className="h-6 w-6" />, title: "Lifecycle Email", desc: "Onboarding, nurture, retention flows that drive LTV." },
        { icon: <Share2 className="h-6 w-6" />, title: "Social", desc: "Calendars, creative, and community management with voice." },
        { icon: <BarChart3 className="h-6 w-6" />, title: "Analytics", desc: "Clean attribution, dashboards, and weekly insight." },
        { icon: <Megaphone className="h-6 w-6" />, title: "Content", desc: "Editorial-grade content engineered for distribution." },
      ]}
      process={[
        { title: "Audit", desc: "Channels, funnel, attribution, creative — we benchmark everything." },
        { title: "Strategy", desc: "Quarterly plan with experiments, KPIs, and ownership." },
        { title: "Production", desc: "Creative, copy, landing pages, automations — built in-house." },
        { title: "Optimize", desc: "Weekly reviews, monthly retros, continuous lift." },
      ]}
      tech={["GA4", "GTM", "Meta Ads", "Google Ads", "HubSpot", "Klaviyo", "Customer.io", "Ahrefs", "Notion"]}
      faqs={[
        { q: "Do you take over our ad accounts?", a: "Yes — we run them under your accounts so you keep full ownership." },
        { q: "What's a realistic timeline for SEO?", a: "Technical wins in weeks, content compounding in 3–6 months, dominance in 9–12." },
        { q: "Do you do creative production?", a: "Yes — static, motion, video, and copy are all in-house." },
        { q: "Can you work with our internal team?", a: "Absolutely — we're often the strategy layer with internal execution." },
      ]}
    />
  ),
});
