let product: [string, number] = ['Product name', 1000];

let products: [string, number][] = [];

products.push(['Item 1', 100], ['Item 2', 200], ['Item 3', 300]);

// destructuring of tuple array
let [productName, productPrice] = product;

// let [[prodN_1, prodP_1], [prodN_2, prodP_2]] = products;
let productLength = products.length;
let [...[...prod]] = products;

console.log(`${productName} ${productPrice}`);
prod.forEach((value, index) => {
    let [name, price] = value;
    console.log(`Product name is ${name}, whose price is \$${price} of index of ${index}`);
    
});

products.forEach(element => {
    let [name, price] = element;
    console.log(`Product name is ${name}, whose price is \$${price}`);
});


let tList_1: [string, number, boolean?, ...number[]] = ['Course 1', 100, true, 100, 100, 100];
let tList_2: [string, number, boolean?, ...number[]] = ['Course 2', 90, true, 90, 90, 80];

[tList_1, tList_2].forEach(element => {
    let [course, lastScore, passed, ...gradeScore] = element;
    console.log(`${course} ${lastScore} ${passed} ${gradeScore}`);
    let totalScores: number = 0;
    gradeScore.forEach(element => {
        totalScores += element;
    });
    console.log(`total score is ${totalScores}`);
});










