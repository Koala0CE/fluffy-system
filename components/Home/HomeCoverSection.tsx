import { sortPosts } from "@/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import { Post } from "contentlayer/generated";
import { slug } from "github-slugger";

const HomeCoverSection: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const sortedPosts = sortPosts(posts);

  const post = sortedPosts[0];

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end relative mx-5 sm:mx-10 h-[60vh] sm:h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black/90 rounded-3xl z-0"></div>
        {post?.image?.filePath ? (
          <Image
            src={post.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={post.image.blurhashDataUrl}
            alt={post.title}
            fill
            className="w-full h-full object-center object-cover rounded-3xl -z-10"
            priority
            sizes="100vw"
          />
        ) : (
          <p>Image not available</p>
        )}

        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-white">
          {post?.tags?.[0] && (
            <Tag
              link={`/categories/${slug(post.tags[0])}`}
              name={post.tags[0]}
            />
          )}

          {post?.url ? (
            <Link className="mt-6" href={post.url}>
              <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
                <span className="text-white bg-gradient-to-r from-primary to-primary dark:from-complementary/50 dark:to-complementary/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                  {post.title}
                </span>
              </h1>
            </Link>
          ) : (
            <h1 className="mt-6 font-bold capitalize text-4xl text-white">
              {post?.title || "Title not available"}
            </h1>
          )}

          <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-inter text-white">
            {post?.description || "Description not available"}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
