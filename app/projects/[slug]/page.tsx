import { allProjects } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }));

console.log(
  'all projects',
  allProjects.map((project) => ({ slug: project._raw.flattenedPath }))
);

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  console.log('params', params);
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === `projects/${params.slug}`
  );
  if (!project) throw new Error(`Project not found for slug ${params.slug}`);
  return { title: project.title };
};

const ProjectLayout = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === `projects/${params.slug}`
  );
  if (!project) throw new Error(`Project not found for slug ${params.slug}`);

  const MDXContent = useMDXComponent(project.body.code);

  return (
    <section className="max-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">{project.title}</h1>
      </div>
      <MDXContent />
    </section>
  );
};

export default ProjectLayout;
