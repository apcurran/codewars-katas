"use strict";

function calcType(a, b, res) {
    const added = a + b;
    const subbed = a - b;
    const multiplied = a * b;
    const divided = a / b;

    switch (res) {
        case added:
            return "addition";
        case subbed:
            return "subtraction";
        case multiplied:
            return "multiplication";
        case divided:
            return "division";
        default:
            return "";
    }
}

console.log(calcType(1,2,3)) // "addition"
console.log(calcType(10,4,40)) // "multiplication"
console.log(calcType(10,5,5)) // "subtraction"
console.log(calcType(9,5,1.8)) // "division"