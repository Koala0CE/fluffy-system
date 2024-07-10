import { sortPosts } from "@/utils";
import React from "react";
import PostLayoutOne from "../Post/PostLayoutOne";
import PostLayoutTwo from "../Post/PostLayoutTwo";
import { allPosts, Post } from "contentlayer/generated";

const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  console.log(posts, "posts");
  // Sort posts by publishedAt descending
  const sortedPosts = sortPosts(posts);

  // Ensure there are at least two posts available before rendering
  if (sortedPosts.length < 2) {
    return null; // or render a message indicating there are not enough posts
  }

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl text-primary">
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        {/* Render PostLayoutOne for the first post */}
        <article className="col-span-1 row-span-2 relative">
          <PostLayoutOne post={sortedPosts[0]} />
        </article>
        {/* Render PostLayoutTwo for the second post */}
        <article className="col-span-1 row-span-1 relative">
          <PostLayoutTwo post={sortedPosts[1]} />
        </article>
        {/* Render PostLayoutTwo for the third post */}
        {sortedPosts.length > 2 && (
          <article className="col-span-1 row-span-1 relative">
            <PostLayoutTwo post={sortedPosts[2]} />
          </article>
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;
