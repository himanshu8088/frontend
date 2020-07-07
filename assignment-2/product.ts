export class Product {

    ProductId: number;
    ProductName: string;
    Category: string;
    Manufacturer: string;
    Description: string;
    Price: number;

    constructor(productId: number, productName: string, category: string,
        manufacturer: string, description: string, price: number,
    ) {
        this.ProductId = productId;
        this.ProductName = productName;
        this.Category = category;
        this.Manufacturer = manufacturer;
        this.Description = description;
        this.Price = price;
    }
}