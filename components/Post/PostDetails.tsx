import { format, parseISO } from "date-fns";
import Link from "next/link";
import { parse } from "path";
import React from "react";

const PostDetails = ({ post, slug }: any) => {
  return (
    <div className="px-10 bg-primary text-white py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>

      <span className="m-3">10 views</span>

      <div className="m-3">{post.readingTime.text}</div>

      <Link className="m-3" href={`/categories/${post.tags[0]}`}>
        #{post.tags[0]}
      </Link>
    </div>
  );
};

export default PostDetails;
