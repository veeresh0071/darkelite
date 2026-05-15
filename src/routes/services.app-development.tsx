import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Cpu, Layers, ShieldCheck, Zap, Bell } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/app-development")({
  head: () => ({
    meta: [
      { title: "App Development — Dark Elite Creations" },
      { name: "description", content: "Native and cross-platform mobile apps — iOS, Android, React Native, Flutter." },
      { property: "og:title", content: "App Development — Dark Elite Creations" },
      { property: "og:description", content: "Native-feel apps engineered with the same craft as our web work." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="App Development"
      title={<>Apps that <span className="text-gradient-red">earn</span> the home screen.</>}
      subtitle="Native and cross-platform mobile apps engineered for delight and scale."
      intro="We design and ship mobile apps that feel inevitable — fast, fluid, and beautifully crafted on every screen. From MVP to App Store launch, we handle the entire lifecycle."
      features={[
        { icon: <Smartphone className="h-6 w-6" />, title: "iOS & Android", desc: "Swift, Kotlin, React Native, Flutter — chosen per use case." },
        { icon: <Cpu className="h-6 w-6" />, title: "Native Performance", desc: "60fps scroll, native animations, zero compromise." },
        { icon: <Layers className="h-6 w-6" />, title: "Offline-First", desc: "Sync architectures that work in tunnels, on planes, anywhere." },
        { icon: <ShieldCheck className="h-6 w-6" />, title: "Secure by Design", desc: "Biometric auth, secure storage, audited dependencies." },
        { icon: <Zap className="h-6 w-6" />, title: "Instant Onboarding", desc: "First-tap-to-value flows that lift activation." },
        { icon: <Bell className="h-6 w-6" />, title: "Push & Real-time", desc: "Live updates, notifications, presence — wired in." },
      ]}
      process={[
        { title: "Discovery & Spec", desc: "User flows, technical spec, platform decisions, App Store strategy." },
        { title: "Prototype", desc: "Interactive prototype on real devices before a line of production code." },
        { title: "Build & QA", desc: "Two-week sprints, CI/CD, automated testing, beta releases via TestFlight." },
        { title: "Launch & Iterate", desc: "App Store submission, monitoring, and post-launch growth." },
      ]}
      tech={["Swift", "Kotlin", "React Native", "Expo", "Flutter", "Firebase", "Supabase", "Sentry", "Mixpanel", "RevenueCat"]}
      faqs={[
        { q: "Native or cross-platform?", a: "We pick based on your features, audience, and budget — not based on what we want to build." },
        { q: "Do you handle App Store submissions?", a: "Yes — including assets, copy, review responses, and ongoing updates." },
        { q: "Can you take over an existing app?", a: "Often, yes. We start with a code audit and migration plan." },
        { q: "What about backend?", a: "We architect and build the backend, or integrate with your existing systems." },
      ]}
    />
  ),
});
