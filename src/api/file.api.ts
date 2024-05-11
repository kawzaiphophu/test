import { MainApi } from "./index.api";
import { AxiosResponse, AxiosError } from 'axios';
const path = `upload`;
const api = MainApi;

export default class Files {
    static create(file: any, folder: string): Promise<AxiosResponse<any>> {
        const payLoad = new FormData();
        payLoad.append('file', file);
        payLoad.append('folder', folder);
        return api.post(path, payLoad)
            .then((res: AxiosResponse<any>) => res)
            .catch((error: AxiosError) => { throw error });
    }
}
