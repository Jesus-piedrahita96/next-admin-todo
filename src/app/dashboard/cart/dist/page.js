"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
var headers_1 = require("next/headers");
// Shopping cart - Components
var shopping_cart_1 = require("@/shopping-cart");
var products_1 = require("@/products");
exports.metadata = {
    title: 'Carrito de compras',
    description: 'Carrito de compras de la tienda'
};
//
var getProductCart = function (cart) {
    var productsInCart = [];
    var _loop_1 = function (key) {
        var product = products_1.products.find(function (prod) { return prod.id === key; });
        if (product) {
            productsInCart.push({ product: product, quantity: cart[key] });
        }
    };
    for (var _i = 0, _a = Object.keys(cart); _i < _a.length; _i++) {
        var key = _a[_i];
        _loop_1(key);
    }
    return productsInCart;
};
function CartPage() {
    var _a, _b;
    var cookiesHeader = headers_1.cookies();
    var cart = JSON.parse((_b = (_a = cookiesHeader.get('cart')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '{}');
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", { className: 'text-xl font-bold' }, "Carrito de compras"),
        react_1["default"].createElement("hr", { className: 'mb-2' }),
        react_1["default"].createElement("div", { className: 'flex flex-col w-full gap-3 sm:flex-row' },
            react_1["default"].createElement("div", { className: 'flex flex-col w-full gap-3 sm:w-8/12' }, getProductCart(cart).map(function (product) { return ( // funcion recibe la cookie realiza un barrido interno de la info y retorna la info al componente
            react_1["default"].createElement(shopping_cart_1.ItemCard, { key: product.product.id, product: product.product, quantity: product.quantity })); })))));
}
exports["default"] = CartPage;
