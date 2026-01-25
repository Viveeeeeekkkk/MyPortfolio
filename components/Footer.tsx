import React from "react";
import Image from "next/image";
import instagram from "./assets/instagram.svg";
import gmail from "./assets/gmail.svg";
import linkedin from "./assets/linkedin.svg";
import whatsapp from "./assets/whatsapp.svg";

function Footer() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-14 mt-20 border-t-[3px]"
      style={{
        borderImage:
          "linear-gradient(to right, #18181b, #4b5563, #3b82f6, #4b5563, #18181b) 1",
      }}
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Send me a &#8216;Hello&#8217;
      </h1>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-1 mt-6">
        <a
          href="https://www.linkedin.com/in/nallapati-koteswara-sai-vivek-9a26b2201/"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full"
        >
          <Image
            src={linkedin}
            height={26}
            width={26}
            alt="linkedin"
            className="hover:scale-125 transition-transform duration-300"
          />
        </a>

        <a
          href="https://www.instagram.com/viveeeeeekkkk"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full"
        >
          <Image
            src={instagram}
            height={26}
            width={26}
            alt="instagram"
            className="hover:scale-125 transition-transform duration-300"
          />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com"
          className="p-2 rounded-full"
        >
          <Image
            src={gmail}
            height={30}
            width={30}
            alt="gmail"
            className="hover:scale-125 transition-transform duration-300"
          />
        </a>

        <a
          href="https://wa.me/+918465955818"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full"
        >
          <Image
            src={whatsapp}
            height={26}
            width={26}
            alt="Whatsapp"
            className="hover:scale-125 transition-transform duration-300"
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="w-full text-neutral-400 text-xs sm:text-sm text-center mt-10">
        © {new Date().getFullYear()} Vivek. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
