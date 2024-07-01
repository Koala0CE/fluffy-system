// Importing allPosts data from the contentlayer generated file
import { allPosts } from "contentlayer/generated";
// Importing the slug function from github-slugger to convert strings to URL slugs
import { slug } from "github-slugger";

// CategoryPage component definition accepting params as props
const CategoryPage = ({ params }: any) => {
  // Initializing an array with a default category 'all'
  const allCategories = ["all"];
  // Filtering posts based on the category slug provided in params
  const posts = allPosts.filter((post) => {
    // Checking if any of the post's tags match the category slug
    return post.tags.some((tag) => {
      // Converting the tag to a slug format
      const slugified = slug(tag);
      // If the slugified tag is not already in allCategories, add it
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      // If the requested category is 'all', return true to include all posts
      if (params.slug === "all") {
        return true;
      }
      // Otherwise, only include posts that match the category slug
      return slugified === params.slug;
    });
  });
  // Rendering the category name and the filtered list of posts
  return <div>Category Name {params.slug}</div>;
};
// Exporting CategoryPage as the default export
export default CategoryPage;
