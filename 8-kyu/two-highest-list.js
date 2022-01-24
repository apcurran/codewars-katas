"use strict";

function twoHighest(arr) {
    const uniqueArr = [ ...(new Set(arr)) ];
    const sortedArr = uniqueArr.sort((a, b) => b - a);
    
    if (sortedArr.length > 1) {
        return sortedArr.slice(0, 2);
    }

    return sortedArr.slice();
}

console.log(twoHighest([4, 10, 10, 9]));
console.log(twoHighest([1, 1, 1]));
console.log(twoHighest([]));