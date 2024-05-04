'use client';
"use strict";
exports.__esModule = true;
exports.ItemCard = void 0;
// next
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
// Shopping cart
var action_1 = require("../actions/action");
// React icons
var io5_1 = require("react-icons/io5");
exports.ItemCard = function (_a) {
    var product = _a.product, quantity = _a.quantity;
    var router = navigation_1.useRouter();
    function handleOnAddToCart() {
        action_1.addProductToCart(product.id);
        router.refresh();
    }
    function handleOnRemoveItem() {
        action_1.deleteOneProduct(product.id);
        router.refresh();
    }
    return (React.createElement("div", { className: "flex items-center shadow rounded-lg w-full bg-gray-800 border-gray-100" },
        React.createElement("div", { className: "p-2" },
            React.createElement(image_1["default"], { width: 200, height: 200, className: "rounded", src: product.image, alt: product.name })),
        React.createElement("div", { className: "px-5 pb-5 w-full flex flex-col mt-2" },
            React.createElement("a", { href: "#" },
                React.createElement("h3", { className: "font-semibold text-xl tracking-tight text-white" },
                    product.name,
                    " - ",
                    React.createElement("small", { className: "text-sm" },
                        "$",
                        product.price.toFixed(2)))),
            React.createElement("div", { className: "flex flex-col items-start justify-between" },
                React.createElement("span", { className: "text-gray-900 dark:text-white" },
                    "Cantidad: ",
                    quantity),
                React.createElement("span", { className: "font-bold text-white" },
                    "Total: $",
                    (product.price * quantity).toFixed(2)))),
        React.createElement("div", { className: "flex p-5 items-center justify-center" },
            React.createElement("button", { onClick: handleOnAddToCart, className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" },
                React.createElement(io5_1.IoAddCircleOutline, { size: 25 })),
            React.createElement("span", { className: "text-2xl text-white mx-10" }, quantity === 0 ? '' : quantity),
            quantity !== 0 ? (React.createElement("button", { onClick: handleOnRemoveItem, className: "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" },
                React.createElement(io5_1.IoRemove, { size: 25 }))) : (React.createElement("button", { onClick: handleOnRemoveItem, className: "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" },
                React.createElement(io5_1.IoTrashOutline, { size: 20 }))))));
};
