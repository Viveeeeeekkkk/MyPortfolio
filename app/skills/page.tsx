"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const textRef4 = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setTextPosition({ x: rect.left, y: rect.top });
    }
  }, []);

  return (
    <>
      <div className="w-full flex md:justify-center relative overflow-hidden" onMouseMove={handleMouseMove}>
        <Navbar />

        <div
          className="fixed pointer-events-none w-24 h-24 rounded-full bg-white opacity-70 blur-3xl transition-transform duration-100"
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: `translate(-50%, -50%)`,
          }}
        />

        <div
          ref={textRef}
          className="fixed top-32 left-32"
          style={{
            WebkitMask: `radial-gradient(circle at ${cursorPosition.x - textPosition.x}px ${cursorPosition.y - textPosition.y}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
            mask: `radial-gradient(circle at ${cursorPosition.x - textPosition.x}px ${cursorPosition.y - textPosition.y}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
          }}
        >
          <div className="text-4xl font-playfair text-white transition-all duration-200 ease-in-out">
            Adaptability
          </div>
        </div>

        <div
          ref={textRef2}
          className="fixed right-32 bottom-20"
          style={{
            WebkitMask: `radial-gradient(circle at ${cursorPosition.x - (textRef2.current?.getBoundingClientRect().left ?? 0)}px ${cursorPosition.y - (textRef2.current?.getBoundingClientRect().top ?? 0)}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
            mask: `radial-gradient(circle at ${cursorPosition.x - (textRef2.current?.getBoundingClientRect().left ?? 0)}px ${cursorPosition.y - (textRef2.current?.getBoundingClientRect().top ?? 0)}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
          }}
        >
          <div className="text-4xl font-playfair text-white transition-all duration-200 ease-in-out">
            Time Management
          </div>
        </div>

        <div
          ref={textRef3}
          className="fixed left-[7%] bottom-[25%]"
          style={{
            WebkitMask: `radial-gradient(circle at ${cursorPosition.x - (textRef3.current?.getBoundingClientRect().left ?? 0)}px ${cursorPosition.y - (textRef3.current?.getBoundingClientRect().top ?? 0)}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
            mask: `radial-gradient(circle at ${cursorPosition.x - (textRef3.current?.getBoundingClientRect().left ?? 0)}px ${cursorPosition.y - (textRef3.current?.getBoundingClientRect().top ?? 0)}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
          }}
        >
          <div className="text-4xl font-playfair text-white transition-all duration-200 ease-in-out">
            Creativity
          </div>
        </div>

        <div
          ref={textRef4}
          className="fixed right-[10%] top-[30%] z-50"
          style={{
            WebkitMask: `radial-gradient(circle at ${cursorPosition.x - (textRef4.current?.getBoundingClientRect().left ?? 0)}px ${cursorPosition.y - (textRef4.current?.getBoundingClientRect().top ?? 0)}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
            mask: `radial-gradient(circle at ${cursorPosition.x - (textRef4.current?.getBoundingClientRect().left ?? 0)}px ${cursorPosition.y - (textRef4.current?.getBoundingClientRect().top ?? 0)}px, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0) 150px)`,
          }}
        >
          <div className="text-4xl font-playfair text-white transition-all duration-200 ease-in-out">
            Problem Solving
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0.0, y: 50 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{
            delay: 0,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 mt-32"
        >
          <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            These are my Skills
          </h1>
          <div className="text-2xl dark:text-neutral-200">Here's a list of my expertise:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-start p-4 rounded-lg shadow-lg bg-gradient-to-br from-gray-600 via-gray-700 to-blue-950 text-white"
              >
                <div className="relative w-10 h-10 mr-4">
                  <Image src={skill.icon} alt={skill.name} layout="fill" objectFit="contain" className="rounded-md" />
                </div>
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
