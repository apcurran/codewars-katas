"use strict";

/**
 * solution 1
 * time: O(n * m)
 * space: O(n + m)
 *
 * @param {string} str
 * @returns {string[]}
 */
function moreZeros(str) {
    // create a Set to remove duplicate strings
    const uniqueChars = new Set([...str]);
    let charsWithMoreBinaryZeros = [];
    // iterate Set chars
    for (let char of uniqueChars) {
        // convert each char to string ASCII value
        const charCode = char.charCodeAt(0);
        // convert ASCII value to binary
        const charBinary = charCode.toString(2);
        // remove all leading zeros with unary or Number constructor
        const charBinaryWithoutLeadingZeros = String(Number(charBinary));

        let binaryCharZerosCount = 0;
        let binaryCharOnesCount = 0;
        // iterate binary string
        for (let binaryChar of charBinaryWithoutLeadingZeros) {
            if (binaryChar === "0") {
                // count the zeros
                binaryCharZerosCount++;
            } else {
                // count the ones
                binaryCharOnesCount++;
            }
        }

        // if the zeros > ones, keep this char in a return array
        if (binaryCharZerosCount > binaryCharOnesCount) {
            charsWithMoreBinaryZeros.push(char);
        }
        // else, do not add this char to the return array
    }

    return charsWithMoreBinaryZeros;
}

console.log(moreZeros("abcde")); // ['a','b','d']
console.log(moreZeros("DIGEST")); // ['D','I','E','T']
