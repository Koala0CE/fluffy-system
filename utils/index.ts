// This function takes an array of class names and filters out any that are falsy.
// It then joins the remaining class names with a space and returns the result.
// This is useful for conditionally applying classes to an element.

import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";

// Utility function to join class names conditionally
export const cx = (...classNames: (string | undefined | null | false)[]) =>
  classNames.filter(Boolean).join(" ");

// Sort posts by published date in descending order
export const sortPosts = (posts: Post[]): Post[] => {
  return posts
    .slice()
    .sort((a: Post, b: Post) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
