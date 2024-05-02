"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
// Products --------------------
// Components
var products_1 = require("@/products");
// Data
var products_2 = require("@/products");
//-------------------------------
exports.metadata = {
    title: 'productos',
    description: 'prodictos de tienda disponible'
};
function ProductsPage() {
    return (react_1["default"].createElement("div", { className: 'grid grid-cols-1 sm:grid-cols-3 gap-2' }, products_2.products.map(function (product) { return (react_1["default"].createElement(products_1.ProductCard, __assign({ key: product.id }, product))); })));
}
exports["default"] = ProductsPage;
