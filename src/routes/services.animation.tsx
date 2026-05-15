import { createFileRoute } from "@tanstack/react-router";
import { Film, Box, Sparkles, Play, Layers, Wand2 } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/animation")({
  head: () => ({
    meta: [
      { title: "2D / 3D Animation — Dark Elite Creations" },
      { name: "description", content: "Cinematic 2D and 3D animation, motion graphics, explainers and product reveals." },
      { property: "og:title", content: "2D / 3D Animation — Dark Elite Creations" },
      { property: "og:description", content: "Motion that makes ideas unforgettable — from explainer to cinematic." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="2D / 3D Animation"
      title={<>Motion that <span className="text-gradient-red">moves</span> people.</>}
      subtitle="2D, 3D, motion graphics, explainers and cinematic product films."
      intro="From bite-sized social motion to full cinematic 3D, our animation team brings stories to life with frame-perfect craft. We design, animate, render, and finish entirely in-house."
      features={[
        { icon: <Film className="h-6 w-6" />, title: "2D Motion", desc: "Vector animation, kinetic typography, brand idents." },
        { icon: <Box className="h-6 w-6" />, title: "3D Animation", desc: "Photoreal product, character, and environment work." },
        { icon: <Sparkles className="h-6 w-6" />, title: "VFX & Compositing", desc: "Seamless integration of CG with live action." },
        { icon: <Play className="h-6 w-6" />, title: "Explainers", desc: "Story-driven explainers that actually get watched." },
        { icon: <Layers className="h-6 w-6" />, title: "Mograph for UI", desc: "Lottie, Rive, and inline web/app motion." },
        { icon: <Wand2 className="h-6 w-6" />, title: "Sound & Score", desc: "Custom score and sound design for every piece." },
      ]}
      process={[
        { title: "Concept & Script", desc: "Treatment, narrative, and visual references locked first." },
        { title: "Style Frames & Boards", desc: "Designed frames and animatic before a frame is animated." },
        { title: "Animation & Render", desc: "Production with daily reviews and iterative feedback." },
        { title: "Sound & Master", desc: "Score, sound design, color, and final delivery in every format." },
      ]}
      tech={["After Effects", "Cinema 4D", "Houdini", "Blender", "Unreal", "Octane", "Redshift", "Rive", "Lottie"]}
      faqs={[
        { q: "Do you script and write?", a: "Yes — strong narrative is non-negotiable, and we handle scripting end-to-end." },
        { q: "Can you animate our existing brand?", a: "Of course — we develop motion principles aligned to your identity." },
        { q: "Lottie or video?", a: "We deliver both — and recommend the format that fits the use case." },
        { q: "Do you do voice and sound?", a: "Yes — VO casting, score, and full sound design are in-house." },
      ]}
    />
  ),
});
