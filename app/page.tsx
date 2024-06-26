import HomeCoverSection from "@/components/Home/HomeCoverSection";
import { allPosts } from "contentlayer/generated";
export default function Home() {
  console.log(allPosts);
  return (
    <main className="flex flex-col items-center justify-center ">
      Hello World!
      <HomeCoverSection posts={allPosts} />
    </main>
  );
}
