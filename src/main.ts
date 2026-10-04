import physicalProducts from "./models/physicalProducts.ts";
import digitalProducts from "./models/digitalProducts.ts";


let product1 = new physicalProducts("dmwow","tv", 700, 50);
let product2 = new digitalProducts("xslmfefl", "digitalbook", 100, 5);


const products = [product1, product2];

for (const product of products) {
    console.log(product.displayDetails());
    console.log("Price with tax: $" + product.getPriceWithTax());
}