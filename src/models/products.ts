class Product {
  public sku: string;
  public name: string;
   public price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `the sku is ${this.sku} this is a ${this.name} and the price is ${this.price}`;
  }

  getPriceWithTax(): number {
    let tax = this.price * 0.03;
    return tax * this.price
  }
}

export default Product

