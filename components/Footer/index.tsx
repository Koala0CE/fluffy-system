"use client";
import { GitHubIcon } from "@/Icons";
import React from "react";
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-black m-10 flex flex-col items-center text-white">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Projects | Updates | Contact | About | Blog | Privacy Policy
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-white text-base">
        Get in touch with me for any project or collaboration. I am always open
        to new ideas and projects.
      </p>

      <form
        className="mt-6 min-w-[384px] flex items-stretch bg-white p-2 rounded mx-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full bg-transparent pl-0 text-black focus:border:black focus:ring-0 border-0 border-b mr-2 pb-1"
          type="text"
          placeholder="Enter your name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          className="w-full bg-transparent pl-0 text-black focus:border:black focus:ring-0 border-0 border-b mr-2 pb-1"
          type="text"
          placeholder="Enter you email"
          {...register("Email", { required: true, maxLength: 80 })}
        />

        <input
          className="bg-black text-white cursor-pointer font-medium rounded px-5 py-1"
          type="submit"
        />
      </form>

      <div className="flex items-center mt-8">
        <a
          href="https://www.linkedin.com/in/cgiuroiu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
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

      <div className="w-full mt-24 relative font-medium border-t border-solid border-white py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-primary text-center">
          &copy; 2024 Elvy All rights reserved
        </span>

        <span className="text-primary text-center">Terms of Service</span>
        <span className="text-primary text-center">Made with ❤️ by Elvy</span>
      </div>
    </footer>
  );
};

export default Footer;
