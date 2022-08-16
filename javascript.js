const sumNumbers = (a,b) => {
    return a+b;
}

const substractionNumbers = (a,b) => {
    return a-b;
}

const multiplicationNumbers = (a,b) => {
    return a*b;
}

const divisonNumbers = (a,b) => {
    return a/b;
}

const operaton = (sign,num1,num2) =>{
    switch(sign){
        case '+': sumNumbers(num1,num2);
        break;
        case '-': substractionNumbers(num1,num2);
        break;
        case '*': multiplicationNumbers(num1,num2);
        break;
        case '/': divisonNumbers(num1,num2);
        break;
    }
}