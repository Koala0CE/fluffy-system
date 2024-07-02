"use client";

import ContactForm from "@/components/Contact/ContactForm";
import LottieAnimation from "@/components/Contact/LottieAnimation";

export default function Contact() {
  return (
    <div className="flex justify-center">
      <section className="w-full max-w-[calc(100%-2rem)] h-[75vh] border-b-2 border-solid border-black flex flex-row items-center justify-center text-black mx-auto">
        <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
          <h2 className="font-bold text-4xl text-primary font-manrope">
            Get in touch!
          </h2>
          <ContactForm />
        </div>
        <div className="inline-block w-2/5 h-full border-l-2 border-solid border-black">
          <LottieAnimation />
        </div>
      </section>
    </div>
  );
}
