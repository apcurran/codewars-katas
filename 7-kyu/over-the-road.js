/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} address
 * @param {number} n
 * @returns {number}
 */
function overTheRoad(address, n) {
    if (address % 2 === 1) {
        // odd (left side)
        const row = (address + 1) / 2;

        return 2 * (n - row + 1);
    } else {
        // even (right side)
        const row = n + 1 - address / 2;

        return 2 * row - 1;
    }
}

console.log(overTheRoad(1, 3)); // 6
