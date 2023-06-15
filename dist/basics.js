"use strict";
function addNumbers(number1, number2, showResult, phrase) {
    const result = number1 + number2;
    if (showResult) {
        console.log(`${phrase} ${result}`);
    }
    else {
        return result;
    }
    return;
}
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const printResult = true;
const resultPhrase = 'This is the result ';
window.onload = function () {
    const addBtn = document.querySelector('button');
    addBtn.addEventListener('click', () => {
        addNumbers(+num1.value, +num2.value, printResult, resultPhrase);
    });
};
