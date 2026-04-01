"use client";

import { useEffect, useMemo, useState } from "react";

function HeroIntro() {
  const words = useMemo(() => ["Elahe Rasooli", "Software Engineer"], []);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 90 + displayText.length * 12);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 250);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <div
      style={{
        minHeight: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        fontSize: "clamp(42px, 7vw, 84px)",
        fontWeight: 700,
        letterSpacing: "-2px",
        textAlign: "left",
        lineHeight: 1,
      }}
    >
      <span>{displayText}</span>
      <span
        style={{
          display: "inline-block",
          marginLeft: "6px",
          opacity: 1,
          animation: "blinkCursor 1s steps(1) infinite",
        }}
      >
        |
      </span>
    </div>
  );
}


function Pill({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "8px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#e5e7eb",
        fontSize: 14,
      }}
    >
      {text}
    </span>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ marginTop: 90, scrollMarginTop: 80 }}>
      <p
        style={{
          fontSize: 12,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#94a3b8",
          marginBottom: 10,
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <div style={{ marginTop: 24 }}>{children}</div>
    </section>
  );
}

const experiences = [
  {
    company: "Xplore Inc",
    role: "Technical Support Specialist",
    period: "2024 - Present",
    summary:
      "Troubleshoot complex network and backend systems across fiber, satellite, and wireless environments. Analyze technical data, resolve reliability issues, and continue building stronger system-level problem-solving skills.",
  },
  {
    company: "Finecode",
    role: "Full-Stack Developer",
    period: "2022",
    summary:
      "Built full-stack web features using ASP.NET, JavaScript, HTML, and CSS. Integrated SQL Server with backend systems, created responsive UI with Bootstrap, and worked within Agile workflows.",
  },
  {
    company: "SABAFAM",
    role: "Junior Backend .NET Developer",
    period: "2019 - 2020",
    summary:
      "Built ASP.NET WebForms and MVC applications, optimized SQL queries and stored procedures, improved frontend behavior, and debugged backend logic for stronger performance.",
  },
];

const projects = [
  {
    name: "FrameItLive",
    type: "E-Commerce Frame Customization App",
    description:
      "An interactive application where users customize picture frames with live previews. It combines dynamic UI behavior with pricing logic and product workflows.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "SQL Server",
      "jQuery",
      "AJAX",
    ],
  },
  {
    name: "Job Application Assistant",
    type: "Full-Stack Productivity App",
    description:
      "A practical ASP.NET Core application for managing job application data with CRUD APIs, reusable response templates, and a responsive interface focused on real workflow use.",
    tech: ["ASP.NET Core", "C#", "JavaScript", "HTML", "CSS", "CRUD APIs"],
  },
];

const skills = [
  "C#",
  "ASP.NET WebForms",
  "ASP.NET MVC",
  "ASP.NET Core",
  "REST APIs",
  "SQL Server",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "jQuery",
  "Git",
  "GitHub",
  "Visual Studio",
  "Agile/Scrum",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: "140px",
          left: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          fontSize: "13px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => setActiveSection("education")}
          style={{
            ...sidebarButton,
            color: activeSection === "education" ? "#fafafa" : "#737373",
          }}
        >
          Education
        </button>

        <button
          onClick={() => setActiveSection("experience")}
          style={{
            ...sidebarButton,
            color: activeSection === "experience" ? "#fafafa" : "#737373",
          }}
        >
          Experience
        </button>

        <button
          onClick={() => setActiveSection("projects")}
          style={{
            ...sidebarButton,
            color: activeSection === "projects" ? "#fafafa" : "#737373",
          }}
        >
          Projects
        </button>

        <button
          onClick={() => setActiveSection("skills")}
          style={{
            ...sidebarButton,
            color: activeSection === "skills" ? "#fafafa" : "#737373",
          }}
        >
          Skills
        </button>
      </nav>

      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "40px 24px 88px 190px",
        }}
      >
        <section style={{ marginBottom: 56 }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#a3a3a3",
              marginBottom: 18,
            }}
          >
            elahe.dev
          </p>

          <HeroIntro />

          <p
            style={{
              fontSize: "clamp(18px, 2.1vw, 24px)",
              color: "#d4d4d8",
              marginTop: 14,
              lineHeight: 1.7,
              maxWidth: 760,
            }}
          >
            Full-Stack .NET Developer with experience building web applications
            using ASP.NET, SQL Server, and modern frontend tools. I enjoy
            working across both backend and frontend parts of an application,
            focusing on writing clear, maintainable code and building features
            that solve practical problems. As I continue growing as a developer,
            I’m interested in improving backend systems, working with APIs and
            databases, and creating user interfaces that feel simple and
            reliable.
          </p>

          <div style={{ marginTop: 26 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#d4d4d8",
                fontSize: "16px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 999,
                padding: "10px 14px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
              New Brunswick, Canada
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <a href="/SoftwareElahe.pdf" download style={primaryButton}>
              Download Resume
            </a>
            <a
              href="https://github.com/elahers"
              target="_blank"
              rel="noreferrer"
              style={secondaryButton}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/elahe-rasooli-7a4431274"
              target="_blank"
              rel="noreferrer"
              style={secondaryButton}
            >
              LinkedIn
            </a>
          </div>

         
        </section>

        <div style={{ marginTop: 70 }}>
          {activeSection === "education" && (
            <Section label="Education" title="Academic background.">
              <div style={{ display: "grid", gap: 22 }}>
                <div style={rowStyle}>
                  <div style={leftColStyle}>Master of Computer Science</div>
                  <div>
                    <h3 style={itemTitleStyle}>University of New Brunswick</h3>
                    <p style={bodyText}>
                      Graduate studies focused on strengthening my technical
                      foundation and continuing to grow my skills in software
                      development and computer science.
                    </p>
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={leftColStyle}>Bachelor of Computer Engineering</div>
                  <div>
                    <h3 style={itemTitleStyle}>
                      K. N. Toosi University of Technology
                    </h3>
                    <p style={bodyText}>
                      Built a strong base in programming, engineering problem
                      solving, and core software concepts that shaped my path
                      into development.
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {activeSection === "experience" && (
            <Section
              label="Experience"
              title="Experience across systems, support, and development."
            >
              <div style={{ display: "grid", gap: 22 }}>
                {experiences.map((item) => (
                  <div key={item.company} style={rowStyle}>
                    <div style={leftColStyle}>{item.period}</div>
                    <div>
                      <h3 style={itemTitleStyle}>{item.role}</h3>
                      <p
                        style={{
                          ...bodyText,
                          marginTop: 6,
                          fontWeight: 600,
                          color: "#e5e7eb",
                        }}
                      >
                        {item.company}
                      </p>
                      <p style={{ ...bodyText, marginTop: 12 }}>{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {activeSection === "projects" && (
            <Section
              label="Projects"
              title="Projects that reflect practical, hands-on development."
            >
              <div style={{ display: "grid", gap: 24 }}>
                {projects.map((project) => (
                  <div key={project.name} style={projectRowStyle}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        alignItems: "baseline",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3 style={itemTitleStyle}>{project.name}</h3>
                      <span style={{ color: "#a3a3a3" }}>{project.type}</span>
                    </div>

                    <p style={{ ...bodyText, marginTop: 14 }}>
                      {project.description}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 10,
                        marginTop: 14,
                      }}
                    >
                      {project.tech.map((item) => (
                        <Pill key={item} text={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {activeSection === "skills" && (
            <Section label="Skills" title="Technologies I’ve worked with.">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {skills.map((item) => (
                  <Pill key={item} text={item} />
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
    </main>
  );
}

const sidebarButton: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "#737373",
  textDecoration: "none",
  transition: "0.2s",
  cursor: "pointer",
  textAlign: "left",
  padding: 0,
  fontSize: "13px",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
};

const primaryButton: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: 999,
  background: "#fafafa",
  color: "#0a0a0a",
  textDecoration: "none",
  fontWeight: 700,
};

const secondaryButton: React.CSSProperties = {
  display: "inline-block",
  padding: "12px 18px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.14)",
  color: "#fafafa",
  textDecoration: "none",
  fontWeight: 600,
};

const bodyText: React.CSSProperties = {
  color: "#d4d4d8",
  lineHeight: 1.8,
  fontSize: 17,
  maxWidth: 760,
};

const rowStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(255,255,255,0.12)",
  paddingTop: 22,
  display: "grid",
  gridTemplateColumns: "220px 1fr",
  gap: 20,
};

const projectRowStyle: React.CSSProperties = {
  borderTop: "1px solid rgba(255,255,255,0.12)",
  paddingTop: 22,
};

const leftColStyle: React.CSSProperties = {
  color: "#a3a3a3",
  fontSize: 15,
  lineHeight: 1.7,
};

const itemTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 28,
  lineHeight: 1.2,
};