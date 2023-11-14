import ReadImageDto from "./Image";

export default interface ProductAddDto {
    name: string;
    price: number;
    quantity: number;
    description: string;
    categoryId: number | null;
}
export default interface ProductUpdateDto {
    id: number;
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    categoryId: number | null;
}
export default interface ReadAllProductsDto {
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    categoryId: number | null;
    images: ReadImageDto[];
}
export default interface ReadProductByIdDto {
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    categoryId: number | null;
    images: ReadImageDto[];
}
export default interface ReadProductsByCategoryIdDto {
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    images: ReadImageDto[];
}
export default interface ReadProductsByDiscountDto {
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    categoryId: number | null;
    images: ReadImageDto[];
}
export default interface ReadProductsByNameDto {
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    categoryId: number | null;
    images: ReadImageDto[];
}
export default interface ReadProductsByPriceDto {
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    categoryId: number | null;
    images: ReadImageDto[];
}
