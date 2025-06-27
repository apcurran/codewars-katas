"use strict";

function array_diff_very_fast(arrA, arrB) {
    const setB = new Set(arrB);
    
    return arrA.filter((num) => !setB.has(num));
}

console.log(array_diff_very_fast([1, 2, 2, 2, 3], [2])); // [1, 3]
