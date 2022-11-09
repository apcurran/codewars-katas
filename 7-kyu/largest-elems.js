"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {number} n 
 * @param {number[]} xs 
 */
function largest(n, xs) {
    const ascSortedNums = [...xs].sort((a, b) => a - b);
    
    if (n === 0) return [];

    return ascSortedNums.slice(-n);
}

console.log( largest(2, [7,6,5,4,3,2,1]) ); // [6, 7]
