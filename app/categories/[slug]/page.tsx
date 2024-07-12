// Importing allPosts data from the contentlayer generated file
import Categories from "@/components/Post/Categories";
import PostLayoutThree from "@/components/Post/PostLayoutThree";
import { siteMetaData } from "@/utils/siteMetaData";
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Category: ${params.slug.replaceAll("-", " ")} | ${
      siteMetaData.title
    }`,
    description: `Discover more about ${
      params.slug === "all" ? "web development" : params.slug
    }!`,
  };
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
    <article className="mt-12 flex flex-col text-black dark:text-white">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!{" "}
        </span>
      </div>
      <Categories categories={allCategories} active={params.slug} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
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
