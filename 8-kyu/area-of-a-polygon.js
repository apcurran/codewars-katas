/**
 * solution 1 -- math formula
 * time: O(1)
 * space: O(1)
 *
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @returns {number}
 */
function polygonArea(A, B, C, D) {
    const rectangleArea = A * B;

    const triangleHeight = C - A;
    const triangleArea = 0.5 * B * triangleHeight;

    return rectangleArea + triangleArea;
}

console.log(polygonArea(2, 4, 4, 2)); // 12
console.log(polygonArea(0, 0, 0, 0)); // 0
console.log(polygonArea(2, 5, 10, 2.5)); // 30
