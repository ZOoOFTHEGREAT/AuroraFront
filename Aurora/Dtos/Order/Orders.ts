import ReadOrderItemDto from "./OrderItems";
import ReadPaymentDetailsDto from "../Paymentdetails/Paymentdetails";
import ReadUserPaymentDetailDto from "../User/UserPayment";


// export default interface OrderAddDto {
//     totalPrice: number;
//     userId: string;
//     shippingCompanyId: number | null;
//     addressId: number | null;
//     orderItems: ReadOrderItemDto[];
// }
export default interface OrderUpdateDto {
    id: number;
    totalPrice: number;
    status: boolean;
    deliveryDate: string;
    expectedDeliveryDate: string;
    shippingCompanyId: number | null;
    addressId: number | null;
}
// export default interface ReadOrderByIdDto {
//     totalPrice: number;
//     status: boolean;
//     deliveryDate: string;
//     createdAt: string;
//     expectedDeliveryDate: string;
//     userId: string;
//     shippingCompanyId: number | null;
//     addressId: number | null;
//     orderItems: ReadOrderItemDto[];
//     paymentDetails: ReadPaymentDetailsDto[];
// }
export default interface ReadOrdersByShippingCompanyIdDto {
    id: number;
    totalPrice: number;
    status: boolean;
    deliveryDate: string;
    createdAt: string;
    expectedDeliveryDate: string;
    addressId: number | null;
    orderItems: ReadOrderItemDto[];
}
// export default interface ReadOrdersByUserIdDto {
//     id: number;
//     totalPrice: number;
//     status: boolean;
//     deliveryDate: string;
//     createdAt: string;
//     expectedDeliveryDate: string;
//     shippingCompanyId: number | null;
//     addressId: number | null;
//     orderItems: ReadOrderItemDto[];
//     paymentDetails: ReadPaymentDetailsDto[];
// }
export default interface ReadOrdersDto {
    id: number;
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
