import { AxiosInstance } from 'axios';
import AxiosServerInstanceCreator from 'services/reqeust-server';
export class AlgorithmApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL + '/algorithm'
    }).create();

    this.AxiosClient = new AxiosServerInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/algorithm'
    }).create();
  }

  // client
  async getAllAlgorithmClient() {
    return await this.AxiosClient.get(`/all`).then((res) => res.data);
  }

  async createAlgorithm(data: FormData) {
    return await this.AxiosClient.post(`/create`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }

  // server
  async getAllAlgorithm() {
    return await this.Axios.get(`/all`).then((res) => res.data);
  }

  async updateAlgorithm(id: string, data: FormData) {
    return await this.AxiosClient.patch<any>(`/update/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }

  async getAlgorithmLists(filter: any) {
    return await this.Axios.get<any>(`/${JSON.stringify(filter)}`).then(
      (res) => res.data
    );
  }

  async getAlgorithmById(id: string) {
    return await this.Axios.get<any>(`/${id}`).then((res) => res.data);
  }
}
