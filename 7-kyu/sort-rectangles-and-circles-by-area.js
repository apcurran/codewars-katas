/**
 * solution 1
 * time: O(n * log n) -- sorting
 * space: O(n)
 *
 * @param {array} array
 * @returns {number[]}
 */
function sortByArea(array) {
    return array
        .map(function getArea(element) {
            const area = Array.isArray(element)
                ? calcRectArea(element[0], element[1])
                : calcCircleArea(element);

            return roundToTwoPlaces(area);
        })
        .sort(function sortAsc(areaA, areaB) {
            return areaA - areaB;
        });
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]));
// [ 4.31, 4.75, 27.2, 37.26 ]

/**
 * @param {number} num
 * @returns {number}
 */
function roundToTwoPlaces(num) {
    return Math.round(num * 100) / 100;
}

/**
 * @param {number} radius
 * @returns {number}
 */
function calcCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @param {number} width
 * @param {number} length
 * @returns {number}
 */
function calcRectArea(width, length) {
    return width * length;
}
