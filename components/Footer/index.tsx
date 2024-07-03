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
    <footer className="mt-16 rounded-2xl bg-gray-200 m-10 flex flex-col items-center text-gray-800">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4 text-teal-500">
        Projects | Updates | Contact | About | Blog | Privacy Policy
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-white text-base ">
        Get in touch with me for any project or collaboration. I am always open
        to new ideas and projects.
      </p>

      <form
        className="mt-6 min-w-[384px] flex items-stretch bg-gray-100 p-2 rounded mx-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full bg-transparent pl-0 text-gray-900 focus:border-gray-400 focus:ring-0 border-0 border-b mr-2 pb-1"
          type="text"
          placeholder="Enter your name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          className="w-full bg-transparent pl-0 text-gray-900 focus:border-gray-400 focus:ring-0 border-0 border-b mr-2 pb-1"
          type="text"
          placeholder="Enter you email"
          {...register("Email", { required: true, maxLength: 80 })}
        />

        <button
          type="submit"
          className="font-mono bg-primary hover:bg-pink-600  text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 mr-2 "
          >
            <path d="M7.25 1.75a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0v-1.5ZM11.536 2.904a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061ZM14.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM4.464 9.975a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061ZM4.5 7.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .75-.75ZM5.525 3.964a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 1.06-1.061l1.061 1.06ZM8.779 7.438a.75.75 0 0 0-1.368.366l-.396 5.283a.75.75 0 0 0 1.212.646l.602-.474.288 1.074a.75.75 0 1 0 1.449-.388l-.288-1.075.759.11a.75.75 0 0 0 .726-1.165L8.78 7.438Z" />
          </svg>

          <span>Submit</span>
        </button>
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

      <div className="w-full mt-24 relative font-medium border-t border-solid border-gray-300 py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-gray-800 text-center">
          &copy; 2024 Elvy All rights reserved
        </span>

        <span className="text-gray-800 text-center">Terms of Service</span>
        <span className="text-gray-800 text-center">Made with ❤️ by Elvy</span>
      </div>
    </footer>
  );
};

export default Footer;
