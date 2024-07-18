"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { siteMetaData } from "@/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/utils";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import GitHubIcon from "../icons/GitHubIcon";
import ContactIcon from "../icons/ContactIcon";
import HomeIcon from "../icons/HomeIcon";
import AboutIcon from "../icons/AboutIcon";
import MoonIconMini from "../icons/MoonIconMini";
import SunIconMini from "../icons/SunIconMini";

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
      {/*  Small screen nav */}
      <nav
        className="w-max py-3 px-6 sm:px-8 sm:px-10 border-blue-900 text-white sm:hidden flex items-center fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 backdrop-blur-sm transition-all ease duration-300 z-10"
        style={{
          bottom: click ? "1rem" : "-5rem",
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
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "dark" ? "bg-gray-800" : "bg-gray-200"
          )}
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
        >
          {mode === "dark" ? (
            <MoonIconMini className={"fill-black"} />
          ) : (
            <SunIconMini className={"fill-black"} />
          )}
        </button>
      </nav>

      <nav
        className={`${
          isScrolled
            ? "fixed top-0 right-0 h-full w-10 hidden sm:flex flex-col items-center justify-center py-10 "
            : "w-max py-1 px-5 sm:px-10  border-blue-900 text-white hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-gray-800 backdrop-blur-sm"
        } text-white font-medium capitalize z-50 `}
      >
        <div
          className={`${
            isScrolled
              ? "bg-gray-50 flex flex-col py-10 px-1 text-gray-800"
              : ""
          } `}
        >
          {/* Scrolled view */}
          {isScrolled ? (
            <>
              <Link href="/" className="mb-3 hover:text-complementary">
                <HomeIcon />
              </Link>
              <Link href="/about" className="mb-3 hover:text-complementary">
                <AboutIcon />
              </Link>

              <Link href="/contact" className="mb-3 hover:text-complementary">
                <ContactIcon />
              </Link>
              <button
                className="inline-block"
                onClick={() => {
                  setMode(mode === "dark" ? "light" : "dark");
                }}
              >
                {mode === "dark" ? (
                  <MoonIconMini className={"fill-black"} />
                ) : (
                  <SunIconMini className={"fill-black"} />
                )}
              </button>
            </>
          ) : (
            // Top NavBar
            <div className="flex items-center justify-center">
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
                href="/categories/all"
                className="mr-2 hover:text-complementary hover:italic"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="mr-2 hover:text-complementary hover:italic"
              >
                Contact
              </Link>
              <button
                className="inline-block ml-4"
                onClick={() => {
                  setMode(mode === "dark" ? "light" : "dark");
                }}
              >
                {mode === "dark" ? <SunIconMini /> : <MoonIconMini />}
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* Social Icons */}
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
