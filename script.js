const values = {
    num1,
    num2,
    operator,
}
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


