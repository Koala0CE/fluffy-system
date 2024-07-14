import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { Post } from "contentlayer/generated";
import { slug } from "github-slugger";

const PostLayoutOne: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl relative">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-black/90 rounded-3xl z-10"></div>
      {post?.image?.filePath ? (
        <Image
          src={post.image.filePath.replace("../public", "")}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          placeholder="blur"
          blurDataURL={post.image.blurhashDataUrl}
          className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 1180px) 100vw, 50vw"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 rounded-xl">
          <p className="text-center text-gray-500">Image not available</p>
        </div>
      )}

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        {post?.tags?.[0] && (
          <Tag
            className="bg-primary hover:bg-pink-600 capitalize text-white font-semibold text-xs sm:text-sm py-1 sm:py-2 px-4 border border-complementary rounded shadow"
            link={`/categories/${slug(post.tags[0])}`}
            name={post.tags[0]}
          />
        )}

        {post?.url ? (
          <Link className="block mt-2 sm:mt-4" href={post.url}>
            <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl">
              <span className="text-white bg-gradient-to-r from-primary to-primary bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {post.title}
              </span>
            </h2>
          </Link>
        ) : (
          <h2 className="font-bold capitalize text-2xl text-white">
            Title not available
          </h2>
        )}
      </div>
    </div>
  );
};

export default PostLayoutOne;
