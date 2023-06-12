"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <p>
            <Link href={"/general"}>일반 상식</Link>
          </p>
          <p>
            <Link href={"/films"}>영화</Link>
          </p>
          <p>
            <Link href={"/music"}>음악</Link>
          </p>
          <p>
            <Link href={"/sports"}>스포츠</Link>
          </p>
          <p>
            <Link href={"/science"}>과학</Link>
          </p>
          <p>
            <Link href={"/history"}>역사</Link>
          </p>
          <p>
            <Link href={"/geography"}>지리</Link>
          </p>
          <p>
            <Link href={"/literature"}>문학</Link>
          </p>
          <p>
            <Link href={"/popculture"}>대중문화</Link>
          </p>
          <p>
            <Link href={"/foodndrink"}>식음료</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
