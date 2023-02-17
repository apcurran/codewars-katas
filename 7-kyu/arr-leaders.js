"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} numbers 
 * @returns {number[]}
 */
function arrayLeaders(numbers) {
    let leaders = [];

    for (let i = 0; i < numbers.length; i++) {
        const possibleLeader = numbers[i];
        let sumOfNumsToRight = 0;

        for (let j = i + 1; j < numbers.length; j++) {
            const currentNum = numbers[j];
            sumOfNumsToRight += currentNum;
        }

        if (possibleLeader > sumOfNumsToRight) {
            leaders.push(possibleLeader);
        }
    }

    return leaders;
}

console.log( arrayLeaders([1, 2, 3, 4, 0]) ); // [4]
console.log( arrayLeaders([16, 17, 4, 3, 5, 2]) ); // [17, 5, 2]
