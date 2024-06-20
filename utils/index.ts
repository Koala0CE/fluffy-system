// This function takes an array of class names and filters out any that are falsy.
// It then joins the remaining class names with a space and returns the result.
// This is useful for conditionally applying classes to an element.

export const cx = (...classNames: (string | undefined | null | false)[]) =>
  classNames.filter(Boolean).join(" ");
