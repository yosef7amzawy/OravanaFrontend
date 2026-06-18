import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { PROJECT_TYPES, type ProjectTypeSlug } from "@/lib/service-mapping";

export const Route = createFileRoute("/contact")({
  component: Contact,
  validateSearch: (search: Record<string, unknown>) => ({
    type: typeof search.type === "string" ? (search.type as ProjectTypeSlug) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — ORAVANA" },
      { name: "description", content: "Start a project with ORAVANA — AI, SaaS, branding and premium digital products." },
    ],
  }),
});

function Contact() {
  const { type } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [accountKind, setAccountKind] = useState<"personal" | "company">("personal");
  const initialType =
    type && PROJECT_TYPES.some((p) => p.slug === type) ? type : PROJECT_TYPES[0].slug;
  const [projectType, setProjectType] = useState<ProjectTypeSlug>(initialType);
  const whatsappMessage = encodeURIComponent(
    "Hello Oravana Studio! 👋\n\nI visited your website and I'm interested in your services.\n\nCould you please provide me with more information about:\n- Available services & pricing\n- Project timeline\n- How we can work together\n\nLooking forward to hearing from you! 🚀"
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 py-14 md:py-24 text-center">
          <SectionLabel>// Contact</SectionLabel>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-display font-semibold">
            Let's build something <span className="text-gradient-purple">extraordinary</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Tell us about your project. We typically reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6 pb-28">
        <div className="grid lg:grid-cols-5 gap-8">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="text-[13px] uppercase tracking-widest text-muted-foreground">Account type</label>
              <div className="mt-2 inline-flex rounded-full border border-border/60 bg-surface/40 p-1">
                {(["personal", "company"] as const).map((kind) => (
                  <button
                    key={kind}
                    type="button"
                    onClick={() => setAccountKind(kind)}
                    className={`px-5 py-2 text-sm rounded-full transition-all ${
                      accountKind === kind
                        ? "bg-[var(--gradient-primary)] text-primary-foreground glow-purple"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {kind === "personal" ? "Personal" : "Company"}
                  </button>
                ))}
              </div>
            </div>
            {accountKind === "company" && (
              <div className="animate-fade-up">
                <label className="text-[13px] uppercase tracking-widest text-muted-foreground">Company name</label>
                <input
                  name="company"
                  placeholder="Enter company name"
                  className="mt-2 w-full bg-surface/40 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/60"
                />
              </div>
            )}
            <div>
              <label className="text-[13px] uppercase tracking-widest text-muted-foreground">Project type</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value as ProjectTypeSlug)}
                className="mt-2 w-full bg-surface/40 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
              >
                {PROJECT_TYPES.map((p) => (
                  <option key={p.slug} value={p.slug}>{p.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[13px] uppercase tracking-widest text-muted-foreground">Tell us about your project</label>
              <textarea
                rows={5}
                placeholder="A few sentences about your goals, timeline and budget."
                className="mt-2 w-full bg-surface/40 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-medium glow-purple"
            >
              {sent ? "Thanks — we'll be in touch." : "Send message"} <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border/60" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Or</span>
              <div className="h-px flex-1 bg-border/60" />
            </div>

            <div className="flex justify-center">
              <a
                href={`https://wa.me/201140422608?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-7 py-3.5 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/20 transition shadow-[0_0_30px_-10px_#25D366]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat via WhatsApp Instantly
              </a>
            </div>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <ContactCard 
              icon={Mail} 
              title="Email" 
              value="oravanacompany@gmail.com" 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=oravanacompany@gmail.com" 
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              value="Chat on WhatsApp"
              href={`https://wa.me/201140422608?text=${whatsappMessage}`}
            />
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold">Studio</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A remote-first creative studio delivering premium digital products worldwide. We collaborate async by default and connect live when it counts.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[13px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full bg-surface/40 border border-border/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block glass rounded-2xl p-6 hover:border-primary/40 transition"
    >
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center glow-purple">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-[13px] uppercase tracking-widest text-muted-foreground">{title}</p>
          <p className="mt-1 font-display font-medium">{value}</p>
        </div>
      </div>
    </a>
  );
}