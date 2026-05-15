import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerContainer, itemVariants } from "@/components/Reveal";
import { CtaBanner, SectionHeading } from "@/components/ServicePage";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatedCard } from "@/components/AnimatedCard";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Dark Elite Creations" },
      { name: "description", content: "Join our team of creative professionals and help shape the future of digital experiences." },
      { property: "og:title", content: "Careers at Dark Elite Creations" },
      { property: "og:description", content: "Build your career with a team that values craft, innovation, and excellence." },
    ],
  }),
  component: Career,
});

const openPositions = [
  {
    title: "ETL Developer",
    department: "Data Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Design and implement robust ETL pipelines to transform raw data into actionable insights for enterprise clients.",
    responsibilities: [
      "Design, develop, and maintain ETL processes using modern data integration tools",
      "Build scalable data pipelines for batch and real-time data processing",
      "Optimize data workflows for performance and reliability",
      "Collaborate with data analysts and business teams to understand data requirements",
      "Implement data quality checks and monitoring solutions",
      "Document ETL processes and maintain data lineage"
    ],
    requirements: [
      "3+ years of experience in ETL development and data integration",
      "Strong proficiency in SQL and database technologies (PostgreSQL, MySQL, MongoDB)",
      "Experience with ETL tools (Apache Airflow, Talend, Informatica, or similar)",
      "Knowledge of Python or Java for data processing",
      "Understanding of data warehousing concepts and dimensional modeling",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving and analytical skills",
      "Excellent communication and teamwork abilities"
    ],
    niceToHave: [
      "Experience with big data technologies (Spark, Hadoop, Kafka)",
      "Knowledge of data visualization tools (Tableau, Power BI)",
      "Familiarity with CI/CD pipelines and DevOps practices",
      "Experience with containerization (Docker, Kubernetes)"
    ]
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-time",
    description: "Build cutting-edge web applications from front-end to back-end, delivering seamless user experiences for diverse clients.",
    responsibilities: [
      "Develop responsive and performant web applications using modern frameworks",
      "Design and implement RESTful APIs and microservices architecture",
      "Write clean, maintainable, and well-documented code",
      "Collaborate with designers to implement pixel-perfect UI/UX",
      "Optimize applications for maximum speed and scalability",
      "Participate in code reviews and contribute to technical decisions",
      "Troubleshoot and debug applications across the full stack"
    ],
    requirements: [
      "3+ years of full stack development experience",
      "Strong proficiency in JavaScript/TypeScript and modern frameworks (React, Vue, or Angular)",
      "Experience with Node.js, Express, or similar backend frameworks",
      "Solid understanding of database design (SQL and NoSQL)",
      "Knowledge of version control systems (Git)",
      "Experience with responsive design and CSS frameworks",
      "Understanding of web security best practices",
      "Strong problem-solving skills and attention to detail",
      "Ability to work independently and in team environments"
    ],
    niceToHave: [
      "Experience with Next.js, Remix, or other meta-frameworks",
      "Knowledge of GraphQL and modern API design patterns",
      "Familiarity with cloud services (AWS, Azure, GCP)",
      "Experience with testing frameworks (Jest, Cypress, Playwright)",
      "Understanding of DevOps and CI/CD pipelines",
      "Contributions to open-source projects"
    ]
  },
  {
    title: "Senior UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Lead design projects from concept to delivery, creating exceptional user experiences for global brands.",
    responsibilities: [
      "Lead end-to-end design process from research to final delivery",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve design systems",
      "Present design concepts to clients and stakeholders"
    ],
    requirements: [
      "5+ years of UI/UX design experience",
      "Expert proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio demonstrating design thinking and problem-solving",
      "Understanding of responsive and mobile-first design",
      "Knowledge of accessibility standards (WCAG)",
      "Excellent communication and presentation skills"
    ],
    niceToHave: [
      "Experience with motion design and prototyping tools",
      "Basic understanding of HTML/CSS",
      "Knowledge of design systems and component libraries"
    ]
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "On-site",
    type: "Full-time",
    description: "Drive digital marketing campaigns and strategies for diverse client portfolios, maximizing ROI and brand visibility.",
    responsibilities: [
      "Develop and execute digital marketing strategies across multiple channels",
      "Manage SEO/SEM campaigns and optimize for conversions",
      "Create engaging content for social media and email campaigns",
      "Analyze campaign performance and provide actionable insights",
      "Collaborate with creative team on marketing materials",
      "Stay updated with latest digital marketing trends"
    ],
    requirements: [
      "3+ years of digital marketing experience",
      "Proven track record of successful campaigns",
      "Strong analytical skills and data-driven mindset",
      "Experience with Google Analytics, Google Ads, and social media platforms",
      "Excellent written and verbal communication skills",
      "Creative thinking and problem-solving abilities"
    ],
    niceToHave: [
      "Google Ads or HubSpot certifications",
      "Experience with marketing automation tools",
      "Knowledge of graphic design tools"
    ]
  },
];

const benefits = [
  "Competitive salary and equity",
  "Flexible remote work options",
  "Health and wellness benefits",
  "Professional development budget",
  "Latest tools and equipment",
  "Collaborative team culture",
];

function Career() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build the future with{" "}
            <span className="text-gradient-red">Dark Elite</span>
          </>
        }
        subtitle="Join a team of passionate creators, innovators, and problem-solvers dedicated to crafting exceptional digital experiences."
      >
        <Button size="lg" onClick={() => {
          document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          View Open Positions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </PageHero>

      {/* Why Join Us */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              ⏤ Why Dark Elite
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight">
              Where <span className="text-gradient-red">talent</span> meets
              opportunity
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                At Dark Elite Creations, we believe in empowering our team
                members to do their best work. We foster a culture of
                creativity, collaboration, and continuous learning.
              </p>
              <p>
                Work on challenging projects for global brands, collaborate with
                industry experts, and grow your skills in a supportive
                environment that values innovation and excellence.
              </p>
              <p>
                We're not just building products — we're building careers and
                shaping the future of digital experiences.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            eyebrow="Our Culture" 
            title="What we expect from you" 
          />
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <AnimatedCard delay={0}>
              <div className="glass rounded-2xl p-8 neon-border-hover h-full">
                <h3 className="font-display text-2xl font-semibold mb-4 text-gradient-red">
                  Technical Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We seek individuals who are passionate about their craft and committed to delivering high-quality work. You should have:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Strong foundation in your domain with proven expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Commitment to writing clean, maintainable code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Attention to detail and quality in every deliverable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Eagerness to learn and adapt to new technologies</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.15}>
              <div className="glass rounded-2xl p-8 neon-border-hover h-full">
                <h3 className="font-display text-2xl font-semibold mb-4 text-gradient-red">
                  Collaboration & Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We value team players who contribute to a positive work environment and help others succeed:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Excellent communication and interpersonal skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ability to work independently and as part of a team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Proactive problem-solving mindset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Willingness to mentor and share knowledge</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="glass rounded-2xl p-8 neon-border-hover h-full">
                <h3 className="font-display text-2xl font-semibold mb-4 text-gradient-red">
                  Innovation & Creativity
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We encourage thinking outside the box and bringing fresh perspectives:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Creative approach to solving complex problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Initiative to propose and implement improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Curiosity about emerging trends and technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Passion for creating exceptional user experiences</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.25}>
              <div className="glass rounded-2xl p-8 neon-border-hover h-full">
                <h3 className="font-display text-2xl font-semibold mb-4 text-gradient-red">
                  Professional Integrity
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We expect professionalism and accountability in all aspects of work:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Strong work ethic and reliability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ability to meet deadlines and manage priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Transparency in communication and progress updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Respect for team members and company values</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "var(--gradient-radial)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Benefits" title="What we offer" />
          <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={itemVariants}
                className="glass rounded-2xl p-7 neon-border-hover"
              >
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-base leading-relaxed">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open Positions"
            title="Join our team"
          />
          <StaggerContainer className="mt-16 space-y-5">
            {openPositions.map((position) => (
              <JobCard key={position.title} position={position} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function JobCard({ position }: { position: typeof openPositions[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="glass rounded-2xl overflow-hidden neon-border-hover group"
    >
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-display text-2xl font-semibold group-hover:text-primary transition-colors">
                  {position.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {position.department}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {position.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {position.location}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {position.type}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:self-start">
            <Button asChild>
              <Link 
                to="/apply/$jobTitle" 
                params={{ jobTitle: position.title.toLowerCase().replace(/\s+/g, "-") }}
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full"
            >
              {isExpanded ? "Hide" : "View"} Details
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-border/50"
        >
          <div className="p-8 space-y-8">
            {/* Responsibilities */}
            {position.responsibilities && (
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-primary">●</span>
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {position.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Requirements */}
            {position.requirements && (
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-primary">●</span>
                  What We're Looking For
                </h4>
                <ul className="space-y-3">
                  {position.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nice to Have */}
            {position.niceToHave && (
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-primary/60">●</span>
                  Nice to Have
                </h4>
                <ul className="space-y-3">
                  {position.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-border/50">
              <Button asChild size="lg" className="w-full md:w-auto">
                <Link 
                  to="/apply/$jobTitle" 
                  params={{ jobTitle: position.title.toLowerCase().replace(/\s+/g, "-") }}
                >
                  Apply for {position.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
