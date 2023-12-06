export default interface IAddCartItemDto {
    quantity: number;
    cartId: number | null;
    productId: number | null;
}
