export class TwoNumbersCalClass {
    constructor(...numbers) {
        this.numbers = numbers;
    }
    add() {
        return this.numbers.reduce((total, value) => {
            return total + value;
        }, 0);
    }
    substract() {
        return this.numbers.reduce((total, value) => {
            return total - value;
        }, 0);
    }
    divide() {
        return this.numbers.reduce((total, value) => {
            return total / value;
        }, this.numbers[0]);
    }
    multiply() {
        return this.numbers.reduce((total, value) => {
            console.log(`total is ${total * value}`);
            return total * value;
        }, this.numbers[0]);
    }
}
