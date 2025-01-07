"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Spotlight } from "../../components/ui/Spotlight";
import Image from "next/image";
import sea from "../../components/assets/sea2.jpg";
import me from "../../components/assets/me.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  const router = useRouter();

  return (
    <div className="w-full flex md:justify-center relative overflow-hidden">
      <Navbar />
      <Spotlight className="left-0 md:left-60 md:-top-10 fixed" fill="white" />
      <motion.div
        initial={{ opacity: 0.0, y: 60 }}
        whileInView={{ opacity: 1, y: 30 }}
        transition={{
          delay: 0,
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="p-4 mt-[14%] max-w-2xl mx-auto relative z-10 w-full pt-20 md:pt-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Who am I?
        </h1>
        <p className="mt-4 font-playfair text-xl sm:text-2xl text-neutral-200 max-w-2xl text-justify mx-auto">
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
        <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          What do I like?
        </h1>
        <div className="max-w-2xl font-playfair flex flex-col sm:flex-row justify-between mt-4 text-neutral-200">
          <div className="w-full sm:w-[46%] mb-4 sm:mb-0">
            <p className="text-xl sm:text-2xl">
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
          <div className="w-full sm:w-[46%]">
            <Image
              src={sea}
              alt="me"
              className="rounded-xl shadow-lg h-auto object-cover hover:scale-105 transition-all duration-200 ease-in-out"
            />
            <br />
            <p className="text-xl sm:text-2xl">
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
        <h1 className="mt-16 text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          What else?
        </h1>
        <p className="mt-4 font-playfair text-xl sm:text-2xl text-neutral-200 max-w-2xl text-center mx-auto">
          There is a <i>Side - B</i> as well...
          <br />
          <span
            className="cursor-pointer underline"
            onClick={() => router.push("/side-b")}
          >
            Here we go
          </span>
        </p>
        <Footer />
      </motion.div>
    </div>
  );
};

export default About;
