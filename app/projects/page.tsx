import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';

export default function Projects() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-bold text-xl md:text-3xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-300 to-indigo-500 w-fit">
          Projects
        </h1>
        <div className="flex flex-col gap-2">
          <p>
            I have been fortunate to work on a variety of projects through the
            years. Currently, I am most interested in projects relating to
            decentralization, knowledge sharing, and democratizing access to
            information.
          </p>
          <p>
            I am in the process of updating this with current and previous
            projects. My goal is to include case studies for featured projects.
          </p>
        </div>
        {allProjects.map((project, idx) => (
          <div key={idx}>
            <h2 className="mb-1 text-xl">
              <Link
                href={project.slug}
                className="transition-all text-slate-200 hover:text-teal-300 flex align-middle"
              >
                {project.title}
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
