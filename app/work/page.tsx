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
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Projects = () => {
  const router = useRouter();

  return (
    <div className="w-full flex md:justify-center relative overflow-hidden">
      <Navbar />
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
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">My Trade Journal</div>
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
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Demo →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">Stockastix</div>
          </div>
        </div>
        <div className="flex justify-center gap-16 mt-12 mb-24">
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
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Demo →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">My Money</div>
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
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Try now →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="text-2xl mt-1 text-white">Portfolio</div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Projects;
