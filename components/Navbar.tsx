import Link from "next/link";
import React, { useState, useRef } from "react";

function Navbar() {
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
  ];

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const containerLeft =
      containerRef.current?.getBoundingClientRect().left || 0;

    const { left, width } = target.getBoundingClientRect();

    setIndicatorStyle({
      left: left - containerLeft + width / 2 - 12,
      width: 22,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setIndicatorStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <div className="fixed top-5 w-full flex justify-center z-50 px-4">
      <div
        ref={containerRef}
        onMouseLeave={handleLeave}
        className="
          relative flex gap-4 sm:gap-8 text-white
          px-2 py-2 rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-[0_0_20px_5px_rgba(255,255,255,0.15)]
          hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.25)]
          transition-all duration-300
        "
      >
        {/* Glowing indicator */}
        <div
          className="absolute top-[-4px] h-1 rounded-full bg-white transition-all duration-300"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            opacity: indicatorStyle.opacity,
          }}
        />

        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <div
              className="
                py-1 px-4 rounded-2xl cursor-pointer
                hover:bg-white/20
                transition-all duration-300
              "
              onMouseEnter={handleHover}
            >
              {link.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
