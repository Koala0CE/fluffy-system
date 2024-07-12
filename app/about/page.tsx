import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import { siteMetaData } from "@/utils/siteMetaData";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about me and my skills! ${siteMetaData.email}`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-gray-800 dark:text-gray-200 dark:font-none">
        If you&apos;d like to collaborate or have any questions, don&apos;t
        hesitate to {""}
        <Link
          className="!underline underline-offset-2 text-teal-500 hover:text-teal-600"
          href={"/contact"}
        >
          reach out!
        </Link>
      </h2>
    </>
  );
}
