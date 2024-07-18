import Tag from "@/components/Elements/Tag";
import PostDetails from "@/components/Post/PostDetails";
import RenderMdx from "@/components/Post/RenderMdx";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import GithubSlugger, { slug } from "github-slugger";
import { siteMetaData } from "@/utils/siteMetaData";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return;
  }

  const publishedAt = new Date(post.publishedAt).toISOString();
  const modifiedAt = new Date(post.updatedAt || post.publishedAt).toISOString();

  let imageList = [siteMetaData.socialBanner];
  if (post && post.image) {
    imageList =
      typeof post.image.filePath === "string"
        ? [siteMetaData.siteUrl + post.image.filePath.replace("../public", "")]
        : [post.image.filePath];
  }

  const ogImages = imageList.map((image) => ({
    url: image.includes("http") ? image : siteMetaData.siteUrl + image,
  }));

  const authors = post?.author ? [post.author] : [siteMetaData.author];

  return {
    title: post.title,
    description: post.description,

    openGraph: {
      title: post.title,
      description: post.description,
      url: siteMetaData.siteUrl + post.url,
      siteName: siteMetaData.title,
      images: ogImages,
      locale: "en_UK",
      article: {
        publishedTime: publishedAt,
        modifiedTime: modifiedAt,
        authors: authors.length > 0 ? authors : [siteMetaData.author],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: ogImages,
      },
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post || !post.tags || post.tags.length === 0) {
    return <div>Post or tags not found.</div>;
  }

  let imageList = [siteMetaData.socialBanner];
  if (post && post.image) {
    imageList =
      typeof post.image.filePath === "string"
        ? [siteMetaData.siteUrl + post.image.filePath.replace("../public", "")]
        : [post.image.filePath];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post?.title,
    description: post?.description,
    image: imageList,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
    author: {
      "@type": "Person",
      name: post?.author || siteMetaData.author,
      url: siteMetaData.siteUrl + post.url, // replace with profile URL of the author
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-black">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              className="px-6 text-sm py-2"
              name={post.tags[0]}
              link={`/categories/${slug(post.tags[0])}`}
            />

            <h1 className="inline-block mt-5 font-semibold capitalize text-white text-2xl md:text-3xl lg:text-5xl leading-normal relative w-5/6">
              {post.title}
            </h1>
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-black/60 dark:bg-black/40" />
          <Image
            src={post.image.filePath.replace("../public", "")}
            alt={post.title}
            width={post.image.width}
            height={post.image.height}
            placeholder="blur"
            blurDataURL={post.image.blurhashDataUrl}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <PostDetails post={post} slug={params.slug} />

        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="border-[1px] border-solid border-black dark:border-white text-black dark:text-white rounded-lg p-4 sticky top-6 max-h[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table of Contents
              </summary>
              <ul className="mt-4 font-inter text-base">
                {post.toc.map((heading: any) => (
                  <li className="py-1" key={heading.slug}>
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0
                      data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-black/40
                      data-[level=three]:pl-4
                      sm:data-[level=three]:pl-6 flex items-center justify-start"
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-black mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <RenderMdx post={post} />
        </div>
      </article>
    </>
  );
}
