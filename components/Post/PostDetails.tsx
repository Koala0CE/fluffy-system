import { format, parseISO } from "date-fns";
import Link from "next/link";

import React from "react";
import { slug } from "github-slugger";

const PostDetails = ({ post, slug: blogSlug }: any) => {
  return (
    <div className="px-10 bg-triadic text-white py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>

      <span className="m-3">10 views</span>

      <div className="m-3">{post.readingTime.text}</div>

      <Link className="m-3" href={`/categories/${slug(post.tags[0])}`}>
        #{post.tags[0]}
      </Link>
    </div>
  );
};

export default PostDetails;
