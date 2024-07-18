import Categories from "@/components/Post/Categories";
import PostLayoutThree from "@/components/Post/PostLayoutThree";
import { siteMetaData } from "@/utils/siteMetaData";
import { allPosts } from "contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";

// Instantiate the slugger
const slugger = new GithubSlugger();

// Generate static paths for categories
export async function generateStaticParams() {
  const categories: string[] = [];
  const paths = [{ slug: "all" }];

  allPosts.forEach((post) => {
    if (post.isPublished) {
      post.tags.forEach((tag) => {
        const slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

// Generate metadata for each category page
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

// Type for CategoryPage props
interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// CategoryPage component definition
const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const allCategories = ["all"];
  const posts = allPosts.filter((post) => {
    return post.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      return params.slug === "all" || slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-black dark:text-white">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
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

export default CategoryPage;
