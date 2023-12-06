export default interface AddOrderDto {
  totalPrice: number;
  userId: string;
  shippingCompanyId: number | null;
  addressId: number | null;
}
