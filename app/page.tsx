"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import instagram from "../components/assets/instagram.svg";
import gmail from "../components/assets/gmail.svg";
import linkedin from "../components/assets/linkedin.svg";
import whatsapp from "../components/assets/whatsapp.svg";
import profileVivek from "../components/assets/profileVivek.jpg";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const Home = () => {
  return (
    <BackgroundLines className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-20 w-full">
        <div className="z-50">
          <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b dark:from-neutral-400 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans md:py-2 relative font-bold tracking-tight">
            Hello, This is Vivek.
          </h2>
          <p className="max-w-xl text-xl dark:text-neutral-300 text-left font-playfair">
            Software Developer | Full Stack Developer | Freelancer
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
      <div className="z-40 flex flex-row gap-16 dark:text-neutral-300 font-playfair text-xl mt-12">
        <Link
          href="/about"
          className="flex items-center transition-transform duration-200 hover:scale-110"
        >
          Know about me&nbsp;
          <ArrowUpRight size={17} className="ml-1" />
        </Link>
        <Link
          href="/projects"
          className="flex items-center transition-transform duration-200 hover:scale-110"
        >
          Projects I've worked on&nbsp;
          <ArrowUpRight size={17} className="ml-1" />
        </Link>
        <Link
          href="/projects"
          className="flex items-center transition-transform duration-200 hover:scale-110"
        >
          My Skills&nbsp;
          <ArrowUpRight size={17} className="ml-1" />
        </Link>
      </div>
    </BackgroundLines>
  );
};

export default Home;
