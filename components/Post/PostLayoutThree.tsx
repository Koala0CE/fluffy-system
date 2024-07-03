import Link from "next/link";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { Post } from "@/utils/types";

const PostLayoutThree: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="group flex flex-col items-center  text-black">
      <Link className="h-full rounded-xl overflow-hidden" href={post.url}>
        <Image
          src={post.image.filePath.replace("../public", "")}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>

      <div className="flex flex-col mt-4 w-full">
        <span className="uppercase text-analogous font-semibold text-sm">
          {post.tags[0]}
        </span>

        <Link href={post.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-lg">
            <span className=" text-gray-800 bg-gradient-to-r from-analogous/50 to-analogous/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {post.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray-400 font-semibold text-base">
          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default PostLayoutThree;
