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
      path: paths.ROUTE_PAGES,
      component: pages.LazyHomePage
    }
  ]
  // private: [
  //   {
  //     path: paths.ROUTE_PAGES,
  //     component: pages.LazyHomePage
  //   }
  // ]
};
