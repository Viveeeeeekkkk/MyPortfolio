import React from "react";
import Image from "next/image";
import instagram from "./assets/instagram.svg";
import gmail from "./assets/gmail.svg";
import linkedin from "./assets/linkedin.svg";
import whatsapp from "./assets/whatsapp.svg";

function Footer() {
  return (
    <div className="w-full min-h-60 flex flex-col justify-evenly py-16 my-8 border-t-[3px]" style={{
      borderImage: 'linear-gradient(to right, #18181b, #4b5563, #3b82f6, #4b5563, #18181b) 1',
    }}>
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Send me a &#8216;Hello&#8217;
        </h1>
        <div className="flex flex-wrap justify-center space-x-5 mt-4">
          <a
            href="https://www.linkedin.com/in/sai-vivek-9a26b2201"
            target="_blank"
            rel="noreferrer"
            className="mb-4 sm:mb-0"
          >
            <Image
              src={linkedin}
              height={25}
              width={25}
              alt="linkedin"
              className="hover:scale-125 transition-all duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/viveeeeeekkkk"
            target="_blank"
            rel="noreferrer"
            className="mb-4 sm:mb-0"
          >
            <Image
              src={instagram}
              height={25}
              width={25}
              alt="instagram"
              className="hover:scale-125 transition-all duration-300"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com"
            className="mb-4 sm:mb-0"
          >
            <Image
              src={gmail}
              height={30}
              width={30}
              alt="gmail"
              className="hover:scale-125 transition-all duration-300"
            />
          </a>
          <a
            href="https://wa.me/+918465955818"
            target="_blank"
            rel="noreferrer"
            className="mb-4 sm:mb-0"
          >
            <Image
              src={whatsapp}
              height={26}
              width={26}
              alt="Whatsapp"
              className="hover:scale-125 transition-all duration-300"
            />
          </a>
        </div>
      </div>
      <div className="w-full text-white text-sm text-center my-8">
        © {new Date().getFullYear()} Vivek. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
