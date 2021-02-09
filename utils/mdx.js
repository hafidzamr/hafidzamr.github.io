import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';
import MDXComponents from '../components/MDXComponents';

const root = process.cwd();

export async function getFiles(type) {
  return type
    ? fs.readdirSync(path.join(root, '_post', type))
    : fs.readdirSync(path.join(root, '_post'));
}

export async function getFileBySlug(type, slug) {
  const source = type
    ? fs.readFileSync(path.join(root, '_post', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, '_post', `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug || null,
      readingTime: readingTime(content),
      ...data
    }
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = type
    ? fs.readdirSync(path.join(root, '_post', type))
    : fs.readdirSync(path.join(root, '_post'));

  return files.reduce((allPosts, postSlug) => {
    const source = type
      ? fs.readFileSync(path.join(root, '_post', type, postSlug), 'utf8')
      : fs.readFileSync(path.join(root, '_post', postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
}
