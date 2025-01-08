"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine, ArrowUp } from "lucide-react";
import mymoney from "@/components/assets/mymoney.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MyTradeJournal = () => {
  const router = useRouter();
  const [active, setActive] = useState<
    "top" | "about" | "tech-stack" | "challenges" | "enhancements"
  >("top");

  const sections = useRef([
    "about",
    "tech-stack",
    "challenges",
    "enhancements",
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as typeof active);
          } else if (
            entry.boundingClientRect.top > 0 &&
            active === entry.target.id
          ) {
            setActive("top");
          }
        });
      },
      { threshold: [0.5, 1] }
    );

    sections.current.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.current.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [active]);

  const scrollToSection = (id: any) => {
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="w-full flex md:justify-center bg-gradient-to-b from-zinc-800 to-black">
      <Navbar />

      <div className="fixed top-[40%] right-12 z-40 text-gray-200 p-4 rounded-lg font-sans">
        <ul className="space-y-4 text-sm">
          <div className="text-gray-400/50 font-bold">CONTENTS</div>
          {sections.current.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`hover:underline ${
                  active === id ? "text-blue-500 scale-110" : "text-gray-400/50"
                } transition-transform duration-300`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-5 right-5 z-40 text-gray-200 p-4 rounded-lg font-sans">
        <div className="rounded-full bg-zinc-800 p-2 border-2 border-gray-600 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></div>
      </div>

      <div className="flex items-center justify-center min-h-screen md:pt-16 mx-auto text-gray-300">
        <div className="px-28 font-sans text-left">
          <div id="top" className="mb-16">
            <motion.div
              initial={{ opacity: 0.0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="my-28"
            >
              <div className="py-3 text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                My Money
              </div>
              <div className="text-lg py-4 self-center">
                ~ SDE, June'24 - September'24
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <Image
                src={mymoney}
                alt="mymoney"
                className="mt-2 w-[80%] mx-auto"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <div id="about" className="mb-16 max-w-6xl mx-auto">
              <h2 className="text-lg mt-16">What is it about?</h2>
              <p className="text-xl mt-2">
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <div id="tech-stack" className="mb-16 max-w-6xl mx-auto">
              <h2 className="text-lg">Tech-Stack:</h2>
              <div className="flex justify-evenly my-10">
                <motion.div
                  initial={{ opacity: 0.0, x: "-300%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="p-10 border-4 border-zinc-600 rounded-3xl bg-zinc-600"
                >
                  <Image
                    src="/icons/nextjs.svg"
                    alt="nest"
                    width={80}
                    height={80}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0.0, x: "-200%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0,
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="p-10 border-4 border-zinc-600 rounded-3xl bg-zinc-600"
                >
                  <Image
                    src="/icons/tailwind.svg"
                    alt="nest"
                    width={80}
                    height={80}
                  />
                </motion.div>
              </div>
              <p className="text-xl">
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <div id="challenges" className="mb-16 max-w-6xl mx-auto">
              <h2 className="text-lg">Challenges Faced:</h2>
              <p className="mt-2 text-xl">
                Developing this project came with challenges such as:
              </p>
              <ul className="list-disc inline-block text-left ml-6 mt-2 text-xl">
                <li>
                  Optimizing the performance of large datasets for analytics.
                </li>
                <li>
                  Designing an intuitive UI that caters to traders of all skill
                  levels.
                </li>
                <li>
                  Ensuring data security and integrity for sensitive
                  information.
                </li>
                <li>
                  Incorporating real-time features while maintaining
                  scalability.
                </li>
              </ul>
              <p className="text-xl">
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <div id="enhancements" className="mb-16 max-w-6xl mx-auto">
              <h2 className="text-lg">Future Enhancements:</h2>
              <p className="mt-2 text-xl">Planned features include:</p>
              <ul className="list-disc inline-block text-left ml-6 mt-2 text-xl">
                <li>
                  AI-powered insights and recommendations to enhance strategies.
                </li>
                <li>
                  Customizable dashboards for a personalized user experience.
                </li>
              </ul>
              <p className="text-xl">
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                My Money is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
              </p>
            </div>
          </motion.div>

          <div className="flex justify-evenly mt-10">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <div
                onClick={() => router.push("/work/stockastix")}
                style={{ zIndex: "1000" }}
                className="text-[19px] flex"
              >
                <ArrowLeftFromLine size={20} className="self-center" />
                &nbsp;&nbsp;Previous Project
              </div>
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <div
                onClick={() => router.push("/work/portfolio")}
                style={{ zIndex: "1000" }}
                className="text-[19px] flex"
              >
                Next Project&nbsp;&nbsp;
                <ArrowRightFromLine size={20} className="self-center" />
              </div>
            </HoverBorderGradient>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyTradeJournal;
