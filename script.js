let currentOperand = '';
let previousOperand = '';
let operation = null;

const displayElement = document.getElementById('display');

function updateDisplay() {
    displayElement.innerText = currentOperand || '0';
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function deleteLastChar() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

updateDisplay();