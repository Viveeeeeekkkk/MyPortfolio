"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import MTJ from "../../components/assets/MTJ.png";
import myportfolio from "../../components/assets/myportfolio.png";
import stockastix from "../../components/assets/stockastix.png";
import mymoney from "../../components/assets/mymoney.png";
import instagram from "../../components/assets/instagram.svg";
import gmail from "../../components/assets/gmail.svg";
import linkedin from "../../components/assets/linkedin.svg";
import whatsapp from "../../components/assets/whatsapp.svg";

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
        className="mt-16 relative max-w-8xl mx-auto"
      >
        <div className="flex justify-center gap-16 my-12">
          <div>
            <CardContainer className="inter-var cursor-pointer">
              <Link href="/work/my-trade-journal" className="block">
                <CardBody className="w-[630px] h-[380px] relative group/card bg-gradient-to-br from-gray-700 via-zinc-800 to-zinc-950 border-2 border-gray-700 shadow-md hover:shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out">
                  <Image
                    src={MTJ}
                    height="1000"
                    width="1000"
                    className="h-auto w-full object-cover rounded-lg group-hover/card:shadow-2xl group-hover/card:shadow-purple-500/50 transition-shadow duration-300 ease-in-out"
                    alt="thumbnail"
                  />
                  <div className="flex justify-between items-center my-10">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://mytradejournal.in/"
                      target="__blank"
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">
              My Trade Journal
            </div>
          </div>

          <div>
            <CardContainer className="inter-var cursor-pointer">
              <Link href="/work/stockastix" className="block">
                <CardBody className="w-[630px] h-[380px] relative group/card bg-gradient-to-br from-gray-700 via-zinc-800 to-zinc-900 border-2 border-gray-700 shadow-md hover:shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out">
                  <Image
                    src={stockastix}
                    height="1000"
                    width="1000"
                    className="h-auto w-full object-cover rounded-lg group-hover/card:shadow-2xl group-hover/card:shadow-purple-500/50 transition-shadow duration-300 ease-in-out"
                    alt="thumbnail"
                  />
                  <div className="flex justify-between items-center my-10">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Demo →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">
              Stockastix
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-16 my-12">
        <div>
            <CardContainer className="inter-var cursor-pointer">
              <Link href="/work/my-money" className="block">
                <CardBody className="w-[630px] h-[380px] relative group/card bg-gradient-to-br from-gray-700 via-zinc-800 to-zinc-900 border-2 border-gray-700 shadow-md hover:shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out">
                  <Image
                    src={mymoney}
                    height="1000"
                    width="1000"
                    className="h-auto w-full object-cover rounded-lg group-hover/card:shadow-2xl group-hover/card:shadow-purple-500/50 transition-shadow duration-300 ease-in-out"
                    alt="thumbnail"
                  />
                  <div className="flex justify-between items-center my-10">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Demo →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">
              My Money
            </div>
          </div>
          <div>
            <CardContainer className="inter-var cursor-pointer">
              <Link href="/work/portfolio" className="block">
                <CardBody className="w-[630px] h-[380px] relative group/card bg-gradient-to-br from-gray-700 via-zinc-800 to-zinc-900 border-2 border-gray-700 shadow-md hover:shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out">
                  <Image
                    src={myportfolio}
                    height="1000"
                    width="1000"
                    className="h-auto w-full object-cover rounded-lg group-hover/card:shadow-2xl group-hover/card:shadow-purple-500/50 transition-shadow duration-300 ease-in-out"
                    alt="thumbnail"
                  />
                  <div className="flex justify-between items-center my-10">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/"
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">
              Portfolio
            </div>
          </div>
        </div>
        <h1 className="mt-28 text-4xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Send me a &#8216;Hello&#8217;
        </h1>
        <div className="flex justify-center space-x-5 mt-4 min-h-40">
          <a
            href="https://www.linkedin.com/in/sai-vivek-9a26b2201"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={linkedin}
              height={25}
              width={25}
              alt="linkedin"
              className="hover:scale-110"
            />
          </a>
          <a
            href="https://www.instagram.com/viveeeeeekkkk"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={instagram}
              height={25}
              width={25}
              alt="instagram"
              className="hover:scale-110"
            />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com">
            <Image
              src={gmail}
              height={28}
              width={28}
              alt="gmail"
              className="hover:scale-110"
            />
          </a>
          <a
            href="https://wa.me/+918465955818"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={whatsapp}
              height={26}
              width={26}
              alt="Whatsapp"
              className="hover:scale-110"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
