// Importing allPosts data from the contentlayer generated file
import Categories from "@/components/Post/Categories";
import PostLayoutThree from "@/components/Post/PostLayoutThree";
import { allPosts } from "contentlayer/generated";

import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths = [{ slug: "all" }];

  allPosts.forEach((post) => {
    if (post.isPublished) {
      post.tags.forEach((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

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
  return (
    <article className="mt-12 flex flex-col text-black">
      <div className="px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!{" "}
        </span>
      </div>
      <Categories categories={allCategories} active={params.slug} />
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {posts.map((post, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <PostLayoutThree post={post} />
          </article>
        ))}
      </div>
    </article>
  );
};
// Exporting CategoryPage as the default export
export default CategoryPage;
