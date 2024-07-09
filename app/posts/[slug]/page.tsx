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
  if (post.image) {
    imageList =
      typeof post.image.filePath === "string"
        ? [siteMetaData.siteUrl + post.image.filePath.replace("../public", "")]
        : [post.image.filePath];
  }

  const ogImages = imageList.map((image) => ({
    return: {
      url: image.includes("http") ? image : siteMetaData.siteUrl + image,
    },
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

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-black">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            className="px-6 text-sm py-2"
            name={post.tags[0]}
            link={`/categories/${slug(post.tags[0])}`}
          />

          <h1 className="inline-block mt-5 font-semibold captitalize text-white text-5xl leading-normal relative w-5/6"></h1>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-black/60" />
        <Image
          src={post.image.filePath.replace("../public", "")}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          // placeholder="blur"
          //  blurDataURL={post.image.blurhasDataUrl}
          className="aspect-square w-full h-full object-cover object-center"
        />
      </div>
      <PostDetails post={post} slug={params.slug} />

      <div className="grid grid-cols-12 gap-5 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-[1px] border-solid border-black text-black rounded-lg p-4 sticky top-6 max-h[80vh] overflow-hidden overlfow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor=pointer">
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
                    
                    data-[level=three]:pl-6 flex items-center justify-start"
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
  );
}
