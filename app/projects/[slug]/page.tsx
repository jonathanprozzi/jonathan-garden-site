import { allProjects } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export const generateStaticParams = async () =>
  allProjects.map((project) => ({
    slug: project._raw.flattenedPath.replace(/projects\/?/, ''),
  }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project.slugAsParams === params.slug
  );

  if (!project)
    throw new Error(`Project not found for slug ${params.slug} path 1`);
  return { title: project.title };
};

const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project.slugAsParams === params.slug
  );

  if (!project)
    throw new Error(`Project not found for slug ${params.slug}) path 2`);

  const MDXContent = useMDXComponent(project.body.code);

  return (
    <section className="max-auto max-w-xl py-8">
      <div className="mb-8 ">
        <h1 className="text-2xl font-bold">{project.title}</h1>
      </div>
      <MDXContent />
    </section>
  );
};

export default ProjectLayout;

//all projects [ { slug: 'projects/testproject' } ]
// params slug projects%2Ftestproject
