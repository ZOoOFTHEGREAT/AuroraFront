export interface IReadUserAddresByUserIdDto {
  id: number;
  address: string;
  lineOne: string;
  lineTwo?: string;
  country: string;
  city: string;
}
