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
) => <h3 style={{ color: "#ed2dc6" }} {...props} />; // LimeGreen color for h3

// Custom link component with complementary colors
const A = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLAnchorElement> &
    React.HTMLAttributes<HTMLAnchorElement>
) => (
  <a
    {...props}
    style={{
      color: "#edb32d", // Complementary color for links
      textDecoration: "underline", // Underline style for links
    }}
  />
);

const mdxComponents = {
  Image,
  h1: H1,
  h2: H2,
  h3: H3,
  a: A, // Custom component for <a> tags
};

const RenderMdx = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="text-gray-800 dark:text-gray-200 col-span-12 lg:col-span-8 font-inter prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-analogous/20 dark:prose-blockquote:bg-triadic/40 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-analogous dark:prose-blockquote:border-triadic prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker-complementary dark:prose-li:marker-red-100 dark:prose-invert first-letter:text-3xl sm:first-letter:text-5xl">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
