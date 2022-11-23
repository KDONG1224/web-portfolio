import { AxiosInstance } from 'axios';
import AxiosInstanceCreator from 'services/reqeust-client';

export class ContentsApi {
  Axios: AxiosInstance;

  constructor() {
    this.Axios = new AxiosInstanceCreator({
      baseURL: 'http://localhost:4444' + '/contents'
    }).create();
  }

  getAllContents() {
    return this.Axios.get('/all').then((res) => res.data);
  }
}
