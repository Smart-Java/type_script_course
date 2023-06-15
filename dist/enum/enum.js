"use strict";
var Products;
(function (Products) {
    Products[Products["Product_1"] = 0] = "Product_1";
    Products[Products["Product_2"] = 1] = "Product_2";
    Products[Products["Product_3"] = 2] = "Product_3";
})(Products || (Products = {}));
let productValue = 0;
console.log(`product is ${Products[0]}`);
let _prod1 = [Products.Product_1, 100];
let _prod2 = [Products.Product_2, 100];
let _prod3 = [Products.Product_3, 100];
[_prod1, _prod2, _prod3].forEach(element => {
    let [eProduct, ePrice] = element;
    let name = Products[eProduct];
    console.log(`Product name is ${name} and price is ${ePrice}`);
});
let cProd = 0;
function tOverLoad(val) {
    return val;
}
let output1 = tOverLoad(1);
let output2 = tOverLoad(true);
let output3 = tOverLoad(0);
