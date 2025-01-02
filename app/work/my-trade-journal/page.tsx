"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";
import MTJ from "@/components/assets/MTJ.png";
import Image from "next/image";
import instagram from "@/components/assets/instagram.svg";
import gmail from "@/components/assets/gmail.svg";
import linkedin from "@/components/assets/linkedin.svg";
import whatsapp from "@/components/assets/whatsapp.svg";

const MyTradeJournal = () => {
  const router = useRouter();
  const [active, setActive] = useState<
    "about" | "tech-stack" | "challenges" | "enhancements"
  >("about");

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
          }
        });
      },
      { threshold: 1 }
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
  }, []);

  const scrollToSection = (id: any) => {
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-5 left-5 group z-50">
        <div
          className="flex items-center text-white rounded-full overflow-hidden cursor-pointer 
          transition-all duration-300 group-hover:w-[350px] w-10 h-10"
          style={{
            background: "linear-gradient(45deg, #6a1b9a, #d81b60)",
          }}
        >
          <div className="flex-shrink-0 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 24"
              strokeWidth={2}
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
          <div className="flex items-center space-x-4 opacity-0 font-playfair group-hover:opacity-100 transition-opacity duration-300 ml-2">
            <button
              onClick={() => router.push("/")}
              className="text-[18px] px-2 py-1 rounded-md text-gray-200 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/about")}
              className="text-[18px] px-2 py-1 rounded-md text-gray-200 hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => router.push("/work")}
              className="text-[18px] px-2 py-1 rounded-md text-gray-200 hover:text-white"
            >
              Work
            </button>
            <button
              onClick={() => router.push("/skills")}
              className="text-[18px] px-2 py-1 rounded-md text-gray-200 hover:text-white"
            >
              Skills
            </button>
          </div>
        </div>
      </div>

      <div className="fixed top-[42%] right-12 z-40 text-gray-200 p-4 rounded-lg font-sans">
        <ul className="space-y-2">
          {sections.current.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`hover:underline ${
                  active === id ? "text-gray-100 scale-105" : "text-gray-400"
                } transition-transform duration-300`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center min-h-screen max-w-4xl md:mt-16 mx-auto text-gray-200">
        <div className="py-10 px-28 font-playfair text-left">
          <div id="top" className="mb-16">
            <div className="mb-4 flex justify-between"><div className="text-4xl">My Trade Journal</div><div className="text-lg text-right self-center"><i>~ SDE, June'24 - September'24</i></div></div>
            <Image src={MTJ} alt="MTJ" className="mt-2" />
          </div>

          <div id="about" className="mb-16">
            <h2 className="text-lg mt-16">What is it about?</h2>
            <p className="text-xl mt-2">
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

          <div id="tech-stack" className="mb-16">
            <h2 className="text-lg">Tech-Stack:</h2>
            <ul className="list-disc inline-block text-left ml-6 mt-2 text-xl">
              <li>React - For building the interactive UI.</li>
              <li>Node.js - Backend to handle API requests.</li>
              <li>MongoDB - Database for storing user data securely.</li>
              <li>Tailwind CSS - For styling and responsiveness.</li>
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

          <div id="challenges" className="mb-16">
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

          <div id="enhancements" className="mb-16">
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

          <div className="flex justify-between mt-10">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <div style={{ zIndex: "1000" }} className="text-[19px] flex">
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
              style={{zIndex: 1000}}
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
              style={{zIndex: 1000}}
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
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com" style={{zIndex: 1000}}>
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
              style={{zIndex: 1000}}
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
      <BackgroundBeams />
    </div>
  );
};

export default MyTradeJournal;
