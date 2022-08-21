import AxiosInstanceCreator from 'services/api';
import { ReferenceProps } from '..';

export const referenceInstance = new AxiosInstanceCreator({
  baseURL: process.env.REACT_APP_REFERNCE_API_URL
}).create();

// referenceInstance.interceptors.request.use(config => {
//   if (!config.headers['X-Access-token']) {
//     const token = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

//     if (token) {
//       Object.assign(config.headers, {
//         Accept: 'application/json',
//         'X-Access-token': token,
//       });
//     }
//   }

//   return config;
// });

// https://kdong1224.github.io/react999/src/assets/json/refer.json

export const referenceApi = {
  getHtmlRefer: () => {
    return referenceInstance
      .get<ReferenceProps>('/refer.json')
      .then(res => res.data.data.htmlRefer);
  },
  getCssRefer: () => {
    return referenceInstance
      .get<ReferenceProps>('/cssRefer.json')
      .then(res => res.data.data.cssRefer);
  },
  getJavascriptRefer: () => {
    return referenceInstance
      .get<ReferenceProps>('/javascriptRefer.json')
      .then(res => res.data.data.javascriptRefer);
  }
};
