import Link from "next/link";
import { Post }  from "@types";

export function PostItem({post}: {post: Post}) {
  return (
    <div className="bg-blue-100 p-4 shadow-lg m-8">
      <div className="text-xl font-bold mb-2">Post title: {post.title}</div>
      <Link href={`/posts/${post.id}`} prefetch={false} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read more</Link>
    </div>
  );
}
