import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col   items-center justify-center  gap-4">
        <h1 className="text-bold text-xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-500 tracking-tighter">
          🌱 Jonathan&apos;s Garden 🌱
        </h1>
        <div className="flex flex-col gap-2">
          <p>
            I am a product engineer with a keen interest in learning,
            decentralization, and tools for thought. I enjoy working across the
            entire spectrum of product development, from UX design to
            implementation. Recently, I have been exploring decentralization and
            web3 and have had the privilege of working on several amazing
            projects.
          </p>
          <p>
            For several years, I worked in the non-profit edtech space, building
            products for educators and learners. During this time, I discovered
            a passion for creating accessible apps that promote collaboration
            and provide access to resources.
          </p>
          <p>
            I value working openly and prefer to work in open source whenever
            possible.
          </p>
        </div>
        <ul className="flex flex-row items-center justify-center  gap-4">
          <li>
            <a
              href="https://github.com/jonathanprozzi"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Link to Jonathan Prozzi on GitHub"
            >
              <Github className={'transition-all hover:text-teal-300'} />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/jonathanprozzi"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Link to Jonathan Prozzi on Twitter"
            >
              <Twitter className={'transition-all hover:text-teal-300'} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jonathanprozzi"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Link to Jonathan Prozzi on LinkedIn"
            >
              <Linkedin className={'transition-all hover:text-teal-300'} />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
