"use client";
import { useState, useEffect, useRef } from "react";

// ============================================================
// PORTFOLIO — OLADEPO ROKEEB OLAYINKA | Senior Frontend Developer
// Aesthetic: Dark editorial · Electric Amber/Gold
// Fonts: Playfair Display + DM Mono
// ============================================================

const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "HTML & CSS", level: 98 },
];

const projects = [
    {
        id: "01",
        title: "ShopFlow E-Commerce",
        desc: "Full-stack e-commerce platform with cart, auth, and Stripe payments. Built with Next.js, TypeScript, and Node.js backend.",
        tags: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
        color: "#F59E0B",
        link: "https://github.com/Alphcast",
    },
    {
        id: "02",
        title: "DevBoard Dashboard",
        desc: "Real-time analytics dashboard for developer teams. Dynamic charts, WebSocket updates, and role-based access control.",
        tags: ["React", "TypeScript", "Node.js", "Tailwind"],
        color: "#10B981",
        link: "https://github.com/Alphcast",
    },
    {
        id: "03",
        title: "MathViz Interactive",
        desc: "Interactive mathematics visualization tool for students. Leverages my Mathematical Sciences background for accurate algorithms.",
        tags: ["React", "JavaScript", "CSS", "Canvas API"],
        color: "#6366F1",
        link: "https://github.com/Alphcast",
    },
    {
        id: "04",
        title: "TaskNest App",
        desc: "Collaborative task management app with drag-and-drop, real-time sync, and team workspaces.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
        color: "#EC4899",
        link: "https://github.com/Alphcast",
    },
    {
        id: "05",
        title: "BlogCraft CMS",
        desc: "Headless CMS with rich text editor, image optimization, SEO tools, and markdown support.",
        tags: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
        color: "#F97316",
        link: "https://github.com/Alphcast",
    },
    {
        id: "06",
        title: "WeatherSphere",
        desc: "Beautiful weather app with location detection, 7-day forecasts, and animated weather conditions.",
        tags: ["React", "JavaScript", "CSS", "REST API"],
        color: "#38BDF8",
        link: "https://github.com/Alphcast",
    },
];

// ── Contact Form State Type
type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    file: File | null;
};

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [visibleProjects, setVisibleProjects] = useState<string[]>([]);
    const [formData, setFormData] = useState<FormData>({
        name: "", email: "", subject: "", message: "", file: null,
    });
    const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Load Google Fonts
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Mono:wght@300;400;500&display=swap";
        document.head.appendChild(link);

        const handleScroll = () => {
            setScrollY(window.scrollY);
            // Update active nav
            const sections = ["home", "about", "skills", "projects", "contact"];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setVisibleProjects((p) => [...p, e.target.id]);
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll(".project-card").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

    const scrollTo = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((p) => ({ ...p, file }));
        setFileName(file ? file.name : "");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("sending");

        // Build mailto link — opens email client with all details + note about attachment
        const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}${formData.file ? `\n\nAttachment: ${formData.file.name} (please attach manually if not included)` : ""}`
        );
        window.location.href = `mailto:oladeporokeeb203@gmail.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setFormStatus("sent");
            setFormData({ name: "", email: "", subject: "", message: "", file: null });
            setFileName("");
            setTimeout(() => setFormStatus("idle"), 5000);
        }, 800);
    };

    return (
        <>
            <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A0B; color: #E8E6E0; }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'DM Mono', monospace; }

        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 9999; opacity: 0.35;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0B; }
        ::-webkit-scrollbar-thumb { background: #F59E0B; border-radius: 2px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(245,158,11,0.3); }
          50% { box-shadow: 0 0 60px rgba(245,158,11,0.6), 0 0 100px rgba(245,158,11,0.2); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes checkPop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }

        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.3s; }
        .d4 { animation-delay: 0.4s; }
        .d5 { animation-delay: 0.5s; }
        .init-hidden { opacity: 0; }

        .gold-gradient {
          background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 50%, #F59E0B 100%);
          background-clip: text; -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .image-ring { animation: rotate 4s linear infinite; }
        .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }

        .nav-blur {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .hover-line { position: relative; }
        .hover-line::after {
          content: ''; position: absolute;
          bottom: -2px; left: 0; width: 0; height: 2px;
          background: #F59E0B; transition: width 0.3s ease;
        }
        .hover-line:hover::after { width: 100%; }

        .project-card-wrapper { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .project-card-wrapper:hover { transform: translateY(-8px); }
        .project-visible { animation: fadeUp 0.7s ease forwards; }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.25em;
          text-transform: uppercase; color: #F59E0B;
        }

        .form-input {
          width: 100%; background: #111113;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px; padding: 0.85rem 1rem;
          color: #E8E6E0; font-family: 'DM Mono', monospace;
          font-size: 0.85rem; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus {
          border-color: #F59E0B;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.1);
        }
        .form-input::placeholder { color: #4B4B52; }
        textarea.form-input { resize: vertical; min-height: 140px; }

        .btn-primary {
          background: #F59E0B; color: #0A0A0B;
          border: none; border-radius: 4px;
          padding: 0.9rem 2rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          cursor: pointer; transition: all 0.3s;
          display: inline-flex; align-items: center; gap: 0.5rem;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(245,158,11,0.4);
          background: #FCD34D;
        }
        .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

        .btn-outline {
          background: transparent; border: 1px solid rgba(232,230,224,0.2);
          border-radius: 4px; padding: 0.9rem 2rem;
          font-family: 'DM Mono', monospace; font-size: 0.85rem;
          letter-spacing: 0.08em; text-transform: uppercase;
          cursor: pointer; transition: all 0.3s; color: #E8E6E0;
          display: inline-flex; align-items: center; gap: 0.5rem;
          text-decoration: none;
        }
        .btn-outline:hover { border-color: #F59E0B; color: #F59E0B; }

        .social-pill {
          display: inline-flex; align-items: center; gap: 0.6rem;
          padding: 0.75rem 1.25rem;
          border-radius: 50px; font-family: 'DM Mono', monospace;
          font-size: 0.8rem; letter-spacing: 0.05em;
          text-decoration: none; transition: all 0.3s;
          font-weight: 500;
        }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(10,10,11,0.3);
          border-top-color: #0A0A0B;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .check-pop { animation: checkPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        .file-drop {
          border: 2px dashed rgba(245,158,11,0.3);
          border-radius: 8px; padding: 1.5rem;
          text-align: center; cursor: pointer;
          transition: all 0.2s; background: rgba(245,158,11,0.03);
        }
        .file-drop:hover { border-color: #F59E0B; background: rgba(245,158,11,0.07); }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-wrap { display: none !important; }
          .stats-row { gap: 1.5rem !important; }
        }
        .mobile-btn { display: none; }
      `}</style>

            {/* ── NAV ── */}
            <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: scrollY > 50 ? "rgba(10,10,11,0.92)" : "transparent", borderBottom: scrollY > 50 ? "1px solid rgba(245,158,11,0.12)" : "none", transition: "all 0.4s ease", padding: "0 2rem" }} className="nav-blur">
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
                    <div className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                        <span className="gold-gradient">ALPHCAST</span><span style={{ color: "#333" }}>.</span>
                    </div>

                    {/* Desktop */}
                    <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
                        {navLinks.map((l) => (
                            <button key={l} onClick={() => scrollTo(l)} className="font-mono hover-line"
                                style={{ background: "none", border: "none", color: activeSection === l.toLowerCase() ? "#F59E0B" : "#9CA3AF", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s" }}>
                                {l}
                            </button>
                        ))}
                        <button onClick={() => scrollTo("Contact")} className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.75rem" }}>
                            Hire Me
                        </button>
                    </div>

                    {/* Mobile burger */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-btn" style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5 }}>
                        {[0, 1, 2].map((i) => (
                            <div key={i} style={{ width: 24, height: 2, background: "#F59E0B", transition: "all 0.3s", transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 1 ? "scaleX(0)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
                        ))}
                    </button>
                </div>

                {menuOpen && (
                    <div style={{ background: "#111113", borderTop: "1px solid rgba(245,158,11,0.15)", padding: "1.5rem 2rem" }}>
                        {navLinks.map((l) => (
                            <button key={l} onClick={() => scrollTo(l)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#E8E6E0", fontFamily: "'DM Mono',monospace", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.75rem 0", cursor: "pointer" }}>
                                {l}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* ── HERO ── */}
            <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 2rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", paddingTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
                    <div>
                        <p className="section-label fade-up init-hidden" style={{ marginBottom: "1.5rem" }}>⟡ Available for hire</p>
                        <h1 className="font-display fade-up init-hidden d1" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1.05, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
                            Creative<br /><span className="gold-gradient">Senior Frontend</span><br />Developer
                        </h1>
                        <p className="font-mono fade-up init-hidden d2" style={{ color: "#9CA3AF", fontSize: "0.92rem", lineHeight: 1.9, maxWidth: 480, marginBottom: "2.5rem" }}>
                            Hi, I'm <strong style={{ color: "#E8E6E0" }}>Oladepo Rokeeb Olayinka</strong> — a passionate frontend developer with a Mathematics background, crafting performant, beautiful web experiences with React, Next.js & TypeScript.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }} className="fade-up init-hidden d3">
                            <button onClick={() => scrollTo("Projects")} className="btn-primary">View My Work →</button>
                            <button onClick={() => scrollTo("Contact")} className="btn-outline">Get in Touch</button>
                        </div>
                        <div style={{ display: "flex", gap: "3rem", marginTop: "3.5rem" }} className="fade-up init-hidden d4 stats-row">
                            {[["6+", "Projects Built"], ["2+", "Years Exp."], ["100%", "Dedication"]].map(([n, l]) => (
                                <div key={l}>
                                    <div className="font-display" style={{ fontSize: "2rem", fontWeight: 700, color: "#F59E0B" }}>{n}</div>
                                    <div className="font-mono" style={{ fontSize: "0.68rem", color: "#6B7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-image-wrap fade-up init-hidden d5">
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", inset: -8, borderRadius: "50%", padding: 3, background: "conic-gradient(#F59E0B, #10B981, #6366F1, #F59E0B)" }} className="image-ring">
                                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0A0A0B" }} />
                            </div>
                            <div className="glow-pulse" style={{ width: 280, height: 280, borderRadius: "50%", overflow: "hidden", background: "linear-gradient(135deg, #1a1a1e 0%, #111113 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", position: "relative" }}>
                                <img src="/G1.png" alt="Oladepo Rokeeb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ position: "absolute", top: -20, right: -35, background: "#F59E0B", color: "#0A0A0B", borderRadius: 4, padding: "0.4rem 0.85rem", fontFamily: "'DM Mono',monospace", fontSize: "0.7rem", fontWeight: 500, whiteSpace: "nowrap" }}>React Expert</div>
                            <div style={{ position: "absolute", bottom: -10, left: -35, background: "#111113", color: "#10B981", border: "1px solid #10B981", borderRadius: 4, padding: "0.4rem 0.85rem", fontFamily: "'DM Mono',monospace", fontSize: "0.7rem", whiteSpace: "nowrap" }}>BSc Mathematics</div>
                        </div>
                    </div>
                </div>

                <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                    <div className="font-mono" style={{ fontSize: "0.65rem", color: "#333", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</div>
                    <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #F59E0B, transparent)" }} />
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section id="about" style={{ padding: "8rem 2rem", background: "#0D0D0F" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="two-col">
                    <div>
                        <p className="section-label" style={{ marginBottom: "1rem" }}>// about me</p>
                        <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "2rem" }}>
                            Developer with a<br /><span className="gold-gradient">Mathematical Mind</span>
                        </h2>
                        <p className="font-mono" style={{ color: "#9CA3AF", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                            I'm Oladepo Rokeeb Olayinka, a dedicated Senior frontend developer who brings analytical precision from my BSc in Mathematical Sciences to every line of code. I believe great software is both an art and a science.
                        </p>
                        <p className="font-mono" style={{ color: "#9CA3AF", fontSize: "0.88rem", lineHeight: 1.9, marginBottom: "2.5rem" }}>
                            I specialize in building pixel-perfect, performant web applications using React, Next.js, and TypeScript. My mathematics background gives me a unique advantage in solving complex algorithmic challenges and building scalable solutions.
                        </p>
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                            {["Problem Solver", "Detail-Oriented", "Fast Learner", "Team Player"].map((t) => (
                                <span key={t} className="font-mono" style={{ padding: "0.4rem 1rem", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 2, fontSize: "0.72rem", color: "#F59E0B", letterSpacing: "0.05em" }}>{t}</span>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        {[{ icon: "🎓", label: "Education", value: "BSc Mathematical Sciences" }, { icon: "💼", label: "Focus", value: "Frontend Development" }, { icon: "📍", label: "Location", value: "Nigeria" }, { icon: "🚀", label: "Status", value: "Open to Work" }].map(({ icon, label, value }) => (
                            <div key={label} style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "1.5rem", transition: "border-color 0.3s" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,158,11,0.3)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{icon}</div>
                                <div className="font-mono" style={{ fontSize: "0.62rem", color: "#6B7280", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{label}</div>
                                <div className="font-display" style={{ fontSize: "0.95rem", color: "#E8E6E0", fontWeight: 600 }}>{value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section id="skills" style={{ padding: "8rem 2rem", background: "#0A0A0B" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <p className="section-label" style={{ marginBottom: "1rem" }}>// technical skills</p>
                        <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800 }}>My <span className="gold-gradient">Expertise</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: "3rem" }} className="two-col">
                        <div>
                            {skills.map(({ name, level }, i) => <SkillBar key={name} name={name} level={level} delay={i * 100} />)}
                        </div>
                        <div>
                            <p className="font-mono" style={{ fontSize: "0.72rem", color: "#6B7280", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Tech Stack</p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                                {["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "REST APIs", "Responsive Design", "Performance Optimization"].map((tech) => (
                                    <span key={tech} className="font-mono"
                                        style={{ padding: "0.45rem 0.9rem", background: "#111113", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, fontSize: "0.75rem", color: "#9CA3AF", cursor: "default", transition: "all 0.2s" }}
                                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor = "#F59E0B"; el.style.color = "#F59E0B"; el.style.background = "rgba(245,158,11,0.08)"; }}
                                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLSpanElement; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.color = "#9CA3AF"; el.style.background = "#111113"; }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECTS ── */}
            <section id="projects" style={{ padding: "8rem 2rem", background: "#0D0D0F" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <p className="section-label" style={{ marginBottom: "1rem" }}>// portfolio</p>
                        <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800 }}>Featured <span className="gold-gradient">Projects</span></h2>
                        <p className="font-mono" style={{ color: "#6B7280", fontSize: "0.82rem", marginTop: "1rem" }}>
                            Click ↗ on any project to view on GitHub
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))", gap: "1.5rem" }}>
                        {projects.map((p) => (
                            <div key={p.id} id={`proj-${p.id}`} className={`project-card project-card-wrapper ${visibleProjects.includes(`proj-${p.id}`) ? "project-visible" : ""}`}
                                style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "2rem", cursor: "pointer", opacity: visibleProjects.includes(`proj-${p.id}`) ? 1 : 0, position: "relative", overflow: "hidden" }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = p.color + "44"; el.style.boxShadow = `0 20px 60px ${p.color}12`; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.boxShadow = "none"; }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${p.color}, transparent)` }} />
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                                    <span className="font-display" style={{ fontSize: "3rem", fontWeight: 900, color: p.color, opacity: 0.2, lineHeight: 1 }}>{p.id}</span>
                                    <a href={p.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                                        style={{ color: "#6B7280", fontSize: "1.3rem", textDecoration: "none", transition: "color 0.2s", padding: "0.25rem 0.5rem", borderRadius: 4, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "0.25rem" }}
                                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = p.color; el.style.borderColor = p.color + "55"; }}
                                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#6B7280"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                        ↗
                                    </a>
                                </div>
                                <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem", color: "#E8E6E0" }}>{p.title}</h3>
                                <p className="font-mono" style={{ color: "#6B7280", fontSize: "0.8rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{p.desc}</p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                    {p.tags.map((tag) => (
                                        <span key={tag} className="font-mono" style={{ padding: "0.22rem 0.6rem", background: `${p.color}15`, border: `1px solid ${p.color}30`, borderRadius: 3, fontSize: "0.62rem", color: p.color, letterSpacing: "0.05em" }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* GitHub CTA */}
                    <div style={{ textAlign: "center", marginTop: "4rem" }}>
                        <a href="https://github.com/Alphcast" target="_blank" rel="noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 2rem", background: "#111113", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, textDecoration: "none", color: "#E8E6E0", fontFamily: "'DM Mono',monospace", fontSize: "0.85rem", letterSpacing: "0.05em", transition: "all 0.3s" }}
                            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#F59E0B"; el.style.color = "#F59E0B"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 12px 40px rgba(245,158,11,0.15)"; }}
                            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.color = "#E8E6E0"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                            View All Projects on GitHub →
                        </a>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ── */}
            <section id="contact" style={{ padding: "8rem 2rem", background: "#0A0A0B" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <p className="section-label" style={{ marginBottom: "1rem" }}>// contact</p>
                        <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, marginBottom: "1rem" }}>
                            Let's <span className="gold-gradient">Work Together</span>
                        </h2>
                        <p className="font-mono" style={{ color: "#9CA3AF", fontSize: "0.88rem", maxWidth: 480, margin: "0 auto" }}>
                            Open to frontend roles, freelance projects & exciting collaborations. Fill the form below or reach me directly.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "4rem", alignItems: "start" }} className="two-col">
                        {/* Left: Contact Info */}
                        <div>
                            <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "2rem", color: "#E8E6E0" }}>Reach Me Directly</h3>

                            {/* Email */}
                            <a href="mailto:oladeporokeeb203@gmail.com"
                                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", background: "#111113", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, marginBottom: "1rem", textDecoration: "none", color: "#E8E6E0", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#F59E0B44"; el.style.transform = "translateX(6px)"; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "translateX(0)"; }}>
                                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>✉️</div>
                                <div>
                                    <div className="font-mono" style={{ fontSize: "0.65rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Email</div>
                                    <div className="font-mono" style={{ fontSize: "0.82rem", color: "#F59E0B" }}>oladeporokeeb203@gmail.com</div>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/2349011105681" target="_blank" rel="noreferrer"
                                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", background: "#111113", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, marginBottom: "1rem", textDecoration: "none", color: "#E8E6E0", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "#25D36644"; el.style.transform = "translateX(6px)"; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "translateX(0)"; }}>
                                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </div>
                                <div>
                                    <div className="font-mono" style={{ fontSize: "0.65rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>WhatsApp</div>
                                    <div className="font-mono" style={{ fontSize: "0.82rem", color: "#25D366" }}>+234 901 110 5681</div>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/Alphcast" target="_blank" rel="noreferrer"
                                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", background: "#111113", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, marginBottom: "2rem", textDecoration: "none", color: "#E8E6E0", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.25)"; el.style.transform = "translateX(6px)"; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "translateX(0)"; }}>
                                <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#E8E6E0"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                </div>
                                <div>
                                    <div className="font-mono" style={{ fontSize: "0.65rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.2rem" }}>GitHub</div>
                                    <div className="font-mono" style={{ fontSize: "0.82rem", color: "#E8E6E0" }}>github.com/Alphcast</div>
                                </div>
                            </a>

                            {/* Online status */}
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.75rem 1.25rem", background: "#111113", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 8, width: "fit-content" }}>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
                                <span className="font-mono" style={{ fontSize: "0.75rem", color: "#10B981", letterSpacing: "0.05em" }}>Available for new opportunities</span>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "2.5rem" }}>
                            <h3 className="font-display" style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: "#E8E6E0" }}>Send a Message</h3>
                            <p className="font-mono" style={{ fontSize: "0.78rem", color: "#6B7280", marginBottom: "2rem" }}>Fill out the form — I'll get back to you within 24 hours.</p>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                                    <div>
                                        <label className="font-mono" style={{ fontSize: "0.68rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Your Name *</label>
                                        <input required type="text" placeholder="John Doe" className="form-input"
                                            value={formData.name}
                                            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} />
                                    </div>
                                    <div>
                                        <label className="font-mono" style={{ fontSize: "0.68rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Your Email *</label>
                                        <input required type="email" placeholder="john@company.com" className="form-input"
                                            value={formData.email}
                                            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} />
                                    </div>
                                </div>

                                <div style={{ marginBottom: "1rem" }}>
                                    <label className="font-mono" style={{ fontSize: "0.68rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Subject *</label>
                                    <input required type="text" placeholder="Job Opportunity / Freelance Project / Collaboration" className="form-input"
                                        value={formData.subject}
                                        onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))} />
                                </div>

                                <div style={{ marginBottom: "1rem" }}>
                                    <label className="font-mono" style={{ fontSize: "0.68rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Message *</label>
                                    <textarea required placeholder="Tell me about the role, project or collaboration you have in mind..." className="form-input"
                                        value={formData.message}
                                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} />
                                </div>

                                {/* File attachment */}
                                <div style={{ marginBottom: "1.5rem" }}>
                                    <label className="font-mono" style={{ fontSize: "0.68rem", color: "#6B7280", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                                        Attach Document (optional)
                                    </label>
                                    <div className="file-drop" onClick={() => fileInputRef.current?.click()}>
                                        <input ref={fileInputRef} type="file" style={{ display: "none" }} accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg" onChange={handleFileChange} />
                                        {fileName ? (
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center" }}>
                                                <span style={{ fontSize: "1.2rem" }}>📎</span>
                                                <span className="font-mono" style={{ fontSize: "0.8rem", color: "#F59E0B" }}>{fileName}</span>
                                                <button type="button" onClick={(e) => { e.stopPropagation(); setFileName(""); setFormData((p) => ({ ...p, file: null })); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                                                    style={{ background: "none", border: "none", color: "#6B7280", cursor: "pointer", fontSize: "1rem" }}>✕</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>📄</div>
                                                <p className="font-mono" style={{ fontSize: "0.78rem", color: "#9CA3AF" }}>
                                                    Click to attach a file
                                                </p>
                                                <p className="font-mono" style={{ fontSize: "0.65rem", color: "#4B4B52", marginTop: "0.25rem" }}>
                                                    PDF, DOC, DOCX, TXT, PNG, JPG — max 10MB
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit */}
                                <button type="submit" disabled={formStatus === "sending" || formStatus === "sent"} className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "0.88rem" }}>
                                    {formStatus === "idle" && (<>✉️ &nbsp;Send Message to Rokeeb</>)}
                                    {formStatus === "sending" && (<><div className="spinner" />&nbsp; Opening Email Client...</>)}
                                    {formStatus === "sent" && (<><span className="check-pop" style={{ display: "inline-block" }}>✓</span>&nbsp; Email Client Opened!</>)}
                                </button>

                                <p className="font-mono" style={{ fontSize: "0.68rem", color: "#4B4B52", textAlign: "center", marginTop: "1rem" }}>
                                    Sends to oladeporokeeb203@gmail.com • Your email client will open
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Quick action pills */}
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                        <a href="mailto:oladeporokeeb203@gmail.com" className="social-pill"
                            style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.25)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,158,11,0.2)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,158,11,0.1)"; }}>
                            ✉️ oladeporokeeb203@gmail.com
                        </a>
                        <a href="https://wa.me/2349011105681" target="_blank" rel="noreferrer" className="social-pill"
                            style={{ background: "rgba(37,211,102,0.1)", color: "#25D366", border: "1px solid rgba(37,211,102,0.25)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.2)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.1)"; }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            +234 901 110 5681
                        </a>
                        <a href="https://github.com/Alphcast" target="_blank" rel="noreferrer" className="social-pill"
                            style={{ background: "rgba(255,255,255,0.04)", color: "#E8E6E0", border: "1px solid rgba(255,255,255,0.12)" }}
                            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(255,255,255,0.1)"; el.style.borderColor = "rgba(255,255,255,0.25)"; }}
                            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.12)"; }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                            github.com/Alphcast
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer style={{ background: "#0D0D0F", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "2rem" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <div className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                        <span className="gold-gradient">ORO.</span>
                    </div>
                    <p className="font-mono" style={{ color: "#4B4B52", fontSize: "0.72rem", letterSpacing: "0.05em" }}>
                        © 2025 Oladepo Rokeeb Olayinka — Frontend Developer
                    </p>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <a href="https://github.com/Alphcast" target="_blank" rel="noreferrer" style={{ color: "#4B4B52", transition: "color 0.2s" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F59E0B"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4B4B52"; }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                        </a>
                        <a href="https://wa.me/2349011105681" target="_blank" rel="noreferrer" style={{ color: "#4B4B52", transition: "color 0.2s" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#25D366"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4B4B52"; }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </a>
                        <a href="mailto:oladeporokeeb203@gmail.com" style={{ color: "#4B4B52", transition: "color 0.2s", fontSize: "1.1rem" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F59E0B"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4B4B52"; }}>
                            ✉
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

// ── Animated Skill Bar ──
function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setTimeout(() => setAnimated(true), delay);
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span className="font-mono" style={{ fontSize: "0.82rem", color: "#E8E6E0" }}>{name}</span>
                <span className="font-mono" style={{ fontSize: "0.72rem", color: "#F59E0B" }}>{level}%</span>
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: "100%", background: "linear-gradient(to right, #F59E0B, #FCD34D)", borderRadius: 2, width: animated ? `${level}%` : "0%", transition: "width 1.5s cubic-bezier(0.25, 1, 0.5, 1)" }} />
            </div>
        </div>
    );
}
