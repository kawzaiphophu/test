import { AxiosResponse, AxiosError } from 'axios';
import Inews from '../types/news.type'
import { MainApi } from './MainApi';

const path = `news`;
const api = MainApi

export default class NewsApi {

  static create(news: Inews): Promise<number> {
    return api.post(`${path}`, news).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
  }

  static findAll(params?: any): Promise<{ data: Inews[]; }> {
    return api.get(`${path}`, { params: { ...params } });
  }

  static findOne(id: number): Promise<{ data: Inews }> {
    return api.get(`${path}/${id}`);
  }

  static update(id: number, payload: Inews): Promise<number> {
    return api.patch(`${path}/${id}`, payload).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
  }

  static remove(id: number): Promise<number> {
    return api.delete(`${path}/${id}`).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
  }

}
