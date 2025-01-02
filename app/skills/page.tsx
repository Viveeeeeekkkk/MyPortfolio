"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const skillsData = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Nest.js", icon: "/icons/nestjs.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
  { name: "HTML5", icon: "/icons/html.svg" },
  { name: "C", icon: "/icons/c.svg" },
];


const Skills = () => {
  const router = useRouter();

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 mt-12"
      >
      <div className="fixed top-5 group w-[22%] mx-auto z-50">
        <div className="flex justify-evenly text-white border-4 p-2 rounded-full bg-black shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
          <Link href="/">
            <div className="hover:bg-zinc-500 transition-all duration-300 py-1 px-3 rounded-2xl">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="hover:bg-zinc-500 transition-all duration-300 py-1 px-3 rounded-2xl">About</div>
          </Link>
          <Link href="/work">
            <div className="hover:bg-zinc-500 transition-all duration-300 py-1 px-3 rounded-2xl">
              Work
            </div>
          </Link>
          <Link href="/skills">
            <div className="hover:bg-zinc-500 transition-all duration-300 py-1 px-3 rounded-2xl">
              Skills
            </div>
          </Link>
        </div>
      </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 mt-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          These are my Skills
        </h1>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Here's a list of my expertise:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-start p-4 rounded-lg shadow-lg bg-gradient-to-br from-gray-600 via-gray-700 to-blue-950 text-white"
            >
              <div className="relative w-10 h-10 mr-4">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Skills;
