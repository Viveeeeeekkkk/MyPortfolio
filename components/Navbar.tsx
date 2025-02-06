import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Skills', href: '/skills' },
  ];

  const leftOffsets = ['11.7%', '35.3%', '58.3%', '80.5%']; 

  return (
    <div className="fixed top-5 group w-full sm:w-[22%] mx-auto z-50">
      <div className="relative flex justify-evenly text-white border-4 p-2 rounded-full bg-black shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
        {/* Glowing indicator */}
        <div
          className="absolute top-[-4px] h-1 w-7 rounded-full bg-white transition-all duration-300"
          style={{
            left: hovered !== null ? leftOffsets[hovered] : leftOffsets[0],
            opacity: hovered !== null ? 1 : 0,
          }}
        ></div>

        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <div
              className="py-1 px-3 rounded-2xl hover:bg-gradient-to-b from-zinc-500 to-zinc-600/50 transition-all duration-700"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
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


// import Link from 'next/link';
// import React, { useState } from 'react';

// function Navbar() {
//   const [hovered, setHovered] = useState<number | null>(null); 

//   const links = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Work', href: '/work' },
//   ];

//   const leftOffsets = ['17%', '46.5%', '74.5%']; 

//   return (
//     <div className="fixed top-5 group w-full sm:w-[22%] mx-auto z-50">
//       <div className="relative flex justify-evenly text-white border-4 p-2 rounded-full bg-black shadow-[0_0_20px_5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.5)] transition-all duration-300">
//         <div
//           className="absolute top-[-5px] h-1 w-7 rounded-full bg-white transition-all duration-300"
//           style={{
//             left: hovered !== null ? leftOffsets[hovered] : leftOffsets[0],
//             opacity: hovered !== null ? 1 : 0,
//           }}
//         ></div>

//         {links.map((link, index) => (
//           <Link href={link.href} key={index}>
//             <div
//               className="py-1 px-3 rounded-2xl hover:bg-gradient-to-b from-zinc-500 to-zinc-600/50 transition-all duration-700"
//               onMouseEnter={() => setHovered(index)}
//               onMouseLeave={() => setHovered(null)}
//             >
//               {link.name}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Navbar;

