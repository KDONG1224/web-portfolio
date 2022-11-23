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

  getAllReference() {
    return this.Axios.get(`/all`).then((res) => res.data);
  }

  createReference(data: any) {
    return this.Axios.post(`/create`, data).then((res) => res.data);
  }

  getReferenceLists(type: string) {
    return this.Axios.get<any>(`/${type}`).then((res) => res.data);
  }

  getReferenceById(id: string) {
    return this.Axios.get<any>(`/${id}`).then((res) => res.data);
  }
  // http://localhost:4444/algorithm/all
  getAlgorithm() {
    return this.Axios.get<any>('/algorithm/all').then((res) => {
      console.log('res.data : ', res.data);
      return res.data;
    });
  }

  updateReference(id: string, formData: FormData) {
    return this.Axios.post<any>(`/create/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }
}
