import Product from "./models/products.js";

function calculateTax(product: Product): number{

    return product.price * 0.07;
}

export default calculateTax;