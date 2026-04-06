"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/footer";
const experience = [
  {
    years: "May 2024 — Present",
    role: "Technical Support Specialist",
    company: "Xplore Inc.",
    location: "Fredericton, New Brunswick",
    description: [
      "Diagnose and resolve complex issues across fiber, satellite, and wireless network systems in a high-volume environment",
      "Document technical issues and system behavior to improve backend visibility and support engineering workflows",
      "Analyze network data and recurring cases to identify system-level issues and improve reliability",
      "Support users across web applications, internal systems, and APIs",
    ],
  },
  {
    years: "Sep 2022 — Mar 2024",
    role: "Teaching Assistant (Graduate)",
    company: "University of New Brunswick",
    location: "Fredericton, New Brunswick",
    description: [
      "Evaluated assignments and examinations, ensuring accurate grading aligned with course standards",
      "Led tutorials and supported instruction in numerical linear algebra and algorithmic concepts",
      "Collaborated with instructors to refine course materials and improve clarity of technical content",
      "Assisted students in debugging code and understanding computational methods",
    ],
  },
  {
    years: "Sep 2021 — Aug 2022",
    role: "Research Assistant",
    company: "K. N. Toosi University of Technology",
    location: "Tehran, Iran",
    description: [
      "Designed and implemented algorithms for shape reconstruction from dot patterns",
      "Conducted data analysis and experimental validation to ensure accuracy and reproducibility",
      "Developed and refined computational methods for algorithmic optimization",
      "Co-authored a research paper published in The Journal of Supercomputing (Springer, 2024)",
    ],
  },
  {
    years: "April 2022 — November 2022",
    role: "Full-Stack Developer",
    company: "Finecode",
    location: "Tehran, Iran",
    description: [
      "Developed full-stack web applications using ASP.NET, C#, and SQL Server",
      "Built responsive UI components using HTML5, CSS3, JavaScript, and Bootstrap",
      "Implemented RESTful APIs (REST APIs) for frontend-backend communication",
      "Designed and integrated relational databases to support dynamic application features",
      "Wrote clean, maintainable C# code and performed unit testing",
    ],
  },
  {
    years: "January 2019 — September 2020",
    role: "Junior Backend .NET Developer",
    company: "SABAFAM",
    location: "Tehran, Iran",
    description: [
      "Developed backend systems using ASP.NET WebForms and MVC and maintained legacy applications",
      "Optimized SQL Server queries, stored procedures, and triggers to improve data handling",
      "Enhanced UI components using JavaScript, CSS, and Bootstrap",
      "Debugged backend logic and improved system stability and performance",
      "Participated in code reviews and requirement analysis to ensure code quality",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader/>

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-12 md:grid-cols-12"
        >
          <section className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
              Professional Work
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Experience
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 md:text-base">
              
            </p>
          </section>

          <section className="md:col-span-8">
            <div className="border-t border-white/10">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.role}-${item.company}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[140px_1fr]"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-white/35">
                    {item.years}
                  </div>

                  <div>
                    <h2 className="text-2xl font-medium leading-tight md:text-3xl">
                      {item.role}
                    </h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">
                      {item.company}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>
      <div className="mx-auto max-w-6xl px-6 pb-10 md:px-10">
            <Footer />
          </div>
    </div>
  );
}