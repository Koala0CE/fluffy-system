import Tag from "@/components/Elements/Tag";
import PostDetails from "@/components/Post/PostDetails";
import RenderMdx from "@/components/Post/RenderMdx";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";

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
            link={`/categories/${post.tags[0]}`}
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

      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4 ">Toc</div>
        <RenderMdx post={post} />
      </div>
    </article>
  );
}
