/**
 * solution 1 -- loop style
 * n = changes list length
 * x = total stringified length
 * time: O(n + x)
 * space: O(x)
 *
 * @param {number} invested
 * @param {number[]} changes
 * @returns {string} two decimal places
 */
function sharePrice(invested, changes) {
    let total = invested;

    for (let changePercentage of changes) {
        const changeAmount = total * (changePercentage / 100);
        total += changeAmount;
    }

    return total.toFixed(2);
}

console.log(sharePrice(100, [])); // "100.00"
console.log(sharePrice(100, [-50, 50])); // "75.00"
console.log(sharePrice(100, [-20, 30])); // "104.00"
