let userInput: unknown;
let userName: string;

userInput = 1;
userInput = 'One';

if(typeof userInput === 'string'){
    userName = userInput;
    console.log(userName);
}

function generateErrorForException(errorMessage:string, code: number) {
    throw {message: errorMessage, errorCode: code};
}

try {
    
} catch (error) {
    console.log(error);
    generateErrorForException('An error occured!!!', 500);   
}