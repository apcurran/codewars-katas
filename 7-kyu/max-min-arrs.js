"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function solve(arr){
    const sortedDescNums = [...arr].sort((a, b) => b - a);
    let lastIndex = 0;
    let results = [];
    
    while (sortedDescNums.length > 0) {
        if (lastIndex % 2 === 0) {
            const nextMax = sortedDescNums.shift();
            results.push(nextMax);
        } else {
            const nextMin = sortedDescNums.pop();
            results.push(nextMin);
        }

        lastIndex++;
    }

    return results;
}

console.log( solve([15,11,10,7,12]) ); // [15,7,12,10,11]
