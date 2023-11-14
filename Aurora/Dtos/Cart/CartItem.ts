export default interface AddCartItemDto {
    quantity: number;
    cartId: number | null;
    productId: number | null;
}
export default interface ReadCartItemDetailDto {
    quantity: number;
    productId: number | null;
}
export default interface ReadCartItemDto {
    quantity: number;
    productId: number | null;
}
export default interface UpdateCartItemDto {
    id: number;
    quantity: number;
}
