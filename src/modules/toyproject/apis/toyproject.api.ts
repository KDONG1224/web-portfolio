import { AxiosInstance } from 'axios';
import AxiosServerInstanceCreator from 'services/reqeust-server';

export class ToyApi {
  Axios: AxiosInstance;
  AxiosClient: AxiosInstance;

  constructor() {
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.KDONG_API_URL + '/toy-projects'
    }).create();

    this.AxiosClient = new AxiosServerInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + '/toy-projects'
    }).create();
  }

  // server
  async getAllToyProject() {
    return await this.Axios.get(`/all`).then((res) => res.data);
  }

  async getToyProject(id: string) {
    return await this.Axios.get(`/${id}`).then((res) => res.data);
  }

  // client
  async getAllToyProjectClient() {
    return await this.Axios.get(`/all`).then((res) => res.data);
  }
}
