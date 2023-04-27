function add(num1: number, num2: number){
    return num1 + num2;
}

function printNumericalResult(numericalResult:number) {
    console.log(`This is the result: ${numericalResult}`); 
}

function addPlusCallbackFun(a: number, b: number, cb: (result: number) =>void){
    const sum = a + b;
    cb(sum);
}

const addTwoNumbers = add(10, 13);

printNumericalResult(addTwoNumbers);

let addRefFun: (a: number, b: number) => number;

addRefFun = add;

printNumericalResult(addRefFun(12, 10));

addPlusCallbackFun(10, 13, (result) => {
    console.log(result);
})