declare enum Products {
    Product_1 = 0,
    Product_2 = 1,
    Product_3 = 2
}
declare let productValue: Products;
declare let _prod1: [Products, number];
declare let _prod2: [Products, number];
declare let _prod3: [Products, number];
declare const enum CProducts {
    Product_1 = 0,
    Product_2 = 1,
    Product_3 = 2
}
declare let cProd: CProducts;
declare function tOverLoad(val: 1 | 2 | 3 | 4): 1 | 2 | 3 | 4;
declare function tOverLoad(val: boolean): boolean;
declare function tOverLoad(val: CProducts): CProducts;
declare let output1: 4 | 1 | 2 | 3;
declare let output2: boolean;
declare let output3: CProducts;
