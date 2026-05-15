import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/ServicePage";

export const Route = createFileRoute("/portfolio_/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design Portfolio — Dark Elite Creations" },
      { name: "description", content: "Explore our UI/UX design projects showcasing user-centered interfaces and delightful experiences." },
    ],
  }),
  component: UIUXDesignPortfolio,
});

const uiuxProjects = [
  {
    id: 1,
    name: "Mobile App Design 1",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-1.png"
  },
  {
    id: 2,
    name: "Mobile App Design 2",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-2.png"
  },
  {
    id: 4,
    name: "Mobile App Design 4",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-4.png"
  },
  {
    id: 5,
    name: "Mobile App Design 5",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-5.png"
  },
  {
    id: 6,
    name: "Mobile App Design 6",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-6.png"
  },
  {
    id: 7,
    name: "Mobile App Design 7",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-7.png"
  },
  {
    id: 8,
    name: "Mobile App Design 8",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-8.png"
  },
  {
    id: 9,
    name: "Mobile App Design 9",
    image: "/uiux prtflo/iPhone-12-Pro-Max-–-9.png"
  },
];

function UIUXDesignPortfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            UI/UX <span className="text-gradient-red">Design</span>
          </>
        }
        subtitle="Explore our collection of user interface and experience designs that create delightful digital interactions."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {uiuxProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden neon-border-hover transition-all hover:scale-105">
                  <div className="relative bg-white/5 overflow-hidden aspect-[9/16] flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-contain"
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
