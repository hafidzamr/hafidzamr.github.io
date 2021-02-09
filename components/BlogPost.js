import Link from 'next/link';
import { format } from 'date-fns';

const BlogPost = ({ title, summary, slug, date }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='w-full' rel='noopener noreferrer'>
        <div className='mb-4 md:mb-5 w-full'>
          <div className='flex md:flex justify-between'>
            <h4 className='text-sm md:text-lg font-medium mb-2 w-full text-gray-900'>
              {title}
            </h4>
            <h4 className='text-sm md:text-lg font-medium text-right mb-2 w-full text-gray-400'>
              {format(new Date(date), 'dd / MMMM / yyyy')}
            </h4>
          </div>
          <p className='text-gray-400 text-sm md:text-base my-1'>{summary}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
