import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Brain, Code2, Palette,
  Zap, Layers,
  Rocket, ShieldCheck, Cpu, Gauge, Brush, Video, Box,
} from "lucide-react";
import heroOrb from "@/assets/oravana-mark.png";
import clinicLogin from "@/assets/clinic-login.jpg";
import carProject from "@/assets/IMG-20250523-WA0076.jpg";
import elRadwaClinic from "@/assets/287e4b154478923_634339b70e005.gif";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Modal } from "@/components/site/Modal";
import { SERVICE_TITLE_TO_SLUG } from "@/lib/service-mapping";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ORAVANA — Intelligent Digital Experiences" },
      { name: "description", content: "Premium creative technology studio building AI-powered software, branding and digital products." },
    ],
  }),
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Performant web apps, APIs and dashboards built on modern stacks.", hasModal: true, modalCategory: "web" },
  { icon: Brain, title: "AI Solutions", desc: "Custom AI agents, assistants and intelligent automations.", hasModal: false },
  { icon: Layers, title: "SaaS Platforms", desc: "Scalable multi-tenant products engineered for growth.", hasModal: false },
  { icon: Palette, title: "UI/UX Design", desc: "Premium interfaces with sharp visual systems.", hasModal: false },
  { icon: Sparkles, title: "Branding", desc: "Distinct brand identities for ambitious companies.", hasModal: true, modalCategory: "branding" },
  { icon: Brush, title: "Graphic Design", desc: "Logos, visual identity and print designs for bold brands.", hasModal: true, modalCategory: "graphic" },
  { icon: Video, title: "Motion", desc: "Reels, video editing and animated content that captivates.", hasModal: true, modalCategory: "video" },
  { icon: Box, title: "3D Design", desc: "3D visuals, product renders and immersive digital art.", hasModal: true, modalCategory: "3d" },
];

const why = [
  { icon: Cpu, title: "AI-powered workflows", desc: "Every project ships with intelligence baked in." },
  { icon: Zap, title: "Fast delivery", desc: "Sharp scope, weekly drops, no slow handoffs." },
  { icon: Sparkles, title: "Premium design", desc: "Awwwards-grade detail on every surface." },
  { icon: Gauge, title: "Scalable systems", desc: "Architectures that grow with your traction." },
  { icon: ShieldCheck, title: "Modern security", desc: "Hardened by default, audited continuously." },
  { icon: Rocket, title: "Launch ready", desc: "From idea to public launch in weeks, not months." },
];

const projects = [
  {
    img: clinicLogin,
    title: "Clinic Management System",
    tag: "Web App — Internal Medicine",
    desc: "Full-stack clinic system handling appointments, patient records and payment tracking.",
    link: "https://clinic-project-pi-seven.vercel.app/",
    portfolioId: "clinic-management-system-internal-medicine",
  },
  {
    img: carProject,
    title: "Mercedes CLA — 3D Showcase",
    tag: "3D Design — Branding",
    desc: "Premium 3D product visualization for a luxury automotive brand.",
    link: "",
    portfolioId: "mercedes-cla-3d-showcase",
  },
  {
    img: elRadwaClinic,
    title: "El Radwa Clinic — Social Media",
    tag: "Graphic Design",
    desc: "Creative social media post featuring 3D tooth composition and bold Arabic typography.",
    link: "",
    portfolioId: "el-radwa-clinic-social-media-design",
  },
];

const stats = [
  { v: "20+", l: "Projects shipped" },
  { v: "10+", l: "Global clients" },
  { v: "99%", l: "Satisfaction" },
  { v: "24/7", l: "AI powered" },
];

const process = [
  { n: "01", t: "Discovery", d: "Goals, audience, technical landscape." },
  { n: "02", t: "Planning", d: "Roadmap, scope, success metrics." },
  { n: "03", t: "Design", d: "Visual system & high-fidelity prototypes." },
  { n: "04", t: "Development", d: "Engineering with weekly demos." },
  { n: "05", t: "Launch", d: "Deployment, analytics, iteration." },
];

const testimonials = [
  { q: "ORAVANA shipped a product that felt three years ahead of our competitors.", r: "Birman Company Owner , Cairo" },
  { q: "Most thoughtful team we've worked with — design, code and AI in one lane.", r: "Bepan Company Owner , Cairo" },
  { q: "They turned a vague idea into a polished SaaS in eight weeks.", r: "Arabian Drive Company Owner, Cairo" },
];

const faqs = [
  { q: "What types of projects do you take on?", a: "AI products, SaaS platforms, premium websites and brand systems for ambitious teams." },
  { q: "How long does a typical engagement last?", a: "Most projects ship between 4 and 12 weeks depending on scope and complexity." },
  { q: "Do you offer post-launch support?", a: "Yes — we offer ongoing retainers covering engineering, design and AI improvements." },
  { q: "Can you work with our existing team?", a: "Absolutely. We embed seamlessly with in-house product, design and engineering teams." },
];

const modalContent: Record<string, { title: string; portfolioCategory: string }> = {
  web: { title: "Web Development", portfolioCategory: "web" },
  branding: { title: "Branding", portfolioCategory: "branding" },
  graphic: { title: "Graphic Design", portfolioCategory: "graphic" },
  video: { title: "Motion", portfolioCategory: "video" },
  "3d": { title: "3D Design", portfolioCategory: "3d" },
};

function Home() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const currentModal = activeModal ? modalContent[activeModal] : null;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-2 pb-20 sm:pt-4 sm:pb-28 md:pt-8 md:pb-40">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <SectionLabel>// AI Creative Studio</SectionLabel>
              <h1 className="mt-6 text-[2.4rem] sm:text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-display font-semibold leading-[1.05] tracking-tight">
                We build <span className="text-gradient-purple">intelligent</span><br />
                digital experiences.
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                AI-powered systems, branding, software and digital products
                designed for the future — crafted by a studio obsessed with detail.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  search={{} as any}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-medium text-primary-foreground glow-purple hover:opacity-90 transition"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  search={{} as any}
                  className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white/10 transition"
                >
                  View portfolio
                </Link>
              </div>
              <div className="mt-14 text-xs uppercase tracking-[0.2em] text-muted-foreground/70 font-mono">
                // Powered by modern tech stack: Next.js • React • AI Integrations
              </div>
            </div>
            <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl animate-pulse-glow" />
                <img
                  src={heroOrb}
                  alt="ORAVANA logo"
                  className="relative w-full h-full object-contain p-6 drop-shadow-[0_0_70px_oklch(0.65_0.22_295_/_0.8)] animate-float"
                  width={1536}
                  height={1536}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SHORT */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>// About</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold leading-tight">
              A studio at the <span className="text-gradient-purple">intersection</span> of AI, design and engineering.
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              ORAVANA is a creative technology studio merging artificial intelligence,
              software engineering and design to craft premium digital experiences.
            </p>
            <p>
              We partner with ambitious founders and operators to ship products that
              feel three years ahead of the market — not just polished, but intelligent.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 group">
              Read our story <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>// Services</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
              What we <span className="text-gradient-purple">build</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From AI products to brand systems — full-stack creative technology under one roof.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const slug = SERVICE_TITLE_TO_SLUG[s.title] ?? "other";
            const cardInner = (
              <>
                <div className="h-12 w-12 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center mb-5 glow-purple">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </>
            );
            const cardClass = "group text-left w-full glass rounded-2xl p-6 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1";
            if (s.hasModal && s.modalCategory) {
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActiveModal(s.modalCategory!)}
                  className={cardClass}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {cardInner}
                </button>
              );
            }
            return (
              <Link
                key={s.title}
                to="/contact"
                search={{ type: slug } as any}
                className={cardClass}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {cardInner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-16 md:py-28">
        <div className="max-w-2xl">
          <SectionLabel>// Why ORAVANA</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
            Built for teams that <span className="text-gradient-purple">expect more</span>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-3xl overflow-hidden glass">
          {why.map((w) => (
            <div key={w.title} className="bg-background/60 p-8 hover:bg-primary/5 transition-colors">
              <w.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display font-semibold text-lg">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>// Featured Work</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
              Selected <span className="text-gradient-purple">projects</span>.
            </h2>
          </div>
          <Link
            to="/portfolio"
            search={{} as any}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link
              key={p.title}
              to="/portfolio"
              search={{ scrollTo: p.portfolioId } as any}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1280}
                  height={800}
                />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-[0.18em] text-primary">{p.tag}</span>
                <h3 className="mt-2 font-display font-semibold text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                {p.link && (
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary">
                    Live preview <ArrowUpRight className="h-3 w-3" />
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l}>
                <p className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gradient-purple">{s.v}</p>
                <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-16 md:py-28">
        <div className="max-w-2xl mb-14">
          <SectionLabel>// Process</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
            From idea to <span className="text-gradient-purple">launch</span>.
          </h2>
        </div>
        <div className="relative grid md:grid-cols-5 gap-6">
          <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block" />
          {process.map((p) => (
            <div key={p.n} className="relative">
              <div className="h-12 w-12 rounded-full bg-[var(--gradient-primary)] glow-purple flex items-center justify-center font-display text-sm font-semibold">
                {p.n}
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20">
        <SectionLabel>// Testimonials</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold max-w-2xl">
          What our <span className="text-gradient-purple">partners</span> say.
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.q} className="glass rounded-2xl p-8">
              <blockquote className="text-lg leading-relaxed">"{t.q}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/40">
                <p className="font-display font-semibold">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 sm:px-6 py-16 md:py-28">
        <div className="text-center mb-14">
          <SectionLabel>// FAQ</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
            Common <span className="text-gradient-purple">questions</span>.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="glass rounded-2xl p-6 group">
              <summary className="cursor-pointer font-display font-medium text-lg flex justify-between items-center list-none">
                {f.q}
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 pb-28">
        <div className="relative glass-strong rounded-3xl p-8 sm:p-12 md:p-20 overflow-hidden text-center">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <SectionLabel>// Let's build</SectionLabel>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-display font-semibold leading-tight">
              Let's build something <br /><span className="text-gradient-purple">extraordinary</span>.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">
              Tell us about your project. We'll get back within 24 hours with a tailored plan.
            </p>
            <div className="mt-10 flex justify-center flex-wrap gap-3">
              <Link
                to="/contact"
                search={{} as any}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-8 py-4 text-sm font-medium text-primary-foreground glow-purple"
              >
                Book a call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-medium"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <Modal
        open={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={currentModal?.title ?? ""}
      >
        <p className="text-muted-foreground">What would you like to do?</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveModal(null);
              navigate({ to: "/contact", search: { type: activeModal ?? "other" } as any });
            }}
            className="rounded-2xl bg-[var(--gradient-primary)] glow-purple px-5 py-5 text-left hover:opacity-90 transition"
          >
            <p className="font-display font-semibold text-base text-primary-foreground">Start New Project</p>
            <p className="mt-1 text-xs text-primary-foreground/80">Brief us and get a tailored plan in 24h.</p>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveModal(null);
              navigate({ to: "/portfolio", search: { category: currentModal?.portfolioCategory as any, scrollTo: undefined } });
            }}
            className="rounded-2xl glass px-5 py-5 text-left hover:bg-primary/10 hover:border-primary/40 transition"
          >
            <p className="font-display font-semibold text-base">View Previous Projects</p>
            <p className="mt-1 text-xs text-muted-foreground">
              See selected {currentModal?.title.toLowerCase()} case studies.
            </p>
          </button>
        </div>
      </Modal>
    </>
  );
}