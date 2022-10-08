// Core math operators

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


// Main vars

let displayValue = ""
let firstNumber = ""
let secondNumber = ""
let lastPressed = ""
let currentOperator = null

// Query page elements

const operation = document.querySelector("#op-text");
const result = document.getElementById("result-text")
const insertNumber = document.querySelectorAll("[data-number]")
const insertOperator = document.querySelectorAll("[data-op")
const equal = document.getElementById("equal")
const clearDisplay = document.querySelector("#clear")

linebreak = document.createElement("br");

// Functions to interact with HTML

function insertNum(number){
    if (firstNumber === ""){
        const operation = document.querySelector("#op-text");
        operation.textContent += number;
        displayValue = operation.textContent;
        lastPressed = "number"
    }
    else{
        const operation = document.querySelector("#op-text");
        operation.textContent += number;
        secondNumber += number
        lastPressed = "number"
    }
}

insertNumber.forEach((button) =>
    button.addEventListener("click", () => insertNum(button.textContent))
)

function insertOp(operator){

    if (lastPressed === "operator"){
        return
    }
    else if(firstNumber != "" && secondNumber != ""){
        evaluate(currentOperator, firstNumber, secondNumber)
        currentOperator = operator
        operation.textContent += operator;
        firstNumber = displayValue;
        secondNumber = "";
        lastPressed = "operator";
    }
    else{
        const operation = document.querySelector("#op-text");
        operation.textContent += operator;
        currentOperator = operator;
        firstNumber = displayValue;
        secondNumber = ""
        lastPressed = "operator";
    
    }

  
}

insertOperator.forEach((button) =>
    button.addEventListener("click", () => insertOp(button.textContent))
)

function clear(){
    displayValue = ""
    firstNumber = ""
    secondNumber = ""
    currentOperator = ""
    operation.textContent = ""
    operation.appendChild(linebreak)
    result.textContent = "0"
}

clearDisplay.addEventListener("click", clear)

// Function that takes two numbers and one operator to return a result

function operate(operator, a, b){
    a = Number(a)
    b = Number(b)
    if (operator == "+"){
        return add(a, b);
    }
    else if (operator == "-"){
        return subtract(a, b);
    }
    else if (operator == "*"){
        return multiply(a, b);
    }
    else if (operator == "/"){
        return divide(a, b);
    }
}


function evaluate(currentOperator, firstNumber, secondNumber){
    result.textContent = operate(currentOperator, firstNumber, secondNumber)
    displayValue = result.textContent
    console.log(firstNumber)
    console.log(secondNumber)
}
    

equal.addEventListener("click", () => evaluate(currentOperator,firstNumber,secondNumber));


