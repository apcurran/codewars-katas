/**
 * solution 1
 * time: O(x + y)
 * space: O(x + y)
 *
 * @param {number} degrees
 * @param {number} radius
 * @returns {[number, number]}
 */
function coordinates(degrees, radius) {
    const angleInRadians = degrees * (Math.PI / 180);
    const x = radius * Math.cos(angleInRadians);
    const y = radius * Math.sin(angleInRadians);

    return [Number(x.toFixed(10)), Number(y.toFixed(10))];
}

console.log(coordinates(45, 1)); // [0.7071067812, 0.7071067812]
