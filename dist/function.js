"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function printNumericalResult(numericalResult) {
    console.log(`This is the result: ${numericalResult}`);
}
function addPlusCallbackFun(a, b, cb) {
    const sum = a + b;
    cb(sum);
}
const addTwoNumbers = add(10, 13);
printNumericalResult(addTwoNumbers);
let addRefFun;
addRefFun = add;
printNumericalResult(addRefFun(12, 10));
addPlusCallbackFun(10, 13, (result) => {
    console.log(result);
});
