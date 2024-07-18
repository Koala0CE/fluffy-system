import { format, parseISO } from "date-fns";
import Link from "next/link";

import React from "react";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const PostDetails = ({ post, slug: blogSlug }: any) => {
  return (
    <div className="px-2 md:px-10 bg-analogous dark:bg-triadic text-white dark:text-black py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 sm:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>

      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>

      <div className="m-3">{post.readingTime.text}</div>

      <Link className="m-3" href={`/categories/${slug(post.tags[0])}`}>
        #{post.tags[0]}
      </Link>
    </div>
  );
};

export default PostDetails;
