"use strict";

/**
 * solution 1 -- functional style
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} a 
 * @returns {number[]} new arr containing only sq nums from input
 */
function squaresOnly(a) {
    return a.filter((num) => Number.isInteger(Math.sqrt(num)));
}

console.log( squaresOnly([0,1,2,3,4,5,6,7,8,9,10]) ); // [0,1,4,9]
console.log( squaresOnly([0,10,20,30,40,50,60,70,80,90,100]) ); // [0,100]
