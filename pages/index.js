import Layout from '../components/Layout';
import Image from 'next/image';

import GithubIcon from '../assets/icon/github-logo.png';
import InstagramIcon from '../assets/icon/instagram-logo.png';
import LinkedinIcon from '../assets/icon/linkedin-logo.png';
import CVIcon from '../assets/icon/cv-logo.png';

const Home = () => {
  return (
    <Layout>
      <div className='mt-8 lg:mt-30'>
        <div className='introduction w-full lg:w-6/12'>
          <h1 className='text-base md:text-2xl font-bold text-center lg:text-left'>
            Hi there 👋, I'm Hafidz
          </h1>
          <p className='pt-6  text-center text-xs md:text-base lg:text-justify'>
            Im Software Engineer,
          </p>
        </div>

        <div className='about mt-20 text-center mx-auto  lg:w-6/12 '>
          <h1 className='text-base md:text-2xl font-bold'>About Me</h1>
          <p className='pt-6 text-center lg:text-justify text-xs md:text-base'>
            Im Software Engineer - Frontend 🚀 from Indonesia. Always working on
            some project or learning something new! Stacks I have worked with :
            React, Vue(NuxtJS)
          </p>
        </div>

        <div className='about mt-20 text-right ml-auto w-full lg:w-6/12 '>
          <h1 className='text-base md:text-2xl text-center lg:text-right font-bold'>
            Contact Me
          </h1>

          <div className='icon pt-5 flex justify-center lg:justify-end'>
            <div className='px-1'>
              <a
                href='https://github.com/hafidzamr'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={GithubIcon}
                  width={33}
                  height={33}
                  alt='github icon'
                />
              </a>
            </div>
            <div className='px-1'>
              <a
                href='https://www.linkedin.com/in/hafidzamr/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={LinkedinIcon}
                  width={36}
                  height={36}
                  alt='linkedin icon'
                />
              </a>
            </div>
            <div className='px-1'>
              <a
                href='https://www.instagram.com/hafidzamr_/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={InstagramIcon}
                  width={35}
                  height={35}
                  alt='instagram icon'
                />
              </a>
            </div>
            <div className='px-1'>
              <a
                href='https://drive.google.com/file/d/1bMlJ71CPDa44Z90Qcf8B49f1yB7_7Jb_/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={CVIcon} width={35} height={35} alt='cv icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
