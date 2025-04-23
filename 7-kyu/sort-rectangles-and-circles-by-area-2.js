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
    return array
        .map(function calcArea(value, index) {
            let area;

            if (Array.isArray(value)) {
                area = value[0] * value[1];
            } else {
                area = Math.PI * value ** 2;
            }

            return {
                area,
                value,
                index,
            };
        })
        .sort(function sortAreas(objA, objB) {
            return objA.area - objB.area;
        })
        .map(function convertBackToValue(obj) {
            return obj.value;
        });
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]])); // [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]
