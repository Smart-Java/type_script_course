"use strict";
function checkNumber(val) {
    if (val == false) {
        throw new Error("An error occurred, do try again");
    }
}
function addTwoNum(a, b) {
    checkNumber(typeof (a) == 'number' && typeof (b) == 'number');
    return a + b;
}
function writeOutResult(message, value) {
    console.log(`${message} ${value}`);
}
writeOutResult('This is the result ', addTwoNum(2, null));
