import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/utils/types";
import { slug } from "github-slugger";

const PostLayoutOne: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="inline-block overflow-hidden rounded-x1 relative">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-black/90 rounded-3xl z-10"></div>
      <Image
        src={post.image.filePath.replace("../public", "")}
        alt={post.title}
        width={post.image.width}
        height={post.image.height}
        className="w-full h-full object-center object-cover rounded-xl"
      />

      <div className="absolute bottom-0 p-10 w-full z-20">
        <Tag
          className="bg-primary hover:bg-pink-600 capitalize text-white font-semibold py-2 px-4 border border-complementary rounded shadow"
          link={`/categories/${slug(post.tags[0])}`}
          name={post.tags[0]}
        />

        <Link href={post.url} className="block mt-4">
          <h2 className="font-bold capitalize text-2xl">
            <span className="text-white bg-gradient-to-r from-primary to-primary bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {post.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default PostLayoutOne;
