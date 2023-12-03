export interface IAddOrderDto {
    totalPrice: number;
    userId: string;
    shippingCompanyId: number | null;
    addressId: number | null;
}
