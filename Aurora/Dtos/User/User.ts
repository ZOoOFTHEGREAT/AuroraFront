import ReadUserPaymentDetailDto from './UserPayment';
import ReadOrdersDto from '../Order/Orders';
import ReadUserAddressDetailDto from './UserAddresses';
import ReadCartDto from '../Cart/Cart';

export default interface ReadUserByEmailDto {
  id: string;
  userName: string;
  fname: string;
  lname: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  zipCode: string;
}
export default interface ReadUserByIdDto {
  id: string;
  userName: string;
  fname: string;
  lname: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  zipCode: string;
}
export default interface ReadUserByPhoneNumberDto {
  id: string;
  userName: string;
  fname: string;
  lname: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  zipCode: string;
}
export default interface ReadUserDetailsByIdDto {
  id: string;
  userName: string;
  fname: string;
  lname: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  zipCode: string;
  cart: ReadCartDto;
  orders: ReadOrdersDto[];
  userPayments: ReadUserPaymentDetailDto[];
  userAddresses: ReadUserAddressDetailDto[];
}
export default interface UpdateUserDto {
  id: string;
  userName: string;
  fname: string;
  lname: string;
  email: string;
  passwordHash: string;
  phoneNumber: string;
  zipCode: string;
}
