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
      className="mt-12 text-xl font-medium leading-relaxed font-inter"
      onSubmit={handleSubmit(onSubmit)}
    >
      I'm
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-600 focus:border-gray-600 bg-transparent"
        type="text"
        placeholder="Your Name"
        {...register("name", { required: true })}
      />
      and I’m excited to connect with you about a potential project. Feel free
      to email me at
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-600 focus:border-gray-600 bg-transparent"
        type="email"
        placeholder="Your Email"
        {...register("email", { required: true })}
      />
      or call/text me at
      <input
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-600 focus:border-gray-600 bg-transparent"
        type="tel"
        placeholder="Your Phone Number"
        {...register("phone number", { required: true })}
      />
      Here’s an overview of my project: <br />
      <textarea
        placeholder="Project Details / Message"
        rows={2}
        cols={95}
        className="outline-none border-0 p-0 mx-0 my-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-600 focus:border-gray-600 bg-transparent"
        {...register}
      />
      <input
        value={"send request"}
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-black rounded cursor-pointer"
        type="submit"
      />
    </form>
  );
}
