<<<<<<< HEAD
import IAddOrderItemDto from "./IAddOrderItemDto";

export default interface IAddOrderDto {
=======
export interface IAddOrderDto {
>>>>>>> 571f6b561145b81a64f27d4b5873663ead75e975
    totalPrice: number;
    userId: string;
    shippingCompanyId: number | null;
    addressId: number | null;
<<<<<<< HEAD
    orderItems: IAddOrderItemDto[];
}
=======
}
>>>>>>> 571f6b561145b81a64f27d4b5873663ead75e975
