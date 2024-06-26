import React from "react";
import Link from "next/link";

import { cx } from "../../utils";

// Define prop types
interface TagProps extends React.HTMLAttributes<HTMLAnchorElement> {
  link?: string;
  name: string;
}

const Tag: React.FC<TagProps> = ({ link = "#", name, ...props }) => {
  return (
    <Link
      className={cx(
        "inline-block py-3 px-10 bg-primary text-white rounded-full capitalize  text-sm font-semibold border-2 border-solid border-light hover:bg-complementary hover:text-purple-500 hover:scale-105 transition-all duration-200 ease focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50",
        props.className
      )}
      href={link}
      {...props}
    >
      {name}
    </Link>
  );
};

export default Tag;
