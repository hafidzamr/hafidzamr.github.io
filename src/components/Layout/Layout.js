import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hafidz Amrulloh</title>
      </Head>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='mt-8 mx-12 flex-grow'>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
