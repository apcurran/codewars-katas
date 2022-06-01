"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {string} operation 
 * @param {number} val1 
 * @param {number} val2 
 * @returns {number}
 */
function stickyCalc (operation, val1, val2){
    // round both input vals first
    const roundedVal1 = Math.round(val1);
    const roundedVal2 = Math.round(val2);
    // 'stick' both nums together with String(val1) + String(val2)
    const stuckNum = Number(String(roundedVal1) + String(roundedVal2));
    
    switch (operation) {
        case "+":
            return Math.round(stuckNum + roundedVal2);
        case "-":
            return Math.round(stuckNum - roundedVal2);
        case "*":
            return Math.round(stuckNum * roundedVal2);
        case "/":
            return Math.round(stuckNum / roundedVal2);
        default:
            throw new Error("Operation not supported");
    }
}

console.log( stickyCalc("+", 4, 7) ); // 54);
console.log( stickyCalc("-", 15, 10) ); // 1500);
console.log( stickyCalc("*", 5, 5) ); // 275);
console.log( stickyCalc("/", 10, 7) ); // 15);
