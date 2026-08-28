/**
 * sollution 1 -- math formula Pythagorean theorem
 * time: O(1)
 * space: O(1)
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} radius1
 * @param {number} x2
 * @param {number} y2
 * @param {number} radius2
 * @returns {boolean}
 */
function collision(x1, y1, radius1, x2, y2, radius2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    // Pythagorean theorem for right triangle
    const c = Math.sqrt(dx ** 2 + dy ** 2);
    const radSum = radius1 + radius2;

    return c <= radSum;
}

console.log(collision(1, 1, 1, 1.1, 1.1, 0.1)); // true
console.log(collision(-1, 1, 10, -10.1, 1.1, 1)); // true
console.log(collision(1, 1, 0.01, 1, 1.1, 0.01)); // false
