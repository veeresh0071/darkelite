import { createFileRoute } from "@tanstack/react-router";
import { Camera, Video, Mic, Film, Lightbulb, Scissors } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/production")({
  head: () => ({
    meta: [
      { title: "Production — Dark Elite Creations" },
      { name: "description", content: "End-to-end photo, film, and post production for brands, products, and campaigns." },
      { property: "og:title", content: "Production — Dark Elite Creations" },
      { property: "og:description", content: "Photo, film, and post — full production at any scale." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Production"
      title={<>Photo & film with <span className="text-gradient-red">cinematic intent</span>.</>}
      subtitle="Concept to final cut — full-service photo and video production."
      intro="A full production house under one roof. From single-day product shoots to multi-day brand films, we handle pre-production, crew, gear, talent, location, and post."
      features={[
        { icon: <Camera className="h-6 w-6" />, title: "Photography", desc: "Product, lifestyle, editorial, and campaign photography." },
        { icon: <Video className="h-6 w-6" />, title: "Video Production", desc: "Brand films, commercials, documentary, and social content." },
        { icon: <Lightbulb className="h-6 w-6" />, title: "Pre-Production", desc: "Concept, treatment, casting, location scouting, scheduling." },
        { icon: <Mic className="h-6 w-6" />, title: "Sound", desc: "Location sound, voice over, sound design, and mix." },
        { icon: <Film className="h-6 w-6" />, title: "Direction", desc: "Senior directors who shape the story from script to color." },
        { icon: <Scissors className="h-6 w-6" />, title: "Post & Color", desc: "Editorial, VFX, color grading, and final mastering." },
      ]}
      process={[
        { title: "Concept", desc: "Treatment, references, mood — the creative foundation." },
        { title: "Pre-Production", desc: "Casting, location, crew, schedule, and gear locked." },
        { title: "Shoot", desc: "Senior director and crew on set — efficient, focused, calm." },
        { title: "Post", desc: "Edit, sound, color, and delivery in every required format." },
      ]}
      tech={["RED", "ARRI", "Phase One", "DaVinci Resolve", "Premiere", "Pro Tools", "Phantom", "DJI Inspire"]}
      faqs={[
        { q: "Where do you shoot?", a: "Studios in Karachi, Dubai, and London — plus location anywhere worldwide." },
        { q: "Do you handle talent and casting?", a: "Yes — full casting, talent management, and on-set direction." },
        { q: "What about post?", a: "Edit, color, sound, VFX — all handled in-house with senior leads." },
        { q: "Can you produce just photo?", a: "Absolutely — many engagements are photo-only with a stills focus." },
      ]}
    />
  ),
});
