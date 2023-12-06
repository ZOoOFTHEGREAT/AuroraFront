import { ReadOrderItemDto } from "./ReadOrderItemDto";
import { ReadPaymentDetailsDto } from "./ReadPaymentDetailsDto";

export interface IReadOrderByIdDto {
    totalPrice: number;
    status: boolean;
    deliveryDate: string;
    createdAt: string;
    expectedDeliveryDate: string;
    userId: string;
    shippingCompanyId: number | null;
    addressId: number | null;
    orderItems: ReadOrderItemDto[];
    paymentDetails: ReadPaymentDetailsDto[];
}
