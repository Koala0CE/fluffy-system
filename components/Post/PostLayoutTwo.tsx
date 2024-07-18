import Link from "next/link";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Post } from "contentlayer/generated";

const PostLayoutTwo: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-gray-800 dark:text-white">
      <Link
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
        href={post.url}
      >
        <Image
          src={post.image.filePath.replace("../public", "")}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          placeholder="blur"
          blurDataURL={post.image.blurhashDataUrl}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <span className="inline-block w-full uppercase text-analogous dark:text-complementary font-semibold text-xs sm:text-sm">
          {post.tags[0]}
        </span>

        <Link className="inline-block my-1" href={post.url}>
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span className="bg-gradient-to-r from-analogous/50 dark:from-complementary/50 to-analogous/50 dark:to-complementary/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {post.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray-400  dark:text-whhite/50 font-semibold text-xs sm:text-base">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default PostLayoutTwo;
