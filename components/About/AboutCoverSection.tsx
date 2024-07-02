import React from "react";
import Image from "next/image";
import profilePicture from "@/public/elvyLogo.png";

const AboutCoverSection = () => {
  return (
    <div className="w-full h-[75vh] border-b-2 border-solid border-black flex flex-row items-center justify-center text-black">
      <div className="w-1/2 h-full border-r-2 border-solid border-black flex justify-center">
        <Image
          className="w-full h-full object-contain object-center"
          src={profilePicture}
          alt={"Elvy"}
        ></Image>
      </div>

      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">Hey there!</h2>
        <p className="font-medium capitalize mt-4 text-base"> Elvy</p>
      </div>
    </div>
  );
};

export default AboutCoverSection;
