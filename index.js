let currentInput = '';
let currentOperator = '';
let currentResult = 0;

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculate();
        }
        currentOperator = operator;
        currentResult = parseFloat(currentInput);
        currentInput = '';
    }
}

function calculate() {
    if (currentInput !== '') {
        const inputNumber = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                currentResult += inputNumber;
                break;
            case '-':
                currentResult -= inputNumber;
                break;
            case '*':
                currentResult *= inputNumber;
                break;
            case '/':
                currentResult /= inputNumber;
                break;
        }
        updateDisplay(currentResult);
        currentInput = '';
        currentOperator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    currentResult = 0;
    updateDisplay(currentResult);
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

function updateDisplay(content) {
    document.getElementById('display').innerText = content;
}