import { Product } from "./product";
import { ProductLogic } from "./product-logic";

var productLogic = new ProductLogic();

productLogic.createProduct(1, "iPad 6", "Tablet", "Apple", "Apple iPad 6 Tablet", 200000);
console.log("\ncreated product 1, all products are: " + JSON.stringify(productLogic.getProducts()));

productLogic.createProduct(2, "iPad 6", "Tablet", "Apple", "Apple iPad 6 Tablet", 19000);
console.log("\ncreated product 2, all products are: " + JSON.stringify(productLogic.getProducts()));

productLogic.updateProduct(2, "iPad 6 Mini", "Tablet", "Apple", "Apple iPad 6 mini Tablet", 17000);
console.log("\nupdated product 2, all products are: " + JSON.stringify(productLogic.getProducts()));

productLogic.deleteProduct(2);
console.log("\ndeleted product 2, all products are: " + JSON.stringify(productLogic.getProducts()));

let laptopA = new Product(3, "Macbook Air 0", "Laptop", "Apple", "Apple laptop", 800000);
let laptopB = new Product(4, "Macbook Air 1", "Laptop", "Apple", "Apple laptop", 810000);
let laptopC = new Product(5, "Macbook Air 2", "Laptop", "Apple", "Apple laptop", 820000);
productLogic.saveAllProducts([laptopA, laptopB, laptopC]);
console.log("\nadded 3 laptops, all products are: " + JSON.stringify(productLogic.getProducts()));

console.log("\nproduct by category as Tablet are: " + JSON.stringify(productLogic.getProductByCategory("Tablet")));
