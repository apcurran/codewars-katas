/**
 * solution 1
 * n = hackers length
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} hackers
 * @param {number} securityLevel
 * @param {number} increase
 * @returns {number}
 */
function breachAttempts(hackers, securityLevel, increase) {
    let breachCount = 0;

    for (let hackerSkill of hackers) {
        if (hackerSkill > securityLevel) {
            breachCount++;
        } else {
            securityLevel += increase;
        }
    }

    return breachCount;
}

console.log(breachAttempts([7, 6, 8, 9], 6, 2)); // 1
console.log(breachAttempts([], 6, 2)); // 0
