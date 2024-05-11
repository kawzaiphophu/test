import { IProduct } from "./product.type";
export interface ICart {
    cartID: number;
    postID: number;
    title: string;
    description: string;
    recommandPrice: string;
    startDate: Date;
    endDate: Date;
    qtyLimit: number;
    tags: string;
    createdAt: Date;
    minimum: number;
    maximum: number;
    price: number;
    products: IProduct[];
}