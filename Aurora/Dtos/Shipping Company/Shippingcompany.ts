export default interface AddShippingCompanyDto {
    name: string;
    servicePrice: number;
    webSite: string;
    telephone: string;
}
export default interface ReadShippingCompaniesDetailsDto {
    name: string;
    servicePrice: number;
    webSite: string;
    telephone: string;
}
// export default interface ReadShippingCompaniesDto {
//     id: number;
//     name: string;
//     numberOfOrders: number;
// }
export default interface UpdateShippinCompanyDto {
    id: number;
    servicePrice: number;
    webSite: string;
    telephone: string;
}
