"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number[]} arr 
//  * @param {function} fun 
//  * @returns {boolean}
//  */
// function none(arr, fun) {
//     const trueItems = arr.filter(fun);

//     return trueItems.length === 0;
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @param {function} fun 
 * @returns {boolean}
 */
function none(arr, fun) {
    return !arr.some(fun);
}

console.log( none([1,2,3,4,5],function(item){ return item > 5; }) ); // true
console.log( none([1,2,3,4,5],function(item){ return item > 4; }) ); // false
