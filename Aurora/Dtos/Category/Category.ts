import ReadProductByIdDto from "../Product/Products";

export default interface AddCategoryDto {
    name: string;
    description: string;
}
export default interface ReadCategoriesDto {
    name: string;
    description: string;
    products: ReadProductByIdDto[];
}
export default interface ReadCategoryDetailsDto {
    name: string;
    description: string;
    products: ReadProductByIdDto[];
}
export default interface ReadCategoryNamesOnlyDto {
    name: string;
}
export default interface UpdateCategoryDto {
    id: number;
    name: string;
    description: string;
}
