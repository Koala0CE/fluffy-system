import Link from "next/link";
import React from "react";
import logo from "../../public/elvyLogo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-black dark:text-white">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-primary mr-2 md:mr-4 dark:border-primary">
        <Image
          src={logo}
          alt="Elvy Logo"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="text-lg md:text-xl font-bold dark:font-semibold ml-2 text-primary dark:text-primary">
        ElvyCrissy
      </span>
    </Link>
  );
};

export default Logo;
