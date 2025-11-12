import Product from "../models/Product";

export function calculateTax(products: Product): number {
    return products.getPriceWithTax()
}