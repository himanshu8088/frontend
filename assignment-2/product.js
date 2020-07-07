"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productId, productName, category, manufacturer, description, price) {
        this.ProductId = productId;
        this.ProductName = productName;
        this.Category = category;
        this.Manufacturer = manufacturer;
        this.Description = description;
        this.Price = price;
    }
    return Product;
}());
exports.Product = Product;
