import average, { addNumbers, multiplyNumbers } from "./math_fun.js";

let resultFromAddingNumbers = addNumbers(2, 3, 4, 5);
let resultFromMultiplyingNumbers = multiplyNumbers(2, 3, 4, 5);
let resultFromAverageOfNumbers = average(2, 3, 4, 5,);


console.log(`This is the result of addition modules ${resultFromAddingNumbers}`);
console.log(`This is the result of multiplication modules ${resultFromMultiplyingNumbers}`);
console.log(`This is the result of average modules ${resultFromAverageOfNumbers}`);

let obj = ['id: text, lat: 123, long: 789, id: text, lat: 123, long: 785,'];


let arrKeysObject = [];
let arrValueObject = [];

obj.forEach(firstElement => {
    let obj2 = firstElement.trim().split('  ,');

    obj2.forEach(secondElement => {
        var obj3 = secondElement.trim().split(',');
        obj3.forEach(thirdElement => {
            var obj4 = thirdElement.trim().split(':');
            obj4.forEach(fourthElement => {
                if(fourthElement != ''){
                    // console.log('this is  ' + obj4.indexOf(fourthElement));
                    if(obj4.indexOf(fourthElement) == 0){
                        arrKeysObject.push(fourthElement ?? 0);
                    }else{
                        arrValueObject.push(fourthElement ?? 0);
                    }
                }
                // let lat = 0;
                // let long = 0;
                // if(arrValueObject.length > 0){
                //     arrValueObject.forEach(fifthElement => {
                //         if(arrValueObject.indexOf(fifthElement) == 1){
                //             lat = Number(fifthElement ?? 0);
                //         } else if(arrValueObject.indexOf(fifthElement) == 2){
                //             long = Number(fifthElement ?? 0);
                //         }
                //     });
                //     if(arrValueObject.length == 2){
                //         console.log(`this is the response lat : ${lat}  long: ${long}`);
                //     }
                // }
            });
        });
    });
})




