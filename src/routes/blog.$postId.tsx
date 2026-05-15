import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog/$postId")({
  component: BlogPost,
});

type Post = {
  id: number;
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  authorRole: string;
};

const posts: Record<string, Post> = {
  "1": {
    id: 1,
    title: "The Future of Web Development: AI-Powered Coding Tools",
    category: "Web Development",
    date: "May 10, 2026",
    read: "8 min",
    excerpt: "Explore how artificial intelligence is revolutionizing the way developers write code, from GitHub Copilot to ChatGPT.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
    author: "Dark Elite Team",
    authorRole: "Development Lead",
    content: `
      <p>Artificial intelligence is fundamentally changing how developers write code. Tools like GitHub Copilot, ChatGPT, and other AI-powered assistants are no longer experimental—they're becoming essential parts of the modern developer's toolkit.</p>

      <h2>The Rise of AI Coding Assistants</h2>
      <p>GitHub Copilot, powered by OpenAI's Codex, can suggest entire functions, write boilerplate code, and even help debug complex issues. What once took hours of Stack Overflow searches can now be accomplished in seconds with the right AI prompt.</p>

      <h2>Productivity Gains</h2>
      <p>Studies show that developers using AI coding tools are 55% faster at completing tasks. But it's not just about speed—it's about reducing cognitive load and allowing developers to focus on architecture and problem-solving rather than syntax.</p>

      <h2>The Learning Curve</h2>
      <p>While AI tools are powerful, they require a new skill: prompt engineering. Knowing how to ask the right questions and provide the right context is becoming as important as knowing the programming language itself.</p>

      <h2>Concerns and Limitations</h2>
      <p>AI-generated code isn't perfect. It can introduce security vulnerabilities, perpetuate bad practices, and sometimes produce code that works but isn't optimal. Code review and human oversight remain critical.</p>

      <h2>The Future</h2>
      <p>As these tools evolve, we'll see even deeper integration into IDEs, better understanding of project context, and more sophisticated code generation. The developers who thrive will be those who learn to work alongside AI, not against it.</p>
    `
  },
  "2": {
    id: 2,
    title: "SEO in 2026: What's Changed and What Matters",
    category: "Digital Marketing",
    date: "May 8, 2026",
    read: "10 min",
    excerpt: "Google's algorithm updates continue to evolve. Discover the latest SEO strategies that actually work.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=800&fit=crop",
    author: "Dark Elite Team",
    authorRole: "SEO Specialist",
    content: `
      <p>Search engine optimization in 2026 looks dramatically different than it did just a few years ago. Google's algorithms have become more sophisticated, and the strategies that worked in the past may now be obsolete—or even harmful.</p>

      <h2>Core Web Vitals Are Non-Negotiable</h2>
      <p>Page speed, interactivity, and visual stability are now critical ranking factors. Sites that don't meet Google's Core Web Vitals thresholds are being pushed down in search results, regardless of content quality.</p>

      <h2>E-E-A-T: Experience, Expertise, Authoritativeness, Trust</h2>
      <p>Google added "Experience" to the E-A-T framework. Content creators need to demonstrate first-hand experience with topics they write about. Generic, AI-generated content without real expertise is being filtered out.</p>

      <h2>AI Content Detection</h2>
      <p>While Google claims they don't penalize AI-generated content per se, they do penalize low-quality content. AI content that lacks depth, originality, or human insight is being devalued. The key is using AI as a tool, not a replacement for human expertise.</p>

      <h2>Semantic Search and Intent</h2>
      <p>Keyword stuffing is dead. Google's natural language processing understands context, synonyms, and user intent. Content needs to comprehensively answer questions, not just include keywords.</p>

      <h2>Video and Visual Search</h2>
      <p>Video content is dominating search results. YouTube videos, TikToks, and Instagram Reels are appearing in traditional search results. Visual search through Google Lens is also growing rapidly.</p>

      <h2>Local SEO Evolution</h2>
      <p>For local businesses, Google Business Profile optimization is more important than ever. Reviews, photos, and regular updates significantly impact local search rankings.</p>
    `
  },
  "3": {
    id: 3,
    title: "Responsive Design Best Practices for Modern Websites",
    category: "Design",
    date: "May 5, 2026",
    read: "7 min",
    excerpt: "Mobile-first design is no longer optional. Learn the essential principles of responsive web design.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=800&fit=crop",
    author: "Dark Elite Team",
    authorRole: "UI/UX Designer",
    content: `
      <p>With over 60% of web traffic coming from mobile devices, responsive design isn't just a nice-to-have—it's essential. But responsive design goes beyond simply making things fit on smaller screens.</p>

      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile, then progressively enhance for larger screens. This ensures the core experience works everywhere and prevents the common mistake of trying to cram desktop features onto mobile.</p>

      <h2>Flexible Grids and Layouts</h2>
      <p>Use CSS Grid and Flexbox for layouts that adapt naturally to different screen sizes. Avoid fixed widths and embrace relative units like percentages, viewport units, and rem.</p>

      <h2>Breakpoint Strategy</h2>
      <p>Don't just design for "mobile, tablet, desktop." Design for content. Add breakpoints where your content breaks, not at arbitrary device sizes. Modern devices come in countless sizes.</p>

      <h2>Touch-Friendly Interactions</h2>
      <p>Buttons and interactive elements should be at least 44x44 pixels for easy tapping. Provide adequate spacing between clickable elements to prevent mis-taps.</p>

      <h2>Performance Matters</h2>
      <p>Mobile users often have slower connections. Optimize images, lazy-load content, and minimize JavaScript. A beautiful design means nothing if it takes 10 seconds to load.</p>

      <h2>Testing Across Devices</h2>
      <p>Browser dev tools are helpful, but nothing beats testing on real devices. Different phones handle rendering differently, and touch interactions can't be fully simulated.</p>
    `
  }
};

function BlogPost() {
  const { postId } = Route.useParams();
  const post = posts[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 border-b border-border overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {post.category}
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.read} read</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">{post.author}</span>
                <span className="text-xs">·</span>
                <span>{post.authorRole}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden glass">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-card prose-pre:border prose-pre:border-border
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>

          {/* Share Section */}
          <Reveal delay={0.2}>
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Share this article</h3>
                  <p className="text-sm text-muted-foreground">Help others discover this content</p>
                </div>
                <button className="glass rounded-full p-3 hover:bg-primary/10 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </Reveal>

          {/* Author Bio */}
          <Reveal delay={0.3}>
            <div className="mt-12 glass rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-2xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg font-semibold">{post.author}</h4>
                  <p className="text-sm text-primary mb-2">{post.authorRole}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Part of the creative team at Dark Elite Creations, bringing expertise in design, development, and digital strategy.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
