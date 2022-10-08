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
    if (b === 0){
        return "You can't divide a number by 0"
    }
    return a / b;
}


// Main vars

let displayValue = ""
let firstNumber = ""
let secondNumber = ""
let lastPressed = ""
let currentOperator = null

// Query page elements

window.addEventListener("keydown", keyboardHandle)
const operation = document.querySelector("#op-text");
const result = document.getElementById("result-text")
const insertNumber = document.querySelectorAll("[data-number]")
const insertOperator = document.querySelectorAll("[data-op")
const equal = document.getElementById("equal")
const point = document.getElementById("point")
const clearDisplay = document.getElementById("clear")
const backspace = document.getElementById("delete")

linebreak = document.createElement("br");

// Functions to interact with HTML

function insertNum(number){
    clickSound1.currentTime = 0;
    clickSound1.play()
    if (operation.textContent.length >= 27){
        return
    }

    else{
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
}

insertNumber.forEach((button) =>
    button.addEventListener("click", () => insertNum(button.textContent))
)

function insertOp(operator){
    clickSound2.currentTime = 0
    clickSound2.play()
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

function insertPoint(){
    clickSound2.currentTime = 0
    clickSound2.play()
    if (operation.textContent.length >= 27){
        return
    }
    else{
        if (operation.textContent === ""){
            operation.textContent += "0"
        }
        if (operation.textContent.includes('.')){
            return
        }
        operation.textContent += '.'

    }
}

point.addEventListener("click", insertPoint)

function clear(){
    clickSound3.currentTime = 0
    clickSound3.play()
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
    clickSound3.currentTime = 0
    clickSound3.play()
    if (secondNumber === ""){
        return
    }
    else{
        result.textContent = operate(currentOperator, firstNumber, secondNumber)
        displayValue = result.textContent
        console.log(firstNumber)
        console.log(secondNumber)
    }

}

function delEl(){
    clickSound3.currentTime = 0
    clickSound3.play()
    if (operation.textContent.length <= 1){
        operation.textContent = operation.textContent.toString().slice(0, -1)
        operation.appendChild(linebreak)
    }
    else{
        operation.textContent = operation.textContent.toString().slice(0, -1)
    }
}

backspace.addEventListener("click", delEl)

    

equal.addEventListener("click", () => evaluate(currentOperator,firstNumber,secondNumber));


function keyboardHandle(k){
    if (k.key > 0 && k.key <= 9){
        insertNum(k.key)
    }
    if (k.key === "+" || k.key === "-" || k.key === "*" || k.key === "/"){
        insertOp(k.key)
    }
    if (k.key === "."){
        insertPoint(k.key)
    }
    if (k.key === "=" || k.key === "Enter"){
        evaluate(currentOperator, firstNumber, secondNumber)
    }
    if (k.key === "Delete"){
        clear()
    }
    if (k.key === "Backspace"){
        delEl();
    }
}