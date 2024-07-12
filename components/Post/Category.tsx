import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }: any) => {
  return (
    <Link
      className={cx(
        "inline-block py-1.5 md:py-2 px-6  md:px-10 rounded-full border-2 border-solid border-black dark:border-white hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active
          ? "bg-black text-white dark:bg-white dark:text-black"
          : "bg-orange-500 text-black dark:bg-black dark:text-white"
      )}
      href={link}
    >
      #{name}
    </Link>
  );
};

export default Category;
