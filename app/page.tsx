import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import { allPosts } from "contentlayer/generated";
export default function Home() {
  console.log(allPosts);
  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection posts={allPosts} />
      <FeaturedPosts posts={allPosts} />
    </main>
  );
}
