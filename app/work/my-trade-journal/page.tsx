"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowRightFromLine, ArrowLeftFromLine } from "lucide-react";
import MTJ from "@/components/assets/MTJ.png";
import Image from "next/image";

const MyTradeJournal = () => {
  const router = useRouter();
  const [active, setActive] = useState<
    "about" | "tech-stack" | "challenges" | "enhancements"
  >("about");

  const scrollToSection = (id: any) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      {/* Floating Navigation */}
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
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:underline ${
                active === "about" ? "text-gray-100 scale-105" : "text-gray-400"
              }`}
            >
              What is it about?
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("tech-stack")}
              className={`hover:underline ${
                active === "tech-stack"
                  ? "text-gray-100 scale-105"
                  : "text-gray-400"
              }`}
            >
              Tech-Stack
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("challenges")}
              className={`hover:underline ${
                active === "challenges"
                  ? "text-gray-100 scale-105"
                  : "text-gray-400"
              }`}
            >
              Challenges Faced
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("enhancements")}
              className={`hover:underline ${
                active === "enhancements"
                  ? "text-gray-100 scale-105"
                  : "text-gray-400"
              }`}
            >
              Future Enhancements
            </button>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center min-h-screen max-w-5xl md:mt-16 mx-auto text-gray-200">
        <div className="py-10 px-28 font-playfair text-left">
          <div id="top" className="mb-16">
            <div className="text-4xl mb-4">My Trade Journal</div>
            <Image src={MTJ} alt="MTJ" className="mt-2" />
          </div>
          <div id="about" className="mb-16">
            <div className="text-lg mt-16">What is it about?</div>
            <p className="text-2xl mt-2">
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance. Users can log trades,
              analyze data, and identify patterns to enhance their trading
              strategies.
              <br />
              My Trade Journal is a platform designed to help traders document
              and analyze their trades. It provides insights to improve
              decision-making and track performance. Users can log trades,
              analyze data, and identify patterns to enhance their trading
              strategies.
            </p>
          </div>

          <div id="tech-stack" className="mb-16">
            <h2 className="text-lg">Tech-Stack:</h2>
            <ul className="list-disc inline-block text-left ml-6 mt-2 text-2xl">
              <li>React - For building the interactive UI.</li>
              <li>Node.js - Backend to handle API requests.</li>
              <li>MongoDB - Database for storing user data securely.</li>
              <li>Tailwind CSS - For styling and responsiveness.</li>
            </ul>
            <br />
            <p className="text-2xl">
              some sodhii aosid aspjos akpwpeo skiviveklasyasdov osodpjfao
              aspoeiwuqib nasjsmdf opcoapqieu zbhcnasjkos aoaoisuo hyygjduai
              bhjajidoskuyhf jsc sifnamcnsjhan bhdjakol jikd hyudiopa juiodfg
              <br />
              aosid aspjos akpwpeo skiviveklasyasdov osodpjfao aspoeiwuqib
              nasjsmdf opcoapqieu zbhcnasjkos aoaoisuo hyygjduai bhjajidoskuyhf
              jsc
            </p>
          </div>

          <div id="challenges" className="mb-16">
            <h2 className="text-lg">Challenges Faced:</h2>
            <p className="mt-2 text-2xl">
              Developing this project came with challenges such as:
            </p>
            <ul className="list-disc inline-block text-left ml-6 mt-2 text-2xl">
              <li>
                Optimizing the performance of large datasets for analytics.
                aspjos akpwpeo skiviveklasyasdov osodpjfao aspoeiwuqib
              </li>
              <li>
                Designing an intuitive UI that caters to traders of all skill
                levels. aspjos akpwpeo skiviveklasyasdov osodpjfao aspoeiwuqib
                aspjos akpwpeo skiviveklasyasdov osodpjfao aspoeiwuqib
              </li>
              <li>
                Ensuring data security and integrity, especially for sensitive
                trade information. aspjos akpwpeo skiviveklasyasdov osodpjfao
                aspoeiwuqib
              </li>
              <li>
                Incorporating real-time features while maintaining
                responsiveness. aspjos akpwpeo skiviveklasyasdov osodpjfao
                aspoeiwuqib aspjos akpwpeo skiviveklasyasdov osodpjfao
                aspoeiwuqib
              </li>
            </ul>
          </div>

          <div id="enhancements" className="mb-16">
            <h2 className="text-lg">Future Enhancements:</h2>
            <p className="mt-2 text-2xl">Planned features include:</p>
            <ul className="list-disc inline-block text-left ml-6 mt-2 text-2xl">
              <li>Integration with live market data for real-time analysis.</li>
              <li>Advanced filtering and search options for trade data.</li>
              <li>Multi-device synchronization to ensure seamless access.</li>
              <li>
                AI-powered insights and recommendations to enhance trading
                strategies.
              </li>
              <li>
                Customizable dashboards for a personalized user experience.
              </li>
            </ul>
            <p className="text-2xl">
              {" "}
              aspjos akpwpeo skiviveklasyasdov osodpjfao aspoeiwuqib aspjos
              akpwpeo skiviveklasyasdov osodpjfao aspoeiwuqib aspjos akpwpeo
              skiviveklasyasdov osodpjfao aspoeiwuqib aspjos akpwpeo
              skiviveklasyasdov osodpjfao aspoeiwuqib aspjos akpwpeo
              skiviveklasyasdov osodpjfao aspoeiwuqib aspjos akpwpeo
              skiviveklasyasdov osodpjfao aspoeiwuqib aspjos akpwpeo
              skiviveklasyasdov osodpjfao aspoeiwuqib aspjos akpwpeo
              skiviveklasyasdov osodpjfao aspoeiwuqib aspjos akpwpeo
              skiviveklasyasdov osodpjfao aspoeiwuqib
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
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default MyTradeJournal;
