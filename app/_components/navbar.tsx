import Link from "next/link";

export function Navbar() {
  return (
    <div className="bg-blue-500 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>See all posts</Link>
      </nav>
    </div>
  );
}
