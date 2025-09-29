/**
 * solution 1 -- math formula
 * time: O(1)
 * space: O(1)
 *
 * @param {number} r
 * @param {number} h
 * @returns {number}
 */
function volume(r, h) {
    return Math.floor((1 / 3) * Math.PI * r ** 2 * h);
}

console.log(volume(7, 3)); // 153
console.log(volume(56, 30)); // 98520
console.log(volume(0, 10)); // 0
