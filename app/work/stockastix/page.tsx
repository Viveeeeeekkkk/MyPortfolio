"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";
import stockastix from "@/components/assets/stockastix.png";
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
                Stockastix
              </div>
              <div className="text-lg py-4 self-center">
                ~ SDE, September'24 - Present
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
                src={stockastix}
                alt="stockastix"
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
            <div id="about" className="m-32 max-w-5xl mx-auto">
              <h2 className="text-lg mt-16">What is it about?</h2>
              <p className="text-xl mt-2">
                Stockastix is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                Stockastix is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                Stockastix is a platform designed to help traders document and
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
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <div
              id="tech-stack"
              className="m-32 max-w-5xl mx-auto bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 p-10 rounded-3xl shadow-xl"
            >
              <h2 className="text-4xl font-semibold text-white text-center mb-10">
                Tech-Stack
              </h2>
              <div className="flex justify-evenly my-10">
                {[
                  {
                    src: "/icons/javascript.svg",
                    alt: "Javascript",
                    name: "Javascript",
                    desc: "Dynamic Logic",
                  },
                  {
                    src: "/icons/react.svg",
                    alt: "React",
                    name: "React",
                    desc: "Interactive UI",
                  },
                  {
                    src: "/icons/postgres.svg",
                    alt: "PostgreSQL",
                    name: "PostgreSQL",
                    desc: "Database",
                  },
                  {
                    src: "/icons/python.svg",
                    alt: "Python",
                    name: "Python",
                    desc: "Powerful",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.alt}
                    initial={{ opacity: 0.0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 * index,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="p-6 border-4 border-zinc-600 rounded-3xl text-center"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={80}
                      height={80}
                      className="mx-auto"
                    />
                    <h3 className="text-lg font-semibold text-white mt-4">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-green-500">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-[17px] text-gray-300 leading-7 mt-6 text-center bg-gradient-to-r from-zinc-800 via-zinc-900 to-black p-6 rounded-lg shadow-lg border border-zinc-700">
                <em className="text-white">Stockastix</em> was built using a
                dynamic tech stack. The backend is powered by{" "}
                <em className="text-gray-400 italic">Django</em>, leveraging{" "}
                <em className="text-gray-400 italic">Python</em> for efficient
                server-side computations and APIs. The frontend, designed with{" "}
                <em className="text-gray-400 italic">React</em>, works
                seamlessly with{" "}
                <em className="text-gray-400 italic">Redux</em> to manage state
                and ensure smooth user interactions. The database of choice,{" "}
                <em className="text-gray-400 italic">PostgreSQL</em>, handles
                data storage and retrieval with reliability. At the core,{" "}
                <em className="text-gray-400 italic">JavaScript</em> drives
                dynamic logic, ensuring a fast and interactive experience for
                users.
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
            <div id="challenges" className="m-32 max-w-5xl mx-auto">
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
                Stockastix is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                Stockastix is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                Stockastix is a platform designed to help traders document and
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
            <div id="enhancements" className="m-32 max-w-5xl mx-auto">
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
                Stockastix is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                Stockastix is a platform designed to help traders document and
                analyze their trades. It provides insights to improve
                decision-making and track performance.
                <br />
                Stockastix is a platform designed to help traders document and
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
                onClick={() => router.push("/work/my-trade-journal")}
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
                onClick={() => router.push("/work/my-money")}
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
