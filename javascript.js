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

const operaton = (sign,currentValue,operationResult) =>{
    console.log('==== OPERATOR =====');
    console.log(`currentValue: ${currentValue}`);
    console.log(`operationResult: ${operationResult}`);
    console.log(`sign: ${sign}`);
    console.log('==============');
    switch(sign){
        case '+': return sumNumbers(operationResult,currentValue);
        case '-': return substractionNumbers(operationResult,currentValue);
        case '*': return multiplicationNumbers(currentValue,operationResult);
        case '/': return divisonNumbers(operationResult,currentValue);
    }
}

const display = document.querySelector('.output-display');
const history = document.querySelector('.past-operations');
const errorDisplay = document.querySelector('.error-info');
let displayString = '';
let operator = '';
let result;
let currentValue, operationResult=0, count=1;
let isLastPressedSign = false;

const clickDeleteHandler = (e) => {
    const choosing = e.target.dataset.value;
    isLastPressedSign = false;
    if(!choosing) return;
    if(e.target.dataset.value === 'Del')
    {
        displayString = '';
        display.textContent = displayString;
        currentValue = null;
        operationResult = null;
        count=1;
        operator='';
        history.textContent = displayString;
    }

    if(e.target.dataset.value === 'C' && displayString.length > 0)
    {
        let string = '';
        string = displayString.slice(0,-1);
        displayString = string;
        display.textContent = displayString;
    }
}

const numbersClickHandler = (e) =>{
    const choosing = e.target.dataset.value;
    isLastPressedSign = false;
    if(!choosing) return;
    if(e.target.dataset.value ==='0' && displayString==='0') return;
    if(choosing ==='.' && displayString.includes('.'))return;
    if(operator==='=' && choosing!='=')
    {
        history.textContent='';
        displayString='';
        operator='';
    }
    displayString += choosing;
    display.textContent = Number(displayString);
    history.textContent += choosing;
    errorDisplay.textContent = '';
    currentValue = Number(displayString);
}



const operationsClickHandler = (e) =>{
    const choosing = e.target.dataset.value;
    if(!choosing) return;
    if(operator === '')
    {
        operationResult = currentValue;
    }
    else if ((currentValue === 0 || operationResult === 0) && operator === '/') {
        display.textContent = 'Nice try!';
    }
    else if(!isLastPressedSign){
        console.log(currentValue,operationResult);
        result = operaton(operator, currentValue, operationResult);
        console.log(result);
        display.textContent = result;
        operationResult = result;
        currentValue = 0;
    }
    operator = e.target.dataset.value;
    if(!isLastPressedSign){
        history.textContent += operator;
    }
    else{
        history.textContent = history.textContent.slice(0,-1) + operator;
    }
    isLastPressedSign = true;
    displayString = '';
    display.textContent = e.target.dataset.value;
}

const equalClickHandler = (e) =>{
    const choosing = e.target.dataset.value;
    isLastPressedSign = false;
    if(!choosing) return;
    if((currentValue===0 || operationResult===0) && operator==='/')
    {
        display.textContent = 'Nice try!';
        console.log('ajunge');
    }
    else if(currentValue!=undefined && operationResult!=undefined)
    {
        console.log(currentValue,operationResult);
        result = operaton(operator,currentValue,operationResult);
        display.textContent = result;
        operationResult = result;
        console.log(operationResult);
        currentValue = 0;
    }
}

const equalButton = document.querySelector('.equal');

equalButton.addEventListener('click',equalClickHandler);

const butoane = document.querySelectorAll('.number');
butoane.forEach((el,index)=>{
    el.addEventListener('click',numbersClickHandler);
})

const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach((el,index)=>{
    el.addEventListener('click',clickDeleteHandler);
})

const operationButtons = document.querySelectorAll('.keyboard-operator');
operationButtons.forEach((el,index)=>{
    el.addEventListener('click',operationsClickHandler)
})

