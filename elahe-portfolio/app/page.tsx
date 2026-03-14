"use client";

import { useEffect, useMemo, useState } from "react";

type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
};

type Project = {
  name: string;
  type: string;
  description: string;
  tech: string[];
};

const experiences: Experience[] = [
  {
    company: "Xplore Inc",
    role: "Technical Support Specialist",
    period: "2024 - Present",
    summary:
      "Troubleshoot complex network and backend systems across fiber, satellite, and wireless environments. Analyze technical data, resolve reliability issues, and strengthen system-level problem solving.",
    tags: ["Troubleshooting", "System Analysis", "Reliability"],
  },
  {
    company: "Finecode",
    role: "Full-Stack Developer",
    period: "2022",
    summary:
      "Built full-stack web features using ASP.NET, JavaScript, HTML, and CSS. Integrated SQL Server with backend systems, created responsive UI with Bootstrap, and worked within Agile workflows.",
    tags: ["ASP.NET", "SQL Server", "Responsive UI"],
  },
  {
    company: "SABAFAM",
    role: "Junior Backend .NET Developer",
    period: "2019 - 2020",
    summary:
      "Built ASP.NET WebForms and MVC applications, optimized SQL queries and stored procedures, improved frontend behavior, and debugged backend logic for stronger performance.",
    tags: ["Backend", "Performance", "ASP.NET MVC"],
  },
];

const projects: Project[] = [
  {
    name: "FrameItLive",
    type: "E-Commerce Frame Customization App",
    description:
      "An interactive application where users customize picture frames with live previews. Combines dynamic UI behavior with pricing logic and product management workflows.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQL Server", "jQuery", "AJAX"],
  },
  {
    name: "Job Application Assistant",
    type: "Full-Stack Productivity App",
    description:
      "A practical ASP.NET Core application for managing job applications with CRUD APIs, reusable response templates, and a responsive interface built for real workflow use.",
    tech: ["ASP.NET Core", "C#", "JavaScript", "HTML", "CSS", "CRUD APIs"],
  },
];

const stackGroups = [
  {
    title: "Backend",
    items: ["C#", "ASP.NET WebForms", "ASP.NET MVC", "ASP.NET Core", "REST APIs", "Entity Framework"],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "AJAX"],
  },
  {
    title: "Database",
    items: ["SQL Server", "Stored Procedures", "Triggers", "Query Optimization", "Database Design"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Visual Studio", "VS Code", "Linux", "Agile/Scrum"],
  },
];

function TerminalIntro() {
  const lines = useMemo(
    () => [
      "initializing developer profile...",
      "name: Elahe Rasooli",
      "role: Full-Stack .NET Developer",
      "stack: ASP.NET | SQL Server | JavaScript",
      "status: open to software developer roles",
    ],
    []
  );

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 28);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, current]);
      setCurrentLine("");
      setCharIndex(0);
      setLineIndex((prev) => prev + 1);
    }, 350);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines, currentLine]);

  return (
    <div
      style={{
        background: "#020617",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 20,
        fontFamily: "monospace",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#67e8f9", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#38bdf8", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#2563eb", display: "inline-block" }} />
      </div>

      {displayedLines.map((line, i) => (
        <p key={i} style={{ color: "#34d399", margin: "8px 0" }}>
          {">"} {line}
        </p>
      ))}

      {lineIndex < lines.length && (
        <p style={{ color: "#34d399", margin: "8px 0" }}>
          {">"} {currentLine}
          <span style={{ opacity: 0.7 }}>|</span>
        </p>
      )}
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.04)",
        color: "#cbd5e1",
        fontSize: 14,
      }}
    >
      {text}
    </span>
  );
}

function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "rgba(15, 23, 42, 0.7)",
        border: "1px solid rgba(34, 211, 238, 0.15)",
        borderRadius: 24,
        padding: 24,
        boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right, rgba(34,211,238,0.14), transparent 30%), radial-gradient(circle at bottom left, rgba(59,130,246,0.14), transparent 30%), #020617",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "32px 20px 80px" }}>
        <section style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              marginBottom: 28,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#67e8f9",
                  marginBottom: 12,
                }}
              >
                elahe.dev
              </p>
              <h1 style={{ fontSize: "clamp(40px, 7vw, 72px)", margin: 0 }}>Elahe Rasooli</h1>
              <p
                style={{
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  color: "#cbd5e1",
                  maxWidth: 760,
                  marginTop: 12,
                  lineHeight: 1.5,
                }}
              >
                Full-Stack .NET Developer building scalable web applications, reliable backend systems, and polished user experiences.
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="mailto:elahe.rasooli@unb.ca" style={buttonPrimary}>
                Contact Me
              </a>
              <a href="https://github.com/elahers" target="_blank" rel="noreferrer" style={buttonSecondary}>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/elahe-rasooli-7a4431274"
                target="_blank"
                rel="noreferrer"
                style={buttonSecondary}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            <Card>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <Stat label="Primary Focus" value="Full-Stack .NET" />
                <Stat label="Backend Strength" value="ASP.NET + APIs + SQL" />
                <Stat label="Frontend Style" value="Responsive UI" />
                <Stat label="Portfolio Domain" value="elahe.dev" />
              </div>

              <div
                style={{
                  borderRadius: 20,
                  padding: 20,
                  background: "linear-gradient(135deg, rgba(34,211,238,0.10), rgba(37,99,235,0.10))",
                  border: "1px solid rgba(34,211,238,0.10)",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "#67e8f9",
                    marginBottom: 10,
                  }}
                >
                  Profile Signal
                </p>
                <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.2 }}>
                  Backend-minded engineer with full-stack execution and a strong instinct for clean systems.
                </h2>
                <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginTop: 14 }}>
                  I enjoy building dependable application logic under the hood while still delivering interfaces that feel intuitive and modern.
                  My work sits at the intersection of API design, database reliability, performance awareness, and practical UI implementation.
                </p>
              </div>
            </Card>

            <div style={{ display: "grid", gap: 20 }}>
              <Card>
                <h3 style={{ marginTop: 0, marginBottom: 16 }}>Terminal Intro</h3>
                <TerminalIntro />
              </Card>

              <Card>
                <h3 style={{ marginTop: 0, marginBottom: 16 }}>Quick Links</h3>
                <div style={{ display: "grid", gap: 12 }}>
                  <QuickLink label="Email" href="mailto:elahe.rasooli@unb.ca" />
                  <QuickLink label="GitHub" href="https://github.com/elahers" />
                  <QuickLink label="LinkedIn" href="https://linkedin.com/in/elahe-rasooli-7a4431274" />
                  <QuickLink label="Phone" href="tel:+15065755670" />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 70 }}>
          <SectionTitle
            eyebrow="About"
            title="A portfolio that feels engineered, not templated"
            text="I wanted this site to reflect the way I build software: structured, thoughtful, and practical. My background combines backend development, database work, API thinking, responsive interfaces, and a problem-solving mindset shaped by real technical work."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: 16,
              marginTop: 24,
            }}
          >
            <Highlight
              title="Builds with structure"
              text="I focus on maintainable code, clean architecture, and systems that are easy to extend over time."
            />
            <Highlight
              title="Thinks in root causes"
              text="I enjoy debugging, understanding failure points, and making applications more reliable."
            />
            <Highlight
              title="Balances polish and depth"
              text="I care about both dependable backend behavior and interfaces that feel modern and intuitive."
            />
          </div>
        </section>

        <section style={{ marginTop: 70 }}>
          <SectionTitle
            eyebrow="Core Stack"
            title="Capabilities across the application layer"
            text="The strongest version of my work happens when backend logic, data structure, and frontend usability all line up cleanly."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginTop: 24,
            }}
          >
            {stackGroups.map((group) => (
              <Card key={group.title}>
                <h3 style={{ marginTop: 0 }}>{group.title}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                  {group.items.map((item) => (
                    <Badge key={item} text={item} />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 70 }}>
          <SectionTitle
            eyebrow="Experience Timeline"
            title="Progression through backend, full-stack, and systems-oriented roles"
            text="Each role strengthened a different part of how I build: backend logic, end-to-end delivery, and practical troubleshooting under real constraints."
          />

          <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
            {experiences.map((item, index) => (
              <Card key={item.company}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: 20,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: 12,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                        color: "#67e8f9",
                        marginBottom: 12,
                      }}
                    >
                      Node {index + 1}
                    </p>
                    <h3 style={{ margin: 0 }}>{item.company}</h3>
                    <p style={{ color: "#94a3b8", marginTop: 8 }}>{item.period}</p>
                  </div>

                  <div>
                    <h3 style={{ marginTop: 0 }}>{item.role}</h3>
                    <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>{item.summary}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                      {item.tags.map((tag) => (
                        <Badge key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 70 }}>
          <SectionTitle
            eyebrow="Selected Projects"
            title="Projects that show both functionality and execution"
            text="These projects communicate how I think about product usefulness, implementation details, and interface quality."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
              marginTop: 24,
            }}
          >
            {projects.map((project) => (
              <Card key={project.name} style={{ overflow: "hidden", padding: 0 }}>
                <div
                  style={{
                    padding: 24,
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "radial-gradient(circle at top left, rgba(34,211,238,0.22), transparent 35%), linear-gradient(135deg, #0f172a, #09111f)",
                  }}
                >
                  <p
                    style={{
                      display: "inline-block",
                      margin: 0,
                      marginBottom: 14,
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(34,211,238,0.10)",
                      border: "1px solid rgba(34,211,238,0.16)",
                      color: "#a5f3fc",
                      fontSize: 14,
                    }}
                  >
                    {project.type}
                  </p>
                  <h3 style={{ margin: 0, fontSize: 28 }}>{project.name}</h3>
                </div>

                <div style={{ padding: 24 }}>
                  <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>{project.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
                    {project.tech.map((item) => (
                      <Badge key={item} text={item} />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 70 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            <Card>
              <SectionTitle
                eyebrow="Contact"
                title="Let’s build something thoughtful"
                text="I’m looking for software developer opportunities where I can contribute across backend systems, APIs, databases, and full-stack application development."
              />

              <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
                <ContactRow label="Email" value="elahe.rasooli@unb.ca" />
                <ContactRow label="Phone" value="+1 (506) 575-5670" />
                <ContactRow label="GitHub" value="github.com/elahers" />
                <ContactRow label="LinkedIn" value="linkedin.com/in/elahe-rasooli-7a4431274" />
              </div>
            </Card>

            <Card>
              <h3 style={{ marginTop: 0 }}>Contact Form</h3>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
                This version is frontend-only for now. Once you want, we can connect it to a real backend endpoint such as
                <span style={{ color: "#67e8f9" }}> /api/contact</span>.
              </p>

              <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
                <input placeholder="Your name" style={inputStyle} />
                <input placeholder="Your email" style={inputStyle} />
                <textarea placeholder="Tell me about the opportunity" style={{ ...inputStyle, minHeight: 140, resize: "vertical" }} />
                <button style={buttonPrimary}>Send Message</button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        padding: 16,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#94a3b8",
        }}
      >
        {label}
      </p>
      <p style={{ margin: "12px 0 0", fontSize: 18 }}>{value}</p>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div style={{ maxWidth: 760 }}>
      <p
        style={{
          fontSize: 12,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#67e8f9",
          marginBottom: 10,
        }}
      >
        {eyebrow}
      </p>
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", margin: 0 }}>{title}</h2>
      <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginTop: 12 }}>{text}</p>
    </div>
  );
}

function Highlight({ title, text }: { title: string; text: string }) {
  return (
    <Card>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>{text}</p>
    </Card>
  );
}

function QuickLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 16px",
        borderRadius: 18,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "white",
        textDecoration: "none",
      }}
    >
      <span>{label}</span>
      <span style={{ color: "#67e8f9" }}>↗</span>
    </a>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "center",
        padding: "14px 16px",
        borderRadius: 18,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <strong style={{ minWidth: 80, color: "#67e8f9" }}>{label}</strong>
      <span style={{ color: "#e2e8f0" }}>{value}</span>
    </div>
  );
}

const buttonPrimary: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: 16,
  background: "#67e8f9",
  color: "#082f49",
  textDecoration: "none",
  fontWeight: 700,
  border: "none",
  cursor: "pointer",
};

const buttonSecondary: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: 16,
  background: "rgba(15,23,42,0.6)",
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(103,232,249,0.22)",
  fontWeight: 600,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  color: "white",
  outline: "none",
}; 