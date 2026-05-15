import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/ServicePage";

export const Route = createFileRoute("/portfolio_/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development Portfolio — Dark Elite Creations" },
      { name: "description", content: "Explore our website development projects and see how we've helped businesses establish their online presence." },
    ],
  }),
  component: WebsiteDevelopmentPortfolio,
});

const websiteProjects = [
  {
    id: 1,
    name: "Balaji Hydraulics",
    image: "/website portfolio/screencapture-balajihydraulics-in-2025-03-11-16_05_48.png",
    url: "https://balajihydraulics.in"
  },
  {
    id: 2,
    name: "Fresh Fork Bite",
    image: "/website portfolio/screencapture-freshforkbite-2025-08-08-15_35_53-scaled.png",
    url: "https://freshforkbite.com"
  },
  {
    id: 3,
    name: "Ice Smith Machines",
    image: "/website portfolio/screencapture-icesmithmachines-2025-03-11-16_16_31.png",
    url: "https://icesmithmachines.com"
  },
  {
    id: 4,
    name: "Intence System",
    image: "/website portfolio/screencapture-intencesystem-2025-08-08-15_36_27-scaled.png",
    url: "https://intencesystem.com"
  },
  {
    id: 5,
    name: "Kailas Tejen Engineers",
    image: "/website portfolio/screencapture-kailastejengineers-2025-03-11-16_14_37.png",
    url: "https://kailastejengineers.com"
  },
  {
    id: 6,
    name: "Prestige Institute Dharwad",
    image: "/website portfolio/screencapture-prestigeinstitutedharwad-in-2025-08-08-15_37_37-scaled.png",
    url: "https://prestigeinstitutedharwad.in"
  },
  {
    id: 7,
    name: "RMR Sports Academy",
    image: "/website portfolio/screencapture-rmrsportsacademy-2025-08-08-15_37_01-768x2882.png",
    url: "https://rmrsportsacademy.com"
  },
  {
    id: 8,
    name: "Sagar Techenc",
    image: "/website portfolio/screencapture-sagartechenc-2025-08-08-15_35_26-768x3198.png",
    url: "https://sagartechenc.com"
  },
  {
    id: 9,
    name: "Shiva Chidambara",
    image: "/website portfolio/screencapture-shivachidambara-2025-08-08-15_38_04-1065x2048.png",
    url: "https://shivachidambara.com"
  },
  {
    id: 10,
    name: "Shivraj Calibration",
    image: "/website portfolio/screencapture-shivrajcalibration-2025-03-11-16_18_58.png",
    url: "https://shivrajcalibration.com"
  },
  {
    id: 11,
    name: "Tool Holders BGM",
    image: "/website portfolio/screencapture-toolholdersbgm-2025-03-25-15_56_04.png",
    url: "https://toolholdersbgm.com"
  },
  {
    id: 12,
    name: "Venus Hydraulics",
    image: "/website portfolio/screencapture-venushydraulics-2025-08-08-15_34_51-scaled.png",
    url: "https://venushydraulics.com"
  },
];

function WebsiteDevelopmentPortfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Website <span className="text-gradient-red">Development</span>
          </>
        }
        subtitle="Explore our collection of custom-built websites that showcase our expertise in modern web development."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden neon-border-hover transition-all hover:scale-105">
                  <div className="p-4 border-b border-border/50">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:text-primary-glow transition-colors flex items-center gap-1"
                        >
                          Visit
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative bg-white/5 overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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
