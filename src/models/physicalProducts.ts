import Product from "./products.ts";

//const p1 = new Product("1qysdkfni3o", "tv", 700);

class physicalProducts extends Product{

    weight:number;

    constructor(sku:string, name:string, price:number, weight:number){
        super(sku,name,price);
        this.weight = weight;
    }
    getPriceWithTax(): number {
        let tax = this.price * .1
        return tax + this.price;
    }
    get formattedWeight(): string {
        return `${this.weight} kg`;
    }
}
const product3 = new physicalProducts("dmwow","tv", 700, 50)
//console.log(p1.displayDetails());
console.log(product3.getPriceWithTax())

export default physicalProducts;