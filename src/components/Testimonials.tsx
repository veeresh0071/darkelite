import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Abhishek Sunagar",
    avatar: "A",
    time: "a year ago",
    rating: 5,
    text: "Our online sales have increased by 40% since partnering with Dark Elite Creations. Their digital marketing expertise is truly impressive.",
    color: "from-red-500 to-orange-500"
  },
  {
    name: "Ganesh Mane",
    avatar: "G",
    time: "a year ago",
    rating: 5,
    text: "Superb",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Babu Magadum",
    avatar: "B",
    time: "a year ago",
    rating: 5,
    text: "Outstanding service and exceptional results. The team delivered beyond our expectations.",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Basavaraj Magadum",
    avatar: "B",
    time: "a year ago",
    rating: 5,
    text: "They developed a custom app for us that's intuitive and reliable. The app has been well received by our users, and we're very happy with the outcome.",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Prateek Naganur",
    avatar: "P",
    time: "a year ago",
    rating: 5,
    text: "Exceptional graphics design service! The team delivered creative and eye-catching designs that perfectly captured our brand identity. Their attention to detail is remarkable.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Mayur K",
    avatar: "M",
    time: "a year ago",
    rating: 5,
    text: "Our social media presence has never been stronger. Dark Elite Creations' team is proactive and innovative, constantly coming up with fresh ideas.",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Muttu Hiremath",
    avatar: "M",
    time: "a year ago",
    rating: 5,
    text: "Dark Elite Creations built a website that not only looks fantastic but also performs flawlessly. The process was smooth, and the team was very professional.",
    color: "from-violet-500 to-purple-500"
  },
  {
    name: "Neha Vinchurkar",
    avatar: "N",
    time: "a year ago",
    rating: 5,
    text: "The app development service was excellent. They delivered a high-quality product on time and within budget. Their support throughout the process was outstanding.",
    color: "from-pink-500 to-rose-500"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const cardWidth = scrollContainer.scrollWidth / testimonials.length;
      const newIndex = Math.round(scrollLeft / (cardWidth * itemsPerPage));
      setCurrentIndex(Math.min(newIndex, maxIndex));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [maxIndex, testimonials.length, itemsPerPage]);

  const scrollToIndex = (index: number) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const cardWidth = scrollContainer.scrollWidth / testimonials.length;
    scrollContainer.scrollTo({
      left: index * cardWidth * itemsPerPage,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial)" }} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              ⏤ TESTIMONIALS
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
              Happy Clients, <span className="text-gradient-red">Successful Results</span>
            </h2>
          </Reveal>
        </div>

        {/* Company Info Card */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <Reveal className="flex items-center gap-4">
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center">
                <svg className="h-8 w-8 text-background" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-background border-2 border-primary grid place-items-center">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">Dark Elite Creations</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-lg">4.9</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                Based on 37 reviews
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://www.google.com/search?q=dark+elite+creations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm font-medium neon-border-hover group"
            >
              <span className="text-xs">powered by</span>
              <svg className="h-5 w-auto" viewBox="0 0 272 92" fill="none">
                <text x="0" y="70" className="fill-foreground font-bold" style={{ fontSize: "80px", fontFamily: "Arial" }}>Google</text>
              </svg>
              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </Reveal>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-14px)] snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % itemsPerPage) * 0.1 }}
              >
                <div className="glass rounded-2xl p-6 h-full neon-border-hover group select-none">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.color} grid place-items-center font-display font-bold text-white text-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                      </div>
                    </div>
                    <svg className="h-5 w-5 text-muted-foreground/50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
