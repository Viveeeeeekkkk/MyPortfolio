"use client";
import { useRouter } from "next/navigation";
import { Spotlight } from "../../components/ui/Spotlight";

const About = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full rounded-md flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="absolute top-5 left-5 group">
        <div
          className="flex items-center text-white rounded-full overflow-hidden cursor-pointer transition-all duration-300 group-hover:w-[270px] w-10 h-10"
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
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 mt-[14%] max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Who am I?
        </h1>
        <p className="mt-4 font-playfair text-2xl text-neutral-200 max-w-2xl text-justify mx-auto">
          <i>Vivek</i> — a 22-year-old developer with a passion for building
          things that matter.Graduating in 2024 from MGIT [Hyderabad], was just
          the beginning. Since then, I’ve dived straight into freelancing as a
          Full-Stack Developer and Software Developer. Why? Because I’ve always
          been drawn to the process of creating something meaningful from
          scratch—it’s where I find my purpose. There’s something exciting about
          taking an idea and transforming it into a functional reality. <br />
          <br />
          Every project I take on pushes me to think differently, adapt quickly,
          and stay creative. Freelancing has been a journey of learning,
          problem-solving, and connecting with people who share the same drive
          for innovation.
        </p>
        <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          What are my skills?
        </h1>
      </div>
    </div>
  );
};

export default About;
