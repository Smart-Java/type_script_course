function addNumbers(number1: number, number2: number, showResult: boolean, phrase: string) {
    const result = number1 + number2;
    if(showResult){
        console.log(`${phrase} ${result}`);
    } else{
        return result;
    }
}

const num1 = document.getElementById('num1')! as HTMLInputElement;
const num2 = document.getElementById('num2')! as HTMLInputElement;
const printResult = true;
const resultPhrase = 'This is the result ';

window.onload = function () {
    const addBtn = document.querySelector('button')!;
    addBtn.addEventListener('click', () =>{
        addNumbers(+num1.value, +num2.value, printResult, resultPhrase,);
    })
}