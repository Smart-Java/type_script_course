export class TwoNumbersCalClass {
    public numbers: number[];
    constructor(...numbers: number[]) {
        this.numbers = numbers;
    }

    add():number{
        return this.numbers.reduce((total, value) => {
            return total + value;
        }, 0);
    }

    substract():number{
        return this.numbers.reduce((total, value) => {
            return total - value;
        }, 0);
    }

    divide():number{
        return this.numbers.reduce((total, value) => {
            return total / value;
        }, this.numbers[0]);
    }
    
    multiply():number{
        return this.numbers.reduce((total, value) => {
            console.log(`total is ${total * value}`);
            return total * value;
        }, this.numbers[0]);
    }
}