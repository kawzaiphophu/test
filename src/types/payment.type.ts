export interface IPayment {
    walletID: number;
    accountID: number;
    accountName: string;
    amount: number;
    paymentType: string;
    slip: string;
    refKey: string;
    slipDateTime: Date;
    slipNote: string;
    status: string;
    approvedBy: string;
    approvedAt: Date;
    rejectedBy: string;
    rejectedAt: Date;
    createdAt: string;
}
