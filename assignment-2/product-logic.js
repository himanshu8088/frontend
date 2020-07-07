"use strict";
exports.__esModule = true;
exports.ProductLogic = void 0;
var product_1 = require("./product");
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
        this.products = [];
    }
    ProductLogic.prototype.getProducts = function () {
        return this.products;
    };
    ProductLogic.prototype.getProductByCategory = function (category) {
        var productsByCategory = [];
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.Category === category)
                productsByCategory.push(product);
        }
        return productsByCategory;
    };
    ProductLogic.prototype.createProduct = function (productId, productName, category, manufacturer, description, price) {
        this.validateProduct(productName, category, manufacturer, description, price);
        if (this.isProductExist(productId))
            throw new Error("Product already exists.");
        this.products.push(new product_1.Product(productId, productName, category, manufacturer, description, price));
    };
    ProductLogic.prototype.updateProduct = function (productId, productName, category, manufacturer, description, price) {
        var idx = this.getIndexOfProduct(productId);
        if (idx < 0) {
            return;
        }
        this.validateProduct(productName, category, manufacturer, description, price);
        return this.updateProductAt(idx, productName, category, description, manufacturer, price);
    };
    ProductLogic.prototype.deleteProduct = function (productId) {
        var idx = this.getIndexOfProduct(productId);
        console.log(idx);
        if (idx < 0) {
            return;
        }
        var product = this.products.splice(idx, 1);
        return product[0];
    };
    ProductLogic.prototype.saveAllProducts = function (products) {
        var _a;
        (_a = this.products).push.apply(_a, products);
    };
    ProductLogic.prototype.updateProductAt = function (idx, productName, category, description, manufacturer, price) {
        this.products[idx].ProductName = productName;
        this.products[idx].Category = category;
        this.products[idx].Description = description;
        this.products[idx].Manufacturer = manufacturer;
        this.products[idx].Price = price;
        return this.products[idx];
    };
    ProductLogic.prototype.getIndexOfProduct = function (productId) {
        var idx = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.ProductId === productId)
                return idx;
            idx++;
        }
        return -1;
    };
    ProductLogic.prototype.isProductExist = function (productId) {
        if (this.getIndexOfProduct(productId) >= 0)
            return true;
        return false;
    };
    ProductLogic.prototype.validateProduct = function (productName, category, manufacturer, description, price) {
        if (typeof (productName) !== "string" || typeof (category) !== "string" || typeof (manufacturer) !== "string")
            throw new TypeError("Invalid type of value provided.");
        if (description.length > 100)
            throw new RangeError("Description can not be greater than 100.");
        if (price < 0)
            throw new RangeError("Price can not be negative.");
    };
    return ProductLogic;
}());
exports.ProductLogic = ProductLogic;
