type stringNum = string | number;
let product1 = {'name': 'Product 1', 'price': 100};
let product2 = {'name': 'Product 2', 'price': 200};
let product3 = {'name': 'Product 3', 'price': 0};
let product4 = {'name': 'Product 4', 'price': 0, 'expiry_date_year': 24};

let objProducts: {name: string, price: number, expiry_date_year?: number,}[] = [product1, product2, product3, product4];

objProducts.forEach(element => {
    console.log(`${element.name} ${element.price ?? 0} ${element.expiry_date_year ?? 0}`);
});