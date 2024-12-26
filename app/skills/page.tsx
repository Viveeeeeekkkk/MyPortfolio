"use client";
import { useRouter } from 'next/navigation';

const Skills = () => {
  const router = useRouter();

  return (
    <div className="p-6 min-h-screen">
      <button
        className="absolute top-5 left-5 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
        onClick={() => router.push('/')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="text-center">
        <h1 className="text-3xl font-bold">Skills</h1>
        <p className="mt-4">These are my skills...</p>
      </div>
    </div>
  );
};

export default Skills;
