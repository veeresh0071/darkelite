import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Github, Twitter, Linkedin, Instagram, Send, Check, Facebook, Youtube } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dark Elite Creations" },
      { name: "description", content: "Tell us about your project. We respond within 24 hours with a tailored plan." },
      { property: "og:title", content: "Contact Dark Elite Creations" },
      { property: "og:description", content: "Start a project with a senior creative technology studio." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", mobile: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", mobile: "", message: "" });
    }, 4000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient-red">unforgettable</span>.</>}
        subtitle="Tell us about your project — we respond within 24 hours."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} className="glass rounded-3xl p-8 md:p-10 neon-border space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <Field label="Mobile Number" type="tel" value={form.mobile} onChange={(v) => setForm({ ...form, mobile: v })} required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-mono text-muted-foreground mb-2">Tell us about your project</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Goals, timeline, anything we should know..."
                  className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                disabled={sent}
                className="w-full btn-primary justify-center disabled:opacity-80"
              >
                {sent ? <><Check className="h-4 w-4" /> Message Sent — We'll be in touch</> : <>Send Message <Send className="h-4 w-4" /></>}
              </motion.button>
            </form>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1} className="lg:col-span-2 space-y-4">
            <ContactCard icon={<Mail className="h-5 w-5" />} label="Email" value="hello@darkelitecreations.com" href="mailto:hello@darkelitecreations.com" />
            <ContactCard icon={<Mail className="h-5 w-5" />} label="Email (Support)" value="Darkelitecreations@gmail.com" href="mailto:Darkelitecreations@gmail.com" />
            <ContactCard icon={<Phone className="h-5 w-5" />} label="Call" value="+91 8073674176" href="tel:+918073674176" />
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              label="WhatsApp"
              value="Message instantly"
              href="https://wa.me/918073674176"
              accent
            />
            <ContactCard icon={<MapPin className="h-5 w-5" />} label="Studios" value="CTS No. 4855/78 3rd floor, Oneness Empire, T1-A, Sadashiv Nagar, Belagavi, Karnataka 590019" href="https://www.google.com/maps/search/?api=1&query=CTS+No.+4855%2F78+3rd+floor,+Oneness+Empire,+T1-A,+Sadashiv+Nagar,+Belagavi,+Karnataka+590019" />

            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow</p>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/profile.php?id=61551983787864" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/darkelitecreations/" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/100664240/admin/dashboard/" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://www.youtube.com/@DEcreations" target="_blank" rel="noreferrer" className="grid place-items-center h-11 w-11 rounded-xl glass hover:border-primary/50 hover:text-primary transition-all">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden glass neon-border" style={{ height: 420 }}>
              <iframe
                title="Belagavi Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.8!2d74.5!3d15.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66e4c8f3e3e3%3A0x1234567890abcdef!2sOneness%20Empire%2C%20Sadashiv%20Nagar%2C%20Belagavi%2C%20Karnataka%20590019!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918073674176"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_0_30px_var(--glow-red-strong)] hover:scale-110 transition-transform animate-[float_6s_ease-in-out_infinite]"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest font-mono text-muted-foreground mb-2">{label}{required && " *"}</label>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors"
      />
    </div>
  );
}

function ContactCard({ icon, label, value, href, accent }: { icon: React.ReactNode; label: string; value: string; href?: string; accent?: boolean }) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
      className={`group flex items-center gap-4 glass rounded-2xl p-5 neon-border-hover transition-all ${accent ? "border-primary/40" : ""}`}
    >
      <div className={`grid place-items-center h-12 w-12 rounded-xl shrink-0 ${accent ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground" : "bg-primary/10 text-primary"}`}>
        {icon}
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
      </div>
    </Wrap>
  );
}
