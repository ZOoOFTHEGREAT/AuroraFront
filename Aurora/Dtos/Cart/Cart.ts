import ReadCartItemDetailDto from "./CartItem";
import ReadUserByIdDto from "../User/User";


export default interface AddCartDto {
    userId: string;
}
export default interface ReadCartDto {
    id: number;
    createdDate: string;
}
export default interface ReadCartDetailDto {
    createdDate: string;
    cartItems: ReadCartItemDetailDto[];
}