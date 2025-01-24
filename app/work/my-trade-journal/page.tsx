"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine, ArrowUp } from "lucide-react";
import MTJ from "@/components/assets/MTJ.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MyTradeJournal = () => {
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
    <div className="w-full flex md:justify-center bg-gradient-to-b from-zinc-800 to-black">
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
              <Image src={MTJ} alt="MTJ" className="mt-2 w-[80%] mx-auto" />
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
                <div className="mb-12 text-zinc-300">Shavinya Technologies, LLP</div>
                <div className="font-semibold mb-4 text-white">Role</div>
                <div className="mb-12 text-zinc-300">
                  Software Development Engineer —{" "}
                  <span>
                    API Design, Full-Stack Implementation, Debugging, Deployment
                  </span>
                </div>
                <div className="font-semibold mb-4 text-white">Duration</div>
                <div className="mb-4 text-zinc-300">3 Months, June'24 - September'24</div>
              </div>
              <div className="w-[45%] self-center">
                <div className="font-semibold mb-2 text-white">Overview</div>
                <p className="text-zinc-300">
                  This was my first foray into advanced development—a thrilling
                  journey where I tackled backend, frontend, APIs, debugging,
                  testing, and deployment. It felt daunting initially, but it
                  unearthed hidden potential within me.
                  <br />
                  <br />
                  As someone passionate about crafting innovative solutions,
                  this project was a perfect playground. I engineered APIs,
                  built intuitive interfaces, streamlined domain configurations,
                  and ensured seamless functionality across all components—a
                  truly immersive full-stack experience.
                  <br />
                  <br />
                  Debugging was like untangling a complex web, and deployment
                  felt like watching a masterpiece come to life. This project
                  not only sharpened my skills but ignited my confidence as a
                  creator.
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
            <div id="what-is-it?" className="m-32 max-w-5xl mx-auto">
              <div className="text-4xl text-white mb-10">
                What is it?
              </div>
              <p className="text-[17px] text-zinc-300">
                Is there a tool that can help traders stay on top of their game?
                Absolutely!
                <br />
                My Trade Journal is exactly that—
                <span className="text-zinc-500">
                  <i>a powerful website designed to help traders</i>
                </span>{" "}
                track every trade, analyze their performance, and visualize
                their results. Whether you’re a seasoned trader or just starting
                out, this platform makes it easy to log your trades, spot
                trends, and uncover valuable insights that lead to smarter
                decisions.
                <br />
                With comprehensive analytics and intuitive charts, you can see
                exactly how well you're performing, where you can improve, and
                how to make your next move. It’s more than just tracking—it’s
                about evolving your trading strategy with data-driven precision.
                <br />
                With My Trade Journal, traders can transform raw data into
                actionable insights and create a clear roadmap for improvement.
                It’s the perfect companion for anyone serious about refining
                their trading skills and maximizing their potential. Whether
                you're aiming for consistency or looking to perfect your
                strategy, My Trade Journal puts you in control of your trading
                journey.
              </p>
              <div className="mt-12 text-white text-right text-xl">
                <i>ITS A TRADER'S TOOL!</i>
              </div>
              <div className="mt-4 text-right text-zinc-300">
                <i>
                  Live @
                  <a href="https://mytradejournal.in" target="_blank">
                    www.mytradejournal.in
                  </a>
                </i>
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
                    src: "/icons/nestjs.svg",
                    alt: "NestJS",
                    name: "NestJS",
                    desc: "Scalable APIs",
                  },
                  {
                    src: "/icons/react.svg",
                    alt: "React",
                    name: "React",
                    desc: "Interactive UI",
                  },
                  {
                    src: "/icons/javascript.svg",
                    alt: "JavaScript",
                    name: "JavaScript",
                    desc: "Dynamic Logic",
                  },
                  {
                    src: "/icons/typescript.svg",
                    alt: "TypeScript",
                    name: "TypeScript",
                    desc: "Type Safety",
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
                <em className="text-white">My Trade Journal</em> was built using
                a powerful tech stack. The backend leverages{" "}
                <em className="text-gray-400 italic">NestJS</em> for scalable
                APIs and is deployed on{" "}
                <em className="text-gray-400 italic">Elastic Beanstalk</em>. The
                frontend, crafted with{" "}
                <em className="text-gray-400 italic">React</em>, is hosted on{" "}
                <em className="text-gray-400 italic">Netlify</em> for speed and
                reliability. <em className="text-gray-400 italic">DynamoDB</em>{" "}
                handles our database needs with seamless scalability, while{" "}
                <em className="text-gray-400 italic">Redux</em> ensures smooth
                state management. With{" "}
                <em className="text-gray-400 italic">TypeScript</em> and{" "}
                <em className="text-gray-400 italic">JavaScript</em> driving the
                core, the platform delivers a fast, interactive, and robust user
                experience.
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
                "My Trade Journal" was a journey filled with growth and
                learning. From new technologies to complex deployments, here's
                how I tackled the challenges that came my way:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-zinc-700 via-zinc-800 to-black">
                  <h3 className="text-xl text-white mb-2">
                    💡 Mastering New Technologies
                  </h3>
                  <p className="text-gray-300">
                    As my first advanced project, diving into <b>NestJS</b> was
                    a massive challenge. Initially, I struggled. However, through
                    focused learning and tackling problems head-on, I discovered
                    the immense power and flexibility of this framework, and
                    grew confident in my ability to master it.
                  </p>
                </div>

                <div className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-zinc-700 via-zinc-800 to-black">
                  <h3 className="text-xl text-white mb-2">
                    🚀 Overcoming Deployment Complexities
                  </h3>
                  <p className="text-gray-300">
                    The real challenge came when deploying the
                    backend on <b>AWS Elastic Beanstalk</b>. The process was
                    more complex than expected, and I encountered several issues
                    along the way. After consulting with experienced DevOps
                    engineers, I was able to overcome the hurdles and deploy the backend
                    successfully.
                  </p>
                </div>
              </div>

              <p className="mt-12 text-[17px] text-gray-300 leading-7">
                These challenges not only shaped my technical skills but also
                enhanced my problem-solving abilities. Throughout the process, I
                learned to approach each obstacle as an opportunity for growth,
                and this project has truly molded me into a more confident and
                capable developer.
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
            <div id="enhancements" className="m-32 max-w-5xl mx-auto flex justify-between">
              <div className="w-[40%] text-4xl text-left text-white">Future Enhancements:</div>
              <div className="w-[50%] flex flex-col gap-10 my-4">
                {["Smarter Strategies with AI", "Custom Dashboards", "Mobile App Coming Soon", "Seamless Integrations"].map(
                  (title, index) => (
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
                        {title === "Smarter Strategies with AI" &&
                          "We’re bringing AI into the mix! Expect powerful insights and tailored recommendations to level up your trading game."}
                        {title === "Custom Dashboards" &&
                          "Personalize everything! From layouts to widgets, you’ll have complete control over how your trading data looks."}
                        {title === "Mobile App Coming Soon" &&
                          "Track, analyze, and manage your trades on the go—because why should trading be tied to your desk?"}
                        {title === "Seamless Integrations" &&
                          "We’re planning to team up with popular trading platforms, so your data updates automatically. No more manual entry!"}
                      </p>
                    </motion.div>
                  )
                )}
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
  <div id="project-Takeaways" className="m-32 max-w-5xl mx-auto flex justify-between">
    <div className="w-[40%] text-4xl text-left text-white">Project Takeaways:</div>
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyTradeJournal;
