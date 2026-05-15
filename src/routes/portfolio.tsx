import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CtaBanner, SectionHeading } from "@/components/ServicePage";
import { StaggerContainer, itemVariants } from "@/components/Reveal";
import logoImage from "@/components/image1.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Dark Elite Creations" },
      { name: "description", content: "Trusted by leading brands across industries. See the companies we've worked with." },
      { property: "og:title", content: "Portfolio — Dark Elite Creations" },
      { property: "og:description", content: "Our clients and the work we've done together." },
    ],
  }),
  component: Portfolio,
});

const workCategories = [
  {
    id: 1,
    title: "Website Development",
    image: "/works/New-Project-2-1-1024x775.jpg",
    description: "Custom websites built with modern technologies",
    link: "/portfolio/website-development"
  },
  {
    id: 2,
    title: "App Development",
    image: "/works/New-Project-3-1-1024x775.jpg",
    description: "Native and cross-platform mobile applications",
    link: null
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "/works/New-Project-3-1024x775.jpg",
    description: "Strategic campaigns that drive results",
    link: null
  },
  {
    id: 4,
    title: "UI/UX Design",
    image: "/works/New-Project-4-1024x775.jpg",
    description: "User-centered design that delights",
    link: "/portfolio/ui-ux-design"
  },
  {
    id: 5,
    title: "Graphic Design",
    image: "/works/New-Project5-1024x775.jpg",
    description: "Visual identities that stand out",
    link: "/portfolio/graphic-design"
  },
  {
    id: 6,
    title: "Production",
    image: "/works/New-Project6-1024x775.jpg",
    description: "Professional photo and video production",
    link: null
  },
  {
    id: 7,
    title: "Animation",
    image: "/works/New-Project7-1024x775.jpg",
    description: "2D and 3D animation that captivates",
    link: null
  },
  {
    id: 8,
    title: "VFX/CGI",
    image: "/works/New-Project-8-1024x775.jpg",
    description: "Cinematic visual effects and CGI",
    link: null
  },
  {
    id: 9,
    title: "Print Design",
    image: "/works/New-Project-9-1024x775.jpg",
    description: "Premium print materials and branding",
    link: null
  },
];

function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial)" }}
        />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-red">Portfolio</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-12 max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Logo and Icons */}
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  {/* Center Logo */}
                  <div className="relative z-10 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.3)]">
                    <img 
                      src={logoImage} 
                      alt="Dark Elite Creations" 
                      className="w-32 h-32 object-contain brightness-125"
                    />
                  </div>
                  
                  {/* Floating Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 -left-8 w-16 h-16 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-4 -right-8 w-14 h-14 rounded-xl bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center"
                  >
                    <svg className="w-7 h-7 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-8, 12, -8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 w-14 h-14 rounded-xl bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center"
                  >
                    <svg className="w-7 h-7 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </motion.div>

                  <motion.div
                    animate={{ y: [12, -8, 12] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute -bottom-4 -right-8 w-16 h-16 rounded-xl bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* About Text */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Hello!
                </h2>
                <p className="text-lg mb-4">
                  <span className="text-gradient-red font-semibold">Dark Elite Creations</span>{" "}
                  <span className="text-foreground">Here</span>
                </p>
                <h3 className="font-display text-2xl font-semibold mb-4 italic">
                  About Us
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Dark Elite Creations, your premier destination for cutting-edge solutions and creative services in Belagavi. As the best web design and development, digital marketing, graphic designing, video editing and the finest Software IT company in Belagavi, we specialize in transforming your vision into compelling digital realities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Showcase"
            title={
              <>
                Our <span className="text-gradient-red">Work</span>
              </>
            }
          />

          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workCategories.map((category) => {
              const CardContent = (
                <motion.div
                  variants={itemVariants}
                  className="group h-full"
                >
                  <div className="glass rounded-2xl overflow-hidden neon-border-hover transition-all hover:scale-105 h-full flex flex-col cursor-pointer">
                    <div className="aspect-[4/3] bg-white/5 flex items-center justify-center p-8">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6 border-t border-border/50 flex-1">
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                      {category.link && (
                        <p className="text-xs text-primary mt-3 flex items-center gap-1">
                          View Projects
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );

              return category.link ? (
                <a key={category.id} href={category.link} className="block">
                  {CardContent}
                </a>
              ) : (
                <div key={category.id}>
                  {CardContent}
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
