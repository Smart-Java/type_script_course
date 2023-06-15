"use strict";
let product1 = { 'name': 'Product 1', 'price': 100 };
let product2 = { 'name': 'Product 2', 'price': 200 };
let product3 = { 'name': 'Product 3', 'price': 0 };
let product4 = { 'name': 'Product 4', 'price': 0, 'expiry_date_year': 24 };
let objProducts = [product1, product2, product3, product4];
objProducts.forEach(element => {
    var _a, _b;
    console.log(`${element.name} ${(_a = element.price) !== null && _a !== void 0 ? _a : 0} ${(_b = element.expiry_date_year) !== null && _b !== void 0 ? _b : 0}`);
});
