// This function takes an array of class names and filters out any that are falsy.
// It then joins the remaining class names with a space and returns the result.
// This is useful for conditionally applying classes to an element.

import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: (string | undefined | null | false)[]) =>
  classNames.filter(Boolean).join(" ");

export const sortPosts = (
  posts: {
    image: {
      filePath: string;
      blurhasDataUrl: string;
      blurDataURL: string;
      alt: string;
      relativeFilePath: string;
      format: string;
      height: number;
      width: number;
      aspectRatio: number;
      blurhashDataUrl: string;
    };
    title: string;
    description: string;
    tags: string[];
    publishedAt: string;
    url: string;
  }[]
) => {
  return posts
    .slice()
    .sort((a: { publishedAt: string }, b: { publishedAt: string }) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
