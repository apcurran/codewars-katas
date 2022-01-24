"use strict";

/**
 * For this task you will be given an array of numbers,
 * each number in turn has to be cubed and
 * once all numbers have been cubed all of them have to be added to get a final sum.
 * @param {array} arr
 */
function maxedOut(arr) {
    const cubedArr = arr.map((num) => num ** 3);
    const summedArr = cubedArr.reduce((total, currNum) => total + currNum, 0);

    if (summedArr <= Number.MAX_SAFE_INTEGER) {
        return summedArr;
    }

    return "You've pushed me to the max!";
}

console.log(maxedOut([1,2])); // 9
console.log(maxedOut([7600,32300,66700,22200,4554,323000,5555])); // 9