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
      "Troubleshoot and optimize complex network configurations across fiber, satellite, and wireless systems.",
      "Document technical issues with engineering-level clarity, improving backend visibility and tracking accuracy.",
      "Analyze network data and case trends to recommend system-level improvements.",
      "Support users across web interfaces, internal systems, and third-party tools.",
    ],
  },
  {
    years: "April 2022 — November 2022",
    role: "Full-Stack Developer",
    company: "Finecode",
    location: "Tehran, Iran",
    description: [
      "Built full-stack features using ASP.NET and modern frontend technologies.",
      "Integrated SQL Server databases to support dynamic web applications.",
      "Developed responsive interfaces with Bootstrap for consistent cross-device UX.",
      "Worked within Agile workflows with version control and structured deployment.",
      "Wrote maintainable C# code and performed unit testing.",
    ],
  },
  {
    years: "January 2019 — September 2020",
    role: "Junior Backend .NET Developer",
    company: "SABAFAM",
    location: "Tehran, Iran",
    description: [
      "Developed ASP.NET WebForms and MVC applications and maintained legacy systems.",
      "Optimized SQL Server queries, stored procedures, and triggers.",
      "Improved UI/UX using JavaScript, CSS, and Bootstrap.",
      "Debugged backend logic and improved system performance.",
      "Participated in code reviews and requirement analysis.",
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
              A snapshot of the roles, teams, and projects that have shaped my
              design and product perspective.
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
    </div>
  );
}