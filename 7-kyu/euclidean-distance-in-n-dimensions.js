/**
 * solution 1
 * n = points 1 length
 * m = points 2 length
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} points1
 * @param {number[]} points2
 * @returns {number}the distance between the two points, rounded to two decimal places
 */
function euclideanDistance(points1, points2) {
    let sum = 0;

    for (let i = 0; i < points1.length; i++) {
        const point1 = points1[i];
        const point2 = points2[i];
        const result = (point1 - point2) ** 2;
        sum += result;
    }

    return Math.round(Math.sqrt(sum) * 100) / 100;
}

console.log(euclideanDistance([-1, 2], [2, 4])); // 3.61
