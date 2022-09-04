// base
import { Router, useRouter } from 'next/router';
import Head from 'next/head';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { NextComponentType } from 'next';

// libraries
import NProgress from 'nprogress';

// store
import wrapper from 'modules/store';

// next-auth
import { SessionProvider } from 'next-auth/react';

// style
import '../assets/less/index.less';
import 'nprogress/nprogress.css';
import 'swiper/css';
import 'swiper/less/pagination';
import 'antd-mobile/bundle/css-vars-patch.css';

export interface InitialProps {}

NProgress.configure({
  template: `<div class="bar" role="bar">
  <div class="peg"></div>
</div>
<div class="spinner" role="spinner">
  <div id="container">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
      </filter>
    </defs>
  </svg>
</div>`
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps: { ...pageProps }
}) => {
  // const router = useRouter();
  // useEffect(() => storePathValues, [router.asPath]);

  // const storage = globalThis?.sessionStorage;
  
  // const storePathValues = () => {
  //   if (!storage) return;
  //   // Set the previous path as the value of the current path.
  //   const prevPath = storage.getItem('currentPath');
  //   storage.setItem('prevPath', prevPath ?? '');
  //   // Set the current path value by looking at the browser's location object.
  //   storage.setItem('currentPath', globalThis.location.pathname);
  // }

  return (
    <>
      {/* <SessionProvider session={session}> */}
      <Head>
        {/* <meta name="viewport" content="width=750,user-scalable=no" /> */}
      </Head>
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </>
  );
};

App.getInitialProps = wrapper.getInitialAppProps(
  (store: any) =>
    async ({ ctx }: any) => {
      let pageProps = {};

      try {
        pageProps = { ...pageProps };
        return {
          pageProps: JSON.parse(JSON.stringify(pageProps))
        };
      } catch (error) {
        pageProps = { ...pageProps };
        return {
          pageProps
        };
      }
    }
);

export default wrapper.withRedux(App);