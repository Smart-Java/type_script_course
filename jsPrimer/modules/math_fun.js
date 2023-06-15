export function addNumbers(...numbers) {
    return numbers.reduce((total, value) => {
        return total + value;
    });
}

export function multiplyNumbers(...numbers) {
    let total = 1;
    numbers.forEach((element) => {
        total *= element;
    });
    return total;
}

export default function(...numbers){
    let total = 0;
    let totalNumberElements = numbers.length;
    numbers.forEach((element) => {
        total += addNumbers(element);
    });
    let average = total / totalNumberElements;
    return average;
}