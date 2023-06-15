function addTwoNums(value1:number | null, value2: number = 0,) {
    return (value1 || 0) + value2;
}

console.log(addTwoNums(9, 7));
