import { sortPosts } from "@/utils";
import React from "react";

import Link from "next/link";
import PostLayoutThree from "../Post/PostLayoutThree";
import { Post } from "contentlayer/generated";

const RecentPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const sortedPosts = sortPosts(posts);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
        <h2 className=" inline-block font-bold capitalise text-4xl text-primary">
          Recent Posts
        </h2>
        <Link
          href={"/categories/all"}
          className="inline-block font-medium text-complementary underline underline-offset-2 text-lg"
        >
          View all
        </Link>
      </div>

      <div
        className={`grid grid-cols-3 gap-16 mt-16 ${
          sortedPosts.length <= 3 ? "grid-rows-1" : "grid-rows-2"
        }`}
      >
        {sortedPosts.slice(0, 6).map((post, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <PostLayoutThree post={post} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
