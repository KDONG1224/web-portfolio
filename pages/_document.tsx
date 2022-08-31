/* eslint-disable @next/next/no-sync-scripts */
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            <meta charSet="utf-8" />
            <meta name="author" content="imform" />
            <meta name="copyright" content="imform" />
            <meta property="og:locale" content="ko_KR" />
            <meta name="robots" content="all" />
            <meta name="Googlebot" content="index, follow" />
            <meta name="title" content="세이브온" />
            <meta name="description" content="온라인 쇼핑몰 - 세이브온" />
            <meta
              name="keywords"
              content="세이브존, 세이브온, 온라인 쇼핑몰, 쇼핑몰"
            />
            <meta name="og:site_name" content="온라인 쇼핑몰 - 세이브온" />
            <meta name="og:title" content="세이브온" />
            <meta name="og:description" content="온라인 쇼핑몰 - 세이브온" />
            <meta name="og:type" content="website" />
            <meta name="og:url" content={`${process.env.NEXT_PUBLIC_URL}`} />
            <meta
              name="og:image"
              content="https://assets.ifdev.cc/upload/thumbnail/FtG2V5HssFZlfijnRiQdz5eL.png"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="세이브온" />
            <meta
              name="twitter:description"
              content="온라인 쇼핑몰 - 세이브온"
            />
            <meta
              name="twitter:image"
              content="https://assets.ifdev.cc/upload/thumbnail/FtG2V5HssFZlfijnRiQdz5eL.png"
            />

            {/* 추후 적용 */}
            {/* <meta name="google-site-verification" content="" />
            <meta name="Naverbot" content="noindex, nofollow, noarchive" />
            <meta name="Yeti" content="noindex, nofollow, noarchive" />
            <meta name="Daumoa" content="noindex, nofollow, noarchive" />
            <meta name="Zumbot" content="noindex, nofollow, noarchive" />
            <meta name="Bingbot" content="noindex, nofollow, noarchive" />
            <meta name="Yandex" content="noindex, nofollow, noarchive" />
            <meta name="DuckDuckBot" content="noindex, nofollow, noarchive" />
            <meta name="Baiduspider" content="noindex, nofollow, noarchive" />
            <meta name="Slurp" content="noindex, nofollow, noarchive" />
            <meta name="msnbot" content="noindex, nofollow, noarchive" /> */}
            {/* 페이지별 head로 정의 */}
            {/* <meta name="title" content="오아시스" />
            <meta name="description" content="oasis" />
            <meta name="keywords" content="oasis" />
            <meta name="og:site_name" content="" />
            <meta name="og:title" content="" />
            <meta name="og:description" content="" />
            <meta name="og:type" content="" />
            <meta name="og:url" content="" />
            <meta name="og:image" content="" />
            <meta name="twitter:card" content="" />
            <meta name="twitter:title" content="" />
            <meta name="twitter:description" content="" />
            <meta name="twitter:image" content="" />
            <meta name="twitter:domain" content="" />
            <meta name="twitter:site" content="@OfficialSpemer" />
            <meta name="twitter:creator" content="@OfficialSpemer" />
            <meta name="canonical" content="" /> */}

            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      };
    } finally {
      sheet.seal();
    }
  }
}
