import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://theshoppe.in//' : 'http://localhost:4200'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'