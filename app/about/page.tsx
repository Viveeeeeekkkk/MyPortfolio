"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Spotlight } from "../../components/ui/Spotlight";
import Image from "next/image";
import sea from "../../components/assets/sea2.jpg";
import me from "../../components/assets/me.jpg";
import instagram from "../../components/assets/instagram.svg";
import gmail from "../../components/assets/gmail.svg";
import linkedin from "../../components/assets/linkedin.svg";
import whatsapp from "../../components/assets/whatsapp.svg";
import Link from "next/link";

const About = () => {
  const router = useRouter();

  return (
    <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
    <div className="min-h-screen w-full rounded-md flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="fixed top-5 group w-[22%] mx-auto z-50">
        <div className="flex justify-evenly border-4 p-2 rounded-full bg-black shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
          <Link href="/">
            <div className="hover:bg-zinc-600 transition-all duration-300 py-1 px-3 rounded-2xl">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="hover:bg-zinc-600 transition-all duration-300 py-1 px-3 rounded-2xl">About</div>
          </Link>
          <Link href="/work">
            <div className="hover:bg-zinc-600 transition-all duration-300 py-1 px-3 rounded-2xl">
              Work
            </div>
          </Link>
          <Link href="/skills">
            <div className="hover:bg-zinc-600 transition-all duration-300 py-1 px-3 rounded-2xl">
              Skills
            </div>
          </Link>
        </div>
      </div>
      <Spotlight className="left-0 md:left-60 md:-top-10 fixed" fill="white" />
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
              The{" "}
              <i>
                <q>Sea</q>
              </i>{" "}
              is where I find peace. Its vastness reminds me to dream big, and
              its rhythmic waves bring me a sense of calm. There’s something
              magical about watching the sun set over the horizon while the
              ocean whispers stories of its timeless journey. It’s my ultimate
              escape and source of inspiration.
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
              <i>
                <q>Traveling</q>
              </i>{" "}
              gives me a sense of freedom, adventure, and perspective. Whether
              it’s exploring bustling cities or wandering through serene
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
          <br />
          <span
            className="cursor-pointer underline"
            onClick={() => router.push("/side-b")}
          >
            Here we go
          </span>
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
            <Image
              src={linkedin}
              height={25}
              width={25}
              alt="linkedin"
              className="hover:scale-110"
            />
          </a>
          <a
            href="https://www.instagram.com/viveeeeeekkkk"
            target="_blank"
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
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com">
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
    </motion.div> 
  );
};

export default About;
