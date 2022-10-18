"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {object} dict 
 * @returns {number[][]}
 */
function sortDict(dict) {
    const tuplesArr = Object
        .entries(dict)
        .map(([key, val]) => {
            const numKey = Number(key);

            // handle true string words as keys
            if (isNaN(numKey)) {
                return [key, val];
            }

            return [numKey, val];
        });

    return tuplesArr.sort((arrA, arrB) => {
        const arrAVal = arrA[1];
        const arrBVal = arrB[1];

        if (arrBVal < arrAVal) {
            return -1;
        } else if (arrBVal > arrAVal) {
            return 1;
        } else {
            return 0;
        }
    });
}

console.log( sortDict({ 3: 1, 2: 2, 1: 3 }) ); // [[1,3], [2,2], [3,1]]
console.log( sortDict({ 1: 2, 2: 4, 3: 6 }) ); // [[3,6], [2,4], [1,2]]
console.log( sortDict({"aldo":6, "boris":2, "igor":6}) ); // [['aldo',6], ['igor',6], ['boris',2]]
