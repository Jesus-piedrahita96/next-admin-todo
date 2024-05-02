"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TopMenu = void 0;
// next
// next-headers son cookies al lado del servidor
var headers_1 = require("next/headers");
var link_1 = require("next/link");
// React icons
var ci_1 = require("react-icons/ci");
//------------------------------------
function TopMenu() {
    var _a, _b;
    var cookieStore = headers_1.cookies(); // obtengo las funcionalidades de las cookies al lado del servidor
    var cartValue = JSON.parse((_b = (_a = cookieStore.get('cart')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '{}');
    var totalItems = __spreadArrays(Object.values(cartValue)).reduce(function (acum, value) { return acum + value; }, 0);
    return (React.createElement("div", { className: "sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5" },
        React.createElement("div", { className: "px-6 flex items-center justify-between space-x-4" },
            React.createElement("h5", { hidden: true, className: "text-2xl text-gray-600 font-medium lg:block" }, "Dashboard"),
            React.createElement("button", { className: "w-12 h-16 -mr-2 border-r lg:hidden" },
                React.createElement(ci_1.CiMenuBurger, { size: 30 })),
            React.createElement("div", { className: "flex space-x-2" },
                React.createElement("div", { hidden: true, className: "md:block" },
                    React.createElement("div", { className: "relative flex items-center text-gray-400 focus-within:text-cyan-400" },
                        React.createElement("span", { className: "absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300" },
                            React.createElement(ci_1.CiSearch, null)),
                        React.createElement("input", { type: "search", name: "leadingIcon", id: "leadingIcon", placeholder: "Search here", className: "w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition" }))),
                React.createElement("button", { className: "flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden" },
                    React.createElement(ci_1.CiSearch, null)),
                React.createElement("button", { className: "flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200" },
                    React.createElement(ci_1.CiChat1, { size: 25 })),
                React.createElement(link_1["default"], { href: 'cart', className: "relative  flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200" },
                    React.createElement("span", { className: "absolute w-4 h-4 -right-2 -bottom-2 text-sky-700 font-bold" }, totalItems),
                    React.createElement(ci_1.CiShoppingCart, { size: 25 }))))));
}
exports.TopMenu = TopMenu;
