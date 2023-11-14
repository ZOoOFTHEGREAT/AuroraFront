export default interface AddOrderItemDto {
    orderId: number;
    quantity: number;
    productId: number;
}
export default interface ReadOrderItemDto {
    quantity: number;
    orderId: number;
    productId: number;
}
export default interface ReadOrderItemsByOrderIdDto {
    quantity: number;
    productId: number;
}
export default interface UpdateOrderItemDto {
    id: number;
    quantity: number;
}