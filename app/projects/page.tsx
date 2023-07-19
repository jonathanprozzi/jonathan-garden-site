import Link from 'next/link';
import { allProjects, Project } from 'contentlayer/generated';

const ProjectCard = ({
  name,
  dateRange,
  description,
  role,
  slug,
}: Pick<Project, 'name' | 'dateRange' | 'description' | 'role' | 'slug'>) => (
  <div className="flex flex-col gap-1 mb-2">
    <h2 className="text-xl">
      <Link
        href={slug}
        className="transition-all text-slate-200 hover:text-teal-300 flex align-middle"
      >
        {name}
      </Link>
    </h2>
    <div className="flex flex-row gap-1 text-slate-300 text-light text-sm">
      <span>{dateRange}</span>
      {role ? <span>&bull; {role}</span> : null}
    </div>
    <p className="text-slate-200  text-base">{description}</p>
    <Link
      href={slug}
      className="transition-all text-slate-200 hover:text-teal-300 text-base flex align-middle"
    >
      Read More
    </Link>
  </div>
);

const sortedProjects = allProjects.sort((a, b) => {
  if (new Date(a.dateRange) > new Date(b.dateRange)) {
    return 1;
  }
  return -1;
});

export default function Projects() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-bold text-xl md:text-3xl text-transparent bg-clip-text  bg-gradient-to-r from-teal-300 to-indigo-500 w-fit">
          Featured Projects
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
        {sortedProjects.map((project, idx) => (
          <div key={idx}>
            <h2 className="mb-1 text-xl">
              <ProjectCard
                name={project.name}
                dateRange={project.dateRange}
                role={project.role}
                description={project.description}
                slug={project.slug}
              />
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
