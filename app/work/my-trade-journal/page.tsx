"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";
import MTJ from "@/components/assets/MTJ.png";
import { motion } from "framer-motion";
import Image from "next/image";
import instagram from "@/components/assets/instagram.svg";
import gmail from "@/components/assets/gmail.svg";
import linkedin from "@/components/assets/linkedin.svg";
import whatsapp from "@/components/assets/whatsapp.svg";
import Link from "next/link";

const MyTradeJournal = () => {
  const router = useRouter();
  const [active, setActive] = useState<
    "top" | "overview" | "what-is-it?" | "tech-stack" | "challenges" | "enhancements"
  >("top");

  const sections = useRef([
    "overview",
    "what-is-it?",
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
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-800 to-black">
      <div className="fixed top-5 group w-full mx-auto z-50">
        <div className="flex justify-evenly w-[22%] mx-auto border-4 p-2 rounded-full bg-black shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
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

      <div className="fixed top-[35%] right-12 z-40 text-gray-200 p-4 rounded-lg font-sans">
        <ul className="space-y-3 text-sm">
          <div className="text-gray-400/50 font-bold">CONTENTS</div>
          {sections.current.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`${
                  active === id ? "text-blue-500 scale-110" : "text-gray-400/50 hover:text-gray-300/50"
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
                My Trade Journal
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
              <Image src={MTJ} alt="MTJ" className="mt-2 w-[80%] mx-auto"/>
            </motion.div>
          </div>

          <div id="overview" className="flex gap-16 justify-center m-36 max-w-5xl mx-auto text-[17px]">
            <div className="w-[42%] self-center">
              <div className="font-semibold mb-4 text-white">Company</div>
              <div className="mb-12">Shavinya Technologies, LLP</div>
              <div className="font-semibold mb-4 text-white">Role</div>
              <div className="mb-12">Software Development Engineer — <span>API Design, Full-Stack Implementation, Debugging, Deployment</span></div>
              <div className="font-semibold mb-4 text-white">Duration</div>
              <div className="mb-4">3 Months, June'24 - September'24</div>
            </div>
            <div className="w-[45%] self-center">
              <div className="font-semibold mb-2 text-white">Overview</div>
              <p>
              This was my first foray into advanced development—a thrilling journey where I tackled backend, frontend, APIs, debugging, testing, and deployment. It felt daunting initially, but it unearthed hidden potential within me.
              <br /><br/>
              As someone passionate about crafting innovative solutions, this project was a perfect playground. I engineered APIs, built intuitive interfaces, streamlined domain configurations, and ensured seamless functionality across all components—a truly immersive full-stack experience.
              <br /><br/>
              Debugging was like untangling a complex web, and deployment felt like watching a masterpiece come to life. This project not only sharpened my skills but ignited my confidence as a creator.
              </p>
            </div>
          </div>

          <div id="what-is-it?" className="m-32 max-w-5xl mx-auto">
            <div className="text-4xl font-semibold text-white mb-10">What is it?</div>
            <p className="text-[17px]">
            Is there a tool that can help traders stay on top of their game? Absolutely!<br/>My Trade Journal is exactly that—<span className="text-green-500"><i>a powerful website designed to help traders</i></span> track every trade, analyze their performance, and visualize their results. Whether you’re a seasoned trader or just starting out, this platform makes it easy to log your trades, spot trends, and uncover valuable insights that lead to smarter decisions.<br/>With comprehensive analytics and intuitive charts, you can see exactly how well you're performing, where you can improve, and how to make your next move. It’s more than just tracking—it’s about evolving your trading strategy with data-driven precision.<br/>With My Trade Journal, traders can transform raw data into actionable insights and create a clear roadmap for improvement. It’s the perfect companion for anyone serious about refining their trading skills and maximizing their potential. Whether you're aiming for consistency or looking to perfect your strategy, My Trade Journal puts you in control of your trading journey.
            </p>
            <div className="mt-12 text-white text-right text-xl"><i>ITS A TRADER'S TOOL!</i></div>
            <div className="mt-4 text-right text-white"><i>Live @<a href="https://mytradejournal.in" target="_blank">www.mytradejournal.in</a></i></div>
          </div>

          <div id="tech-stack" className="m-32 max-w-6xl mx-auto">
            <h2 className="text-lg">Tech-Stack:</h2>
            <div className="flex justify-evenly my-10">
              <motion.div
                initial={{ opacity: 0.0, x: "-200%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="p-10 border-4 border-zinc-600 rounded-3xl"
              >
                <Image
                  src="/icons/nestjs.svg"
                  alt="nest"
                  width={80}
                  height={80}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, x: "-300%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="p-10 border-4 border-zinc-600 rounded-3xl"
              >
                <Image
                  src="/icons/react.svg"
                  alt="nest"
                  width={80}
                  height={80}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, x: "-400%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="p-10 border-4 border-zinc-600 rounded-3xl"
              >
                <Image
                  src="/icons/javascript.svg"
                  alt="nest"
                  width={80}
                  height={80}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.0, x: "-500%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0,
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="p-10 border-4 border-zinc-600 rounded-3xl"
              >
                <Image
                  src="/icons/typescript.svg"
                  alt="nest"
                  width={80}
                  height={80}
                />
              </motion.div>
            </div>
            <p className="text-xl">
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
              <br />
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
              <br />
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
            </p>
          </div>

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
                Ensuring data security and integrity for sensitive information.
              </li>
              <li>
                Incorporating real-time features while maintaining scalability.
              </li>
            </ul>
            <p className="text-xl">
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
              <br />
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
              <br />
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
            </p>
          </div>

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
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
              <br />
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
              <br />
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance.
            </p>
          </div>

          <div className="flex justify-evenly mt-10">
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
                onClick={() => router.push("/work/stockastix")}
                style={{ zIndex: "1000" }}
                className="text-[19px] flex"
              >
                Next Project&nbsp;&nbsp;
                <ArrowRightFromLine size={20} className="self-center" />
              </div>
            </HoverBorderGradient>
          </div>
          <h1 className="mt-20 text-4xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Send me a &#8216;Hello&#8217;
          </h1>
          <div className="flex justify-center space-x-5 mt-4 min-h-32">
            <a
              href="https://www.linkedin.com/in/sai-vivek-9a26b2201"
              target="_blank"
              style={{ zIndex: 1000 }}
              rel="noreferrer"
            >
              <Image
                src={linkedin}
                height={25}
                width={25}
                alt="linkedin"
                className="hover:scale-110 z-50"
              />
            </a>
            <a
              href="https://www.instagram.com/viveeeeeekkkk"
              target="_blank"
              style={{ zIndex: 1000 }}
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
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com"
              style={{ zIndex: 1000 }}
            >
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
              style={{ zIndex: 1000 }}
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
        </div>
      </div>
    </div>
  );
};

export default MyTradeJournal;
