import Layout from '../Layout';
import { format } from 'date-fns';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Layout>
      <article className='flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full '>
        <h1 className='font-bold text-2xl md:text-4xl tracking-tight mb-1 text-black '>
          {frontMatter.title}
        </h1>

        <div>
          <p className='text-base mt-2 text-gray-400'>
            {format(new Date(frontMatter.date), 'dd / MMMM / yyyy')}{' '}
          </p>
        </div>

        <div className='prose max-w-none w-full text-justify mt-8'>
          {children}
        </div>
      </article>
    </Layout>
  );
}
