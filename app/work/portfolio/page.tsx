"use client";
import { useRouter } from "next/navigation";
const MyTradeJournal = () => {
  const router = useRouter();

    return (
      <div className="p-6">
        <div className="absolute top-5 left-5 group">
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
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="mt-4 text-lg">
          My Trade Journal is a platform designed to help traders document and analyze their trades. It provides insights to improve decision-making and track performance.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Features:</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Document trade details like entry, exit, and strategy.</li>
            <li>Generate performance reports and charts.</li>
            <li>Analyze trends and patterns to improve strategies.</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Technologies Used:</h2>
          <p>React, Node.js, MongoDB, and Tailwind CSS</p>
        </div>
      </div>
    );
  };
  
  export default MyTradeJournal;
  