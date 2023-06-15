enum Products {
    Product_1,
    Product_2,
    Product_3,
}

let productValue: Products = 0;

console.log(`product is ${Products[0]}`);

let _prod1: [Products, number] = [Products.Product_1, 100];
let _prod2: [Products, number] = [Products.Product_2, 100];
let _prod3: [Products, number] = [Products.Product_3, 100];

[_prod1, _prod2, _prod3].forEach(element => {
    let [eProduct, ePrice] = element;
    let name: string = Products[eProduct];

    console.log(`Product name is ${name} and price is ${ePrice}`);
});


const enum CProducts {
    Product_1,
    Product_2,
    Product_3,
}

let cProd : CProducts = 0;


function tOverLoad(val:1 | 2 | 3 | 4): 1 | 2 | 3 | 4;
function tOverLoad(val:boolean): boolean;
function tOverLoad(val:CProducts): CProducts;
function tOverLoad(val:number | boolean | CProducts): number | boolean | CProducts{
    return val;
}

let output1 = tOverLoad(1);
let output2 = tOverLoad(true);
let output3 = tOverLoad(CProducts.Product_1);
