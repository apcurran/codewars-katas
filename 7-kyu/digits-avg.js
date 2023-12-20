"use strict";

/**
 * solution 1
 * time: O(log n)
 * space: O(log n)
 * 
 * @param {number} input 
 * @returns {number}
 */
function digitsAverage(input) {
    let digitsStr = String(input);

    if (digitsStr.length === 1) return input;

    while (digitsStr.length > 1) {
        let results = [];

        for (let i = 0; i < digitsStr.length - 1; i++) {
            // add digit pairs
            const currentDigit = digitsStr[i];
            const nextDigit = digitsStr[i + 1];
            const sum = Number(currentDigit) + Number(nextDigit);
            const avg = Math.ceil(sum / 2);
            results.push(avg);
        }

        digitsStr = results.join("");
    }

    return Number(digitsStr);
}

console.log(digitsAverage(246)); // 4
