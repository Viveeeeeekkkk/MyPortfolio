"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "@/components/assets/instagram.svg";
import gmail from "@/components/assets/gmail.svg";
import linkedin from "@/components/assets/linkedin.svg";
import whatsapp from "@/components/assets/whatsapp.svg";
import music2 from '@/components/assets/music2.jpg';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Music4, Coffee, Repeat, PenTool, ArrowRightFromLine } from "lucide-react";

const wordsWithIcons = [
  { word: "Coffee", icon: <Coffee size={28} /> },
  { word: "Compose", icon: <Music4 size={28} /> },
  { word: "Create", icon: <PenTool size={28} /> },
  { word: "Repeat", icon: <Repeat size={28} /> },
];

const Home2 = () => {
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
    <>
    <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
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
          href="/"
          className="flex items-center text-lg font-playfair group relative"
        >
          <i>Side - A</i>&nbsp;&nbsp;&nbsp;<ArrowRightFromLine size={17}/>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-20 w-full min-h-screen">
        <div className="z-50">
          <div className="font-sans text-xl px-2">
            <i>And This is...</i>
          </div>
          <h2 className="px-2 bg-clip-text text-transparent text-left bg-gradient-to-b dark:from-neutral-400 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans md:pb-2 relative font-bold tracking-tight">
            <i>A Vivek Musical</i>
          </h2>
          <p className="px-2 max-w-xl text-xl dark:text-neutral-300 text-left font-playfair">
            Pianist&nbsp;&nbsp;|&nbsp;&nbsp;Guitarist
          </p>
          <div className="px-2 flex justify-start space-x-5 mt-3">
            <a
              href="https://www.linkedin.com/in/nallapati-koteswara-sai-vivek-9a26b2201/"
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
              src={music2}
              alt="Vivek"
              height="300"
              width="300"
              className="object-contain rounded-[22px]"
            />
          </BackgroundGradient>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default Home2;
