const display = {
    num1: 0,
    num2: 1,
    operator: 2 ,
    decimalAvailable: true,
}

const values = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    decimal: ".",
    equals: "=",
    clear : "clear",
    clearAll: "clearAll",
    backspace: "backspace",
    plus: "+",
    minus: "-",
    times: "x",
    divide: "/",   
}

const buttons = document.querySelectorAll('button');
const numLog = document.querySelector('numLog');
const answer = document.querySelector('answer');

const add = function(a, b) {
    return a + b;
}

const subtract = function(a ,b) {
    return a - b;
}

const multipy = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b == 0) {
        return Error;
    }
    return a / b;
}

const operate = function(a, b, method) {
    if (method == "+") {
        add(a, b);
    } else if (method == "-") {
        subtract(a, b);
    } else if (method =="x") {
        multipy(a, b);
    } else if(method == "/") {
        divide(a, b);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        temp = values[button.id]
        console.log(button.id);
        console.log(typeof(temp));
    })
})


