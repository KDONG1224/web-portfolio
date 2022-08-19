import { BROWSER_LINK_LIST } from 'libs';
import AxiosInstanceCreator from 'services/api';
import { LoopbackFilter } from 'services/loopback';
import { ResponsePage, TextCertificationInfo } from '../models/page.model';

const token =
  'VOv8HclMWFwaLy3sWpHF510np4Pr7NJhh9IuFBzyyCC5ghcP7JD6FBhTRaQiHPFs';

const pageInstance = new AxiosInstanceCreator({
  baseURL: process.env.REACT_APP_AUTH_API_URL + '/api/v1'
}).create();

pageInstance.interceptors.request.use(config => {
  if (!config.headers['X-Access-token']) {
    if (token) {
      Object.assign(config.headers, {
        Accept: 'application/json',
        'X-Access-token': token
      });
    }
  }

  return config;
});

export const pageAPI = {
  getPageData: () =>
    pageInstance.get<ResponsePage>('/users/profile').then(res => res.data),
  getBrandData: (filter: LoopbackFilter) =>
    pageInstance
      .get(`/users`, {
        params: { filter: filter ? filter : { order: 'created DESC' } }
      })
      .then(res => res.data),
  getAppVersion: () => pageInstance.get('/appUpdates').then(res => res.data),
  getServerCheck: () =>
    pageInstance.get('/appUpdates/inspection').then(res => res.data),
  getTextCertification: (data: { phone: string }) =>
    pageInstance.post('/users/cert/req', data).then(res => res.data),
  checkTextCertification: (data: TextCertificationInfo) =>
    pageInstance
      .post('/users/cert/res', data)
      .then(res => res.data)
      .catch(error => error.response),
  getLinkList: () =>
    pageInstance
      .get('/appUpdates', {
        params: { filter: { where: { aid: BROWSER_LINK_LIST } } }
      })
      .then(res => res.data)
      .catch(err => err)
};
