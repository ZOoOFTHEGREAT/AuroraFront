export interface IUpdateUserAddressDto {
  Address: string;
  LineOne: string;
  LineTwo: string | null;
  Country: string;
  City: string;
  Id: number;
}
