import { createFileRoute } from "@tanstack/react-router";
import { Printer, Layers, Sparkles, Package, FileCheck, Truck } from "lucide-react";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/print")({
  head: () => ({
    meta: [
      { title: "Digital & Offset Print — Dark Elite Creations" },
      { name: "description", content: "Premium digital and offset print production with specialty finishes at any scale." },
      { property: "og:title", content: "Digital & Offset Print — Dark Elite Creations" },
      { property: "og:description", content: "Premium print finishing — from boutique runs to enterprise scale." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Digital & Offset Print"
      title={<>Print that <span className="text-gradient-red">feels expensive</span> in your hand.</>}
      subtitle="Premium digital and offset production with specialty finishes."
      intro="From single-piece prototypes to enterprise-scale offset runs — our in-house print team handles design, paper sourcing, finishing, binding, and logistics with a craft-first approach."
      features={[
        { icon: <Printer className="h-6 w-6" />, title: "Offset Printing", desc: "Sheet-fed offset for marketing collateral, books, and packaging." },
        { icon: <Layers className="h-6 w-6" />, title: "Digital Print", desc: "Short-run, on-demand, and variable data printing." },
        { icon: <Sparkles className="h-6 w-6" />, title: "Specialty Finishes", desc: "Foil, emboss, deboss, spot UV, edge painting, and more." },
        { icon: <Package className="h-6 w-6" />, title: "Packaging", desc: "Custom rigid boxes, folding cartons, and luxury packaging." },
        { icon: <FileCheck className="h-6 w-6" />, title: "Pre-press", desc: "Color management, proofing, and dieline preparation." },
        { icon: <Truck className="h-6 w-6" />, title: "Fulfillment", desc: "Kitting, warehousing, and global distribution." },
      ]}
      process={[
        { title: "Spec & Source", desc: "Paper, finish, and binding sourcing — with samples in hand." },
        { title: "Pre-press", desc: "Hard proofs, color targets, and final files signed off before print." },
        { title: "Production", desc: "On-press supervision and quality control at every checkpoint." },
        { title: "Finish & Ship", desc: "Bindery, finishing, kitting, and worldwide delivery." },
      ]}
      tech={["Heidelberg", "HP Indigo", "Epson Proofers", "Kongsberg", "GMG ColorProof", "FSC Papers"]}
      faqs={[
        { q: "Do you handle paper sourcing?", a: "Yes — we work directly with leading mills for premium and FSC-certified stocks." },
        { q: "Minimum order quantity?", a: "Digital starts at 100 pieces. Offset typically starts at 1,000." },
        { q: "Can you ship internationally?", a: "Yes — fulfillment from Karachi, Dubai, and London hubs." },
        { q: "Do you provide hard proofs?", a: "Always — calibrated hard proofs are included with every offset job." },
      ]}
    />
  ),
});
