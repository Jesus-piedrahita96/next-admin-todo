"use strict";
exports.__esModule = true;
exports.deleteOneProduct = exports.deleteProductCart = exports.addProductToCart = exports.getCookieCart = void 0;
// cookies-next es al lado del cliente
var cookies_next_1 = require("cookies-next");
// obtener las cookies del carrito
exports.getCookieCart = function () {
    var _a;
    if (cookies_next_1.hasCookie('cart')) { // si existe la cookie cart entra en el if
        // analiza el json y extrae la info de la cookie cart como string o si no regreso un objeto vacio
        var cookieCart = JSON.parse((_a = cookies_next_1.getCookie('cart')) !== null && _a !== void 0 ? _a : {});
        return cookieCart;
    }
    return {};
};
// añadir producto al carrito
exports.addProductToCart = function (id) {
    var cookieCart = exports.getCookieCart();
    if (cookieCart[id]) {
        cookieCart[id] += 1;
    }
    else {
        cookieCart[id] = 1;
    }
    cookies_next_1.setCookie('cart', JSON.stringify(cookieCart));
};
// eliminar productos del carrito
exports.deleteProductCart = function (id) {
    var cookieCart = exports.getCookieCart();
    // esto es una forma de eliminar un productos de las cookies
    // for (const obj of Object.keys(cookieCart)) {
    //   if (obj === id) {
    //     cookieCart[id] = 0
    //   }
    // }
    delete cookieCart[id];
    cookies_next_1.setCookie('cart', JSON.stringify(cookieCart));
};
exports.deleteOneProduct = function (id) {
    var product = exports.getCookieCart();
    console.log(product);
    if (product[id]) {
        product[id] -= 1;
    }
    else if (product[id] === 0) {
        delete product[id];
    }
    cookies_next_1.setCookie('cart', JSON.stringify(product));
};
