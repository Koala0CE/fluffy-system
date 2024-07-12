import React from "react";
import Image from "next/image";
import profilePicture from "@/public/elvyLogo.png";

const AboutCoverSection = () => {
  return (
    <div className="flex justify-center mx-4">
      <div className="w-full md:h-[75vh] border-b-2 border-solid border-gray-300 dark:border-white flex flex-col md:flex-row items-center justify-center text-black dark:text-white">
        <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-gray-300 dark-border-white flex justify-center">
          <Image
            className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
            src={profilePicture}
            alt={"Elvy"}
          ></Image>
        </div>

        <div className="bg-gray-100 w-full md:w-1/2 h-full flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16 text-gray-800">
          <h2 className="text-primary font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left">
            Hey there!
          </h2>
          <p className="font-medium mt-4 text-base">
            {" "}
            I&apos;m Elvy, a dedicated and passionate Software Engineer with 2
            years of experience in fullstack and frontend development. I
            specialize in building dynamic, responsive, and user-friendly
            applications that provide a seamless experience across devices. When
            I&apos;m not coding, you can find me exploring new technologies and
            refining my skills in both frontend and backend development. Feel
            free to browse through my portfolio to see some of my recent
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCoverSection;
