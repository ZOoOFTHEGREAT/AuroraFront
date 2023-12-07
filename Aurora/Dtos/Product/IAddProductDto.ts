export interface IAddProductDto {
  name: string;
  price: number;
  discountPercent: number;
  quantity: number;
  description: string;
  categoryId: number | null;
}
