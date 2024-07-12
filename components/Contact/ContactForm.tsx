"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-inter text-triadic"
      onSubmit={handleSubmit(onSubmit)}
    >
      I&apos;m
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-analogous focus:border-analogous placeholder:text-triadic bg-transparent"
        type="text"
        placeholder="Your Name"
        {...register("name", { required: true })}
      />
      and I&apos;m excited to connect with you about a potential project. Feel
      free to email me at
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-analogous focus:border-analogous placeholder:text-triadic bg-transparent"
        type="email"
        placeholder="Your Email"
        {...register("email", { required: true })}
      />
      or call/text me at
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-analogous focus:border-analogous placeholder:text-triadic bg-transparent"
        type="tel"
        placeholder="Your Phone Number"
        {...register("phone number", { required: true })}
      />
      Here&apos;s an overview of my project: <br />
      <textarea
        placeholder="Project Details / Message"
        rows={2}
        cols={95}
        className="w-full outline-none border-0 p-0 mx-0 my-2 focus:ring-0 placeholder:text-lg border-b border-analogous focus:border-analogous placeholder:text-triadic bg-transparent"
        {...register}
      />
      <button
        value={"send request"}
        type="submit"
        className="font-mono bg-complementary hover:bg-emerald-600 text-white dark:text-black font-bold py-2 px-4 rounded inline-flex items-center"
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
  );
}
