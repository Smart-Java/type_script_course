let person1 = {
    name: 'Person 1 Name',
    age: 10
}

let person2 = {
    name: 'Person 2 Name',
    age: 10
}

let person1Obj = Object.getPrototypeOf(person1);
let person2Obj = Object.getPrototypeOf(person2);

console.log(person1Obj == person2Obj);

person1Obj.toString = function (){
    console.log(`this is the name ${this.name}, age ${this.age}`);
}

person1.toString();
person2.toString();

let customPersonPrototype = {
    toString(){
        console.log(`this is the name ${this.name}, age ${this.age}.`);
    }
}

let cPersonPro = Object.setPrototypeOf(person1, customPersonPrototype);
person1.toString();



let PersonConstructorFun = function (name, age) {
    this.name = name;
    this.age = age;
}

PersonConstructorFun.prototype.toString = function (){
    console.log(`From constructor: this is the name ${this.name}, age ${this.age}`);
}

let per = new PersonConstructorFun('Person Name', 10);
per.toString();


let PersonGradeConstructorFun = function (name, age, grade){
    PersonConstructorFun.call(this, name, age);
    this.grade = grade;
}

Object.setPrototypeOf(PersonGradeConstructorFun.prototype, PersonConstructorFun.prototype);

PersonGradeConstructorFun.prototype.gradeToString = function () {
    return `${this.toString()} ${this.grade}`;
}

let perGradeCons = new PersonGradeConstructorFun('Person Grade name', 10, 'A');

console.log(perGradeCons.gradeToString());
perGradeCons.toString();

console.log(`${perGradeCons instanceof PersonConstructorFun}`);


PersonConstructorFun.persons = function (...persons) { 
    persons.forEach((p) =>{
        p.toString();
    });
}

PersonConstructorFun.persons(new PersonConstructorFun('Person Test Con 1', 10), new PersonConstructorFun('Person Test Con 2', 10));


class SimpleAddMulitplyCalClass{
    constructor(...numbers) {
        this.numbers = numbers;
    }

    add(){
        return this.numbers.reduce((total, value) => {
            return total + value;
        }, 0);
    }

    mutiply(){
        return this.numbers.reduce((total, value) => {
            return total + value;
        }, this.numbers[0]);
    }
}

let addTwoNums = new SimpleAddMulitplyCalClass(1, 2);
console.log(addTwoNums.add());
let addThreeNums = new SimpleAddMulitplyCalClass(1, 2, 3);
console.log(addThreeNums.add());

class AverageClass extends SimpleAddMulitplyCalClass{
    constructor(...nums) {
        let ele = 0;
        let e;
        nums.forEach((element, index) => {
            ele += element;
            if (index == 0) {
                e = `${element},`;
            } else{
                if((nums.length - 1) == index){
                    e += `${element}`;
                } else{
                    e += `${element},`;
                }
            }
            
        });
       console.log('r' + e);
        super(ele);
        this.totalLength = nums.length;
    }

    average(){
        let totalOfNumbers = this.add();
        console.log(this.numbers);
        return totalOfNumbers / (this.totalLength);
    }
}


let averageOfTwoNumbers = new AverageClass(1, 2);
console.log(averageOfTwoNumbers.average());


let averageOfThreeNumbers = new AverageClass(1, 2, 9);
console.log(averageOfThreeNumbers.average());


class ProductItems {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString(){
        return `Name: ${this.name}, price: ${this.price}`;
    }
}

function productIterator() { 
    let productItem1 = new ProductItems('Meat pie', 100);
    let productItem2 = new ProductItems('Groundnut', 100);
    let productItem3 = new ProductItems('Drink', 100);
    let productItem4 = new ProductItems('Milk', 100);
    let productItem5 = new ProductItems('Fruit', 100);

    let currentState

    return {
        next(){
            switch (currentState) {
                case undefined:
                    currentState = productItem1;
                    return {value: productItem1, done: false};
                    break;
                case productItem1:
                    currentState = productItem2;
                    return {value: productItem2, done: false};
                case productItem2:
                    currentState = productItem3;
                    return {value: productItem3, done: false};
                case productItem3:
                    currentState = productItem4;
                    return {value: productItem4, done: false};
                case productItem4:
                    currentState = productItem5;
                    return {value: productItem5, done: false};
                case productItem5:
                    return {value: undefined, done: true};
            }
        }
    }
}


function* productItemsGenerator() { 
    yield new ProductItems('Meat pie', 100);
    yield new ProductItems('Milk', 100);
    yield new ProductItems('Bread', 100);
}

let productItemsIterator = productIterator();
let result = productItemsIterator.next();

while (!result.done) {
    console.log(result.value.toString());
    result = productItemsIterator.next();
}

[...productItemsGenerator()].forEach(p =>
    console.log(p.toString()));

// let generateResult = productItemsGenerator().next();
// while (!generateResult.done) {
//     // console.log(generateResult.value.toString());
//     generateResult = productItemsGenerator().next();
// }


class GiftProductItems{
    constructor(to, ...productItems) {
        this.to = to;
        this.productItems = productItems;
    }
    
    totalPrice(){
        return this.productItems.reduce((total, p) => {
            return total + p.price;
        }, 0);
    }
    
    *[Symbol.iterator](){
        for (let index = 0; index < this.productItems.length; index++) {
            yield this.productItems[index];
        }
    }
}

let giftItems = new GiftProductItems('Some one', new ProductItems('Meat pie', 100), new ProductItems('Milk', 100), new ProductItems('Bread', 100),);
console.log(giftItems.totalPrice());
[...giftItems].forEach(p =>
    console.log(p.toString()));


let productItemsObject = {
    item1: new ProductItems('Meat pie', 100),
}

productItemsObject.item2 = new ProductItems('Milk', 100);

Object.keys(productItemsObject).forEach((element) => {
    console.log(`this is the items value ${productItemsObject[element].toString()}`);
})



class MapProductObject {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Symbol();
    }

    toString(){
        return `name is ${this.name}, price is ${this.price} of id ${this.id}`
    }
}

let productItemMapObj = new Map();
let itemList  = [new MapProductObject('Item 1', 100), new MapProductObject('Item 2', 100), new MapProductObject('Item 3', 100)]
itemList.forEach((element) => {
    productItemMapObj.set(element.id, element);
});

itemList.forEach((element) => {
    console.log(productItemMapObj.get(element.id));
    // productItemMapObj.get(element.id);
});

let itemSetList = [];

let productItemSetObj = new Set();
itemSetList.forEach((element) => {
    productItemSetObj.add(element);
});

productItemSetObj.values(); 








