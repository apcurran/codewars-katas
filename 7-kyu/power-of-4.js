/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} n
 * @returns {boolean}
 */
function powerOf4(n) {
    if (typeof n !== "number") {
        return false;
    }

    const base4Log = Math.log(n) / Math.log(4);

    return Number.isInteger(base4Log);
}

console.log(powerOf4(44)); // false
console.log(powerOf4(1024)); // true
