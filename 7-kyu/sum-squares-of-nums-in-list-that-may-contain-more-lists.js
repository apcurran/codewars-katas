"use strict";

/**
 * solution 1
 * n = num of nested arrays
 * time: O(n)
 * space: O(n)
 * 
 * @param {Array} list 
 * @returns {number}
 */
function SumSquares(list) {
    return list
            .flat(Infinity)
            .reduce((sum, currNum) => {
                const squaredNum = currNum * currNum;

                return sum + squaredNum;
            }, 0);
}

console.log(SumSquares([1,2,3])); // 14
console.log(SumSquares([10,[[10],10],[10]])); // 400
