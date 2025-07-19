"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import MTJ from "../../components/assets/MTJ.png";
import myportfolio from "../../components/assets/myportfolio.png";
import stockastix from "../../components/assets/stockastix.png";
import mymoney from "../../components/assets/mymoney.png";
import moneynut from "../../components/assets/moneynut.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Projects = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
          <div><CardContainer className="inter-var">
              <CardBody className="w-[630px] h-[380px] relative group/card bg-gradient-to-br from-gray-700 via-zinc-800 to-zinc-900 border-2 border-gray-700 shadow-md hover:shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out">
                <Image
                  src={moneynut}
                  height="1000"
                  width="1000"
                  className="h-auto w-full object-cover rounded-lg group-hover/card:shadow-2xl group-hover/card:shadow-purple-500/50 transition-shadow duration-300 ease-in-out"
                  alt="thumbnail"
                />
                <div className="flex justify-between items-center my-10">
                  <CardItem
                    translateZ={20}
                    className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                  >
                    Coming Soon
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            <div className="mt-1 text-white max-w-[620px]">
              <div className="text-2xl font-semibold">MoneyNut</div>
              <div className="text-md mt-1">
                <i>
                  - Still in the works, but it's designed to help you spot those
                  sneaky expenses that drain your wallet. Stay tuned for a
                  clearer, more actionable view of your financial health!
                </i>
              </div>
            </div></div>

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
                      href="/work/stockastix"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Know More →
                    </CardItem>
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="mt-1 text-white max-w-[620px]">
              <div className="text-2xl font-semibold">Stockastix</div>
              <div className="text-md mt-1">
                <i>
                  - A stock analysis platform for US markets, offering real-time
                  data, watchlists, and advanced charting tools to analyze
                  market trends.
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-16 mt-16 mb-24">
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
            <div className="mt-1 text-white max-w-[620px]">
              <div className="text-2xl font-semibold">My Trade Journal</div>
              <div className="text-md mt-1"><i>- A tool for traders to log their trades and gain valuable insights. With analytics, charts, and personalized feedback, it helps users improve their trading strategies.</i></div>
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
                  <div className="flex justify-start items-center my-10">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/"
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="px-3 py-1 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 ease-in-out"
                    >
                      Try now →
                    </CardItem>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0.0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0,
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="text-xs mx-5"
                      >
                        <i>
                          (Do not click...you might be taken back to the initial
                          page)
                        </i>
                      </motion.div>
                    )}
                  </div>
                </CardBody>
              </Link>
            </CardContainer>
            <div className="mt-1 text-white max-w-[620px]">
              <div className="text-2xl font-semibold">Portfolio</div>
              <div className="text-md mt-1">
                <i>
                  - Wanna explore how I built this portfolio? Dive in to see the
                  technologies and design behind it, and get a closer look at my
                  work in progress.
                </i>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Projects;
