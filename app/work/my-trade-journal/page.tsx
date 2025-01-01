"use client";
import { useRouter } from "next/navigation";
import MTJ from "../../../components/assets/MTJ.png";
import Image from "next/image";

const MyTradeJournal = () => {
  const router = useRouter();

  return (
    <div className="p-6">
      <div className="fixed top-5 left-5 group">
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
      <div className="py-10 px-28 font-playfair">
        <div className="mb-8">
          <h1 className="text-4xl">My Trade Journal</h1>
          <div className="text-xl mt-4">What is it about?</div>
          <p className="text-lg">
            My Trade Journal is a platform designed to help traders document and
            analyze their trades. It provides insights to improve
            decision-making and track performance.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl">Tech-Stack:</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl">Challenges Faced:</h2>
          <p className="mt-2">
            While developing this project, I faced challenges such as optimizing
            the performance of large datasets and designing an intuitive UI for
            traders. These hurdles were overcome with efficient use of
            pagination and user feedback.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl">Future Enhancements:</h2>
          <p className="mt-2">
            I plan to add features like integration with live market data,
            advanced filtering options for analysis, and multi-device
            synchronization to enhance usability.
          </p>
        </div>

        <div className="flex justify-between mt-10">
          <button
            onClick={() => router.push("/work/my-money")}
            className="px-6 py-3 bg-purple-600 text-white  rounded-lg shadow-md hover:bg-purple-700 transition"
            disabled
          >
            Previous Project
          </button>
          <button
            onClick={() => router.push("/work/stockastix")}
            className="px-6 py-3 bg-purple-600 text-white  rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Next Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTradeJournal;
