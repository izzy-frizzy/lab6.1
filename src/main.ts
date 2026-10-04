import physicalProducts from "./models/physicalProducts.ts";
import digitalProducts from "./models/digitalProducts.ts";


let product1 = new physicalProducts("dmwow","tv", 700, 50);
let product2 = new digitalProducts("xslmfefl", "digitalbook", 100, 5);

console.log(product1.getPriceWithTax());
console.log(product2.getPriceWithTax());