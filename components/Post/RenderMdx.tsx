"use client";
import React from "react";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";

// Custom header components with different colors
const H1 = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>
) => <h1 style={{ color: "#ed2d65" }} {...props} />; // Tomato color for h1
const H2 = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>
) => <h2 style={{ color: "#edb32d" }} {...props} />; // SteelBlue color for h2
const H3 = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>
) => <h3 style={{ color: "#ed2dc6" }} {...props} />; // LimeGreen color for h3 edb32d

const mdxComponents = {
  Image,
  h1: H1,
  h2: H2,
  h3: H3,
};

const RenderMdx = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="text-gray-800 col-span-8 font-inter prose-lg max-w-max prose-blockquote:bg-purple/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-purple prose-blockquuote:not-italic prose-blockquote:rounded-r-lg prose-li:marker-purple">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
