import { AxiosResponse, AxiosError } from 'axios';
import { ICategories } from '../types/categories.type';
import { MainApi } from './index.api';

const path = `categories`;
const api = MainApi

export default class Categories {

    static create(news: ICategories): Promise<number> {
        return api.post(`${path}`, news).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
    }

    static findAll(params?: any): Promise<{ data: ICategories[]; }> {
        return api.get(`${path}`, { params: { ...params } });
    }

    static findOne(id: number): Promise<{ data: ICategories }> {
        return api.get(`${path}/${id}`);
    }

    static update(id: number, payload: ICategories): Promise<number> {
        return api.patch(`${path}/${id}`, payload).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
    }

    static remove(id: number): Promise<number> {
        return api.delete(`${path}/${id}`).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
    }

}
