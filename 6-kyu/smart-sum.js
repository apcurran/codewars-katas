"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param  {...any} args 
 * @returns {number}
 */
function smartSum(...args) {
    return [args]
            .flat(Infinity)
            .reduce((sum, currentNum) => sum + currentNum, 0);
}

console.log( smartSum(1,2,3,[4,5],6) ); // 21
