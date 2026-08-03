/**
 * solution 1
 * time: O(n)
 * space: O(n) -- noConsecutiveDups array creation
 *
 * @param {number[]} readings
 * @returns {number} - increasing/decreasing trend count
 */
function countDirectionChanges(readings) {
    let noConsecutiveDups = [];

    for (let i = 0; i < readings.length; i++) {
        if (
            noConsecutiveDups.length === 0 ||
            readings[i] !== noConsecutiveDups[noConsecutiveDups.length - 1]
        ) {
            noConsecutiveDups.push(readings[i]);
        }
    }

    let currentTrend = 0; // 0: unset, 1: up, -1: down
    let reversalsCount = 0;

    for (let i = 0; i < noConsecutiveDups.length - 1; i++) {
        const firstNum = noConsecutiveDups[i];
        const secondNum = noConsecutiveDups[i + 1];
        let newTrend;

        if (secondNum > firstNum) {
            newTrend = 1;
        } else {
            newTrend = -1;
        }

        if (currentTrend === 0) {
            currentTrend = newTrend;
        } else if (newTrend !== currentTrend) {
            reversalsCount++;
            currentTrend = newTrend;
        }
    }

    return reversalsCount;
}

console.log(countDirectionChanges([1, 3, 2, 4])); // Expected: 2
console.log(countDirectionChanges([5, 3, 1])); // Expected: 0
console.log(countDirectionChanges([1, 1, 3, 3, 2])); // Expected: 1
console.log(countDirectionChanges([4, 4, 4])); // Expected: 0
console.log(countDirectionChanges([])); // Expected: 0
