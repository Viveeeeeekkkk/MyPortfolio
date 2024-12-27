"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import MTJ from '../../components/assets/MTJ.png';
import myportfolio from '../../components/assets/myportfolio.png';
import stockastix from '../../components/assets/stockastix.png';
import mymoney from '../../components/assets/mymoney.png';

const Projects = () => {
  const router = useRouter();

  return (
    <div className="p-6 min-h-screen relative">
      <div className="absolute top-5 left-5 group">
        <div
          className="flex items-center bg-gray-700 text-white rounded-full overflow-hidden cursor-pointer 
          transition-all duration-300 group-hover:w-[280px] w-10 h-10"
        >
          <div className="flex-shrink-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div
            className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2"
          >
            <button
              onClick={() => router.push("/")}
              className="text-base px-2 py-1 rounded-md text-gray-300 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/about")}
              className="text-base px-2 py-1 rounded-md text-gray-300 hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => router.push("/skills")}
              className="text-base px-2 py-1 rounded-md text-gray-300 hover:text-white"
            >
              Skills
            </button>
          </div>
        </div>
      </div>

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
                as="button"
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
                as="button"
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
                as="button"
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
                Try now →<br/>(Do not click...you might be redirected to the beginning page)
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Know more...
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Projects;
