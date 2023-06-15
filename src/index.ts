import {TwoNumbersCalClass} from './class/two_numbers_cal_class.js';

var twoNumbersCalClass = new TwoNumbersCalClass(4, 5);

var addResult = twoNumbersCalClass.add();

var divResult = twoNumbersCalClass.divide();

var multiplyResult = twoNumbersCalClass.multiply();

var substractResult = twoNumbersCalClass.substract();

console.log(`add result is ${addResult}, div result is ${divResult}, mulitply result is ${multiplyResult} and substract result is ${substractResult}`);
