async function fetchPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error();
  }
  return await res.json();
}

export default async function PostPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const postData = await fetchPost(id);
  return (
    <div className="flex flex-col items-center justify-between p-8 gap-4">
      <div className="bg-blue-100 rounded-lg px-8 py-4">1 post page</div>
      <div className="bg-blue-100 rounded-lg px-8 py-4">post id {postData.id}</div>
      <div className="bg-blue-100 rounded-lg px-8 py-4">user No {postData.userId} wrote the post</div>
      <div className="rounded-lg bg-gray-200 px-8 py-4">post title {postData.title}</div>
      <div className="rounded-lg bg-gray-200 px-8 py-4">post text {postData.body}</div>
    </div>
  );
}
