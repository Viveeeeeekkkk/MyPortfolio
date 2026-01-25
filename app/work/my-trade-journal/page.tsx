"use client";
import { useRouter } from "next/navigation";
import { ArrowUp, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MyTradeJournal = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center bg-gradient-to-b from-gray-900 to-black">
      <Navbar />

      <div className="fixed bottom-5 right-5 z-40 text-gray-200">
        <div
          className="rounded-full bg-zinc-800 p-3 border border-gray-600 hover:scale-110 transition-all duration-200 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </div>
      </div>

      <div className="fixed top-1/2 left-4 md:left-10 z-40 text-gray-200 -translate-y-1/2">
        <div
          className="rounded-full bg-zinc-800 p-3 border border-gray-600 hover:scale-110 transition-all duration-200 cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft />
        </div>
      </div>

      <div className="flex flex-col items-center w-full min-h-screen pt-24 px-6 md:px-12 text-gray-300">
        <div className="w-full max-w-6xl font-sans text-left">
          <motion.div
            initial={{ opacity: 0.0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="mb-24"
          >
            <div className="py-3 text-4xl sm:text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              My Trade Journal
            </div>
            <div className="text-base sm:text-lg py-4">
              ~ SDE, June&apos;24 - September&apos;24
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div
              id="overview"
              className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32 text-[17px]"
            >
              <div className="self-center">
                <div className="font-semibold mb-2 text-white">Company</div>
                <div className="mb-8 text-zinc-300">
                  Shavinya Technologies, LLP
                </div>

                <div className="font-semibold mb-2 text-white">Role</div>
                <div className="mb-8 text-zinc-300">
                  Software Development Engineer —{" "}
                  <span>
                    API Design, Full-Stack Implementation, Debugging, Deployment
                  </span>
                </div>

                <div className="font-semibold mb-2 text-white">Duration</div>
                <div className="text-zinc-300">
                  3 Months, June&apos;24 - September&apos;24
                </div>
              </div>
              {/* Right Column */}
              <div className="self-center">
                <div className="font-semibold mb-3 text-white">Overview</div>
                <p className="text-zinc-300 leading-relaxed">
                  This was my first foray into advanced development, where I
                  worked across backend, frontend, APIs, debugging, testing, and
                  deployment.
                  <br />
                  <br />
                  I designed APIs, built user interfaces, configured domains,
                  and ensured smooth integration across the system, gaining
                  hands-on full-stack experience.
                  <br />
                  <br />
                  This project strengthened my problem-solving skills and gave
                  me confidence in building and shipping production-ready
                  applications.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="max-w-2xl mx-auto mb-32">
              <div className="text-3xl sm:text-4xl text-white mb-8">
                What is it?
              </div>
              <p className="text-[17px] text-zinc-300 leading-relaxed max-w-3xl">
                My Trade Journal is a web application designed to help traders
                record, analyze, and improve their trading performance.
                <br />
                <br />
                It allows users to log every trade, track profits and losses,
                and visualize performance using clean charts and analytics. By
                reviewing past trades and identifying patterns, traders can make
                more informed decisions over time.
                <br />
                <br />
                The goal is simple — to provide a structured, data-driven way to
                refine strategies and become more consistent.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div
              id="project-Takeaways"
              className="max-w-5xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="text-3xl sm:text-4xl text-white">
                Project Takeaways
              </div>

              <div className="flex flex-col gap-10">
                {[
                  "Adaptability",
                  "Interactions with Founders and Experts",
                  "Solving Real-World Problems",
                ].map((title, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className="hover:scale-105 transition-all duration-200"
                  >
                    <div className="text-lg text-white mb-2">{title}</div>
                    <p className="text-zinc-500 leading-relaxed">
                      {title === "Adaptability" &&
                        "I learned to adapt quickly to new technologies and tools, and become productive with unfamiliar systems in a short time."}
                      {title === "Interactions with Founders and Experts" &&
                        "Working closely with founders and experienced engineers improved my communication skills and technical decision-making."}
                      {title === "Solving Real-World Problems" &&
                        "I learned how real-world engineering problems are approached, analyzed, and solved in production environments."}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyTradeJournal;
