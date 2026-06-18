import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Code2, Brain, Palette, Video, Brush, ArrowRight } from "lucide-react";
import { Modal } from "@/components/site/Modal";
import { SERVICE_TITLE_TO_SLUG } from "@/lib/service-mapping";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — ORAVANA" },
      { name: "description", content: "Programming, AI solutions, branding, video editing and more from ORAVANA." },
    ],
  }),
});

const categories = [
  {
    icon: Code2, name: "Programming",
    portfolioCategory: "web",
    items: ["Web Applications", "APIs & Backend Systems", "Dashboards", "SaaS Platforms", "Performance Engineering", "Website Templates"],
  },
  {
    icon: Brain, name: "AI Solutions",
    portfolioCategory: "ai",
    items: ["AI Automation", "Chatbots & Assistants", "AI Integrations", "Custom Agents", "Workflow Automation", "AI Prompt Packs"],
  },
  {
    icon: Palette, name: "Branding & Design",
    portfolioCategory: "branding",
    items: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Social Design", "Design Systems", "Branding Kits", "3D Design"],
  },
  {
    icon: Brush, name: "Graphic Design",
    portfolioCategory: "graphic",
    items: ["LOGO", "Visual Identity", "Social Media", "Packages Simple (10:15 post)", "Packages Pro (10:15 post)", "Print Designs (Business Card, Flyer, Brochure, Poster, Banner)", "Company Profile"],
  },
  {
    icon: Video, name: "Video Editing",
    portfolioCategory: "video",
    items: ["Reels / TikTok", "Youtube", "Social Media", "Motion Graphic", "Packages Starter", "Packages Growth", "Packages Business", "Packages Premium"],
  },
];

function Services() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openCategory = categories.find((c) => c.name === activeModal);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 py-16 md:py-28 text-center">
          <SectionLabel>// Capabilities</SectionLabel>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-display font-semibold">
            Full-stack <span className="text-gradient-purple">creative technology</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            One studio, every discipline — from intelligent software to brand identity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20 space-y-6">
        {categories.map((c, i) => (
          <div
            key={c.name}
            className="glass rounded-3xl p-6 sm:p-8 md:p-12 grid md:grid-cols-12 gap-8 items-start hover:border-primary/40 transition"
          >
            <div className="md:col-span-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-primary)] flex items-center justify-center glow-purple">
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">/0{i + 1}</span>
              </div>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-display font-semibold">{c.name}</h2>
            </div>
            <ul className="md:col-span-8 grid sm:grid-cols-2 gap-3">
              {c.items.map((it) => {
                return (
                  <li key={it}>
                    <button
                      type="button"
                      onClick={() => setActiveModal(c.name)}
                      className="w-full flex items-center gap-3 p-5 rounded-xl bg-surface/40 border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition group text-left"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-base">{it}</span>
                      {it === "Performance Engineering" && (
                        <span className="ml-auto inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-[11px] font-medium text-primary tracking-wide">
                          Coming Soon
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-6 py-14 md:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
          Need a custom <span className="text-gradient-purple">engagement</span>?
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">We tailor every project to your stage and ambition.</p>
        <Link to="/contact" search={{} as any}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-medium glow-purple"
        >
          Start a conversation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <Modal
        open={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal ?? ""}
      >
        <p className="text-muted-foreground">What would you like to do?</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              const slug = SERVICE_TITLE_TO_SLUG[openCategory?.name ?? ""] ?? "other";
              setActiveModal(null);
              navigate({ to: "/contact", search: { type: slug } as any });
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
              navigate({ to: "/portfolio", search: { category: openCategory?.portfolioCategory as any } });
            }}
            className="rounded-2xl glass px-5 py-5 text-left hover:bg-primary/10 hover:border-primary/40 transition"
          >
            <p className="font-display font-semibold text-base">View Previous Projects</p>
            <p className="mt-1 text-xs text-muted-foreground">See selected {openCategory?.name.toLowerCase()} case studies.</p>
          </button>
        </div>
      </Modal>
    </>
  );
}