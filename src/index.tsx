import 'react-app-polyfill/stable';

// base
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { SWRConfig } from 'swr';
import { AxiosStatic } from 'axios';

import App from './App';

// library
import 'moment/locale/ko';

// styles
import './index.less';
import './assets/less/fonts.less';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { createGlobalStyle } from 'styled-components';

// modules
import { history, sagaMiddleware } from 'modules/store';
import store from './modules/store';
import { saga } from 'modules';
import { BrowserRouter } from 'react-router-dom';

sagaMiddleware.run(saga);

const GlobalStyle = createGlobalStyle``;

const swrConfig = {
  fetcher<T>(url: string, axiosInstance: AxiosStatic) {
    return axiosInstance.get<T>(url).then(res => res.data);
  },
  revalidateOnFocus: false,
  dedupingInterval: 5000
};

ReactDOM.render(
  <Provider store={store}>
    <SWRConfig value={swrConfig}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ConnectedRouter>
    </SWRConfig>
  </Provider>,
  document.getElementById('root')
);
