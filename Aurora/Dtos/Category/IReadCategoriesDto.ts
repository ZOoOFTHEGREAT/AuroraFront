import IProductDetails from "Dtos/Product/IProductDetails";

export default interface IReadCategoriesDto{
    name: string;
    description: string;
    products: IProductDetails[];
}