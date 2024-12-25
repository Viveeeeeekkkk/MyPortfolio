import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent text-white">
      <Link href="/"><div className="text-xl font-bold mx-10">V</div></Link>
      <div className="flex space-x-10 mx-10">
        <Link href="/about">
          <div className="text-xl hover:text-gray-400">About</div>
        </Link>
        <Link href="/projects">
          <div className="text-xl hover:text-gray-400">Projects</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
