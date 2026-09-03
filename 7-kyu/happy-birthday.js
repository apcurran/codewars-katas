/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} height
 * @param {number} width
 * @param {number} length
 * @returns {number}
 */
function wrap(height, width, length) {
    const minDimension = Math.min(height, width, length);

    return 2 * (height + width + length + minDimension) + 20;
}

console.log(wrap(17, 32, 11)); // 162
console.log(wrap(13, 13, 13)); // 124
console.log(wrap(1, 3, 1)); // 32
