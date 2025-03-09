"use client";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine, ArrowUp } from "lucide-react";
import myportfolio from "@/components/assets/myportfolio.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Portfolio = () => {
  const router = useRouter();

  return (
    <div className="w-full flex md:justify-center bg-gradient-to-b from-gray-900 to-black text-gray-200">
      <Navbar />

      <div className="fixed bottom-5 right-5 z-40 p-3 rounded-full bg-gray-800 shadow-lg border border-gray-600 hover:scale-110 transition-transform duration-200 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUp size={20} />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen md:pt-16 px-6 text-gray-300 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0.0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="text-center my-16"
        >
          <h1 className="my-4 p-3 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            My Portfolio
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image src={myportfolio} alt="Portfolio Preview" className="rounded-xl shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mt-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-semibold">About This Project</h2>
          <p className="text-[17px] mt-4 leading-relaxed">
            This is my personal portfolio website, designed and developed to showcase my work, skills, and projects. 
            Built using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, this site offers a sleek, fast, and responsive experience. 
            It is hosted on <strong>Vercel</strong> for seamless deployment and performance optimization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mt-16 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-semibold">Tech Stack</h2>
          <div className="flex justify-center gap-6 my-10">
            <motion.div
              initial={{ opacity: 0.0, x: "-300%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
              className="p-6 border rounded-xl bg-gray-800 shadow-md"
            >
              <Image src="/icons/nextjs.svg" alt="Next.js" width={60} height={60} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0.0, x: "-200%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="p-6 border rounded-xl bg-gray-800 shadow-md"
            >
              <Image src="/icons/tailwind.svg" alt="Tailwind CSS" width={60} height={60} />
            </motion.div>
          </div>
        </motion.div>

        <div className="flex justify-between w-full max-w-2xl my-10">
        <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <div
                onClick={() => router.push("/work/portfolio")}
                style={{ zIndex: "1000" }}
                className="text-[17px] flex"
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
                onClick={() => router.push("/work/my-trade-journal")}
                style={{ zIndex: "1000" }}
                className="text-[17px] flex"
              >
                Next Project&nbsp;&nbsp;
                <ArrowRightFromLine size={20} className="self-center" />
              </div>
            </HoverBorderGradient>
          </div>

        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
