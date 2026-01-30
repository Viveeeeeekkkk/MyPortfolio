"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import instagram from "../components/assets/instagram.svg";
import gmail from "../components/assets/gmail.svg";
import linkedin from "../components/assets/linkedin.svg";
import githubwhite from "../components/assets/githubwhite.svg";
import whatsapp from "../components/assets/whatsapp.svg";
import profileVivek from "../public/vivek.jpg";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Home = () => {
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
      <BackgroundLines className="flex flex-col items-center justify-center relative min-h-screen px-6">
        {/* Footer text */}
        <div className="absolute text-white text-xs sm:text-sm bottom-5 left-6">
          © {new Date().getFullYear()} Vivek. All Rights Reserved.
        </div>

        {/* Main Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl">
          
          {/* Left Content */}
          <div className="z-50 text-center lg:text-left">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-400 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans md:py-2 relative font-bold tracking-tight">
              <i>Hello, This is Vivek</i>
            </h2>

            <p className="max-w-xl text-base sm:text-lg md:text-xl dark:text-neutral-300 font-playfair mt-3">
              Software Developer&nbsp;&nbsp;|&nbsp;&nbsp;AI Full Stack
              Developer&nbsp;&nbsp;|&nbsp;&nbsp;Freelancer
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-5">
              <a
                href="https://www.linkedin.com/in/nallapati-koteswara-sai-vivek-9a26b2201/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={linkedin} height={22} width={22} alt="linkedin" />
              </a>

              <a
                href="https://github.com/Viveeeeeekkkk"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={githubwhite} height={22} width={22} alt="github" />
              </a>

              <a
                href="https://www.instagram.com/viveeeeeekkkk"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={instagram} height={22} width={22} alt="instagram" />
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

          {/* Right Image */}
          <div className="flex justify-center">
            <BackgroundGradient className="rounded-[22px] max-w-[220px] sm:max-w-[260px] md:max-w-sm bg-white dark:bg-zinc-900 z-20">
              <Image
                src={profileVivek}
                alt="Vivek"
                height={300}
                width={300}
                className="object-contain rounded-[22px]"
              />
            </BackgroundGradient>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="z-40 flex flex-wrap justify-center gap-10 dark:text-neutral-300 font-playfair text-base sm:text-lg md:text-xl mt-12">
          <Link href="/work" className="flex items-center hover:scale-105 transition">
            Work&nbsp;
            <ArrowUpRight size={17} className="ml-1" />
          </Link>

          <Link href="/about" className="flex items-center hover:scale-105 transition">
            About&nbsp;
            <ArrowUpRight size={17} className="ml-1" />
          </Link>

          <Link
            href="https://drive.google.com/file/d/1AKWuiFLHAdIJe85Iyv9x2IBzGlokfyht/view?usp=drive_link"
            target="_blank"
            className="flex items-center hover:scale-105 transition"
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
