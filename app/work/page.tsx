"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MTJ from "../../components/assets/MTJ.png";
import myportfolio from "../../components/assets/myportfolio.png";
import stockastix from "../../components/assets/stockastix.png";
import moneynut from "../../components/assets/moneynut.png";
import npmicon from "../../components/assets/npmicon.png";

const projects = [
  {
    title: "MoneyNut",
    image: moneynut,
    description:
      "An expense tracking app designed to help users monitor spending habits and gain better financial control.",
    tech: [
      "React Native",
      "Nest.js",
      "DynamoDB",
      "AWS",
      "Git",
      "Expo",
      "Postman",
    ],
    status: "Ready Demo",
    link: null,
    external: false,
  },
  {
    title: "Stockastix",
    image: stockastix,
    description:
      "A stock analysis platform for US markets with real-time data, watchlists, and advanced charting tools.",
    tech: [
      "React",
      "Redux",
      "Django",
      "PostgreSQL",
      "AWS EC2",
      "Cron Jobs",
      "Postman",
      "Git",
    ],
    status: "Live",
    link: "https://github.com/Viveeeeeekkkk/Stockastix-Case-Study",
    external: true,
  },
  {
    title: "My Trade Journal",
    image: MTJ,
    description:
      "A journaling tool for traders with analytics, performance tracking, and personalized insights.",
    tech: ["Nest.js", "Typescript", "React", "AWS", "DynamoDB"],
    status: "Live",
    link: "/work/my-trade-journal",
    external: false,
  },
  {
    title: "Portfolio",
    image: myportfolio,
    description:
      "This very portfolio — built to showcase my projects, skills, and design approach.",
    tech: ["Next.js", "Tailwind", "Shadcn", "Vercel", "Git"],
    status: "Live",
    link: "/",
    external: false,
  },
  {
    title: "roast-a-dev",
    image: npmicon,
    description:
      "An open-source CLI tool that generates fun developer roasts. Published as an NPM package with category filters and fully offline support.",
    tech: ["Node.js", "JavaScript", "NPM", "CLI"],
    status: "Live",
    link: "https://www.npmjs.com/package/roast-a-dev",
    external: true,
  },
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 pt-32"
      >
        <div className="mb-12 text-center">
          <div className="text-3xl">Collection of My Work</div>
          <p className="mt-3 text-neutral-400">
            A selection of products and applications I’ve built and worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-zinc-700/70 rounded-xl shadow-md shadow-black/40 ring-1 ring-white/5 hover:shadow-black/70 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="w-full h-56 bg-[#E6E1F5] flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-6 hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 p-5 flex flex-col">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl">{project.title}</h2>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.status !== "Live"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-2xl bg-zinc-800 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-4">
                  {project.link ? (
                    <Link
                      href={project.link}
                      target={project.external ? "_blank" : "_self"}
                      className="px-4 py-2 text-sm rounded-xl bg-white text-black hover:bg-neutral-200 transition"
                    >
                      View Project →
                    </Link>
                  ) : (
                    <span className="px-4 py-2 text-sm rounded-lg bg-zinc-800 text-neutral-400 cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
