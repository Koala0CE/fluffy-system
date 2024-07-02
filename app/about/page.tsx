import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import Link from "next/link";

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-black">
        Have a project in mind? Reach out to me {""}
        <Link className="!underline underline-offset-2" href={"/contact"}>
          here
        </Link>
        .
      </h2>
    </>
  );
}
