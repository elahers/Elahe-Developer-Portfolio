"use client";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "",
    title: "FrameItLive",
    category: "E-Commerce Application",
    description:
      "A full-stack e-commerce system enabling users to customize picture frames with real-time previews.",
    details: [
      "Built using HTML5, CSS3, JavaScript, Bootstrap, SQL Server, jQuery, AJAX, and Git/GitHub.",
      "Designed backend logic for pricing, product management, and user selections.",
      "Implemented dynamic UI components for interactive customization.",
    ],
    href: "#",
  },
  {
    year: "",
    title: "Job Application Assistant",
    category: "Full-Stack Application",
    description:
      "A system for storing and reusing job application responses with dynamic form interactions.",
    details: [
      "Built using HTML5, CSS3, JavaScript, C, and ASP.NET Core.",
      "Developed backend APIs for CRUD operations and template management.",
      "Designed a responsive UI with dynamic form updates.",
    ],
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
    

      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-16 md:grid-cols-12"
        >
          <section className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
              Selected Work
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Projects
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/60 md:text-base">
              A focused collection of engineering and product work across full-stack systems and interactive applications.
            </p>
          </section>

          <section className="md:col-span-8">
            <div className="border-t border-white/10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[1fr]"
                >
                  <div>
                    <h2 className="text-2xl font-medium leading-tight md:text-3xl">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">
                      {project.category}
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-white/60">
                      {project.details.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 rounded-full bg-white/40" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Research Section */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24 grid gap-12 md:grid-cols-12"
        >
          <section className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/40">
              Research
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              Publication
            </h2>
          </section>

          <section className="md:col-span-8 border-t border-white/10 pt-8">
            <h3 className="text-xl font-medium leading-snug md:text-2xl">
              Prudent carving: a progressively refining algorithm for shape reconstruction from dot patterns
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              Published in The Journal of Supercomputing, this work presents a parameter-free algorithm for reconstructing both inner and outer boundaries from dot-pattern point sets. The method detects multiple components, sharp corners, and nested holes efficiently using a Delaunay triangulation-based approach.
            </p>

            

            <div className="mt-8 flex gap-4">
              <a
                href="https://link.springer.com/epdf/10.1007/s11227-024-06175-w?sharing_token=02Kkty031DxovnxrN28rbve4RwlQNchNByi7wbcMAY6PKEMfv4riOS0OqwDTA5HCn899UGVLbnUVoq-Qds-g1tQmcKqGuTP9O0d2Egfc43Df0pP9uYBY2svNxuYIYa7EPRWaNTtP4awXZN4596W8Y2hkxih2-YI5-nbxrKuxuEs%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition-all duration-200 hover:border-white hover:text-white hover:-translate-y-0.5"
              >
                View Publication
                <span className="text-white/50">↗</span>
              </a>
            </div>
          </section>
        </motion.div>
      </main>
       <div className="mx-auto max-w-6xl px-6 pb-10 md:px-10">
      <div className="mx-auto max-w-6xl px-6 pb-10 md:px-10">
            <Footer />
      </div>
    </div>
    </div>
  );
}
