/**
 * solution -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} colors
 * @param {number} pairs
 * @returns {number}
 */
function socks(colors, pairs) {
    return colors + 2 * pairs - 1;
}

console.log(socks(2, 1)); // 3
console.log(socks(1, 2)); // 4
console.log(socks(2, 3)); // 7
