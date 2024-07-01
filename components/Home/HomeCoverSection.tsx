import { sortPosts } from "@/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import { Post } from "contentlayer/generated";
import { slug } from "github-slugger";

interface HomeCoverSectionProps {
  posts: Post[];
}

const HomeCoverSection = ({ posts }: HomeCoverSectionProps) => {
  const sortedPosts = sortPosts(posts);

  const post = sortedPosts[0];
  return (
    <div className="w-full inline-block">
      <article className="w-full flex flex-col items-start justify-end mx-10 relative h-[85vh] ">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black/90 rounded-3xl z-0"></div>
        <Image
          src={post.image.filePath.replace("../public", "")}
          //  placeholder="blur"
          // blurDataURL={post.image.blurhasDataUrl}
          alt={post.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl"
        />

        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/categories/${slug(post.tags[0])}`} name={post.tags[0]} />

          <Link href={post.url} className="mt-6">
            <h1 className="font-bold capitalize text-4xl">
              <span className="text-white bg-gradient-to-r from-primary to-primary bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {post.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-inter text-white">
            {post.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
