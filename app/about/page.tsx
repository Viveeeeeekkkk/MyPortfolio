"use client";
import { useRouter } from "next/navigation";
import { Spotlight } from "../../components/ui/Spotlight";
import Image from "next/image";
import sea from "../../components/assets/sea2.jpg";
import me from '../../components/assets/me.jpg';
import instagram from "../../components/assets/instagram.svg";
import gmail from "../../components/assets/gmail.svg";
import linkedin from "../../components/assets/linkedin.svg";
import whatsapp from "../../components/assets/whatsapp.svg";

const About = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full rounded-md flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="fixed top-5 left-5 group">
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
        className="left-0 md:left-60 md:-top-10 fixed"
        fill="white"
      />
      <div className="p-4 mt-[14%] max-w-2xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Who am I?
        </h1>
        <p className="mt-4 font-playfair text-2xl text-neutral-200 max-w-2xl text-justify mx-auto">
          <i>Vivek</i> — a 22-year-old developer with a passion for building
          things that matter. Graduating in 2024 from MGIT [Hyderabad], was just
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
          What do I like?
        </h1>
        <div className="max-w-2xl font-playfair flex justify-between mt-4 text-neutral-200">
          <div className="w-[46%]">
            <p className="text-2xl">
              The <i><q>Sea</q></i> is where I find peace. Its vastness reminds me to dream
              big, and its rhythmic waves bring me a sense of calm. There’s
              something magical about watching the sun set over the horizon
              while the ocean whispers stories of its timeless journey. It’s my
              ultimate escape and source of inspiration.
            </p>
            <br />
              <Image
                src={me}
                alt="sea"
                className="rounded-xl shadow-lg h-auto object-cover hover:scale-105 transition-all duration-200 ease-in-out"
              />
          </div>
          <div className="w-[46%]">
              <Image
                src={sea}
                alt="me"
                className="rounded-xl shadow-lg h-auto object-cover hover:scale-105 transition-all duration-200 ease-in-out"
              />
            <br />
            <p className="text-2xl">
            <i><q>Traveling</q></i> gives me a sense of freedom, adventure, and perspective.
              Whether it’s exploring bustling cities or wandering through serene
              mountains, I love immersing myself in new cultures and discovering
              stories that resonate with the beauty of our world. Each journey
              is a reminder of how vast and diverse life is.
            </p>
          </div>
        </div>
        <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          What else?
        </h1>
        <p className="mt-4 font-playfair text-2xl text-neutral-200 max-w-2xl text-center mx-auto">
          There is a <i>Side - B</i> as well...
          <br/>
          <span className="cursor-pointer underline" onClick={() => router.push("/side-b")}>Here we go</span>
        </p>
        <h1 className="mt-16 text-4xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Send me a &#8216;Hello&#8217;
        </h1>
        <div className="flex justify-center space-x-5 mt-4 min-h-40">
            <a
              href="https://www.linkedin.com/in/sai-vivek-9a26b2201"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedin} height={25} width={25} alt="linkedin" className="hover:scale-110"/>
            </a>
            <a
              href="https://www.instagram.com/viveeeeeekkkk"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={instagram} height={25} width={25} alt="instagram" className="hover:scale-110"/>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com">
              <Image src={gmail} height={28} width={28} alt="gmail" className="hover:scale-110"/>
            </a>
            <a
              href="https://wa.me/+918465955818"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={whatsapp} height={26} width={26} alt="Whatsapp" className="hover:scale-110"/>
            </a>
          </div>
      </div>
    </div>
  );
};

export default About;
