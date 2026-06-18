import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/oravana-mark.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-20 md:mt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ORAVANA" className="h-14 w-14 object-contain drop-shadow-[0_0_18px_oklch(0.65_0.22_295_/_0.7)]" />
              <span className="font-display font-semibold text-xl tracking-[0.15em]">ORAVANA</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A creative technology studio merging AI, software engineering and design
              to craft premium digital experiences for the future.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Studio</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Capabilities</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>AI Solutions</li>
              <li>SaaS Platforms</li>
              <li>Brand & UI/UX</li>
              <li>Automation</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ORAVANA. All rights reserved.</p>
          <p>Where Creativity Meets Technology.</p>
        </div>
      </div>
    </footer>
  );
}
