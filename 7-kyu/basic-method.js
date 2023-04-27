"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @returns {number|NaN}
 */
Array.prototype.max = function() {
    const nums = this;

    return Math.max(...nums);
};

console.log( [2,5,1,3].max() ); // 5
console.log( [2,"5",1,3].max() ); // 5
console.log( [2,5,1,"ab"].max() ); // NaN