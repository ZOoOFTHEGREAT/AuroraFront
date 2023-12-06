// export default interface AddPaymentDetailDto {
//     amount: number;
//     status: boolean;
//     orderId: number;
//     userPaymentId: number;
// }
export default interface ReadAllPaymentDetailsDto {
    id: number;
    amount: number;
    status: boolean;
    date: string;
    orderId: number;
    userPaymentId: number;
}
export default interface ReadPaymentDetailsByOrderIdDto {
    id: number;
    amount: number;
    status: boolean;
    date: string;
    userPaymentId: number;
}
export default interface ReadPaymentDetailsByUserPaymentDto {
    id: number;
    amount: number;
    status: boolean;
    date: string;
    orderId: number;
}
// export default interface ReadPaymentDetailsDto {
//     amount: number;
//     status: boolean;
//     date: string;
//     orderId: number;
//     userPaymentId: number;
// }

