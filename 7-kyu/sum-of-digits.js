"use strict";

/**
 *
 * @param {string} digits - string of digits to sum together
 * @returns {string} - equation of digits being summed, ex. "3 + 4 + 2 = 9"
 */
function sum(digits) {
    if (digits === undefined) return "";

    const splitDigits = String(digits).split("");
    const digitsStrEquation = splitDigits.join(" + ");
    const digitsSum = splitDigits.reduce((total, currVal) => total + Number(currVal), 0);

    return `${digitsStrEquation} = ${digitsSum}`;
}

console.log(sum("3433")); // "3 + 4 + 3 + 3 = 13"
console.log(sum(undefined)); // ""
