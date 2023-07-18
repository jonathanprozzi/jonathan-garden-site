import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace(/writing\/?/, ''),
  }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);

  if (!post) throw new Error(`Post not found for slug ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slugAsParams === params.slug);
  if (!post) throw new Error(`Post not found for slug ${params.slug}`);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="max-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold">{post.title}</h1>
      </div>
      <MDXContent />
    </section>
  );
};

export default PostLayout;
