/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {string} ants
 * @returns {number} trampled ants count
 */
const deadAntCount = function (ants) {
    if (ants === null) return 0;

    // Remove all intact "ant" occurrences to leave only the trampled bits
    const leftovers = ants.replace(/ant/g, "");
    // Count individual letter frequencies in the remaining bits
    const aCount = (leftovers.match(/a/g) || []).length;
    const nCount = (leftovers.match(/n/g) || []).length;
    const tCount = (leftovers.match(/t/g) || []).length;

    // The maximum letter count represents the minimum number of ants destroyed
    return Math.max(aCount, nCount, tCount);
};

console.log(deadAntCount("ant ant ant ant")); // 0
console.log(deadAntCount(null)); // 0
console.log(deadAntCount("ant ant ant ant")); // 0
console.log(deadAntCount("ant anantt aantnt")); // 2
console.log(deadAntCount("ant ant .... a nt")); // 1
