import { sortPosts } from "@/utils";
import React from "react";
import PostLayoutOne from "../Post/PostLayoutOne";
import PostLayoutTwo from "../Post/PostLayoutTwo";
import { allPosts, Post } from "contentlayer/generated";

const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  // Sort posts by publishedAt descending
  const sortedPosts = sortPosts(posts);

  // Ensure there are at least two posts available before rendering
  if (sortedPosts.length < 2) {
    return null; // or render a message indicating there are not enough posts
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-primary dark:text-triadic">
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        {/* Render PostLayoutOne for the first post */}
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative  flex">
          <PostLayoutOne post={sortedPosts[2]} />
        </article>
        {/* Render PostLayoutTwo for the second post */}
        <article className="col-span-2 sm:col-span-1 row-span-1 relative flex">
          <PostLayoutTwo post={sortedPosts[1]} />
        </article>
        {/* Render PostLayoutTwo for the third post */}
        {sortedPosts.length > 2 && (
          <article className="col-span-2 sm:col-span-1 row-span-1 relative flex">
            <PostLayoutTwo post={sortedPosts[2]} />
          </article>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
