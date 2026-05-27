"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CloudUpload,
  Code2,
  CreditCard,
  Download,
  FileText,
  Globe2,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Phone,
  Printer,
  QrCode,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Timer,
  TrendingUp,
  Upload,
  Wifi,
  X,
  Zap
} from "lucide-react";
import * as THREE from "three";

type IconComponent = typeof Code2;
type ServiceItem = [string, IconComponent, string];
type PortfolioItem = [string, string, string];
type FeatureItem = [string, IconComponent];
type TestimonialItem = [string, string, string, number];
type StatItem = [string, string];
type RequestResult = {
  trackingId: string;
  status: string;
  nextStep: string;
  whatsappUrl: string;
};
type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const navItems = ["About", "Services", "Portfolio", "Features", "Contact"];

const services: ServiceItem[] = [
  ["Website Design & Development", Code2, "High-converting websites, landing pages, dashboards, and web apps built with modern standards."],
  ["Portfolio Website Creation", Globe2, "Personal and business portfolios with premium storytelling, SEO, and responsive design."],
  ["Printing Services", Printer, "Clean academic, corporate, project, and event printing with dependable finishing."],
  ["Project Typing & Formatting", FileText, "Professional typing, chapter arrangement, references, tables, and academic formatting."],
  ["Online Registration", Wifi, "Fast support for portals, applications, forms, payments, uploads, and account setup."],
  ["Internet Services", CloudUpload, "Reliable digital access for downloads, submissions, research, and online workflows."],
  ["Graphic Design", Palette, "Posters, flyers, social media creatives, banners, business cards, and event visuals."],
  ["DI Printing", Printer, "Sharp direct imaging output for identity materials and everyday business needs."],
  ["CV/Resume Design", BriefcaseBusiness, "ATS-friendly CVs, resumes, cover letters, and profile documents."],
  ["Branding & Business Identity", Sparkles, "Logos, letterheads, brand kits, and business presentation systems."],
  ["Tech Consultation", Bot, "Practical guidance for websites, software, tools, devices, and digital growth."],
  ["Digital Documentation", ClipboardList, "Organized digital files, scanned documents, PDFs, forms, and templates."],
  ["Software Installation", Laptop, "System setup, software installation, activation support, and essential utilities."],
  ["Computer Services", ShieldCheck, "Basic repairs, optimization, troubleshooting, backups, and maintenance support."]
];

const portfolio: PortfolioItem[] = [
  ["Low Glycemic Composite Flour Project", "Nutrition & Food Science Projects", "Research-focused formatting, charts, and presentation assets for functional food science."],
  ["Human Computer Interaction Lecture Material", "Human Computer Interaction Materials", "Structured lecture design with diagrams, examples, and clean academic layouts."],
  ["Estate Office Administration Assignment", "Estate Office Administration Assignments", "Professional assignment formatting with tables, headings, and formal document structure."],
  ["Malnutrition & Immune System Seminar", "Seminar & Presentation Designs", "Cinematic seminar slides with health-focused visual hierarchy and references."],
  ["AI Perfume Vendor Website", "AI-generated Website Projects", "Premium ecommerce concept with fragrance storytelling, product cards, and AI-assisted visuals."],
  ["WhatsApp Companion Web Platform", "Software & Web Development Projects", "Web platform concept for communication support, contacts, and smart workflow tools."],
  ["AB TECH Letterhead Designs", "Letterhead & Branding Designs", "Corporate identity samples with royal blue, gold accents, and print-ready layouts."],
  ["Academic Project Packs", "Academic Projects", "Typed, formatted, printed, and documented academic work for students and professionals."],
  ["Trading & Finance Content", "Trading & Finance Content", "Clean content visuals, explainers, PDFs, and branded finance education materials."],
  ["Business Launch Identity", "Business Branding Projects", "Logo direction, profile assets, proposal templates, and launch-ready brand documents."]
];

const features: FeatureItem[] = [
  ["Fast Delivery", Timer],
  ["24/7 Support", MessageCircle],
  ["Affordable Pricing", CreditCard],
  ["Professional Formatting", FileText],
  ["Secure Online Service", ShieldCheck],
  ["Mobile Friendly Solutions", Phone],
  ["AI-Powered Workflow", Bot],
  ["Modern Design Standards", Sparkles]
];

const testimonials: TestimonialItem[] = [
  ["Aisha M.", "Final Year Student", "AB TECH handled my project typing, formatting, and slides with serious attention to detail. Everything looked professional and was delivered on time.", 5],
  ["Daniel O.", "Small Business Owner", "The branding and letterhead designs gave my business a much stronger image. Communication was smooth from start to finish.", 5],
  ["Maryam S.", "Research Presenter", "My seminar presentation on malnutrition was transformed into a clean, confident deck. The visuals made it easier to present.", 5],
  ["Ibrahim K.", "Startup Founder", "They helped shape my website idea into something modern and clear. I liked the mix of technical skill and practical advice.", 5]
];

const stats: StatItem[] = [
  ["7+", "Service Categories"],
  ["300+", "Documents Delivered"],
  ["120+", "Satisfied Clients"],
  ["24/7", "Support Mindset"]
];

function TechScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(1.25, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1455ff,
      emissive: 0x082a88,
      metalness: 0.45,
      roughness: 0.22,
      wireframe: true
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 520;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount * 3; index += 3) {
      const radius = 2.2 + Math.random() * 2.2;
      const angle = Math.random() * Math.PI * 2;
      positions[index] = Math.cos(angle) * radius;
      positions[index + 1] = (Math.random() - 0.5) * 4.4;
      positions[index + 2] = Math.sin(angle) * radius;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0xf5bf36, size: 0.025, transparent: true, opacity: 0.85 })
    );
    group.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const light = new THREE.PointLight(0xf5bf36, 2.2, 12);
    light.position.set(3, 2, 4);
    scene.add(light);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.004;
      particles.rotation.y -= 0.0015;
      core.rotation.x += 0.003;
      renderer.render(scene, camera);
    };

    const resize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      particleGeometry.dispose();
      material.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 opacity-90" aria-hidden="true" />;
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const numeric = Number.parseInt(value.replace(/\D/g, ""), 10);
    if (!ref.current || Number.isNaN(numeric)) {
      if (ref.current) ref.current.textContent = value;
      return;
    }
    const state = { current: 0 };
    gsap.to(state, {
      current: numeric,
      duration: 2.1,
      ease: "power3.out",
      scrollTrigger: undefined,
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${Math.round(state.current)}${value.replace(/[0-9]/g, "")}`;
      }
    });
  }, [value]);

  return <span ref={ref}>{value}</span>;
}

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">{copy}</p> : null}
    </motion.div>
  );
}

export default function Home() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(54);
  const [sent, setSent] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [requestResult, setRequestResult] = useState<RequestResult | null>(null);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackingSearch, setTrackingSearch] = useState("");
  const [chatOpen, setChatOpen] = useState(true);
  const [chatInput, setChatInput] = useState("");
  const [chatBusy, setChatBusy] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello. I can help you choose a service, prepare your files, or start a request with AB TECH GLOBAL SERVICE."
    }
  ]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const glowStyle = {
    left: useTransform(glowX, (value) => `${value - 180}px`),
    top: useTransform(glowY, (value) => `${value - 180}px`)
  };

  const featuredCategories = useMemo(() => ["All", ...new Set(portfolio.map((item) => item[1]))], []);
  const filteredPortfolio = useMemo(
    () => (activeCategory === "All" ? portfolio : portfolio.filter((item) => item[1] === activeCategory)),
    [activeCategory]
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((index) => (index + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    setRequestResult(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/request", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Request could not be submitted.");
      }

      setRequestResult(data);
      setTrackingSearch(data.trackingId);
      setSent(true);
      event.currentTarget.reset();
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Request could not be submitted.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function sendChatMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = chatInput.trim();
    if (!message) return;

    setChatInput("");
    setChatBusy(true);
    setChatMessages((messages) => [...messages, { role: "user", content: message }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      setChatMessages((messages) => [...messages, { role: "assistant", content: data.answer }]);
    } catch {
      setChatMessages((messages) => [
        ...messages,
        { role: "assistant", content: "I could not answer right now. Please use WhatsApp for immediate support." }
      ]);
    } finally {
      setChatBusy(false);
    }
  }

  return (
    <main
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
      className="relative min-h-screen overflow-hidden bg-[color:var(--bg)] text-[color:var(--fg)]"
    >
      <motion.div style={glowStyle} className="pointer-events-none fixed z-50 hidden h-[360px] w-[360px] rounded-full bg-royal/20 blur-3xl lg:block" />

      <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4">
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
          <a href="#home" className="flex items-center gap-3" aria-label="AB TECH GLOBAL SERVICE home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-royal to-gold font-black text-white shadow-glow">AB</span>
            <span className="hidden text-sm font-black tracking-wide sm:block">AB TECH GLOBAL SERVICE</span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--muted)] transition hover:bg-white/10 hover:text-[color:var(--fg)]">
                {item}
              </a>
            ))}
            <Link href="/blog" className="rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--muted)] transition hover:bg-white/10 hover:text-[color:var(--fg)]">
              Blog
            </Link>
            <Link href="/admin" className="rounded-full px-4 py-2 text-sm font-semibold text-[color:var(--muted)] transition hover:bg-white/10 hover:text-[color:var(--fg)]">
              Admin
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLight((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 transition hover:border-gold" aria-label="Toggle dark and light mode">
              {light ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="hidden rounded-full bg-gold px-5 py-2 text-sm font-black text-navy shadow-gold transition hover:-translate-y-0.5 sm:inline-flex">Get Started</a>
            <button onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 lg:hidden" aria-label="Open menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {menuOpen ? (
          <div className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-4 lg:hidden">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold text-[color:var(--muted)]">
                {item}
              </a>
            ))}
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold text-[color:var(--muted)]">
              Blog
            </Link>
            <Link href="/admin" onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold text-[color:var(--muted)]">
              Admin
            </Link>
          </div>
        ) : null}
      </header>

      <section id="home" className="premium-grid relative flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-28">
        <div className="aurora absolute inset-0 opacity-90" />
        <TechScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--bg)]/30 to-[color:var(--bg)]" />
        {[
          ["Laptop", Laptop, "left-[8%] top-[22%]"],
          ["Print", Printer, "right-[12%] top-[24%]"],
          ["Code", Code2, "left-[14%] bottom-[24%]"],
          ["Network", Wifi, "right-[18%] bottom-[22%]"]
        ].map(([label, Icon, position], index) => (
          <motion.div
            key={label as string}
            initial={{ opacity: 0, scale: 0.75, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
            className={`floaty glass absolute hidden rounded-3xl p-4 md:block ${position as string}`}
            style={{ animationDelay: `${index * 0.9}s` }}
          >
            <Icon className="text-gold" size={30} />
            <span className="mt-2 block text-xs font-bold uppercase tracking-widest text-[color:var(--muted)]">{label as string}</span>
          </motion.div>
        ))}
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-bold text-gold">
            <Sparkles size={16} /> Nigerian digital service studio in Bida
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="logo-shine text-balance text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
            AB TECH GLOBAL SERVICE
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.25 }} className="mx-auto mt-6 max-w-3xl text-balance text-xl font-semibold text-white/90 sm:text-3xl">
            Reliable Solutions. Exceptional Service.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.35 }} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg">
            Websites, printing, academic documentation, branding, online services, and technical support shaped with premium design and dependable delivery.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.45 }} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#portfolio" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-royal px-7 py-4 font-black text-white shadow-glow transition hover:-translate-y-1 sm:w-auto">
              View Portfolio <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black backdrop-blur transition hover:-translate-y-1 hover:border-gold sm:w-auto">
              Contact Us <Mail size={18} />
            </a>
            <a href="#request" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-black text-navy shadow-gold transition hover:-translate-y-1 sm:w-auto">
              Get Started <Zap size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="About" title="Professional digital and technical solutions from the heart of Bida." copy="Located opposite Federal Polytechnic Bida, Niger State, Nigeria, AB TECH GLOBAL SERVICE helps students, businesses, creators, and professionals turn urgent needs into polished digital outcomes." />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["Mission", "To deliver reliable, affordable, and excellent technical services that help clients study, work, present, publish, and grow with confidence."],
              ["Vision", "To become a trusted Nigerian digital service brand known for premium design, dependable support, and modern technology workflows."],
              ["Why Clients Trust Us", "Clear communication, careful formatting, practical technical knowledge, fast turnaround, and a service culture built around solving the real problem."]
            ].map(([title, copy]) => (
              <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass perspective-card rounded-3xl p-7">
                <CheckCircle2 className="mb-5 text-gold" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-[color:var(--muted)]">{copy}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="glass rounded-3xl p-6 text-center">
                <div className="text-4xl font-black text-gold"><Counter value={value} /></div>
                <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[color:var(--muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Services" title="Everything clients need to look sharp, work faster, and deliver confidently." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map(([title, Icon, copy], index) => (
              <motion.article key={title as string} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 4) * 0.05 }} className="glass perspective-card rounded-3xl p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-royal/15 text-gold">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-black">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{copy as string}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Portfolio" title="Case-study style previews across academic, creative, web, and business work." copy="A polished grid of previous and current work categories, shaped for live previews, presentations, and future expansion into full project pages." />
          <div className="no-scrollbar mb-8 flex gap-3 overflow-x-auto pb-2">
            {featuredCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
                  activeCategory === category ? "border-gold bg-gold text-navy" : "border-white/15 bg-white/10 text-[color:var(--muted)] hover:border-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPortfolio.map(([title, category, copy], index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.07 }} className="group glass perspective-card overflow-hidden rounded-3xl">
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal/80 via-navy to-gold/50" />
                  <div className="premium-grid absolute inset-0 opacity-70" />
                  <div className="absolute left-5 top-5 rounded-full bg-black/30 px-3 py-1 text-xs font-black uppercase tracking-widest text-white backdrop-blur">{category}</div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="mb-3 h-2 w-24 rounded-full bg-gold" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-xl bg-white/18" />
                      <div className="h-12 rounded-xl bg-white/12" />
                      <div className="h-12 rounded-xl bg-white/20" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-6 text-[color:var(--muted)]">{copy}</p>
                  <button onClick={() => setSelectedProject([title, category, copy])} className="mt-5 inline-flex items-center gap-2 font-black text-gold">Preview case study <ArrowRight size={16} /></button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow="Interactive" title="Project evolution, tracking, and a cinematic service timeline." copy="The experience includes future-ready concepts for client transparency: request intake, upload support, payment flow, AI assistant, and status tracking." />
            <div className="space-y-4">
              {["Request received", "Files reviewed", "Design and formatting", "Client preview", "Final delivery"].map((step, index) => (
                <motion.div key={step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass flex items-center gap-4 rounded-3xl p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold font-black text-navy">{index + 1}</span>
                  <div>
                    <h3 className="font-black">{step}</h3>
                    <p className="text-sm text-[color:var(--muted)]">Transparent project tracking milestone.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-black">Before / After Showcase</h3>
              <Search className="text-gold" />
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/15 bg-navy">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#111827,#1f2937)] p-7 text-white">
                <p className="text-sm uppercase tracking-widest text-white/50">Before</p>
                <div className="mt-8 space-y-4">
                  <div className="h-6 w-4/5 rounded bg-white/16" />
                  <div className="h-6 w-2/3 rounded bg-white/12" />
                  <div className="h-36 rounded-2xl border border-white/10 bg-white/8" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-2xl bg-white/8" />
                    <div className="h-20 rounded-2xl bg-white/8" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}>
                <div className="h-full bg-gradient-to-br from-royal via-[#071a44] to-gold p-7 text-white">
                  <p className="text-sm font-black uppercase tracking-widest text-gold">After</p>
                  <h3 className="mt-8 text-4xl font-black">Premium, structured, client-ready output</h3>
                  <p className="mt-4 max-w-sm text-white/75">Cleaner hierarchy, sharper visuals, stronger brand trust, and presentation-ready finish.</p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/15 p-4 backdrop-blur"><Star className="text-gold" /><p className="mt-4 font-black">Polished</p></div>
                    <div className="rounded-2xl bg-white/15 p-4 backdrop-blur"><TrendingUp className="text-gold" /><p className="mt-4 font-black">Ready</p></div>
                  </div>
                </div>
              </div>
              <input aria-label="Compare before and after project preview" type="range" min="10" max="90" value={sliderValue} onChange={(event) => setSliderValue(Number(event.target.value))} className="absolute bottom-5 left-1/2 w-[82%] -translate-x-1/2 accent-gold" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Features" title="Premium service systems behind every delivery." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([label, Icon]) => (
              <div key={label as string} className="glass rounded-3xl p-6">
                <Icon className="text-gold" />
                <h3 className="mt-5 font-black">{label as string}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Testimonials" title="Professional reviews with real-world service expectations." />
          <div className="glass rounded-3xl p-6 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <button onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10" aria-label="Previous testimonial"><ChevronLeft /></button>
              <motion.div key={testimonialIndex} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-royal to-gold text-2xl font-black text-white">
                  {testimonials[testimonialIndex][0].split(" ").map((part) => part[0]).join("")}
                </div>
                <div className="mb-4 flex justify-center gap-1 text-gold">{Array.from({ length: Number(testimonials[testimonialIndex][3]) }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
                <p className="mx-auto max-w-2xl text-balance text-xl font-semibold leading-8">"{testimonials[testimonialIndex][2]}"</p>
                <h3 className="mt-6 font-black">{testimonials[testimonialIndex][0]}</h3>
                <p className="text-sm text-[color:var(--muted)]">{testimonials[testimonialIndex][1]}</p>
              </motion.div>
              <button onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10" aria-label="Next testimonial"><ChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      <section id="request" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Extra Systems" title="A future-ready client portal concept built into the brand story." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Admin Dashboard", ClipboardList, "Track requests, clients, invoices, files, and project status from one clean workspace."],
              ["File Upload System", Upload, "Collect documents, images, project chapters, CV details, and references securely."],
              ["Payment Integration", CreditCard, "Prepare orders for deposits, balances, invoices, and service receipts."],
              ["AI Chatbot Assistant", Bot, "Guide visitors, answer service questions, and recommend the right package."]
            ].map(([title, Icon, copy]) => (
              <div key={title as string} className="glass perspective-card rounded-3xl p-6">
                <Icon className="text-gold" />
                <h3 className="mt-5 text-xl font-black">{title as string}</h3>
                <p className="mt-3 leading-6 text-[color:var(--muted)]">{copy as string}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-6">
              <h3 className="text-2xl font-black">Client Order / Request Form</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Full name" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold" />
                <input name="phone" required placeholder="WhatsApp number" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold" />
                <select name="service" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold">
                  <option>Website Design</option>
                  <option>Printing Services</option>
                  <option>Project Typing</option>
                  <option>Branding</option>
                  <option>Online Registration</option>
                </select>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-gold/60 bg-gold/10 px-4 py-3 font-bold text-gold">
                  <Upload size={18} /> Upload file
                  <input name="file" type="file" className="hidden" />
                </label>
              </div>
              <textarea name="message" required placeholder="Tell us what you need" rows={5} className="mt-4 w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold" />
              <button disabled={isSubmitting} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-black text-navy shadow-gold transition disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                {isSubmitting ? "Submitting..." : "Submit Request"} <ArrowRight size={18} />
              </button>
              {formError ? <p className="mt-4 font-bold text-red-300">{formError}</p> : null}
              {sent && requestResult ? (
                <div className="mt-4 rounded-2xl border border-gold/40 bg-gold/10 p-4">
                  <p className="font-black text-gold">Request submitted: {requestResult.trackingId}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{requestResult.nextStep}</p>
                  <a href={requestResult.whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-black text-white">
                    Continue on WhatsApp <MessageCircle size={16} />
                  </a>
                </div>
              ) : null}
            </form>
            <div className="glass rounded-3xl p-6">
              <h3 className="text-2xl font-black">Blog / News & Company Profile</h3>
              <div className="mt-6 space-y-4">
                {["How to prepare project chapters for formatting", "Why every small business needs a professional letterhead", "Choosing a portfolio website style that fits your brand"].map((post) => (
                  <article key={post} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                    <p className="text-xs font-black uppercase tracking-widest text-gold">Update</p>
                    <h4 className="mt-2 font-black">{post}</h4>
                  </article>
                ))}
              </div>
              <a href="/company-profile.pdf" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-black">
                <Download size={18} /> Download company profile PDF
              </a>
              <Link href="/blog" className="ml-3 mt-6 inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 font-black text-white">
                Read blog <ArrowRight size={18} />
              </Link>
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/8 p-4">
                <h4 className="font-black">Project Tracking</h4>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input value={trackingSearch} onChange={(event) => setTrackingSearch(event.target.value)} placeholder="Enter tracking ID" className="min-w-0 flex-1 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 outline-none focus:border-gold" />
                  <button className="rounded-2xl bg-gold px-5 py-3 font-black text-navy">Check</button>
                </div>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {trackingSearch ? `${trackingSearch}: Request received -> Files review -> Client preview -> Final delivery.` : "Submit a request to generate a tracking ID."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Contact" title="Start your next project with AB TECH GLOBAL SERVICE." />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass rounded-3xl p-6">
              <div className="space-y-4">
                <p className="flex gap-3"><MapPin className="shrink-0 text-gold" /> Opp Federal Polytechnic Bida, Niger State</p>
                <p className="flex gap-3"><Mail className="shrink-0 text-gold" /> abtechglobalservice@gmail.com</p>
                <p className="flex gap-3"><Globe2 className="shrink-0 text-gold" /> abtechglobalservice.vercel.app</p>
                <p className="flex gap-3"><Phone className="shrink-0 text-gold" /> +2347062279160, +2349079354758</p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                  <QrCode className="text-gold" />
                  <div className="mt-4 grid h-36 w-36 grid-cols-5 gap-1 rounded-xl bg-white p-2">
                    {Array.from({ length: 25 }).map((_, index) => <span key={index} className={`${index % 2 === 0 || index % 7 === 0 ? "bg-navy" : "bg-transparent"} rounded-sm`} />)}
                  </div>
                </div>
                <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                  <h3 className="font-black">Social Media</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {["WhatsApp", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                      <span key={social} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">{social}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="glass overflow-hidden rounded-3xl">
              <iframe
                title="AB TECH GLOBAL SERVICE map"
                src="https://www.google.com/maps?q=Federal%20Polytechnic%20Bida%20Niger%20State%20Nigeria&output=embed"
                className="h-[460px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[color:var(--muted)] sm:flex-row">
          <p>© 2026 AB TECH GLOBAL SERVICE. Reliable Solutions. Exceptional Service.</p>
          <p>Built for premium digital service delivery in Bida, Niger State.</p>
        </div>
      </footer>

      {selectedProject ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 px-4 backdrop-blur-md" role="dialog" aria-modal="true">
          <motion.div initial={{ opacity: 0, scale: 0.94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="glass max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">{selectedProject[1]}</p>
                <h3 className="mt-3 text-3xl font-black">{selectedProject[0]}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10" aria-label="Close project preview">
                <X size={18} />
              </button>
            </div>
            <div className="premium-grid mt-6 h-56 rounded-3xl border border-white/15 bg-gradient-to-br from-royal via-navy to-gold/70" />
            <p className="mt-6 leading-8 text-[color:var(--muted)]">{selectedProject[2]}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Strategy", "Design", "Delivery"].map((step) => (
                <div key={step} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                  <CheckCircle2 className="text-gold" size={18} />
                  <p className="mt-3 font-black">{step}</p>
                </div>
              ))}
            </div>
            <a href="#request" onClick={() => setSelectedProject(null)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-black text-navy">
              Request something similar <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      ) : null}

      {chatOpen ? (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-navy text-white shadow-2xl">
          <div className="flex items-center justify-between bg-royal p-4">
            <div className="flex items-center gap-2 font-black">
              <Bot size={20} /> AB TECH Assistant
            </div>
            <button onClick={() => setChatOpen(false)} aria-label="Close chatbot">
              <X size={18} />
            </button>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {chatMessages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`rounded-2xl p-3 text-sm leading-6 ${message.role === "assistant" ? "bg-white/10" : "ml-8 bg-gold text-navy"}`}>
                {message.content}
              </div>
            ))}
            {chatBusy ? <div className="rounded-2xl bg-white/10 p-3 text-sm">Typing...</div> : null}
          </div>
          <form onSubmit={sendChatMessage} className="flex gap-2 border-t border-white/10 p-3">
            <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Ask about a service" className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm outline-none focus:border-gold" />
            <button className="rounded-full bg-gold px-4 py-2 font-black text-navy">Send</button>
          </form>
        </div>
      ) : null}

      <button onClick={() => setChatOpen((value) => !value)} className="fixed bottom-24 left-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-royal text-white shadow-glow transition hover:-translate-y-1" aria-label="Open AI chatbot assistant">
        <Bot size={26} />
      </button>

      <a href="https://wa.me/2347062279160" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-1" aria-label="Chat on WhatsApp">
        <MessageCircle size={30} />
      </a>
    </main>
  );
}
