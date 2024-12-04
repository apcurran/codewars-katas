"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @param {number} littleChouSum 
 * @returns {number}
 */
function missingTerm(n, littleChouSum) {
    let sequenceSum = 0;

    while (sequenceSum <= littleChouSum) {
        sequenceSum += n;
        n++;
    }

    return sequenceSum - littleChouSum;
}

console.log(missingTerm(1, 4)); // 2
console.log(missingTerm(4, 35)); // 4
console.log(missingTerm(6, 33)); // 7
console.log(missingTerm(500, 15971)); // 525
console.log(missingTerm(500, 15465)); // 500
