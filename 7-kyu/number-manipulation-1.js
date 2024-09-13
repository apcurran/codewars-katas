"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num 
 * @returns {number}
 */
function manipulate(num) {
    const strNum = String(num);
    const digitChangeStartIndex = Math.floor(strNum.length / 2);
    let result = [...strNum];

    for (let i = digitChangeStartIndex; i < strNum.length; i++) {
        result[i] = "0";
    }

    return Number(result.join(""));
}

console.log(manipulate(192827764920)); // 192827000000
console.log(manipulate(938473)); // 938000
console.log(manipulate(2837743)); // 2830000
