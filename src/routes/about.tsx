import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Target, Eye, Heart, Compass, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — ORAVANA" },
      { name: "description", content: "ORAVANA is a creative technology studio merging AI, software and design to build intelligent digital experiences." },
    ],
  }),
});

const values = [
  { icon: Target, t: "Mission", d: "Empower ambitious teams with AI-driven products that compound their advantage." },
  { icon: Eye, t: "Vision", d: "Redefine digital experiences through the fusion of intelligence and craft." },
  { icon: Heart, t: "Values", d: "Curiosity, craft, candor and shipping. We measure ourselves by what gets used." },
  { icon: Compass, t: "Philosophy", d: "Design and engineering aren't separate disciplines — they're one continuous craft." },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 py-16 md:py-28 text-center">
          <SectionLabel>// About ORAVANA</SectionLabel>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-display font-semibold leading-[1.05]">
            A studio shaping the <br /><span className="text-gradient-purple">next generation</span> of digital.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We started ORAVANA with one belief — that the most extraordinary products
            of the next decade will be designed, engineered and powered by AI in equal measure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel>// Our story</SectionLabel>
            <h2 className="mt-6 text-4xl font-display font-semibold">From craft to <span className="text-gradient-purple">intelligence</span>.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>ORAVANA was founded by designers and engineers who refused to choose between beauty and intelligence.</p>
            <p>Over the years we've built AI products, SaaS platforms, brand systems and digital experiences for founders, operators and global teams.</p>
            <p>Today, we operate as a single studio — strategy, design, engineering and AI under one roof.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.t} className="glass rounded-2xl p-8 hover:bg-primary/10 transition">
              <div className="h-12 w-12 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center glow-purple">
                <v.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-xl">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-6 py-16 md:py-28 text-center">
        <SectionLabel>// Future</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-display font-semibold">
          We're building toward a future where every product is <span className="text-gradient-purple">intelligent by default</span>.
        </h2>
        <div className="mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-primary)] px-7 py-3.5 text-sm font-medium glow-purple">
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
