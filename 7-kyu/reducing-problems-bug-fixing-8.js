/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} team1
 * @param {number[]} team2
 * @returns {boolean}
 */
function calculateTotal(team1, team2) {
    let t1ScoreTotal = team1.reduce((sum, currentVal) => sum + currentVal, 0);
    let t2ScoreTotal = team2.reduce((sum, currentVal) => sum + currentVal, 0);

    return t1ScoreTotal > t2ScoreTotal;
}

console.log(calculateTotal([1, 2, 2], [1, 0, 0])); // true
console.log(calculateTotal([6, 45, 1], [1, 55, 0])); // false
console.log(calculateTotal([57, 2, 1], [])); // true
console.log(calculateTotal([], [3, 4, 3])); // false
