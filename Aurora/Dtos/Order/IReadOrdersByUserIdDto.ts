import { ReadOrderItemDto } from "./ReadOrderItemDto";
import { ReadPaymentDetailsDto } from "./ReadPaymentDetailsDto";

export interface IReadOrdersByUserIdDto {
    id: number;
    totalPrice: number;
    status: boolean;
    deliveryDate: string;
    createdAt: string;
    expectedDeliveryDate: string;
    shippingCompanyId: number | null;
    addressId: number | null;
    orderItems: ReadOrderItemDto[];
    paymentDetails: ReadPaymentDetailsDto[];
}
