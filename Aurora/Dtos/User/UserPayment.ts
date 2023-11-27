import ReadPaymentDetailsDto from '../Paymentdetails/Paymentdetails';

// export default interface AddUserPaymentDto {
//     paymentType: string;
//     provider: string;
//     accountNumber: string | null;
//     expireDate: string;
//     userId: string;
// }
// export default interface ReadUserPaymentByUserIdDto {
//   id: number;
//   paymentType: string;
//   provider: string;
//   accountNumber: string | null;
//   expireDate: string;
//   userId: string;
// }
export default interface ReadUserPaymentDetailDto {
  id: number;
  paymentType: string;
  provider: string;
  accountNumber: string | null;
  expireDate: string;
  userId: string;
  paymentDetails: ReadPaymentDetailsDto[];
}
