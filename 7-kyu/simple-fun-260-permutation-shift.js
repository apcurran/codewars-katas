"use strict";

/**
 * solution 1 -- iterative
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} permutation
 * @returns {number} max and min diff
 */
function permutationShift(permutation) {
    let maxPermutationShift = -Infinity;
    let minPermutationShift = Infinity;

    for (let i = 0; i < permutation.length; i++) {
        const value = permutation[i];
        const permutationShiftDifference = value - i;

        if (permutationShiftDifference > maxPermutationShift) {
            maxPermutationShift = permutationShiftDifference;
        } else if (permutationShiftDifference < minPermutationShift) {
            minPermutationShift = permutationShiftDifference;
        }
    }

    return maxPermutationShift - minPermutationShift;
}

console.log(permutationShift([1, 0, 2, 3])); // 2
