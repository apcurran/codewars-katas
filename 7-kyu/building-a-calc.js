"use strict";

// solution 1
// const Calculator = {
//     add(a, b) {
//         return a + b;
//     },
//     subtract(a, b) {
//         return a - b;
//     },
//     multiply(a, b) {
//         return a * b;
//     },
//     divide(a, b) {
//         if (b === 0) return false;

//         return a / b;
//     }
// }

// solution 2 -- closure
const Calculator = (() => {
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) return false;

        return a / b;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    };
})();

console.log( Calculator.add(1, 4) ); // 5
