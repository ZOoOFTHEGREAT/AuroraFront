import { IReadImageDto } from "./IReadImageDto";

export default interface IProductDetails {
    id:number;
    name: string;
    price: number;
    quantity: number;
    discountPercent: number;
    description: string;
    categoryId: number | null;
    images?: IReadImageDto[];
}