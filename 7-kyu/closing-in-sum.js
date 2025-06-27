"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number}
 */
function closingInSum(n) {
    const strNum = String(n);
    let leftPointer = 0;
    let rightPointer = strNum.length - 1;
    let sum = 0;

    while (leftPointer < rightPointer) {
        const leftStrNum = strNum[leftPointer];
        const rightStrNum = strNum[rightPointer];
        const formedNum = Number(`${leftStrNum}${rightStrNum}`);
        sum += formedNum;

        leftPointer++;
        rightPointer--;
    }

    if (leftPointer === rightPointer) {
        // odd length strNum,
        // add single value
        sum += Number(strNum[leftPointer]);
    }

    return sum;
}

console.log(closingInSum(2520)); // 72
console.log(closingInSum(121)); // 13
