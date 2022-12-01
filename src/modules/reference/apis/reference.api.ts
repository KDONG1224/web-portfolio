import { AxiosInstance } from 'axios';
import { CreateReference } from 'modules';
import AxiosServerInstanceCreator from 'services/reqeust-server';
export class ReferApi {
  Axios: AxiosInstance;

  constructor() {
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: 'http://localhost:4444' + '/reference'
    }).create();
  }

  async getAllReference() {
    return await this.Axios.get(`/all`).then((res) => res.data);
  }

  async createReference(data: FormData) {
    return await this.Axios.post(`/create`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }

  async updateReference(id: string, data: FormData) {
    return await this.Axios.patch<any>(`/update/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }

  async getReferenceLists(type: string) {
    return await this.Axios.get<any>(`/${type}`).then((res) => res.data);
  }

  async getReferenceById(id: string) {
    return await this.Axios.get<any>(`/${id}`).then((res) => res.data);
  }

  async getAlgorithm() {
    return await this.Axios.get<any>('/algorithm/all').then((res) => {
      console.log('res.data : ', res.data);
      return res.data;
    });
  }

  // updateReference(id: string, formData: FormData) {
  //   return this.Axios.post<any>(`/create/${id}`, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   }).then((res) => res.data);
  // }
}
