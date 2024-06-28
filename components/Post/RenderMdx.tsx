"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="col-span-8 font-inter prose-lg max-w-max prose-blockquote:bg-purple/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-purple prose-blockquuote:not-italic prose-blockquote:rounded-r-lg prose-li:marker-purple">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
