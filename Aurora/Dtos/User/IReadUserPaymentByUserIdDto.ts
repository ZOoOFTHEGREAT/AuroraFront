export interface IReadUserPaymentByUserIdDto {
  id: number;
  paymentType: string;
  provider: string;
  accountNumber: string | null;
  expireDate: string;
  userId: string;
}
