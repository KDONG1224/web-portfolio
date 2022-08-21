// https://notion-api.splitbee.io/v1/page/
import AxiosInstanceCreator from 'services/api';

export const notionInstance = new AxiosInstanceCreator({
  // baseURL: process.env.REACT_APP_NOTION_API_URL
  baseURL: 'https://notion-api.splitbee.io/v1/page'
}).create();

export const notionApi = {
  getNotionPage: (id: string) => {
    return notionInstance.get(`/${id}`).then(res => {
      console.log('res.data : ', res.data);
      return res.data;
    });
  }
};
