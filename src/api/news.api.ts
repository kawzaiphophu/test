import { AxiosResponse } from 'axios';
import { INews } from '../types/news.type';
import { MainApi } from './index.api';

const path = `news`;
const api = MainApi

export default class NewsApi {

  static create(news: INews): Promise<number> {
    console.log(news);

    return api.post(`${path}`, news).then((res: AxiosResponse) => res.status)
  }

  static findAll(params?: any): Promise<{ data: INews[]; }> {
    return api.get(`${path}`, { params: { ...params } });
  }

  static findOne(id: number): Promise<{ data: INews }> {
    return api.get(`${path}/${id}`);
  }

  static update(id: number, payload: INews): Promise<number> {
    return api.patch(`${path}/${id}`, payload).then(({ status }: AxiosResponse) => status)
  }

  static remove(id: number): Promise<number> {
    return api.delete(`${path}/${id}`).then(({ status }: AxiosResponse) => status)
  }

}
