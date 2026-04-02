"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Footer from  "../components/footer";

const education = [
  {
    years: "",
    school: "University of New Brunswick",
    program: "Master of Computer Science",
    description:
      "Advanced studies focused on software systems, problem solving, and computational thinking.",
  },
  {
    years: "",
    school: "K. N. Toosi University of Technology",
    program: "Bachelor of Computer Engineering",
    description:
      "Built a strong foundation in engineering principles, programming, and system design.",
  },
];

export default function EducationPage() {
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
              Academic Background
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Education
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 md:text-base">
              My academic experience, learning foundations, and the environments
              that shaped the way I think and build.
            </p>
          </section>

          <section className="md:col-span-8">
            <div className="border-t border-white/10">
              {education.map((item, index) => (
                <motion.div
                  key={item.school}
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
                      {item.school}
                    </h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">
                      {item.program}
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