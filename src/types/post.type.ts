export interface IPost {
    postId: number;
    cover: string;
    title: string;
    description: string;
    recommandPrice: number;
    startDate: Date;
    endDate: Date;
    qtyLimit: number;
    isNewArrival: number;
    isBestSeller: number;
    isHotPost: number;
    tags: string;
    price: number;
    qty: number;
    status: string;
}
export interface Post {
    postID: number;
    cover: string;
    title: string;
    description: string;
    description2: string;
    recommandPrice: number;
    startDate: Date;
    endDate: Date;
    qtyLimit: number;
    isNewArrival: number;
    isBestSeller: number;
    isHotPost: number;
    tags: string;
    shopID: number;
    status: string;
    updatedBy: string;
    createdBy: string;
    updatedAt: Date;
    createdAt: Date;
    contactLink: string;
    importFeeTotal: number;
    products: Product[];
    sellingPrice: SellingPrice[];
    costPrice: number;
}

export interface Product {
    postID: number;
    productID: number;
    productCode: string;
    productName: string;
    productConfig: string;
    description: string;
    categoryID: number;
    categoryName: string;
    sku: string;
}

export interface SellingPrice {
    id: number;
    minimum: number;
    maximum: number;
    price: number;
    costPrice: number;
}
