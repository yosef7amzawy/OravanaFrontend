import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { ArrowUpRight, Play } from "lucide-react";
import { useState, useEffect } from "react";
import carProject from "@/assets/IMG-20250523-WA0076.jpg";
import perfumeProject from "@/assets/IMG-20250708-WA0131.jpg";
import youtubeThumb from "@/assets/IMG-20250629-WA0073.jpg";
import bepadBranding from "@/assets/ca053b202254725_668317801a1a9.jpg";
import birmanBranding from "@/assets/de7ba201737481_667a24f3cdb92.jpg";
import arabianDrive from "@/assets/43bb81178220501_64e47d73830db.png";
import arabianDrive2 from "@/assets/678089178220501_64e47d7392575.png";
import fayazPharmacy from "@/assets/0ebf2a176153161_64c001c759948.png";
import fayazPharmacy2 from "@/assets/e98d30176153161_64c001c753e72.png";
import elRadwaClinic from "@/assets/287e4b154478923_634339b70e005.gif";
import elRadwaClinic2 from "@/assets/d98152154478923_634339b70c510.png";
import motionThumbnail from "@/assets/motion-thumbnail.png";
import motionVideo from "@/assets/VID-20250325-WA0037.mp4";
import clinicLogin from "@/assets/clinic-login.jpg";
import clinicReception from "@/assets/clinic-reception.jpg";
import clinicDoctor from "@/assets/clinic-doctor.jpg";
import { PORTFOLIO_CATEGORIES, type PortfolioCategory } from "@/lib/service-mapping";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? (search.category as PortfolioCategory) : undefined,
    scrollTo: typeof search.scrollTo === "string" ? search.scrollTo : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Portfolio — ORAVANA" },
      { name: "description", content: "Selected case studies from ORAVANA — AI products, SaaS platforms and premium digital experiences." },
    ],
  }),
});

type Project = {
  img: string;
  video?: string;
  title: string;
  tag: string;
  year: string;
  desc: string;
  stack: string[];
  result: string;
  liveUrl?: string;
  categories: PortfolioCategory[];
};

const projects: Project[] = [
  {
    img: clinicLogin,
    title: "Clinic Management System — Internal Medicine",
    tag: "Web App — SaaS",
    year: "2026",
    desc: "A full-stack clinic management system for an internal medicine practice. Handles appointment scheduling, patient records, doctor dashboard, reception workflow, and payment tracking — all in one seamless platform.",
    stack: ["React", "ASP.NET Core", "SQL Server", "JWT Auth", "Tailwind CSS"],
    result: "Live & fully operational",
    liveUrl: "https://clinic-project-pi-seven.vercel.app/",
    categories: ["web"],
  },
  {
    img: carProject,
    title: "Mercedes CLA — 3D Showcase",
    tag: "3D Design — Branding & Design",
    year: "2025",
    desc: "Premium 3D product visualization for a luxury automotive brand, featuring dramatic lighting and cinematic composition.",
    stack: ["3D Modeling", "Lighting", "Rendering", "Post-production"],
    result: "Client approved in 1 round",
    categories: ["branding", "3d"],
  },
  {
    img: perfumeProject,
    title: "Shaheen Gold — 3D Billboard",
    tag: "3D Design — Branding & Design",
    year: "2025",
    desc: "Cinematic 3D billboard visualization for Lattafa Pride's Shaheen Gold perfume, blending luxury aesthetics with dramatic urban lighting.",
    stack: ["3D Modeling", "Lighting", "Rendering", "Post-production"],
    result: "Premium brand presence",
    categories: ["branding", "3d"],
  },
  {
    img: motionThumbnail,
    video: motionVideo,
    title: "Motion Graphic — Heat Awareness",
    tag: "Motion — Branding & Design",
    year: "2025",
    desc: "Animated motion graphic raising awareness about heat exhaustion, featuring smooth character animation and vibrant visual storytelling.",
    stack: ["Motion Graphics", "Animation", "Character Design", "After Effects"],
    result: "Viral awareness content",
    categories: ["branding", "video"],
  },
  {
    img: bepadBranding,
    title: "Bepad — Brand Identity",
    tag: "Branding & Design",
    year: "2025",
    desc: "Full brand identity system for Bepad including logo, typography, color palette, and branded merchandise mockups.",
    stack: ["Brand Identity", "Logo Design", "Typography", "Mockups"],
    result: "Complete brand system",
    categories: ["branding", "graphic"],
  },
  {
    img: birmanBranding,
    title: "Birman — Logo Design",
    tag: "Branding & Design",
    year: "2025",
    desc: "Premium logo design for Birman Veterinary Equipment Trading, combining elegant golden typography with a bold animal-inspired monogram.",
    stack: ["Logo Design", "Brand Identity", "Typography", "Mockups"],
    result: "Distinctive brand mark",
    categories: ["branding", "graphic"],
  },
  {
    img: arabianDrive,
    title: "Arabian Drive — Social Media Design",
    tag: "Branding & Design",
    year: "2025",
    desc: "Bold social media post design for Arabian Drive automotive brand, featuring Arabic typography and professional product photography composition.",
    stack: ["Social Media Design", "Typography", "Photo Compositing", "Brand Identity"],
    result: "High engagement post",
    categories: ["branding", "graphic"],
  },
  {
    img: arabianDrive2,
    title: "Arabian Drive — Motorcycle Program",
    tag: "Branding & Design",
    year: "2025",
    desc: "Social media campaign design for Arabian Drive's motorcycle leasing program in partnership with Saudi Fransi Finance.",
    stack: ["Social Media Design", "Typography", "3D Composition", "Brand Identity"],
    result: "Campaign launch success",
    categories: ["branding", "graphic"],
  },
  {
    img: fayazPharmacy,
    title: "Fayaz Pharmacy — Social Media Design",
    tag: "Graphic Design",
    year: "2025",
    desc: "Vibrant social media post for Fayaz Pharmacy promoting vaccination awareness, featuring bold Arabic typography and professional photo compositing.",
    stack: ["Social Media Design", "Photo Compositing", "Typography", "Graphic Design"],
    result: "Strong brand awareness",
    categories: ["graphic"],
  },
  {
    img: fayazPharmacy2,
    title: "Fayaz Pharmacy — Hepatitis Campaign",
    tag: "Graphic Design",
    year: "2025",
    desc: "Creative social media post for Fayaz Pharmacy promoting Hepatitis A vaccination, featuring cinematic photo compositing and bold Arabic typography.",
    stack: ["Social Media Design", "Photo Compositing", "Typography", "Graphic Design"],
    result: "High engagement campaign",
    categories: ["graphic"],
  },
  {
    img: elRadwaClinic,
    title: "El Radwa Clinic — Social Media Design",
    tag: "Graphic Design",
    year: "2025",
    desc: "Creative social media post for El Radwa Dental Clinic featuring 3D tooth composition and bold Arabic typography.",
    stack: ["Social Media Design", "3D Composition", "Typography", "Graphic Design"],
    result: "Strong clinic branding",
    categories: ["graphic"],
  },
  {
    img: elRadwaClinic2,
    title: "El Radwa Clinic — Gum Disease Campaign",
    tag: "Graphic Design",
    year: "2025",
    desc: "Dramatic social media post for El Radwa Dental Clinic warning about gum disease, featuring cinematic 3D composition.",
    stack: ["Social Media Design", "3D Composition", "Typography", "Graphic Design"],
    result: "High awareness campaign",
    categories: ["graphic"],
  },
  {
    img: youtubeThumb,
    title: "مدينة تحت الأهرامات",
    tag: "YouTube — Video Editing",
    year: "2025",
    desc: "High-impact YouTube thumbnail design combining cinematic AI visuals, bold Arabic typography and dramatic lighting for maximum click-through.",
    stack: ["Photoshop", "AI Generation", "Typography", "Color Grading"],
    result: "High CTR design",
    categories: ["video", "graphic"],
  },
];

function Portfolio() {
  const { category, scrollTo } = Route.useSearch();
  const navigate = useNavigate();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [scrollTo]);

  const active: PortfolioCategory =
    category && PORTFOLIO_CATEGORIES.some((c) => c.slug === category) ? category : "all";
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 py-16 md:py-28 text-center">
          <SectionLabel>// Selected work</SectionLabel>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-display font-semibold">
            Products we're <span className="text-gradient-purple">proud of</span>.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            A look at recent collaborations across AI, SaaS, commerce and brand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 pt-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {PORTFOLIO_CATEGORIES.map((c) => {
            const isActive = c.slug === active;
            return (
              <button
                key={c.slug}
                type="button"
                onClick={() => navigate({ to: "/portfolio", search: { category: c.slug as any, scrollTo: undefined } })}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition ${
                  isActive
                    ? "bg-[var(--gradient-primary)] border-transparent text-primary-foreground glow-purple"
                    : "glass border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20 space-y-24">
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground">No projects in this category yet.</p>
        )}
        {filtered.map((p, i) => (
          <article
            key={p.title}
            id={p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-primary/15 blur-3xl opacity-50 group-hover:opacity-80 transition" />
              <div className="relative w-full rounded-3xl overflow-hidden glass flex items-center justify-center bg-white/5" style={{ minHeight: "300px", maxHeight: "480px" }}>
                {p.video && playingVideo === p.title ? (
                  <video src={p.video} autoPlay controls className="w-full object-contain max-h-[480px]" />
                ) : (
                  <>
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full object-contain group-hover:scale-105 transition-transform duration-700 max-h-[480px]"
                      loading="lazy"
                    />
                    {p.video && (
                      <button
                        type="button"
                        onClick={() => setPlayingVideo(p.title)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                      >
                        <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center glow-purple hover:scale-110 transition-transform">
                          <Play className="h-7 w-7 text-white fill-white ml-1" />
                        </div>
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-primary">{p.tag}</span>
                <span>•</span>
                <span>{p.year}</span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-display font-semibold">{p.title}</h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-full glass">{s}</span>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Outcome</p>
                  <p className="mt-1 text-2xl font-display font-semibold text-gradient-purple">{p.result}</p>
                </div>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:text-primary transition"
                  >
                    Live preview <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
        <div className="text-center pt-8">
          <a
            href="https://drive.google.com/drive/folders/1I6tdTJWQlas2GjINxRaPyjE78dcuYA8-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            Click here to see more projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-6 py-14 md:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
          Have a <span className="text-gradient-purple">project</span> in mind?
        </h2>
        <Link
          to="/contact"
          search={{} as any}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-medium glow-purple"
        >
          Let's talk <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}