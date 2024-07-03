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
        "bg-primary hover:bg-pink-600 capitalize text-white font-bold py-2 px-4 border-b-4 border-complementary hover:border-teal-600 rounded",
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
