import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '../../utils/mdx';
import BlogLayout from '../../components/Layout/Blog';
import MDXComponents from '../../components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles();

  const paths = posts.map(post => ({
    params: {
      slug: post.replace(/\.mdx/, '')
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('', params.slug);

  return { props: post };
}
