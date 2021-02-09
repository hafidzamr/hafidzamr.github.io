import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='my-0 px-8 h-14 flex justify-between items-center'>
      <Link href='/'>
        <a
          className=' hover:text-black visited:text-black'
          rel='noopener noreferrer'
        >
          <div className='font-bold text-xl text-black'>Hafidz Amrulloh</div>
        </a>
      </Link>

      <Link href='/blog'>
        <a
          className=' hover:text-black visited:text-black'
          rel='noopener noreferrer'
        >
          <div className='font-bold text-xl text-black'>Blog</div>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
