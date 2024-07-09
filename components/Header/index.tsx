"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { GitHubIcon } from "@/Icons";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { siteMetaData } from "@/utils/siteMetaData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // className="w-max py-1 px-8 border border-solid border-blue-900 text-white  font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-gray-800 backdrop-blur-sm z-50">

  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav
        className={`${
          isScrolled
            ? "fixed top-0 right-0 h-full w-10 flex flex-col items-center justify-center py-10 "
            : "w-max py-1 px-8  border-blue-900 text-white flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-gray-800 backdrop-blur-sm"
        } text-white font-medium capitalize z-50 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`${
            isScrolled
              ? "bg-gray-50 flex flex-col py-10 px-1 text-gray-800"
              : ""
          } `}
        >
          {isScrolled ? (
            <>
              <Link href="/" className="mb-3 hover:text-complementary">
                <FaHome className="w-6 h-6" />
              </Link>
              <Link href="/about" className="mb-3 hover:text-complementary">
                <FaInfoCircle className="w-6 h-6" />
              </Link>
              <Link href="/projects" className="mb-3 hover:text-complementary">
                <FaProjectDiagram className="w-6 h-6" />
              </Link>
              <Link href="/contact" className="mb-3 hover:text-complementary">
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="mr-2 hover:text-complementary hover:italic"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="mr-2 hover:text-complementary hover:italic"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="mr-2 hover:text-complementary hover:italic"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="mx-2 hover:text-complementary hover:italic"
              >
                Contact
              </Link>
              <button></button>
            </>
          )}
        </div>
      </nav>
      <div>
        <a
          href={siteMetaData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          .
        </a>
        <a
          href={siteMetaData.github}
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
