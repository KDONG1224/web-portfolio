import { AxiosInstance } from 'axios';
import AxiosServerInstanceCreator from 'services/reqeust-server';
export class ReferApi {
  Axios: AxiosInstance;

  constructor() {
    this.Axios = new AxiosServerInstanceCreator({
      baseURL: process.env.NEXT_PUBLIC_KDONG_API_URL + 'reference',
      headers: {
        // 'X-access-token': accessToken,
        // icToken: icToken
      }
    }).create();
  }

  getReferenceLists() {
    return this.Axios.get<any>('').then((res) => res.data);
  }

  getReferenceById(id: string) {
    return this.Axios.get<any>(`/${id}`).then((res) => res.data);
  }

  updateReference(id: string, formData: FormData) {
    return this.Axios.post<any>(`/create/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => res.data);
  }
}
