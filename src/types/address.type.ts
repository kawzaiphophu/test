export interface IAddress {
    id: string;
    accountId: string;
    addressType: string;
    isDefault: number;
    receiverName: string;
    phone: string;
    address: string;
    province: string;
    district: string;
    subDistrict: string;
    zipcode: string;
    createdAt: Date;
}
