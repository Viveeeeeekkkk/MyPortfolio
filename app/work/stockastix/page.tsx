"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine, ArrowUp } from "lucide-react";
import stockastix from "@/components/assets/stockastix.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Stockastix = () => {
  const router = useRouter();
  const [active, setActive] = useState<
    | "top"
    | "overview"
    | "what-is-it?"
    | "tech-stack"
    | "challenges"
    | "enhancements"
    | "project-Takeaways"
  >("top");

  const sections = useRef([
    "overview",
    "what-is-it?",
    "tech-stack",
    "challenges",
    "enhancements",
    "project-Takeaways",
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
    <div className="w-full flex md:justify-center bg-gradient-to-b from-gray-900 to-black">
      <Navbar />

      <div className="fixed top-[32%] right-12 z-40 text-gray-200 p-4 rounded-lg font-sans">
        <ul className="space-y-3 text-sm">
          <div className="text-gray-400/50 font-bold">CONTENTS</div>
          {sections.current.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`${
                  active === id
                    ? "text-blue-500 scale-110"
                    : "text-gray-400/50 hover:text-gray-300/50"
                } transition-transform duration-300`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-5 right-5 z-40 text-gray-200 p-4 rounded-lg font-sans">
        <div
          className="rounded-full bg-zinc-800 p-2 border-2 border-gray-600 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </div>
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
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <div
              id="overview"
              className="flex gap-16 justify-center m-36 max-w-5xl mx-auto text-[17px]"
            >
              <div className="w-[42%] self-center">
                <div className="font-semibold mb-4 text-white">Company</div>
                <div className="mb-12 text-zinc-300">Stockastix</div>
                <div className="font-semibold mb-4 text-white">Role</div>
                <div className="mb-12 text-zinc-300">
                  Software Development Engineer —{" "}
                  <span>
                    API Design, Full-Stack Implementation, Debugging, Deployment
                  </span>
                </div>
                <div className="font-semibold mb-4 text-white">Duration</div>
                <div className="mb-4 text-zinc-300">
                  6 Months, September'24 - Present
                </div>
              </div>
              <div className="w-[45%] self-center">
                <div className="font-semibold mb-2 text-white">Overview</div>{" "}
                <p className="text-zinc-300">
                  {" "}
                  Fueled by confidence and excitement, I embarked on this second
                  project, eager to push my limits further. This journey offered
                  a unique opportunity to engage directly with the founders,
                  gaining valuable insights into the business and its core
                  objectives. <br /> <br /> With a completely new tech stack,
                  every step was a challenge—but one I embraced wholeheartedly.
                  Learning, adapting, and implementing became second nature as I
                  navigated through unfamiliar territories, transforming
                  obstacles into achievements. <br /> <br /> This project,
                  centered around the US stock market and economics, is designed
                  with a strong focus on user experience. As it nears
                  completion, I'm thrilled to see it come to life, knowing it
                  will serve those eager to navigate the complexities of the
                  stock market with clarity.{" "}
                </p>
              </div>
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
            <div id="what-is-it?" className="m-40 max-w-5xl mx-auto">
              <div className="text-4xl text-white mb-10">What is it?</div>
              <p className="text-[17px] text-zinc-300">
                Is there a platform that empowers users with deep insights into
                the stock market? Absolutely!
                <br />
                This project is built to be exactly that—
                <span className="text-zinc-500">
                  <i>a comprehensive platform designed for market analysis</i>
                </span>{" "}
                where users can explore stocks, analyze trends, and make
                informed decisions with confidence.
                <br />
                It offers an interactive workbench where users can add
                annotations, study detailed financial data, and compare stocks
                side by side. With access to balance sheets, income statements,
                and advanced stock analysis powered by backtrading algorithms,
                it provides a complete toolkit for market enthusiasts and
                serious investors alike.
                <br />
                Whether you're tracking individual stocks or looking for broader
                market insights, this platform brings everything together in an
                intuitive, user-friendly way. With powerful visualization tools
                and smart analytics, users can dive deep into the stock market
                and refine their strategies with precision.
              </p>
              <div className="mt-12 text-white text-right text-xl">
                <i>YOUR MARKET INSIGHT COMPANION!</i>
              </div>
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
              <h2 className="text-4xl text-white text-center mb-10">
                Tech-Stack
              </h2>
              <div className="flex justify-evenly my-10">
                {[
                  {
                    src: "/icons/react.svg",
                    alt: "React",
                    name: "React",
                    desc: "Dynamic UI",
                  },
                  {
                    src: "/icons/python.svg",
                    alt: "Python",
                    name: "Python",
                    desc: "Robust Backend",
                  },
                  {
                    src: "/icons/postgres.svg",
                    alt: "PostgreSQL",
                    name: "PostgreSQL",
                    desc: "Reliable Database",
                  },
                  {
                    src: "/icons/javascript.svg",
                    alt: "JavaScript",
                    name: "JavaScript",
                    desc: "Core Logic",
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
                This project is powered by a cutting-edge tech stack. The
                backend is built with
                <em className="text-gray-400 italic"> Django</em> and
                <em className="text-gray-400 italic"> Python</em>, providing a
                robust and scalable foundation. Data is efficiently managed
                using <em className="text-gray-400 italic">PostgreSQL</em>,
                ensuring reliability and performance. The frontend, crafted with
                <em className="text-gray-400 italic"> React</em>, delivers an
                intuitive and interactive experience, while{" "}
                <em className="text-gray-400 italic">Redux</em> ensures seamless
                state management.
                <em className="text-gray-400 italic"> JavaScript</em> drives the
                core logic, enabling a fast and responsive interface. Together,
                these technologies create a powerful platform for stock market
                analysis and insights.
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
            <div id="challenges" className="m-32 max-w-5xl mx-auto">
              <h2 className="text-4xl text-left text-white">
                Challenges I Overcame
              </h2>

              <p className="mt-8 text-[17px] text-gray-300 text-center leading-7">
                This project pushed me to think creatively and solve complex
                technical problems. One of the biggest challenges I faced was
                designing and developing the interactive workbench.
              </p>

              <div className="grid md:grid-cols-1 gap-8 mt-12">
                <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-zinc-700 via-zinc-800 to-black">
                  <h3 className="text-xl text-white mb-2">
                    🎨 Building an Interactive Workbench
                  </h3>
                  <p className="text-gray-300">
                    A core feature of this project is the graphical
                    representation of stock data, combined with an interactive
                    canvas that allows users to draw annotations such as lines,
                    circles, and text directly on the chart.
                    <br />
                    <br />
                    This was a tricky problem—integrating real-time stock data
                    with a dynamic, editable canvas required deep logical
                    thinking and precise implementation. Through careful
                    planning, experimenting with different libraries, and
                    refining the user experience, I successfully built a smooth
                    and intuitive annotation system that enhances market
                    analysis.
                  </p>
                </div>
              </div>

              <p className="mt-12 text-[17px] text-gray-300 leading-7">
                Tackling this challenge not only strengthened my technical
                expertise but also improved my problem-solving skills. It
                reinforced the importance of structured thinking and
                adaptability, making this journey both rewarding and insightful.
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
              id="enhancements"
              className="m-32 max-w-5xl mx-auto flex justify-between"
            >
              <div className="w-[40%] text-4xl text-left text-white">
                Future Enhancements:
              </div>
              <div className="w-[50%] flex flex-col gap-10 my-4">
                {[
                  "Automated Trading Bot",
                  "Mobile App Coming Soon",
                  "Long-Term Expansion into Trading Platform",
                ].map((title, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.15, 1] }}
                    transition={{
                      delay: index * 0.2, // Stagger effect
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className="hover:scale-105 transition-all ease-in-out duration-200"
                  >
                    <div className="text-lg">{title}</div>
                    <p className="text-zinc-500">
                      {title === "Automated Trading Bot" &&
                        "We’re working on an intelligent trade bot that can analyze market trends and execute trades on behalf of users automatically. " +
                          "This will help users take advantage of opportunities without constantly monitoring the markets."}
                      {title === "Mobile App Coming Soon" &&
                        "Access the platform anytime, anywhere! A mobile application is in the works to bring seamless stock analysis to your fingertips. " +
                          "It will provide real-time updates, trade execution, and full access to the workbench on the go."}
                      {title === "Long-Term Expansion into Trading Platform" &&
                        "Looking ahead, we envision scaling this platform to not just analyze stocks but also enable direct buying and selling in the future. " +
                          "Our goal is to create a one-stop solution where analysis meets execution effortlessly."}
                    </p>
                  </motion.div>
                ))}
              </div>
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
              id="project-Takeaways"
              className="m-32 max-w-5xl mx-auto flex justify-between"
            >
              <div className="w-[40%] text-4xl text-left text-white">
                Project Takeaways:
              </div>
              <div className="w-[50%] flex flex-col gap-10 my-4">
                {[
                  "Adaptability",
                  "Interactions with Founders and Experts",
                  "Solving Real-World Problems",
                ].map((title, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.15, 1] }}
                    transition={{
                      delay: index * 0.2, // Stagger effect
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className="hover:scale-105 transition-all ease-in-out duration-200"
                  >
                    <div className="text-lg">{title}</div>
                    <p className="text-zinc-500">
                      {title === "Adaptability" &&
                        "I learned that I am adaptable. When presented with new technology, I can understand and work with it effectively, given adequate time."}
                      {title === "Interactions with Founders and Experts" &&
                        "This project gave me the opportunity to engage closely with founders and experienced professionals. These interactions enhanced my thinking and communication skills significantly."}
                      {title === "Solving Real-World Problems" &&
                        "I gained a clearer perspective on how real-world problems are approached and solved, bridging the gap between theoretical knowledge and practical implementation."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-evenly mb-20 mt-10">
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

export default Stockastix;
