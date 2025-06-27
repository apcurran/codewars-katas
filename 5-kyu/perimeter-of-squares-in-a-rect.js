"use strict";

function calcFib(n) {
    let num1 = 1;
    let num2 = 1;

    for (let i = 3; i <= n; i++) {
        let sum = num1 + num2;

        num1 = num2;
        num2 = sum;
    }

    return num2;
}

function perimeter(inputNum) {
    let sidesSum = 0;

    for (let i = 1; i <= inputNum + 1; i++) {
        sidesSum += calcFib(i);
    }

    return 4 * sidesSum;
}

console.log(perimeter(5));
console.log(perimeter(7));
