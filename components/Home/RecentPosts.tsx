import { sortPosts } from "@/utils";
import React from "react";

import { Post } from "@/utils/types";
import Link from "next/link";
import PostLayoutThree from "../Post/PostLayoutThree";

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  const sortedPosts = sortPosts(posts);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold capitalise text-4xl ">
          RecentPosts
        </h2>
        <Link
          href={"/categories/all"}
          className="inline-block font-medium text-primary underline underline-offset-2 text-lg"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedPosts.slice(5, 11).map((post, index) => {
          return (
            <article className="col-span-1 row-span-1 relative ">
              <PostLayoutThree post={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
