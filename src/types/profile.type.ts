import { IAddress } from "./address.type";


export interface IProfile {
    accountID: number;
    email: string;
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
    phone: string;
    gender: string;
    lastToken: string;
    addresses: IAddress[];
}