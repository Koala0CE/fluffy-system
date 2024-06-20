import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { GitHubIcon } from "@/icons";

const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/projects" className="mr-2">
          Projects
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button></button>
      </nav>
      <div>
        <a
          href="https://www.linkedin.com/in/cgiuroiu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          .
        </a>
        <a
          href="https://github.com/Koala0CE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
        >
          <GitHubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
