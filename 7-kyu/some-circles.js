"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n) -- rest parameters copied into an array
 *
 * @param {...number} diameters
 * @returns {string}
 */
function sumCircles(...diameters) {
    let circleAreasSum = 0;

    for (let diameter of diameters) {
        const radius = diameter / 2;
        const area = Math.PI * radius ** 2;
        circleAreasSum += area;
    }

    return `We have this much circle: ${Math.round(circleAreasSum)}`;
}

console.log(sumCircles(2)); // "We have this much circle: 3"
console.log(sumCircles(2, 3, 4)); // "We have this much circle: 23"
