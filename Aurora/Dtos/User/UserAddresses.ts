// export default interface AddUserAddressDto {
//     address: string;
//     lineOne: string;
//     lineTwo: string | null;
//     country: string;
//     city: string;
//     userId: string;
// // }
// export default interface ReadUserAddresByUserIdDto {
//   address: string;
//   lineOne: string;
//   lineTwo: string | null;
//   country: string;
//   city: string;
// }
export default interface ReadUserAddressDetailDto {
  id: number;
  address: string;
  lineOne: string;
  lineTwo: string | null;
  country: string;
  city: string;
  userId: string;
}
export default interface ReadUserAddressDto {
  address: string;
  lineOne: string;
  lineTwo: string | null;
  country: string;
  city: string;
}
// export default interface UpdateUserAddressDto {
//   id: number;
//   address: string;
//   lineOne: string;
//   lineTwo: string | null;
//   country: string;
//   city: string;
// }
