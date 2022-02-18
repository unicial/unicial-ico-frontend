import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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

          {/* Global site tag (gtag.js) - Google Ads: 10854850139 */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-10854850139"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10854850139');
          `,
            }}
          />

          {/* Event snippet for Sign-up (1) conversion page */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-10854850139/GREgCJ-0vaIDENu8_7co',
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
