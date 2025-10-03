/**
 * solution 1 -- math
 * time: O(n)
 * space: O(1)
 *
 * @param {number} first
 * @param {number} c
 * @param {number} l
 * @returns {number[]}
 */
function seqlist(first, c, l) {
    let results = [];

    for (let i = 0; i < l; i++) {
        results.push(first + i * c);
    }

    return results;
}

console.log(seqlist(0, 1, 20)); // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
console.log(seqlist(2, 2, 10)); // [2,4,6,8,10,12,14,16,18,20]
