import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export default function Writing() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-bold text-xl md:text-3xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-300 to-indigo-500 w-fit">
          Writing
        </h1>
        <div className="flex flex-col gap-2">
          <p>
            I am currently revising how I present and showcase my writing. The
            goal of this new iteration of my site is to create a digital garden
            and include a section for &quot;seeds,&quot; which are notes
            currently residing in Logseq.
          </p>
          <p>
            Additionally, I am figuring out the best way to integrate my
            previous writings. For now, you can access all of my blog posts from
            2016-2019 at{' '}
            <a
              href="https://jonathanprozzi.net/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-all text-teal-400 hover:text-teal-300"
            >
              https://jonathanprozzi.net/
            </a>
            . Much of the content is from when I co-hosted an{' '}
            <a
              href="https://indieweb.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-all text-teal-400 hover:text-teal-300"
            >
              IndieWeb
            </a>{' '}
            <a
              href="https://indieweb.org/Homebrew_Website_Club"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-all text-teal-400 hover:text-teal-300"
            >
              Homebrew Website Club.
            </a>
          </p>
        </div>
        {allPosts.map((post, idx) => (
          <div key={idx}>
            <h2 className="mb-1 text-xl">
              <Link
                href={post.slug}
                className="transition-all text-slate-200 hover:text-teal-300 flex align-middle"
              >
                {post.title}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
