import '../styles/global.css';
import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '../components/MDXComponents';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
