import { sortPosts } from "@/utils";
import React from "react";
import PostLayoutOne from "../Post/PostLayoutOne";
import PostLayoutTwo from "../Post/PostLayoutTwo";
import { Post } from "@/utils/types";

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  const sortedPosts = sortPosts(posts);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalise text-4xl ">
        FeaturedPosts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2 relative">
          <PostLayoutOne post={sortedPosts[0]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <PostLayoutTwo post={sortedPosts[0]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <PostLayoutTwo post={sortedPosts[0]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
