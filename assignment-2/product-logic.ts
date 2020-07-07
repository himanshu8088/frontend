import { Product } from "./product";

export class ProductLogic {
    private products: Product[] = [];

    getProducts(): Product[] {
        return this.products;
    }

    getProductByCategory(category: string): Product[] {
        let productsByCategory: Product[] = [];
        for (let product of this.products) {
            if (product.Category === category)
                productsByCategory.push(product);
        }
        return productsByCategory;
    }

    createProduct(productId: number, productName: any, category: any, manufacturer: any, description: string, price: number) {
        this.validateProduct(productName, category, manufacturer, description, price);
        if (this.isProductExist(productId))
            throw new Error("Product already exists.");
        this.products.push(new Product(productId, productName, category, manufacturer, description, price));
    }

    updateProduct(productId: number, productName: any, category: any, manufacturer: any, description: string, price: number): Product {
        let idx = this.getIndexOfProduct(productId);
        if (idx < 0) {
            return;
        }
        this.validateProduct(productName, category, manufacturer, description, price);
        return this.updateProductAt(idx, productName, category, description, manufacturer, price);
    }

    deleteProduct(productId: number): Product {
        let idx = this.getIndexOfProduct(productId);
        console.log(idx);
        if (idx < 0) {
            return;
        }

        let product = this.products.splice(idx, 1);
        return product[0];
    }

    saveAllProducts(products: Product[]) {
        this.products.push(...products);
    }

    private updateProductAt(idx: number, productName: any, category: any, description: string, manufacturer: any, price: number): Product {
        this.products[idx].ProductName = productName;
        this.products[idx].Category = category;
        this.products[idx].Description = description;
        this.products[idx].Manufacturer = manufacturer;
        this.products[idx].Price = price;
        return this.products[idx];
    }

    private getIndexOfProduct(productId: number): number {
        let idx = 0;
        for (let product of this.products) {
            if (product.ProductId === productId)
                return idx;
            idx++;
        }
        return -1;
    }

    private isProductExist(productId: number): boolean {
        if (this.getIndexOfProduct(productId) >= 0)
            return true;
        return false;
    }

    private validateProduct(productName: any, category: any, manufacturer: any, description: string, price: number) {

        if (typeof (productName) !== "string" || typeof (category) !== "string" || typeof (manufacturer) !== "string")
            throw new TypeError("Invalid type of value provided.");

        if (description.length > 100)
            throw new RangeError("Description can not be greater than 100.");

        if (price < 0)
            throw new RangeError("Price can not be negative.");
    }
}