import Product from "./products.js";

class digitalProducts extends Product {

    fileSize:number;

    constructor(sku:string, name:string, price:number, fileSize:number){
        super(sku,name,price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        
     return this.price;
    }

    get formattedFileSize(): string {
        return `${this.fileSize} MegaBytes`;
    }
}

export default digitalProducts;