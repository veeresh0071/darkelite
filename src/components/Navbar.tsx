import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoImage from "./image1.png";
import { ThemeToggle } from "./ThemeToggle";

const services = [
  { to: "/services/website-development", label: "Website Development" },
  { to: "/services/app-development", label: "App Development" },
  { to: "/services/ui-ux-designing", label: "UI/UX Designing" },
  { to: "/services/digital-marketing", label: "Digital Marketing" },
  { to: "/services/graphic-designing", label: "Graphic Designing" },
  { to: "/services/animation", label: "2D / 3D Animation" },
  { to: "/services/production", label: "Production" },
  { to: "/services/print", label: "Digital & Offset Print" },
] as const;

type NavLink = { to: string; label: string; hasMenu?: boolean };
const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/career", label: "Career" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative grid place-items-center h-8 w-auto bg-white/10 rounded-lg px-1.5 backdrop-blur-sm">
              <img src={logoImage} alt="Dark Elite Creations Logo" className="h-full w-auto object-contain brightness-125 contrast-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {links.map((l) =>
              l.hasMenu ? (
                <div
                  key={l.to}
                  className="relative"
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link
                    to={l.to as any}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                    activeProps={{ className: "text-foreground" }}
                  >
                    {l.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  <AnimatePresence>
                    {menuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                      >
                        <div className="glass-strong rounded-2xl p-2 min-w-[280px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">
                          {services.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              className="block px-4 py-2.5 text-sm rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to as any}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_var(--glow-red)] hover:shadow-[0_0_36px_var(--glow-red-strong)] transition-all hover:scale-[1.03]"
            >
              Start a Project
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <button
              className="grid place-items-center h-10 w-10 rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3 max-h-[80vh] overflow-y-auto"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to as any}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <div className="my-2 border-t border-white/10" />
              <p className="px-4 pt-2 pb-1 text-xs uppercase tracking-wider text-muted-foreground">Services</p>
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm rounded-lg text-foreground/70 hover:text-foreground hover:bg-white/5"
                >
                  {s.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
