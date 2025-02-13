"use strict";

/**
 * solution 1
 * n = arr length
 * m = elem chars length
 * time: O(n * avg(m))
 * space: O(n * avg(m))
 * 
 * @param {string[]} arr 
 * @returns {string[]}
 */
function averageLength(arr) {
    const elemsAverage = Math.round((arr.reduce((sum, current) => sum + current.length, 0)) / arr.length);

    return arr.map((elem) => elem[0].repeat(elemsAverage));
}

console.log(averageLength(["aa", "bbb", "cccc"])); // ['aaa', 'bbb', 'ccc']
console.log(averageLength(["aa", "bb", "ddd", "eee"])); // ['aaa', 'bbb', 'ddd', 'eee']
