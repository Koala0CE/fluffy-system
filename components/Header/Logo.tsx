import Link from "next/link";
import React from "react";
import logo from "../../public/elvyLogo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={logo}
          alt="Elvy Logo"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className=" text-xl font-bold ml-2">ElvyCrissy</span>
    </Link>
  );
};

export default Logo;
