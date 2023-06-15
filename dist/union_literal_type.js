"use strict";
function combineValues(input1, input2, expectedResultType) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || expectedResultType === 'expect-num') {
        result = +input1 + (+input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineNumbers = combineValues(29, 28, 'expect-num');
console.log(combineNumbers);
const combineStrNumbers = combineValues('29', '28', 'expect-num');
console.log(combineStrNumbers);
const combineWords = combineValues('Happy', 'Day', 'expect-str');
console.log(combineWords);
