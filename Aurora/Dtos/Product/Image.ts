export default interface ImageAddDto {
    imageUrl: string;
    productId: number;
}
export default interface ImagesReadByProductIdDto {
    imageUrl: string;
}
export default interface ImageUpdateDto {
    id: number;
    imageUrl: string;
    productId: number;
}
export default interface ReadImageDto {
    imageUrl: string;
    productId: number;
}