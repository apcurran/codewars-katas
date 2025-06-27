"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n) -- including results space, otherwise O(1)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function findBalance(arr) {
    let balancePoints = [];

    for (let i = 1; i < arr.length; i++) {
        let leftSum = 0;
        let leftCount = 0;

        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
            leftCount++;
        }

        let rightSum = 0;
        let rightCount = 0;

        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
            rightCount++;
        }

        const leftAvg = Math.round(leftSum / leftCount);
        const rightAvg = Math.round(rightSum / rightCount);

        if (leftAvg === rightAvg) {
            balancePoints.push(i);
        }
    }

    return balancePoints;
}

console.log(findBalance([1, 2, 3])); // []
console.log(findBalance([1, 2, 3, 2, 1])); // [2]
console.log(findBalance([1, 1, 1, 1, 1])); // [1, 2, 3]
