import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }: any) => {
  return (
    <Link
      className={cx(
        "inline-block py-2 px-10 rounded-full font-normal border-2 border-solid border-black hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-black text-white" : "bg-orange-500 text-black"
      )}
      href={link}
      {...props}
    >
      #{name}
    </Link>
  );
};

export default Category;
