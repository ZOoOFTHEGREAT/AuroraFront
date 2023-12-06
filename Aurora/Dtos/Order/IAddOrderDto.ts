import IAddOrderItemDto from "./IAddOrderItemDto";

export default interface IAddOrderDto {
    totalPrice: number;
    userId: string;
    shippingCompanyId: number | null;
    addressId: number | null;
    orderItems: IAddOrderItemDto[];
}