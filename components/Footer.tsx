import Image from 'next/image';
import instagram from "../components/assets/instagram.svg";
import gmail from "../components/assets/gmail.svg";
import linkedin from "../components/assets/linkedin.svg";
import whatsapp from "../components/assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="flex justify-center space-x-5">
        <a
          href="https://www.linkedin.com/in/sai-vivek-9a26b2201"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={linkedin}
            height={22}
            width={22}
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.instagram.com/viveeeeeekkkk"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={instagram}
            height={22}
            width={22}
            alt="instagram"
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nksaivivek@gmail.com"
        >
          <Image
            src={gmail}
            height={25}
            width={25}
            alt="gmail"
          />
        </a>
        <a
          href="https://wa.me/+918465955818"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={whatsapp}
            height={23}
            width={23}
            alt="Whatsapp"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
