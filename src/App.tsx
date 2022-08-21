// base
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// library
import { ConfigProvider } from 'antd';
import ko_KR from 'antd/es/locale/ko_KR';

// modules
import { StoreState } from 'modules';

// components
import { DotLoader, NotFoundResult } from 'components';

// routes
import { routes } from 'routes';
import { RestrictedRoute } from 'routes/RestrictedRoute';

const StyledApp = styled.div`
  overflow: hidden;
`;

const App = () => {
  const { pageLoading } = useSelector((state: StoreState) => state.ui);

  return (
    <ConfigProvider locale={ko_KR}>
      <StyledApp id='app' className='App'>
        {pageLoading && <DotLoader />}
        <Suspense fallback={<DotLoader />}>
          <Switch>
            {routes.public.map((item, idx) => (
              <RestrictedRoute
                key={idx}
                path={item.path}
                fallback={NotFoundResult}
                component={item.component}
                exact
              />
            ))}
            <Route path='*' component={NotFoundResult} />
          </Switch>
        </Suspense>
      </StyledApp>
    </ConfigProvider>
  );
};

export default App;
