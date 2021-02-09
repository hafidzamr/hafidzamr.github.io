import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import { getAllFilesFrontMatter } from '../utils/mdx';

const BlogList = ({ posts }) => {
  return (
    <Layout>
      <div className='flex flex-col mx-auto max-w-3xl w-full mt-14 border-b'>
        <h1 className='font-bold text-4xl inline-block'>Blog</h1>

        {posts.length ? (
          posts.map(post => (
            <BlogPost
              title={post.title}
              summary={post.spoiler}
              slug={post.slug}
              date={post.date}
              key={post.title}
            />
          ))
        ) : (
          <h4 className='text-sm md:text-lg font-medium mb-2 w-full text-gray-900'>
            Tidak Ada Post
          </h4>
        )}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}

export default BlogList;
