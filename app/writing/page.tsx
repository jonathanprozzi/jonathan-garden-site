export default function Projects() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col  items-center justify-center gap-4">
        <h1 className="text-bold text-xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-500">
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
      </div>
    </main>
  );
}
