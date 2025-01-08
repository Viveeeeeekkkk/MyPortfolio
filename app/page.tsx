"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import instagram from "../components/assets/instagram.svg";
import gmail from "../components/assets/gmail.svg";
import linkedin from "../components/assets/linkedin.svg";
import whatsapp from "../components/assets/whatsapp.svg";
import profileVivek from '../public/vivek.jpg';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Code, Coffee, Repeat, PenTool, ArrowRightFromLine } from "lucide-react";

const wordsWithIcons = [
  { word: "Coffee", icon: <Coffee size={28} /> },
  { word: "Code", icon: <Code size={28} /> },
  { word: "Create", icon: <PenTool size={28} /> },
  { word: "Repeat", icon: <Repeat size={28} /> },
];

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % wordsWithIcons.length
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
    <BackgroundLines className="flex flex-col items-center justify-center relative">
    <div className="absolute text-white text-sm bottom-5 left-12">
      © {new Date().getFullYear()} Vivek. All Rights Reserved.
      </div>
      <div className="absolute top-16 left-20 z-20">
        <div className="relative text-5xl dark:text-neutral-200 font-playfair h-10 w-auto flex items-center justify-start">
          {wordsWithIcons.map((item, index) => (
            <div
              key={index}
              className={`absolute flex items-center gap-2 transition-all duration-500 ease-in-out ${
                index === currentWordIndex
                  ? "opacity-100 blur-0"
                  : "opacity-0 blur-sm"
              }`}
            >
              {item.icon}
              <span>{item.word}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[86%] top-16 z-50">
        <Link
          href="/side-b"
          className="flex items-center text-lg font-playfair group relative"
        >
          <i>Side - B</i>&nbsp;&nbsp;&nbsp;<ArrowRightFromLine size={17}/>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-20 w-full">
        <div className="z-50">
          <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b dark:from-neutral-400 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans md:py-2 relative font-bold tracking-tight">
            <i>Hello, This is Vivek</i>
          </h2>
          <p className="max-w-xl text-xl dark:text-neutral-300 text-left font-playfair">
            Software Developer&nbsp;&nbsp;|&nbsp;&nbsp;Full Stack Developer&nbsp;&nbsp;|&nbsp;&nbsp;Freelancer
          </p>
          <div className="flex justify-start space-x-5 mt-3">
            <a
              href="https://www.linkedin.com/in/sai-vivek-9a26b2201"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} height={21} width={21} alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/viveeeeeekkkk"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={instagram} height={21} width={21} alt="instagram" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com">
              <Image src={gmail} height={24} width={24} alt="gmail" />
            </a>
            <a
              href="https://wa.me/+918465955818"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={whatsapp} height={22} width={22} alt="Whatsapp" />
            </a>
          </div>
        </div>
        <div>
          <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 z-20">
            <Image
              src={profileVivek}
              alt="Vivek"
              height="300"
              width="300"
              className="object-contain rounded-[22px]"
            />
          </BackgroundGradient>
        </div>
      </div>
      <div className="z-40 flex flex-row gap-16 dark:text-neutral-300 font-playfair text-xl mt-10">
        <Link
          href="/about"
          className="flex items-center transition-transform duration-100 hover:scale-110"
        >
          About&nbsp;
          <ArrowUpRight size={17} className="ml-1" />
        </Link>
        <Link
          href="/work"
          className="flex items-center transition-transform duration-100 hover:scale-110"
        >
          Work&nbsp;
          <ArrowUpRight size={17} className="ml-1" />
        </Link>
        <Link
          href="/skills"
          className="flex items-center transition-transform duration-100 hover:scale-110"
        >
          Skills&nbsp;
          <ArrowUpRight size={17} className="ml-1" />
        </Link>
        <Link
          href="https://drive.google.com/file/d/1Q9vNqBlmNf_giWy_UL3AwlIDyKNIeNn-/view?usp=sharing"
          target="_blank"
          className="flex items-center transition-transform duration-100 hover:scale-110"
        >
          Resume&nbsp;
          <ArrowUpRight size={17} className="ml-1" />
        </Link>
      </div>
    </BackgroundLines>
    </motion.div>
  );
};

export default Home;
