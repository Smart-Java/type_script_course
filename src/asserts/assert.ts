function checkNumber(val:boolean): asserts val {
    if(val == false){
        throw new Error("An error occurred, do try again");
    }
}

function addTwoNum(a:number | null, b: number | null) {
    checkNumber(typeof(a) == 'number' && typeof(b) == 'number');
    return a + b;
}

function writeOutResult(message: String, value:number | null) {
    console.log(`${message} ${value}`); 
}

writeOutResult('This is the result ', addTwoNum(2, null));


