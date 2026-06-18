import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/oravana-mark.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-[var(--shadow-card)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="ORAVANA" className="h-14 w-14 object-contain drop-shadow-[0_0_18px_oklch(0.65_0.22_295_/_0.75)]" />
            <span className="font-display font-semibold tracking-[0.15em] text-base">
              ORAVANA
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 text-[15px] text-muted-foreground hover:text-foreground transition-colors rounded-full"
                activeProps={{ className: "px-4 py-2 text-[15px] text-foreground rounded-full bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="rounded-full px-5 py-2.5 text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 transition-opacity glow-purple"
            >
              Start Project
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-fade-up">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full px-5 py-3 text-sm font-medium bg-[var(--gradient-primary)] text-center text-primary-foreground"
            >
              Start Project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
