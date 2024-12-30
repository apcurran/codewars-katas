"use strict";

/**
 * solution 1
 * n = votes length
 * time: O(n)
 * space: O(n) -- copy votes array in maxValue operation
 * 
 * @param {number[]} votes 
 * @param {number} k 
 * @returns {number}
 */
function electionsWinners(votes, k) {
    const maxValue = Math.max(...votes);
    let tiesCount = 0;
    let winnersCount = 0;

    for (let vote of votes) {
        if (vote === maxValue) {
            tiesCount++;
        }

        const possibleVotesForCandidate = vote + k;

        if (possibleVotesForCandidate > maxValue) {
            winnersCount++;
        }
    }

    if (winnersCount > 0) {
        return winnersCount;
    } else if (tiesCount >= 2) {
        return 0; // more than 1 maxValue
    } else {
        return 1;
    }
}

console.log(electionsWinners([2, 3, 5, 2],3)); // 2
console.log(electionsWinners([1, 3, 3, 1, 1],0)); // 0
console.log(electionsWinners([5, 1, 3, 4, 1],0)); // 1
console.log(electionsWinners([1, 1, 1, 1],1)); // 4
console.log(electionsWinners([1, 1, 1, 1],0)); // 0
console.log(electionsWinners([3, 1, 1, 3, 1],2)); // 2
