function add(num1, num2) {
    return num1 + num2;
}
function printNumericalResult(numericalResult) {
    console.log("This is the result: ".concat(numericalResult));
}
function addPlusCallbackFun(a, b, cb) {
    var sum = a + b;
    cb(sum);
    return a + b;
}
var addTwoNumbers = add(10, 13);
printNumericalResult(addTwoNumbers);
var addRefFun;
addRefFun = add;
printNumericalResult(addRefFun(12, 10));
console.log(addPlusCallbackFun(10, 13, function (result) {
    console.log(result);
}));
