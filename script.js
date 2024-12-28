function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    if (["+", "-", "*", "/"].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function appendDot() {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    if (!display.value.includes('.') || lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        display.value += '.';
    }
}

function clearDisplay() {
    document.getElementById('display').value = "0";
    document.getElementById('history-list').innerHTML = "";
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
    const display = document.getElementById('display');
    const historyList = document.getElementById('history-list');
    try {
        const result = eval(display.value);
        historyList.innerHTML += `<p>${display.value} = ${result}</p>`;
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}
