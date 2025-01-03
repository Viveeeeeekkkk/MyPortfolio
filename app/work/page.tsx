"use client";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import MTJ from "../../components/assets/MTJ.png";
import myportfolio from "../../components/assets/myportfolio.png";
import stockastix from "../../components/assets/stockastix.png";
import mymoney from "../../components/assets/mymoney.png";

const Projects = () => {
  const router = useRouter();

  return (
    <div className="py-5">
      <div className="fixed top-5 w-full group mx-auto z-50">
        <div className="flex w-[22%] mx-auto justify-evenly text-white border-4 p-2 rounded-full bg-black shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
          <Link href="/">
            <div className="hover:bg-zinc-500 transition-all duration-300 py-1 px-3 rounded-2xl">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="hover:bg-zinc-500 transition-all duration-300 py-1 px-3 rounded-2xl">
              About
            </div>
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
      
      <motion.div
        initial={{ opacity: 0.0, y: 70 }}
        whileInView={{ opacity: 1, y: 40 }}
        transition={{
          delay: 0,
          duration: 0.7,
          ease: "easeInOut",
        }}
         className="mt-20 relative w-full"
      >
        <div className="text-center font-playfair">
          <h1 className="text-3xl">Projects</h1>
          <p className="mt-4 text-lg">Here are some of my projects...</p>
        </div>
        <div className="flex justify-evenly">
          <CardContainer className="inter-var">
            <CardBody className="w-[600px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                My Trade Journal
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={MTJ}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://mytradejournal.in/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/work/my-trade-journal"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Know more...
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className=" w-[600px] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Stockastix
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={stockastix}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Demo →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/work/stockastix"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Know more...
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="flex justify-evenly">
          <CardContainer className="inter-var">
            <CardBody className=" w-[600px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                My Money
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={mymoney}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Demo →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/work/my-money"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Know more...
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className=" w-[600px] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.3] border-black/[0.1] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Portfolio
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={myportfolio}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →<br />
                  (Do not click...you might be redirected to the beginning page)
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/work/portfolio"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Know more...
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
