import * as paths from './const';
import * as pages from 'pages';
export * as paths from './const';

interface Routes {
  public: RoutesOption[];
  private?: RoutesOption[];
}

interface RoutesOption {
  path: string;
  component: React.FunctionComponent;
}

export const routes: Routes = {
  public: [
    {
      path: paths.ROUTE_ROOT,
      component: pages.LazyHomePage
    },
    {
      path: paths.ROUTE_ABOUT,
      component: pages.LazyHomePage
    },
    {
      path: paths.ROUTE_ABOUT_INFO,
      component: pages.LazyHomePage
    },
    {
      path: paths.ROUTE_HTML,
      component: pages.LazyHtmlPage
    },
    {
      path: paths.ROUTE_HTML_INFO,
      component: pages.LazyHtmlPage
    },
    {
      path: paths.ROUTE_HTML_DETAIL,
      component: pages.LazyHtmlDetailPage
    },
    {
      path: paths.ROUTE_CSS,
      component: pages.LazyCssPage
    },
    {
      path: paths.ROUTE_CSS_INFO,
      component: pages.LazyCssPage
    },
    {
      path: paths.ROUTE_JS,
      component: pages.LazyJsPage
    },
    {
      path: paths.ROUTE_JS_INFO,
      component: pages.LazyJsPage
    },
    {
      path: paths.ROUTE_ALGORITHM,
      component: pages.LazyAlgorithmPage
    },
    {
      path: paths.ROUTE_ALGORITHM_INFO,
      component: pages.LazyAlgorithmPage
    },
    {
      path: paths.ROUTE_ALGORITHM_DETAIL,
      component: pages.LazyAlgorithmDetailPage
    },
    {
      path: paths.ROUTE_FIGMA,
      component: pages.LazyFigmaPage
    },
    {
      path: paths.ROUTE_FIGMA_INFO,
      component: pages.LazyFigmaPage
    },
    {
      path: paths.ROUTE_NOTION,
      component: pages.LazyNotionPage
    },
    {
      path: paths.ROUTE_NOTION_INFO,
      component: pages.LazyNotionPage
    },
    {
      path: paths.ROUTE_ALCHOL_CUP,
      component: pages.LazyAlcholCupPage
    },
    {
      path: paths.ROUTE_ALCHOL_CUP_INFO,
      component: pages.LazyAlcholCupPage
    },
    {
      path: paths.ROUTE_ALCHOL_CUP_DETAIL,
      component: pages.LazyAlcholCupDetailPage
    }
  ]
};
