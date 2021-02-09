import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='my-0 px-8 h-14 flex justify-between items-center'>
      <Link href='/'>
        <a
          className='text-black hover:text-black visited:text-black'
          rel='noopener noreferrer'
        >
          <div className='font-bold text-xl'>Hafidz Amrulloh</div>
        </a>
      </Link>

      <Link href='/blog'>
        <a
          className='text-black hover:text-black visited:text-black'
          rel='noopener noreferrer'
        >
          <div className='font-bold text-xl'>Blog</div>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
