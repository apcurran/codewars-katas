"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {array} array
 * @returns {array}
 */
function sortByArea(array) {
    return array.slice().sort(function sortAreas(valueA, valueB) {
        return calcArea(valueA) - calcArea(valueB);
    });
}

function calcArea(value) {
    if (Array.isArray(value)) {
        return value[0] * value[1];
    } else {
        return Math.PI * value ** 2;
    }
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); // [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]
