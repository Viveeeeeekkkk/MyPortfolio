"use client";
import { motion } from "framer-motion";
import { Spotlight } from "../../components/ui/Spotlight";
import Image from "next/image";
import sea from "../../components/assets/sea2.jpg";
import me from "../../components/assets/me.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="w-full flex justify-center relative overflow-hidden">
      <Navbar />

      <Spotlight className="left-0 md:left-60 -top-10 fixed" fill="white" />

      <motion.div
        initial={{ opacity: 0.0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full max-w-5xl px-6 pt-32 pb-20"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Who am I?
        </h1>

        <p className="mt-6 font-playfair text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto text-left sm:text-justify leading-relaxed">
          <i>Vivek</i> — a passionate full-stack developer who loves building
          things that matter. I graduated in 2024 from Mahatma Gandhi Institute
          of Technology (MGIT), Hyderabad, and quickly stepped into freelancing
          as a Software and Full-Stack Developer.
          <br />
          <br />
          I’m driven by the process of turning ideas into meaningful digital
          experiences. From designing clean interfaces to building scalable
          backends, I enjoy working across the stack and solving real-world
          problems with code.
          <br />
          <br />
          Every project challenges me to think better, adapt faster, and stay
          creative. Freelancing has shaped me into a continuous learner who
          enjoys collaborating, experimenting, and building products that create
          impact.
        </p>

        <h1 className="mt-20 text-2xl sm:text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          What do I like?
        </h1>

        <div className="max-w-2xl mx-auto font-playfair flex flex-col md:flex-row gap-12 mt-10 text-neutral-200">
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
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

            <div className="mt-6">
              <Image
                src={me}
                alt="Vivek"
                className="rounded-xl shadow-lg w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-col">
            <div className="mb-6">
              <Image
                src={sea}
                alt="Sea"
                className="rounded-xl shadow-lg w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
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

        <div className="mt-24">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
