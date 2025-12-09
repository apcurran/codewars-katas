"use strict";

/**
 * solution 1
 * time: O(n)
 * time: O(1)
 *
 * @param {string} s
 * @returns {number}
 */
function countzero(s) {
    const oneZeroChars = "abdegopq069DOPQR";
    const twoZerosChars = "%&B8";
    let totalZeros = 0;

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if ((currentChar === "(" && s[i + 1] === ")") || oneZeroChars.includes(currentChar)) {
            totalZeros += 1;
        } else if (twoZerosChars.includes(currentChar)) {
            totalZeros += 2;
        }
    }

    return totalZeros;
}

console.log(countzero("")); // 0
console.log(countzero("0")); // 1
console.log(countzero("1234567890")); // 5
