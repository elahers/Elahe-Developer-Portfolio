"use client";
import SiteHeader from "./components/SiteHeader";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
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
        fontSize: "clamp(42px, 7vw, 40px)",
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
    role: "Technical Support Specialist",
    company: "Xplore Inc",
    period: "2024 – Present",

    summary:
      "Troubleshoot complex network and backend systems across fiber, satellite, and wireless environments, strengthening system-level debugging and reliability analysis skills.",

    problem:
      "Customers experienced connectivity and system reliability issues across diverse network infrastructures, requiring deep investigation beyond surface-level troubleshooting.",

    approach:
      "Analyzed network performance data, diagnosed issues across fiber, satellite, and wireless systems, and applied structured debugging techniques to isolate root causes across backend and infrastructure layers.",

    impact:
      "Improved system reliability and issue resolution efficiency while developing strong real-world problem-solving skills in distributed systems and network environments.",

    tech: [
      "Networking",
      "System Debugging",
      "Fiber",
      "Satellite",
      "Wireless Systems",
      "Troubleshooting",
    ],
  },

  {
    role: "Full-Stack Developer",
    company: "Finecode",
    period: "2022",

    summary:
      "Developed full-stack web applications using ASP.NET and JavaScript, integrating backend systems with responsive user interfaces.",

    problem:
      "Needed scalable and maintainable web features that could integrate cleanly with backend systems while providing a responsive user experience.",

    approach:
      "Built backend services with ASP.NET, connected SQL Server databases, and developed responsive frontend components using JavaScript, HTML, CSS, and Bootstrap within Agile workflows.",

    impact:
      "Delivered functional, user-friendly features with improved frontend responsiveness and reliable backend integration.",

    tech: [
      "ASP.NET",
      "JavaScript",
      "SQL Server",
      "HTML",
      "CSS",
      "Bootstrap",
      "Agile",
    ],
  },

  {
    role: "Junior Backend .NET Developer",
    company: "SABAFAM",
    period: "2019 – 2020",

    summary:
      "Developed and optimized backend systems using ASP.NET WebForms and MVC, focusing on performance and database efficiency.",

    problem:
      "Backend systems required optimization for performance, maintainability, and more efficient database interactions.",

    approach:
      "Built and maintained ASP.NET applications, optimized SQL queries and stored procedures, and debugged backend logic to improve system behavior and performance.",

    impact:
      "Enhanced application performance and stability through improved database efficiency and cleaner backend logic.",

    tech: [
      "ASP.NET MVC",
      "WebForms",
      "SQL Server",
      "Stored Procedures",
      "Backend Development",
    ],
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


    <div className="min-h-screen bg-black text-white">
  <SiteHeader />

  <main className="mx-auto max-w-6xl px-6 md:px-10 py-16">
     <div>

        <section >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 5,

              color: "#a3a3a3",
              marginTop: 156,
            }}
          >
            Software Engineering . MCS @ University of New Brunswick
          </div>

          <HeroIntro />

          <p
            style={{
              fontSize: "clamp(18px, 2.1vw, 14px)",
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

          <div
            style={{
              marginTop: 26,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {/* Location */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#d4d4d8",
                fontSize: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
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

            {/* Resume Button */}
            <a
              href="/SoftwareElahe.pdf"
              download



              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                border: "1px solid white",
                borderRadius: "999px",
                padding: "10px 14px",
                background: "white",
                color: "#020617",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              Download Resume
            </a>
          </div>




        </section>


       
      </div>
  </main>
</div>
   
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

const tagStyle = {
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "999px",
  padding: "6px 10px",
  fontSize: "13px",
  color: "#d4d4d8",
};