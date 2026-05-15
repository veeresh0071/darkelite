import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import logoImage from "./image1.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/50 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid place-items-center h-20 w-auto bg-white/10 rounded-lg px-4 backdrop-blur-sm">
                <img src={logoImage} alt="Dark Elite Creations Logo" className="h-full w-auto object-contain brightness-125 contrast-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A next-generation creative technology studio crafting cinematic digital
              experiences for ambitious brands worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Belagavi, Karnataka 590019</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@darkelitecreations.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 8073674176</p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/services/website-development" className="hover:text-foreground transition-colors">Web Dev</Link></li>
              <li><Link to="/services/app-development" className="hover:text-foreground transition-colors">App Dev</Link></li>
              <li><Link to="/services/ui-ux-designing" className="hover:text-foreground transition-colors">UI/UX</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-foreground transition-colors">Marketing</Link></li>
              <li><Link to="/services/animation" className="hover:text-foreground transition-colors">Animation</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dark Elite Creations — All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61551983787864"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-9 w-9 rounded-lg glass hover:border-primary/50 hover:text-primary transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/darkelitecreations/"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-9 w-9 rounded-lg glass hover:border-primary/50 hover:text-primary transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/100664240/admin/dashboard/"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-9 w-9 rounded-lg glass hover:border-primary/50 hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@DEcreations"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-9 w-9 rounded-lg glass hover:border-primary/50 hover:text-primary transition-all"
              aria-label="YouTube"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
