import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/ServicePage";

export const Route = createFileRoute("/portfolio_/graphic-design")({
  head: () => ({
    meta: [
      { title: "Graphic Design Portfolio — Dark Elite Creations" },
      { name: "description", content: "Explore our graphic design projects showcasing brand identities, visual systems, and creative designs." },
    ],
  }),
  component: GraphicDesignPortfolio,
});

const graphicProjects = [
  {
    id: 1,
    name: "Brand Identity Design 1",
    image: "/graphic design portfolip/New-1-150x150.png"
  },
  {
    id: 2,
    name: "Brand Identity Design 2",
    image: "/graphic design portfolip/New-2-150x150.png"
  },
  {
    id: 3,
    name: "Brand Identity Design 3",
    image: "/graphic design portfolip/New-3-150x150.png"
  },
  {
    id: 4,
    name: "Brand Identity Design 4",
    image: "/graphic design portfolip/New-4-150x150.png"
  },
  {
    id: 5,
    name: "Brand Identity Design 5",
    image: "/graphic design portfolip/New-5-150x150.png"
  },
  {
    id: 6,
    name: "Brand Identity Design 6",
    image: "/graphic design portfolip/New-6-150x150.png"
  },
  {
    id: 7,
    name: "Brand Identity Design 7",
    image: "/graphic design portfolip/New-7-150x150.png"
  },
  {
    id: 8,
    name: "Brand Identity Design 8",
    image: "/graphic design portfolip/New-8-150x150.png"
  },
  {
    id: 9,
    name: "Brand Identity Design 9",
    image: "/graphic design portfolip/New-9-150x150.png"
  },
  {
    id: 10,
    name: "Brand Identity Design 10",
    image: "/graphic design portfolip/New-10-1-150x150.png"
  },
  {
    id: 11,
    name: "Brand Identity Design 11",
    image: "/graphic design portfolip/New-11-150x150.png"
  },
  {
    id: 12,
    name: "Brand Identity Design 12",
    image: "/graphic design portfolip/New-12-150x150.png"
  },
];

function GraphicDesignPortfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Graphic <span className="text-gradient-red">Design</span>
          </>
        }
        subtitle="Explore our collection of brand identities, visual systems, and creative designs that make brands stand out."
      >
        <Button variant="outline" asChild>
          <Link to="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </PageHero>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {graphicProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden neon-border-hover transition-all hover:scale-105">
                  <div className="relative bg-white/5 overflow-hidden aspect-square">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 border-t border-border/50">
                    <h3 className="font-display text-sm font-semibold group-hover:text-primary transition-colors text-center">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
