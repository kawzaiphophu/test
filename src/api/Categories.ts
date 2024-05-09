// import { AxiosResponse, AxiosError } from 'axios';
// import CategoriesType from '../types/CategoriesType'
// import { MainApi } from './MainApi';

// const path = `categories`;
// const api = MainApi

// export default class Categories {

//     static create(news: CategoriesType): Promise<number> {
//         return api.post(`${path}`, news).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
//     }

//     static findAll(params?: any): Promise<{ data: CategoriesType[]; }> {
//         return api.get(`${path}`, { params: { ...params } });
//     }

//     static findOne(id: number): Promise<{ data: CategoriesType }> {
//         return api.get(`${path}/${id}`);
//     }

//     static update(id: number, payload: CategoriesType): Promise<number> {
//         return api.patch(`${path}/${id}`, payload).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
//     }

//     static remove(id: number): Promise<number> {
//         return api.delete(`${path}/${id}`).then((res: AxiosResponse) => res.status).catch((error: AxiosError) => { throw error });
//     }

// }
