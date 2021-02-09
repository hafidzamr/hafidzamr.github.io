import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='id'>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='title' content='Meta Tags — Preview, Edit and Generate' />
          <meta name='description' content='About Hafidz Amrulloh' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://hafidzamr.github.io/' />
          <meta property='og:title' content='Hafidz Amrulloh' />
          <meta property='og:description' content='About Hafidz Amrulloh' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://hafidzamr.github.io/' />
          <meta property='twitter:title' content='About Hafidz Amrulloh' />
          <meta
            property='twitter:description'
            content='About Hafidz Amrulloh'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
