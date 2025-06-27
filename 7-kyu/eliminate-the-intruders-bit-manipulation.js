"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} strNum
 * @returns {number}
 */
function eliminateUnsetBits(strNum) {
    const noZerosStrNum = strNum.replaceAll("0", "");

    if (noZerosStrNum === "") return 0;

    return parseInt(noZerosStrNum, 2);
}

console.log(eliminateUnsetBits("11010101010101")); // 255 (= 11111111)
console.log(eliminateUnsetBits("111")); // 7
console.log(eliminateUnsetBits("000")); // 0
