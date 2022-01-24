"use strict";

/**
 * O(n)
 * @param {number[]} numbers 
 * @returns {number[]}
 */
function pipeFix(numbers) {
    const firstNum = numbers[0];
    const lastNum = numbers[numbers.length - 1];

    let resultArr = [];

    for (let i = firstNum; i <= lastNum; i++) {
        resultArr.push(i);
    }

    return resultArr;
}

console.log(pipeFix([1,2,3,5,6,8,9])); // [1,2,3,4,5,6,7,8,9]