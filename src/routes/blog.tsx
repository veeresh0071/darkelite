import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerContainer, itemVariants } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Dark Elite Creations" },
      { name: "description", content: "Essays, case studies, and field notes from Dark Elite Creations on design, engineering, and creative strategy." },
      { property: "og:title", content: "Blog — Dark Elite Creations" },
      { property: "og:description", content: "Long-form essays and field notes from a senior creative tech studio." },
    ],
  }),
  component: Blog,
});

const categories = ["All", "Web Development", "Digital Marketing", "Design", "Technology", "Business"] as const;

type Post = {
  id: number;
  title: string;
  category: typeof categories[number];
  date: string;
  read: string;
  featured?: boolean;
  excerpt: string;
  image: string;
};

const posts: Post[] = [
  { 
    id: 1, 
    title: "The Future of Web Development: AI-Powered Coding Tools", 
    category: "Web Development", 
    date: "May 10, 2026", 
    read: "8 min", 
    featured: true, 
    excerpt: "Explore how artificial intelligence is revolutionizing the way developers write code, from GitHub Copilot to ChatGPT. Learn how these tools are increasing productivity and changing the development landscape.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
  },
  { 
    id: 2, 
    title: "SEO in 2026: What's Changed and What Matters", 
    category: "Digital Marketing", 
    date: "May 8, 2026", 
    read: "10 min", 
    excerpt: "Google's algorithm updates continue to evolve. Discover the latest SEO strategies that actually work, including Core Web Vitals, E-E-A-T principles, and the rise of AI-generated content detection.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop"
  },
  { 
    id: 3, 
    title: "Responsive Design Best Practices for Modern Websites", 
    category: "Design", 
    date: "May 5, 2026", 
    read: "7 min", 
    excerpt: "Mobile-first design is no longer optional. Learn the essential principles of responsive web design, from flexible grids to breakpoint strategies that ensure your site looks perfect on every device.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop"
  },
  { 
    id: 4, 
    title: "Social Media Marketing Trends Dominating 2026", 
    category: "Digital Marketing", 
    date: "May 2, 2026", 
    read: "9 min", 
    excerpt: "From short-form video content to AI-powered personalization, discover the social media strategies that are driving engagement and conversions. Learn how to leverage TikTok, Instagram Reels, and emerging platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
  },
  { 
    id: 5, 
    title: "Building Progressive Web Apps: A Complete Guide", 
    category: "Web Development", 
    date: "Apr 28, 2026", 
    read: "12 min", 
    excerpt: "Progressive Web Apps combine the best of web and mobile apps. This comprehensive guide covers service workers, offline functionality, push notifications, and how to create app-like experiences on the web.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
  },
  { 
    id: 6, 
    title: "The Psychology of Color in Web Design", 
    category: "Design", 
    date: "Apr 25, 2026", 
    read: "6 min", 
    excerpt: "Colors evoke emotions and influence user behavior. Understand color theory, cultural associations, and how to choose the perfect palette that aligns with your brand and converts visitors into customers.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop"
  },
  { 
    id: 7, 
    title: "Email Marketing Automation: Strategies That Convert", 
    category: "Digital Marketing", 
    date: "Apr 22, 2026", 
    read: "8 min", 
    excerpt: "Email isn't dead—it's more powerful than ever. Learn how to build automated email sequences, segment your audience effectively, and craft compelling copy that drives opens, clicks, and sales.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  },
  { 
    id: 8, 
    title: "Cybersecurity Essentials for Modern Websites", 
    category: "Technology", 
    date: "Apr 18, 2026", 
    read: "10 min", 
    excerpt: "Website security is critical in 2026. From SSL certificates to SQL injection prevention, learn the essential security measures every website needs to protect user data and maintain trust.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
  },
  { 
    id: 9, 
    title: "Content Marketing: Creating Value That Ranks", 
    category: "Digital Marketing", 
    date: "Apr 15, 2026", 
    read: "9 min", 
    excerpt: "Quality content is the foundation of digital marketing success. Discover how to create content that resonates with your audience, ranks in search engines, and establishes your brand as an industry authority.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop"
  },
  { 
    id: 10, 
    title: "The Rise of Voice Search and Conversational AI", 
    category: "Technology", 
    date: "Apr 12, 2026", 
    read: "7 min", 
    excerpt: "Voice assistants are changing how users search for information. Learn how to optimize your content for voice search, understand natural language processing, and prepare for the conversational web.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop"
  },
  { 
    id: 11, 
    title: "E-commerce UX: Designing for Maximum Conversions", 
    category: "Design", 
    date: "Apr 8, 2026", 
    read: "11 min", 
    excerpt: "Every element of your e-commerce site affects conversion rates. From product pages to checkout flows, learn the UX principles that reduce cart abandonment and increase sales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  { 
    id: 12, 
    title: "Building a Strong Brand Identity in the Digital Age", 
    category: "Business", 
    date: "Apr 5, 2026", 
    read: "8 min", 
    excerpt: "Your brand is more than a logo. Discover how to create a cohesive brand identity that resonates across all digital touchpoints, from your website to social media presence.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
];

function Blog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<typeof categories[number]>("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCat = cat === "All" || p.category === cat;
      const matchesQ = q === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [q, cat]);

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={<>Field notes from the <span className="text-gradient-red">studio</span>.</>}
        subtitle="Essays, case studies and opinions on design, engineering and creative strategy."
      />

      {/* Search + categories */}
      <section className="py-10 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className="w-full glass rounded-full pl-11 pr-5 py-3 text-sm outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  cat === c ? "bg-primary text-primary-foreground shadow-[0_0_16px_var(--glow-red)]" : "glass hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && cat === "All" && q === "" && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Link to="/blog/$postId" params={{ postId: String(featured.id) }} className="group grid md:grid-cols-5 gap-6 items-center glass rounded-3xl overflow-hidden p-4 neon-border-hover">
                <div className="md:col-span-2 aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={featured.image} 
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-3 p-4 md:p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">Featured · {featured.category}</span>
                  <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight group-hover:text-gradient-red transition-all">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.read}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {rest.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No articles match your search.</div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 gap-6">
              {rest.map((p) => (
                <motion.div key={p.id} variants={itemVariants}>
                  <Link to="/blog/$postId" params={{ postId: String(p.id) }} className="group flex flex-col sm:flex-row gap-5 glass rounded-2xl p-4 neon-border-hover">
                    <div className="sm:w-64 flex-shrink-0 aspect-[4/3] rounded-xl overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-primary">{p.category}</span>
                        <h3 className="mt-2 font-display text-2xl font-semibold leading-snug group-hover:text-gradient-red transition-all">{p.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground font-mono uppercase tracking-wider">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                        </div>
                        <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Read Article <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </>
  );
}
