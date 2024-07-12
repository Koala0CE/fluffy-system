import ContactForm from "@/components/Contact/ContactForm";
import LottieAnimation from "@/components/Contact/LottieAnimation";
import { siteMetaData } from "@/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: `Get in touch with me for any queries or collaborations! ${siteMetaData.email}`,
};

export default function Contact() {
  return (
    // <div className="flex justify-center">
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-black dark:border-white flex flex-col md:flex-row items-center justify-center text-black dark:text-white">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-black dark:border-white">
        <LottieAnimation />
      </div>
      <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl text-primary">
          Get in touch!
        </h2>
        <ContactForm />
      </div>
    </section>
    // </div>
  );
}
