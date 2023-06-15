let price = 100;
let newPrice = '100';

if(price == newPrice){
    console.log("The price are the same");
} else{
    console.log("The price are not the same");
}

let a = null;

console.log(typeof a);

let taxRate; 
console.log(`Tax rate: ${taxRate || 10}%`);
taxRate = 0;
console.log(`Tax rate: ${taxRate ?? 10}%`);

function testAddition(...numbers){
    return numbers.reduce((total, value) => {
        return total + (Number.isNaN(Number(value)) ? 0 : Number(value));
    }, 0);
}

console.log(testAddition(10, 20));


let numbersArray = [1, 2, 3, 4, 5];

let [, ...cN] = numbersArray;

let dn = cN.sort((a, b) =>{
    return a - b;
});

console.log(dn);


let person1Object = {
    name: 'Name',
    age: 10    
}

let person2Object = {
    name: 'Name One',
    age: 11
}

person2Object.personName = person2Object.name;

console.log(person2Object);

let newPersonObject;

// let newPersonObjectValidation = (newPersonObject ?? {}).name ?? 'NewPersonName';
// console.log(newPersonObject.name);

let newPersonObjectValidation1 = newPersonObject?.name ?? 'NewPersonName';

console.log(newPersonObjectValidation1);

let obj = {...person1Object, address: "World"};
let {obj1, ...obj2} = person1Object;
console.log(JSON.stringify(obj1));

let getSetObjEx = {
    name: 'name',
    _age: 10,
    ageNextTenYears: 10 + 10,
    set age(newAge){
        this._age = newAge,
        this.ageNextTenYears = newAge + 10;
    },
    get age(){
        return this._age;
    },
    outputDetails () {
        return () => {
            console.log(`this is ${this.name} ${this._age} ${this.ageNextTenYears}`);
        }
        
    },
    outputDetails1 () {
        console.log(`this is ${this.name} ${this._age} ${this.ageNextTenYears}`);
    }
};

getSetObjEx.outputDetails1 = getSetObjEx.outputDetails1.bind(getSetObjEx);
getSetObjEx.outputDetails1();
getSetObjEx.outputDetails()();


console.log(JSON.stringify(getSetObjEx));
console.log(getSetObjEx.age);









