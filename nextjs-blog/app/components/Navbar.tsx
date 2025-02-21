import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-xl sm:text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Strength and Conditioning
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            aria-label="linkedin"
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/scott-milliorn/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            aria-label="github"
            className="text-white/90 hover:text-white"
            href="https://github.com/milliorn"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            aria-label="twitter"
            className="text-white/90 hover:text-white"
            href="https://twitter.com/scottmilliorn"
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
