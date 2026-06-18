export type ProjectTypeSlug =
  | "web"
  | "ai"
  | "saas"
  | "design"
  | "branding"
  | "marketing"
  | "automation"
  | "digital-products"
  | "video"
  | "graphic"
  | "3d"
  | "other";

export const PROJECT_TYPES: { slug: ProjectTypeSlug; label: string }[] = [
  { slug: "web", label: "Web Applications & Programming (برمجة ومواقع)" },
  { slug: "ai", label: "AI Solutions" },
  { slug: "saas", label: "SaaS Platforms" },
  { slug: "design", label: "UI/UX Design" },
  { slug: "branding", label: "Graphic Design & Branding (جرافيك وتصاميم)" },
  { slug: "graphic", label: "Graphic Design (جرافيك ديزاين)" },
  { slug: "video", label: "Video Editing & Motion (مونتاج وفيديو)" },
  { slug: "3d", label: "3D Design (ثري دي)" },
  { slug: "marketing", label: "Marketing & Social Media (ماركتينج)" },
  { slug: "automation", label: "Automation" },
  { slug: "digital-products", label: "Digital Products (منتجات رقمية)" },
  { slug: "other", label: "Other (خيارات أخرى)" },
];

export const SERVICE_TITLE_TO_SLUG: Record<string, ProjectTypeSlug> = {
  "Web Development": "web",
  "Programming": "web",
  "Web Applications": "web",
  "APIs & Backend Systems": "web",
  "Dashboards": "web",
  "SaaS Platforms": "saas",
  "Performance Engineering": "web",
  "Website Templates": "web",
  "AI Solutions": "ai",
  "AI Automation": "ai",
  "Chatbots & Assistants": "ai",
  "AI Integrations": "ai",
  "Custom Agents": "ai",
  "Workflow Automation": "ai",
  "AI Prompt Packs": "ai",
  "Branding & Design": "branding",
  "Brand Identity": "branding",
  "UI/UX Design": "design",
  "Motion Graphics": "video",
  "Social Design": "branding",
  "Design Systems": "design",
  "Branding": "branding",
  "Branding Kits": "branding",
  "Graphic Design": "graphic",
  "LOGO": "graphic",
  "Visual Identity": "graphic",
  "Print Designs": "graphic",
  "Company Profile": "graphic",
  "Motion": "video",
  "3D Design": "3d",
  "Marketing": "marketing",
  "SEO": "marketing",
  "Content Strategy": "marketing",
  "Paid Ads": "marketing",
  "Conversion Funnels": "marketing",
  "Analytics": "marketing",
  "Digital Products": "digital-products",
  "UI Kits": "digital-products",
  "Notion Systems": "digital-products",
  "Automation": "automation",
};

export type PortfolioCategory =
  | "all"
  | "web"
  | "ai"
  | "saas"
  | "branding"
  | "graphic"
  | "video"
  | "3d";

export const PORTFOLIO_CATEGORIES: { slug: PortfolioCategory; label: string }[] = [
  { slug: "all", label: "All Work" },
  { slug: "web", label: "Web Development" },
  //{ slug: "ai", label: "AI Solutions" },
  { slug: "saas", label: "SaaS" },
  { slug: "branding", label: "Branding" },
  { slug: "graphic", label: "Graphic Design" },
  { slug: "video", label: "Motion" },
  { slug: "3d", label: "3D Design" },
];

export const PROJECT_TYPE_TO_CATEGORY: Record<ProjectTypeSlug, PortfolioCategory> = {
  web: "web",
  ai: "ai",
  saas: "saas",
  design: "web",
  branding: "branding",
  marketing: "branding",
  automation: "web",
  "digital-products": "branding",
  video: "video",
  graphic: "graphic",
  "3d": "3d",
  other: "all",
};