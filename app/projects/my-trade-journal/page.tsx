"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import rollsroyce from "@/components/assets/rollsroyce.jpg";

const MyTradeJournal = () => {
  const router = useRouter();
  const data = [
    {
      title: "Purpose",
      content: (
        <div className="pt-4 ml-2">
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={rollsroyce}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={rollsroyce}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "My Responsibilities",
      content: (
        <div className="pt-4 ml-2">
          <p className="dark:text-neutral-200 text-lg  font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="dark:text-neutral-200 text-lg  font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={rollsroyce}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={rollsroyce}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Tech-Stack used...",
      content: (
        <div className="mb-8 flex flex-col gap-8 pt-4 ml-2">
          <div className="flex gap-2 items-center dark:text-neutral-300 text-lg">
            ✅ React.js, Redux - <i>frontend</i>
          </div>
          <div className="flex gap-2 items-center dark:text-neutral-300 text-lg">
            ✅ Nest.js - <i>backend</i>
          </div>
          <div className="flex gap-2 items-center dark:text-neutral-300 text-lg">
            ✅ DynamoDB - <i>database</i>
          </div>
          <div className="flex gap-2 items-center dark:text-neutral-300 text-lg">
            ✅ AWS - <i>deployement</i>
          </div>
          <div className="flex gap-2 items-center dark:text-neutral-300 text-lg">
            ✅ Netlify - <i>deployement</i>
          </div>
        </div>
      ),
    },
    {
      title: "What's next?",
      content: (
        <div className="pt-4 ml-2">
          <h2 className="text-lg">Edo oka sodhi</h2>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={rollsroyce}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={rollsroyce}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <div className="absolute top-5 left-5 group">
          <div
            className="flex items-center bg-gray-700 text-white rounded-full overflow-hidden cursor-pointer 
          transition-all duration-300 group-hover:w-[350px] w-10 h-10"
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

            <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
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
                onClick={() => router.push("/projects")}
                className="text-base px-2 py-1 rounded-md text-gray-300 hover:text-white"
              >
                Projects
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
        <h2 className="text-4xl mb-[-60px] dark:text-white max-w-4xl font-playfair">
          My Trade Journal
        </h2>
      </div>
      <Timeline data={data} />
      <hr style={{height: "1px", backgroundColor: "white", border: "none"}}/>
      <div className="min-h-96 text-center">Extra info</div>
    </div>
  );
};

export default MyTradeJournal;
