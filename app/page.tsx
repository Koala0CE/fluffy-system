import FeaturedPosts from "@/components/Home/FeaturedPosts";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPosts from "@/components/Home/RecentPosts";
import { allPosts } from "contentlayer/generated";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <HomeCoverSection posts={allPosts} />
      <FeaturedPosts posts={allPosts} />
      <RecentPosts posts={allPosts} />
    </main>
  );
}
