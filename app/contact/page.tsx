"use client";

import ContactForm from "@/components/Contact/ContactForm";
import LottieAnimation from "@/components/Contact/LottieAnimation";

export default function Contact() {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-black flex flex-row items-center justify-center text-black">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-black">
        <LottieAnimation />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Hello</h2>
        <ContactForm />
      </div>
    </section>
  );
}
