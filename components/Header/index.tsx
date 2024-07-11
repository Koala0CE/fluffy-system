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
import { useThemeSwitch } from "../Hooks/useThemeSwitch";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [click, setClick] = useState(false);

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

  const toggleMenu = () => {
    setClick(!click);
  };

  // className="w-max py-1 px-8 border border-solid border-blue-900 text-white  font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-gray-800 backdrop-blur-sm z-50">

  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />

      <button className="inline-block sm:hidden z-50" onClick={toggleMenu}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-black dark:bg-white rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-max py-3 px-6 sm:px-8 sm:px-10 border-blue-900 text-white sm:hidden flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-gray-800 backdrop-blur-sm transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2 hover:text-complementary hover:italic">
          Home
        </Link>
        <Link
          href="/about"
          className="mr-2 hover:text-complementary hover:italic"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="mx-2 hover:text-complementary hover:italic"
        >
          Contact
        </Link>
        <button
          className="inline-block ml-1"
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
        >
          {mode === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
      </nav>

      <nav
        className={`${
          isScrolled
            ? "fixed top-0 right-0 h-full w-10 flex flex-col items-center justify-center py-10 "
            : "w-max py-1 px-5 sm:px-10  border-blue-900 text-white hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-gray-800 backdrop-blur-sm"
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
              <button
                className="inline-block ml-4" // Adjust margin for alignment
                onClick={() => {
                  setMode(mode === "dark" ? "light" : "dark");
                }}
              >
                {mode === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </button>
            </>
          )}
        </div>
      </nav>
      <div className="hidden sm:flex items-center">
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
          <GitHubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-white" />
        </a>
      </div>
    </header>
  );
};

export default Header;
