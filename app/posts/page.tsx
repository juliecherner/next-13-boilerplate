import { PostItem } from "@components/post";
import { Post }  from "@types";

async function fetchPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: "no-store",
  });

  if (!res) throw new Error("Problem with posts");

  return await res.json();
}

export default async function PostsPage() {
  const posts = await fetchPosts();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="text-2xl font-bold my-2">All nice posts</div>
      <div>
        {posts.map((post: any) => (
          <PostItem key={post.id} post={post}/>
        ))}
      </div>
    </div>
  );
}
