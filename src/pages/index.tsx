import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center gap-4">
      <Link
        className="w-20 border-green-500 border-2 py-2 px-4 rounded-xl flex justify-center items-center hover:opacity-50"
        href="/ssg"
      >
        SSG
      </Link>
      <Link
        className="w-20 border-green-500 border-2 py-2 px-4 rounded-xl flex justify-center items-center hover:opacity-50"
        href="/ssr"
      >
        SSR
      </Link>
    </main>
  );
}
