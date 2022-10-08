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
let currentOperator = ""

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
    }
    else{
        const operation = document.querySelector("#op-text");
        operation.textContent += number;
        secondNumber += number
    }
}

insertNumber.forEach((button) =>
    button.addEventListener("click", () => insertNum(button.textContent))
)

function insertOp(operator){
    const operation = document.querySelector("#op-text");
    operation.textContent += operator;
    currentOperator = operator;
    firstNumber = displayValue;
}

insertOperator.forEach((button) =>
    button.addEventListener("click", () => insertOp(button.textContent))
)

function clear(){
    displayValue = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    operation.textContent = ""
    operation.appendChild(linebreak)
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

equal.addEventListener("click", () => {
    result.textContent = operate(currentOperator, firstNumber, secondNumber);
    firstNumber = operate(currentOperator, firstNumber, secondNumber);
})


