/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[][]} c
 * @returns {[number, number, number]}
 */
function centroid(c) {
    let xSum = 0;
    let ySum = 0;
    let zSum = 0;

    for (let [currentX, currentY, currentZ] of c) {
        xSum += currentX;
        ySum += currentY;
        zSum += currentZ;
    }

    // now divide by total num of arrays
    const xC = roundTo2DecimalPlaces(xSum / c.length);
    const yC = roundTo2DecimalPlaces(ySum / c.length);
    const zC = roundTo2DecimalPlaces(zSum / c.length);

    return [xC, yC, zC];
}

function roundTo2DecimalPlaces(num) {
    return Math.round(num * 100) / 100;
}

console.log(
    centroid([
        [1, 0, 5],
        [0, 1, 5],
        [2, 2, 5],
    ]),
); // [1, 1, 5]
console.log(
    centroid([
        [7, 0, 5],
        [3, 1, 5],
        [2, 1, 5],
    ]),
); // [4, 0.67, 5]
