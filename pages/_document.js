import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Zilionixx ICO Landing</title>
          <meta
            name="description"
            content="Next generation blockchain, Zilionixx"
          />
          <link rel="icon" href="/favicon_.ico" />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            id="ct-google-fonts-css"
            href="//fonts.googleapis.com/css?family=Montserrat%3A500%2Cregular%2C300%2C700%2C200%7COpen+Sans%3A300%2C700&#038;subset=latin%2Clatin-ext%2Cvietnamese%2Ccyrillic-ext%2Ccyrillic%2Cgreek%2Cgreek-ext&#038;ver=4.9.8"
            type="text/css"
            media="all"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-217885142-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-217885142-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
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
